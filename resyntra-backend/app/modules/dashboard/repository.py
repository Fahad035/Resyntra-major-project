from uuid import UUID

from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.chat_session import ChatSession
from app.models.citation import Citation
from app.models.collection import Collection
from app.models.note import Note
from app.models.paper import Paper
from app.models.project import Project


class DashboardRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def count_projects(self, owner_id: UUID):
        return await self._count(Project, Project.owner_id == owner_id)

    async def count_collections(self, owner_id: UUID):
        return await self._count(Collection, Collection.owner_id == owner_id)

    async def count_papers(self, owner_id: UUID):
        return await self._count(Paper, Paper.owner_id == owner_id)

    async def count_notes(self, owner_id: UUID):
        return await self._count(Note, Note.owner_id == owner_id)

    async def count_citations(self, owner_id: UUID):
        return await self._count(Citation, Citation.owner_id == owner_id)

    async def count_chat_sessions(self, owner_id: UUID):
        return await self._count(ChatSession, ChatSession.owner_id == owner_id)

    async def _count(self, model, condition):
        result = await self.db.execute(
            select(func.count())
            .select_from(model)
            .where(condition)
        )

        return result.scalar_one()