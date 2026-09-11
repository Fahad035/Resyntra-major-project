from app.ai.embeddings import EmbeddingService
from app.ai.prompts import SYSTEM_PROMPT
from app.ai.providers import AIProviderFactory
from app.ai.qdrant import search


class RAGPipeline:

    def __init__(self):
        self.embedding = EmbeddingService()
        self.provider = AIProviderFactory.get_provider()

    def ask(self, question: str, paper_id: str | None = None):

        query_embedding = self.embedding.embed(question)

        # Passes cleanly now without any keyword errors
        results = search(embedding=query_embedding, limit=5, paper_id=paper_id)

        if not results:
            return "I couldn't find any relevant information in the indexed research papers."

        # Fix: Extract from dictionary items format 'r['payload']' instead of 'r.payload'
        context = "\n\n".join(
            [
                f"[Chunk {r['payload']['chunk_index']}]\n{r['payload']['text']}"
                for r in results
            ]
        )

        prompt = f"""
Context:

{context}

Question:

{question}
"""

        return self.provider.generate(
            prompt=prompt,
            system_prompt=SYSTEM_PROMPT,
            temperature=0.3,
        )
