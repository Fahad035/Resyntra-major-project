from uuid import UUID, uuid4
from fastapi import HTTPException, UploadFile, status
from pathlib import Path
import aiofiles

from app.models.paper import Paper
from app.models.user import User
from app.modules.papers.repository import PaperRepository
from app.utils.pdf import extract_pdf_metadata
from app.tasks.paper_tasks import process_paper
#  Define maximum constraints (50 Megabytes)
MAX_SIZE = 50 * 1024 * 1024 

class PaperService:
    def __init__(self, repo: PaperRepository):
        self.repo = repo

    async def upload(
        self,
        current_user: User,
        file: UploadFile,
    ):
        # 1.  Validate lightweight Content Type immediately
        if file.content_type != "application/pdf":
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Only PDF files are allowed.",
            )

        upload_dir = Path("app/uploads/papers")
        upload_dir.mkdir(parents=True, exist_ok=True)

        extension = Path(file.filename).suffix
        filename = f"{uuid4()}{extension}"
        file_path = upload_dir / filename
        

        total_bytes_written = 0

        # 2.  Stream the write operation while counting file size dynamically
        async with aiofiles.open(file_path, "wb") as out_file:
            while chunk := await file.read(1024 * 1024):  # 1MB chunks
                total_bytes_written += len(chunk)
                
                # If the accumulative chunk size exceeds the cap, terminate immediately
                if total_bytes_written > MAX_SIZE:
                    # Clean up the partial file from disk before raising error
                    if file_path.exists():
                        file_path.unlink()
                    raise HTTPException(
                        status_code=status.HTTP_400_BAD_REQUEST,
                        detail="File size exceeds the 50 MB limit.",
                    )
                
                await out_file.write(chunk)

        metadata = extract_pdf_metadata(str(file_path))
        # 3.  Rewind file cursor in case downstream processors need it
        await file.seek(0)

        paper = Paper(
            owner_id=current_user.id,
            title=metadata["title"] or Path(file.filename).stem,
            authors=metadata["author"],
            pages=metadata["pages"],
            abstract=None,
            file_name=file.filename,
            file_path=str(file_path),
            file_size=file_path.stat().st_size,
            processing_status="pending",
        )

        saved_paper = await self.repo.create(paper)

        process_paper.delay(str(saved_paper.id))

        return saved_paper

    async def get_all(self, current_user: User):
        return await self.repo.get_user_papers(current_user.id)

    async def get_one(
        self,
        paper_id: UUID,
        current_user: User,
    ):
        paper = await self.repo.get_by_id(paper_id)

        if paper is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Paper not found",
            )

        if paper.owner_id != current_user.id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Access denied",
            )

        return paper

    async def delete(
        self,
        paper_id: UUID,
        current_user: User,
    ):
        paper = await self.get_one(
            paper_id,
            current_user,
        )

        #  Cleanup: Safely delete physical local file when database row drops
        local_path = Path(paper.file_path)
        if local_path.exists():
            local_path.unlink()

        await self.repo.delete(paper)

        return {"message": "Paper deleted successfully"}
