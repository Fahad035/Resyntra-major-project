from uuid import UUID

from app.ai.embeddings import EmbeddingService
from app.ai.qdrant import search
from app.modules.search.repository import SearchRepository
from app.modules.search.discovery import (
    ResearchDiscoveryService,
)


class SearchService:

    def __init__(
        self,
        repo: SearchRepository,
    ):
        self.repo = repo

        self.embedding = EmbeddingService()

        self.discovery = (
            ResearchDiscoveryService()
        )

    async def papers(
        self,
        query: str,
        limit: int = 20,
    ):
        return await self.repo.search_papers(
            query=query,
            limit=limit,
        )

    async def semantic_search(
        self,
        query: str,
        limit: int,
    ):
        vector = self.embedding.embed(
            query
        )

        results = search(
            embedding=vector,
            limit=limit,
        )

        semantic_results = []

        for result in results:

            payload = (
                result.get("payload")
                or {}
            )

            paper_id = payload.get(
                "paper_id"
            )

            text = payload.get(
                "text"
            )

            if not paper_id or not text:
                continue

            try:

                paper_uuid = UUID(
                    str(paper_id)
                )

            except (
                ValueError,
                TypeError,
            ):

                continue

            semantic_results.append(
                {
                    "paper_id": paper_uuid,
                    "chunk": text,
                    "score": float(
                        result.get(
                            "score",
                            0.0,
                        )
                    ),
                }
            )

        return {
            "results": semantic_results,
        }

    async def discovery_search(
        self,
        query: str,
        limit: int = 10,
    ):
        return await self.discovery.search(
            query=query,
            limit=limit,
        )

    async def hybrid_search(
        self,
        query: str,
        limit: int,
    ):

        # 1. Search Resyntra's own database
        keyword_results = (
            await self.repo.search_papers(
                query=query,
                limit=limit,
            )
        )

        # 2. Search Resyntra's Qdrant index
        semantic_results = (
            await self.semantic_search(
                query=query,
                limit=limit,
            )
        )

        # 3. Search external research databases
        discovery_results = (
            await self.discovery_search(
                query=query,
                limit=limit,
            )
        )

        return {
            "papers": keyword_results,

            "semantic": (
                semantic_results[
                    "results"
                ]
            ),

            "discovery": discovery_results,
        }