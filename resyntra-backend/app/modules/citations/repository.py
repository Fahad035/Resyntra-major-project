from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.citation import Citation


class CitationRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, citation: Citation):
        self.db.add(citation)
        await self.db.commit()
        await self.db.refresh(citation)
        return citation

    async def get_by_id(self, citation_id: UUID):
        result = await self.db.execute(
            select(Citation).where(Citation.id == citation_id)
        )
        return result.scalar_one_or_none()

    async def get_project_citations(self, project_id: UUID):
        result = await self.db.execute(
            select(Citation)
            .where(Citation.project_id == project_id)
            .order_by(Citation.created_at.desc())
        )

        return result.scalars().all()

    async def get_paper_citations(self, paper_id: UUID):
        result = await self.db.execute(
            select(Citation)
            .where(Citation.paper_id == paper_id)
            .order_by(Citation.created_at.desc())
        )

        return result.scalars().all()

    async def delete(self, citation: Citation):
        await self.db.delete(citation)
        await self.db.commit()