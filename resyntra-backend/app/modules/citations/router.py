from uuid import UUID

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.models.user import User
from app.modules.auth.dependencies import get_current_user
from app.modules.citations.repository import CitationRepository
from app.modules.citations.schemas import (
    CitationCreate,
    CitationResponse,
)
from app.modules.citations.service import CitationService
from app.modules.papers.repository import PaperRepository
from app.modules.projects.schemas import MessageResponse

router = APIRouter(
    prefix="/citations",
    tags=["Citations"],
)


def get_citation_service(
    db: AsyncSession = Depends(get_db),
):
    citation_repo = CitationRepository(db)
    paper_repo = PaperRepository(db)

    return CitationService(
        citation_repo,
        paper_repo,
    )


@router.post(
    "/projects/{project_id}",
    response_model=CitationResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_citation(
    project_id: UUID,
    data: CitationCreate,
    current_user: User = Depends(get_current_user),
    service: CitationService = Depends(get_citation_service),
):
    return await service.create(
        project_id,
        current_user,
        data,
    )


@router.get(
    "/projects/{project_id}",
    response_model=list[CitationResponse],
)
async def list_project_citations(
    project_id: UUID,
    current_user: User = Depends(get_current_user),
    service: CitationService = Depends(get_citation_service),
):
    return await service.list_project(
        project_id,
        current_user,
    )


@router.get(
    "/papers/{paper_id}",
    response_model=list[CitationResponse],
)
async def list_paper_citations(
    paper_id: UUID,
    current_user: User = Depends(get_current_user),
    service: CitationService = Depends(get_citation_service),
):
    return await service.list_paper(
        paper_id,
        current_user,
    )


@router.delete(
    "/{citation_id}",
    response_model=MessageResponse,
)
async def delete_citation(
    citation_id: UUID,
    current_user: User = Depends(get_current_user),
    service: CitationService = Depends(get_citation_service),
):
    return await service.delete(
        citation_id,
        current_user,
    )