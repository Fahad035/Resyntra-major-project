from uuid import UUID

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.models.user import User
from app.modules.auth.dependencies import get_current_user
from app.modules.collections.repository import CollectionRepository
from app.modules.collections.schemas import (
    AddPaperRequest,
    CollectionCreate,
    CollectionResponse,
    MessageResponse,
)
from app.modules.collections.service import CollectionService
from app.modules.papers.schemas import PaperResponse

router = APIRouter(
    prefix="/collections",
    tags=["Collections"],
)


def get_collection_service(
    db: AsyncSession = Depends(get_db),
) -> CollectionService:
    repo = CollectionRepository(db)
    return CollectionService(repo)


@router.post(
    "",
    response_model=CollectionResponse,
    status_code=201,
)
async def create_collection(
    data: CollectionCreate,
    service: CollectionService = Depends(get_collection_service),
    current_user: User = Depends(get_current_user),
):
    return await service.create(current_user, data)


@router.get(
    "",
    response_model=list[CollectionResponse],
)
async def list_collections(
    service: CollectionService = Depends(get_collection_service),
    current_user: User = Depends(get_current_user),
):
    return await service.list(current_user)


@router.get(
    "/{collection_id}",
    response_model=CollectionResponse,
)
async def get_collection(
    collection_id: UUID,
    service: CollectionService = Depends(get_collection_service),
    current_user: User = Depends(get_current_user),
):
    return await service.get(
        collection_id,
        current_user,
    )


@router.put(
    "/{collection_id}",
    response_model=CollectionResponse,
)
async def update_collection(
    collection_id: UUID,
    data: CollectionCreate,
    service: CollectionService = Depends(get_collection_service),
    current_user: User = Depends(get_current_user),
):
    return await service.update(
        collection_id,
        data,
        current_user,
    )


@router.delete(
    "/{collection_id}",
    response_model=MessageResponse,
)
async def delete_collection(
    collection_id: UUID,
    service: CollectionService = Depends(get_collection_service),
    current_user: User = Depends(get_current_user),
):
    return await service.delete(
        collection_id,
        current_user,
    )


@router.post(
    "/{collection_id}/papers",
    response_model=MessageResponse,
)
async def add_paper_to_collection(
    collection_id: UUID,
    data: AddPaperRequest,
    service: CollectionService = Depends(get_collection_service),
    current_user: User = Depends(get_current_user),
):
    return await service.add_paper(
        collection_id,
        data.paper_id,
        current_user,
    )


@router.delete(
    "/{collection_id}/papers/{paper_id}",
    response_model=MessageResponse,
)
async def remove_paper_from_collection(
    collection_id: UUID,
    paper_id: UUID,
    service: CollectionService = Depends(get_collection_service),
    current_user: User = Depends(get_current_user),
):
    return await service.remove_paper(
        collection_id,
        paper_id,
        current_user,
    )


@router.get(
    "/{collection_id}/papers",
    response_model=list[PaperResponse],
)
async def list_collection_papers(
    collection_id: UUID,
    service: CollectionService = Depends(get_collection_service),
    current_user: User = Depends(get_current_user),
):
    return await service.papers(
        collection_id,
        current_user,
    )