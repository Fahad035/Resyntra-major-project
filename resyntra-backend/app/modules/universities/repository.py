from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.university import University


class UniversityRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, university: University):
        self.db.add(university)
        await self.db.commit()
        await self.db.refresh(university)
        return university

    async def get_by_id(self, university_id: UUID):
        result = await self.db.execute(
            select(University).where(
                University.id == university_id
            )
        )
        return result.scalar_one_or_none()

    async def get_by_name(self, name: str):
        result = await self.db.execute(
            select(University).where(
                University.name == name
            )
        )
        return result.scalar_one_or_none()

    async def get_all(self):
        result = await self.db.execute(
            select(University).order_by(
                University.name
            )
        )
        return result.scalars().all()

    async def update(self):
        await self.db.commit()

    async def delete(self, university: University):
        await self.db.delete(university)
        await self.db.commit()