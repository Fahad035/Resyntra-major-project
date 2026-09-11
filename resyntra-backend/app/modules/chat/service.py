from uuid import UUID
from app.ai.rag import RAGPipeline


class ChatService:

    def __init__(self):
        self.rag = RAGPipeline()

    async def ask(
        self,
        paper_id: UUID,
        question: str,
    ):
        # FIX: Pass arguments explicitly by name to prevent positional flipping
        answer = self.rag.ask(
            question=question,
            paper_id=str(paper_id),
        )

        return {
            "answer": answer,
        }
