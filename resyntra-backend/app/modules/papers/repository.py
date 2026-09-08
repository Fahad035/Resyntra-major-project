from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.paper import Paper


class PaperRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, paper: Paper):
        self.db.add(paper)
        await self.db.commit()
        await self.db.refresh(paper)
        return paper

    async def get_by_id(self, paper_id: UUID):
        result = await self.db.execute(
            select(Paper).where(Paper.id == paper_id)
        )
        return result.scalar_one_or_none()

    async def get_user_papers(self, user_id: UUID):
        result = await self.db.execute(
            select(Paper)
            .where(Paper.owner_id == user_id)
            .order_by(Paper.created_at.desc())
        )
        return result.scalars().all()

    async def delete(self, paper: Paper):
        await self.db.delete(paper)
        await self.db.commit()