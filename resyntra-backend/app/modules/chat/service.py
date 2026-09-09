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
        answer = self.rag.ask(
            str(paper_id),
            question,
        )

        return {
            "answer": answer,
        }