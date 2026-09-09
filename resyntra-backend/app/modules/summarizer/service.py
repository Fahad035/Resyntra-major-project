from uuid import UUID

from fastapi import HTTPException, status

from app.ai.summarizer import PaperSummarizer
from app.modules.papers.repository import PaperRepository


class SummarizerService:

    def __init__(self, paper_repo: PaperRepository):
        self.paper_repo = paper_repo
        self.summarizer = PaperSummarizer()

    async def summarize(
        self,
        paper_id: UUID,
    ):
        paper = await self.paper_repo.get_by_id(paper_id)

        if paper is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Paper not found",
            )

        summary = self.summarizer.generate(
            title=paper.title,
            abstract=paper.abstract,
            content=paper.content,
        )

        return {
            "summary": summary,
        }