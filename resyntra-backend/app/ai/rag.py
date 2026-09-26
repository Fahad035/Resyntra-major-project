from app.ai.embeddings import EmbeddingService
from app.ai.groundedness import GroundednessEvaluator
from app.ai.prompts import SYSTEM_PROMPT
from app.ai.providers import AIProviderFactory
from app.ai.qdrant import search


class RAGPipeline:

    def __init__(self):
        self.embedding = EmbeddingService()
        self.provider = AIProviderFactory.get_provider()
        self.groundedness = GroundednessEvaluator()

    def ask(self, question: str, paper_id: str | None = None):

        query_embedding = self.embedding.embed(question)

        results = search(
            embedding=query_embedding,
            limit=5,
            paper_id=paper_id,
        )

        if not results:
            return {
                "answer": (
                    "I couldn't find any relevant information "
                    "in the indexed research papers."
                ),
                "sources": [],
                "confidence": {
                    "score": 0.0,
                    "label": "Low",
                },
            }

        context = "\n\n".join(
            [
                f"[Chunk {r['payload']['chunk_index']}]\n"
                f"{r['payload']['text']}"
                for r in results
            ]
        )

        prompt = f"""
Context:

{context}

Question:

{question}
"""

        answer = self.provider.generate(
            prompt=prompt,
            system_prompt=SYSTEM_PROMPT,
            temperature=0.3,
        )

        confidence = self.groundedness.evaluate(
            answer=answer,
            source_chunks=[
                {
                    "text": result["payload"]["text"]
                }
                for result in results
            ],
        )

        sources = []

        for result in results:
            payload = result.get("payload") or {}

            sources.append(
                {
                    "chunk_index": payload.get("chunk_index"),
                    "text": payload.get("text"),
                    "score": result.get("score"),
                }
            )

        return {
            "answer": answer,
            "sources": sources,
            "confidence": confidence,
        }