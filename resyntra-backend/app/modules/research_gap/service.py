from pathlib import Path
from uuid import UUID

from fastapi import HTTPException, status

from app.ai.research_gap import ResearchGapGenerator
from app.models.user import User
from app.modules.papers.repository import PaperRepository
from app.utils.pdf import extract_pdf


class ResearchGapService:

    def __init__(
        self,
        paper_repo: PaperRepository,
    ):
        self.paper_repo = paper_repo
        self.generator = ResearchGapGenerator()

    async def generate(
        self,
        paper_ids: list[UUID],
        topic: str,
        current_user: User,
    ):
        papers = []

        for paper_id in paper_ids:
            paper = await self.paper_repo.get_by_id(paper_id)

            if paper is None:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail=f"Paper {paper_id} not found.",
                )

            # Every paper in the comparison must belong to the
            # requesting user - otherwise their content (and its
            # existence) would leak into another user's report.
            if paper.owner_id != current_user.id:
                raise HTTPException(
                    status_code=status.HTTP_403_FORBIDDEN,
                    detail="Access denied.",
                )

            if paper.processing_status != "completed":
                raise HTTPException(
                    status_code=status.HTTP_409_CONFLICT,
                    detail=f'"{paper.title}" is still processing.',
                )

            file_path = Path(paper.file_path)

            if not file_path.exists():
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f'The PDF for "{paper.title}" is missing from storage.',
                )

            extracted = extract_pdf(str(file_path))
            text = extracted.get("text", "")

            if not text.strip():
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f'"{paper.title}" has no readable text content.',
                )

            papers.append(
                {
                    "title": paper.title,
                    "abstract": paper.abstract,
                    "content": text,
                }
            )

        try:
            report = self.generator.generate(topic, papers)
        except Exception as e:
            print(f"[ResearchGap] Generation failed: {e}")
            raise HTTPException(
                status_code=status.HTTP_502_BAD_GATEWAY,
                detail="AI failed to generate the research gap report. Please try again.",
            ) from e

        return {
            "research_gap": report,
        }