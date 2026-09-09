from sqlalchemy import or_, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.paper import Paper


class SearchRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def search_papers(
        self,
        query: str,
        limit: int = 20,
    ):
        result = await self.db.execute(
            select(Paper)
            .where(
                or_(
                    Paper.title.ilike(f"%{query}%"),
                    Paper.authors.ilike(f"%{query}%"),
                    Paper.abstract.ilike(f"%{query}%"),
                )
            )
            .limit(limit)
        )

        return result.scalars().all()