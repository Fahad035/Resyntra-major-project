from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.note import Note


class NoteRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, note: Note):
        self.db.add(note)
        await self.db.commit()
        await self.db.refresh(note)
        return note

    async def get_by_id(self, note_id: UUID):
        result = await self.db.execute(
            select(Note).where(Note.id == note_id)
        )
        return result.scalar_one_or_none()

    async def get_project_notes(self, project_id: UUID):
        result = await self.db.execute(
            select(Note)
            .where(Note.project_id == project_id)
            .order_by(Note.created_at.desc())
        )
        return result.scalars().all()

    async def get_paper_notes(self, paper_id: UUID):
        result = await self.db.execute(
            select(Note)
            .where(Note.paper_id == paper_id)
            .order_by(Note.created_at.desc())
        )
        return result.scalars().all()

    async def update(self):
        await self.db.commit()

    async def delete(self, note: Note):
        await self.db.delete(note)
        await self.db.commit()