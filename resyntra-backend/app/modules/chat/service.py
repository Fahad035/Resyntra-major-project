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
        result = self.rag.ask(
            question=question,
            paper_id=str(paper_id),
        )

        return {
            "answer": result["answer"],
            "sources": result["sources"],
        }