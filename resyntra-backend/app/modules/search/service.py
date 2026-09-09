from app.ai.embeddings import EmbeddingService
from app.ai.qdrant import search
from app.modules.search.repository import SearchRepository


class SearchService:

    def __init__(self, repo: SearchRepository):
        self.repo = repo
        self.embedding = EmbeddingService()

    async def papers(
        self,
        query: str,
    ):
        return await self.repo.search_papers(query)

    async def semantic_search(
        self,
        query: str,
        limit: int,
    ):
        vector = self.embedding.embed(query)

        results = search(
            collection_name="papers",
            query_vector=vector,
            limit=limit,
        )

        return {
            "results": [
                {
                    "paper_id": hit.payload["paper_id"],
                    "chunk": hit.payload["text"],
                    "score": hit.score,
                }
                for hit in results
            ]
        }

    async def hybrid_search(
        self,
        query: str,
        limit: int,
    ):
        keyword_results = await self.repo.search_papers(
            query,
            limit,
        )

        semantic_results = await self.semantic_search(
            query,
            limit,
        )

        return {
            "papers": keyword_results,
            "semantic": semantic_results["results"],
        }