from app.ai.rag import RAGPipeline


class ChatService:

    def __init__(self):
        self.rag = RAGPipeline()

    async def ask(self, question: str):

        answer = self.rag.ask(question)

        return {
            "answer": answer,
        }