from app.ai.embeddings import EmbeddingService
from app.ai.llm import LLMService
from app.ai.prompts import SYSTEM_PROMPT
from app.ai.qdrant import search


class RAGPipeline:

    def __init__(self):
        self.embedding = EmbeddingService()
        self.llm = LLMService()

    def ask(self, question: str):

        query_embedding = self.embedding.embed(question)

        results = search(query_embedding)

        context = "\n\n".join(
            [
                f"[Chunk {r.payload['chunk_index']}]\n{r.payload['text']}"
                for r in results
            ]
        )

        prompt = f"""
{SYSTEM_PROMPT}

Context:

{context}

Question:

{question}

Answer:
"""

        return self.llm.generate(prompt)