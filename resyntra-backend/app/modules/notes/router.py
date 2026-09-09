from uuid import UUID

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.models.user import User
from app.modules.auth.dependencies import get_current_user
from app.modules.notes.repository import NoteRepository
from app.modules.notes.schemas import (
    NoteCreate,
    NoteResponse,
    NoteUpdate,
)
from app.modules.notes.service import NoteService
from app.modules.projects.schemas import MessageResponse

router = APIRouter(
    prefix="/notes",
    tags=["Notes"],
)


def get_note_service(
    db: AsyncSession = Depends(get_db),
) -> NoteService:
    repo = NoteRepository(db)
    return NoteService(repo)


@router.post(
    "/projects/{project_id}",
    response_model=NoteResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_note(
    project_id: UUID,
    data: NoteCreate,
    current_user: User = Depends(get_current_user),
    service: NoteService = Depends(get_note_service),
):
    return await service.create(
        project_id,
        current_user,
        data,
    )


@router.get(
    "/projects/{project_id}",
    response_model=list[NoteResponse],
)
async def list_project_notes(
    project_id: UUID,
    current_user: User = Depends(get_current_user),
    service: NoteService = Depends(get_note_service),
):
    return await service.list_project_notes(
        project_id,
        current_user,
    )


@router.get(
    "/papers/{paper_id}",
    response_model=list[NoteResponse],
)
async def list_paper_notes(
    paper_id: UUID,
    current_user: User = Depends(get_current_user),
    service: NoteService = Depends(get_note_service),
):
    return await service.list_paper_notes(
        paper_id,
        current_user,
    )


@router.get(
    "/{note_id}",
    response_model=NoteResponse,
)
async def get_note(
    note_id: UUID,
    current_user: User = Depends(get_current_user),
    service: NoteService = Depends(get_note_service),
):
    return await service.get(
        note_id,
        current_user,
    )


@router.put(
    "/{note_id}",
    response_model=NoteResponse,
)
async def update_note(
    note_id: UUID,
    data: NoteUpdate,
    current_user: User = Depends(get_current_user),
    service: NoteService = Depends(get_note_service),
):
    return await service.update(
        note_id,
        data,
        current_user,
    )


@router.delete(
    "/{note_id}",
    response_model=MessageResponse,
)
async def delete_note(
    note_id: UUID,
    current_user: User = Depends(get_current_user),
    service: NoteService = Depends(get_note_service),
):
    return await service.delete(
        note_id,
        current_user,
    )