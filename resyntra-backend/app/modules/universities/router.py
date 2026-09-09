from uuid import UUID

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.common.schemas import MessageResponse
from app.modules.universities.repository import UniversityRepository
from app.modules.universities.schemas import (
    UniversityCreate,
    UniversityUpdate,
    UniversityResponse,
)
from app.modules.universities.service import UniversityService

router = APIRouter(
    prefix="/universities",
    tags=["Universities"],
)


def get_university_service(
    db: AsyncSession = Depends(get_db),
):
    return UniversityService(
        UniversityRepository(db)
    )


@router.post(
    "",
    response_model=UniversityResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_university(
    data: UniversityCreate,
    service: UniversityService = Depends(
        get_university_service
    ),
):
    return await service.create(data)


@router.get(
    "",
    response_model=list[UniversityResponse],
)
async def list_universities(
    service: UniversityService = Depends(
        get_university_service
    ),
):
    return await service.list()


@router.get(
    "/{university_id}",
    response_model=UniversityResponse,
)
async def get_university(
    university_id: UUID,
    service: UniversityService = Depends(
        get_university_service
    ),
):
    return await service.get(
        university_id
    )


@router.put(
    "/{university_id}",
    response_model=UniversityResponse,
)
async def update_university(
    university_id: UUID,
    data: UniversityUpdate,
    service: UniversityService = Depends(
        get_university_service
    ),
):
    return await service.update(
        university_id,
        data,
    )


@router.delete(
    "/{university_id}",
    response_model=MessageResponse,
)
async def delete_university(
    university_id: UUID,
    service: UniversityService = Depends(
        get_university_service
    ),
):
    return await service.delete(
        university_id
    )