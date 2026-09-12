from uuid import UUID
from fastapi import HTTPException, status
from pathlib import Path

from app.ai.summarizer import PaperSummarizer
from app.modules.papers.repository import PaperRepository
from app.utils.pdf import extract_pdf  # Imported to extract text from the file path


class SummarizerService:

    def __init__(self, paper_repo: PaperRepository):
        self.paper_repo = paper_repo
        self.summarizer = PaperSummarizer()

    async def summarize(
        self,
        paper_id: UUID,
    ):
        # 1. Fetch paper metadata row from the repository database
        paper = await self.paper_repo.get_by_id(paper_id)

        if paper is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Paper not found",
            )

        # 2. Verify physical file presence on server disk storage
        file_path = Path(paper.file_path)
        if not file_path.exists():
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Physical PDF file missing from backend server storage.",
            )

        # 3. Read and extract the text content from the PDF file path
        extracted_data = extract_pdf(str(file_path))
        full_text_content = extracted_data.get("text", "")

        if not full_text_content.strip():
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="The target research paper PDF contains no readable text content.",
            )

        # 4. Generate summary using the active text content
        # Note: If PaperSummarizer wraps LLMService/Gemini, we pass the text context smoothly.
        summary = self.summarizer.generate(
            paper.title,
            paper.abstract, # Will pass None or string safely
            full_text_content
        )

        return {
            "summary": summary,
        }
