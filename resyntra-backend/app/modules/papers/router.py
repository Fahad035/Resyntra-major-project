from uuid import UUID

from fastapi import APIRouter, Depends, File, UploadFile
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.models.user import User
from app.modules.auth.dependencies import get_current_user
from app.modules.papers.repository import PaperRepository
from app.modules.papers.schemas import (
    MessageResponse,
    PaperResponse,
)
from app.modules.papers.service import PaperService

router = APIRouter(
    prefix="/papers",
    tags=["Papers"],
)


@router.post("/upload", response_model=PaperResponse)
async def upload_paper(
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = PaperService(PaperRepository(db))
    return await service.upload(current_user, file)


@router.get("", response_model=list[PaperResponse])
async def list_papers(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = PaperService(PaperRepository(db))
    return await service.get_all(current_user)


@router.get("/{paper_id}", response_model=PaperResponse)
async def get_paper(
    paper_id: UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = PaperService(PaperRepository(db))
    return await service.get_one(
        paper_id,
        current_user,
    )


@router.delete("/{paper_id}", response_model=MessageResponse)
async def delete_paper(
    paper_id: UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = PaperService(PaperRepository(db))
    return await service.delete(
        paper_id,
        current_user,
    )