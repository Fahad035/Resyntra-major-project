from uuid import UUID

from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.ai.rag import RAGPipeline
from app.models.user import User
from app.modules.papers.repository import PaperRepository


class ChatService:

    def __init__(self, db: AsyncSession):
        self.papers = PaperRepository(db)
        self.rag = RAGPipeline()

    async def ask(
        self,
        paper_id: UUID,
        question: str,
        current_user: User,
    ):
        paper = await self.papers.get_by_id(paper_id)

        if paper is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Paper not found",
            )

        # Prevent one user from querying another user's private papers.
        if paper.owner_id != current_user.id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Access denied",
            )

        if paper.processing_status == "failed":
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="This paper failed to process and can't be chatted with.",
            )

        if paper.processing_status != "completed":
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="This paper is still being processed. Try again shortly.",
            )

        # FIX: Pass arguments explicitly by name to prevent positional flipping
        result = self.rag.ask(
            question=question,
            paper_id=str(paper_id),
        )

        return {
            "answer": result["answer"],
            "sources": result["sources"],
            "confidence": result["confidence"],
        }