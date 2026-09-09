from uuid import UUID

from fastapi import HTTPException, status

from app.models.note import Note
from app.models.user import User
from app.modules.notes.repository import NoteRepository


class NoteService:

    def __init__(self, repo: NoteRepository):
        self.repo = repo

    async def create(
        self,
        project_id: UUID,
        current_user: User,
        data,
    ):
        note = Note(
            owner_id=current_user.id,
            project_id=project_id,
            collection_id=data.collection_id,
            paper_id=data.paper_id,
            title=data.title,
            content=data.content,
            is_ai_generated=False,
        )

        return await self.repo.create(note)

    async def list_project_notes(
        self,
        project_id: UUID,
        current_user: User,
    ):
        return await self.repo.get_project_notes(project_id)

    async def list_paper_notes(
        self,
        paper_id: UUID,
        current_user: User,
    ):
        return await self.repo.get_paper_notes(paper_id)

    async def get(
        self,
        note_id: UUID,
        current_user: User,
    ):
        note = await self.repo.get_by_id(note_id)

        if note is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Note not found",
            )

        if note.owner_id != current_user.id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Access denied",
            )

        return note

    async def update(
        self,
        note_id: UUID,
        data,
        current_user: User,
    ):
        note = await self.get(
            note_id,
            current_user,
        )

        note.title = data.title
        note.content = data.content

        await self.repo.update()

        return note

    async def delete(
        self,
        note_id: UUID,
        current_user: User,
    ):
        note = await self.get(
            note_id,
            current_user,
        )

        await self.repo.delete(note)

        return {
            "message": "Note deleted successfully",
        }