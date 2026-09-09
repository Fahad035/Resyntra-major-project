from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.paper import Paper
from app.models.professor import Professor
from app.models.project import Project
from app.models.university import University
from app.models.user import User


class AdminRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def count(self, model):
        result = await self.db.execute(
            select(func.count()).select_from(model)
        )
        return result.scalar_one()

    async def get_users(self):
        result = await self.db.execute(
            select(User).order_by(User.created_at.desc())
        )
        return result.scalars().all()

    async def get_user(self, user_id):
        result = await self.db.execute(
            select(User).where(User.id == user_id)
        )
        return result.scalar_one_or_none()

    async def commit(self):
        await self.db.commit()