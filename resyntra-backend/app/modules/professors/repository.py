from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.professor import Professor


class ProfessorRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, professor: Professor):
        self.db.add(professor)
        await self.db.commit()
        await self.db.refresh(professor)
        return professor

    async def get_by_id(self, professor_id: UUID):
        result = await self.db.execute(
            select(Professor).where(
                Professor.id == professor_id
            )
        )
        return result.scalar_one_or_none()

    async def get_all(self):
        result = await self.db.execute(
            select(Professor).order_by(
                Professor.name
            )
        )
        return result.scalars().all()

    async def get_by_university(self, university_id: UUID):
        result = await self.db.execute(
            select(Professor)
            .where(
                Professor.university_id == university_id
            )
            .order_by(Professor.name)
        )

        return result.scalars().all()

    async def update(self):
        await self.db.commit()

    async def delete(self, professor: Professor):
        await self.db.delete(professor)
        await self.db.commit()