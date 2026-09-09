from uuid import UUID

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.modules.professors.schemas import MessageResponse
from app.database.session import get_db
from app.modules.professors.repository import ProfessorRepository
from app.modules.professors.schemas import (
    ProfessorCreate,
    ProfessorResponse,
    ProfessorUpdate,
)
from app.modules.professors.service import ProfessorService
from app.modules.universities.repository import UniversityRepository

router = APIRouter(
    prefix="/professors",
    tags=["Professors"],
)


def get_professor_service(
    db: AsyncSession = Depends(get_db),
):
    return ProfessorService(
        ProfessorRepository(db),
        UniversityRepository(db),
    )


@router.post(
    "",
    response_model=ProfessorResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_professor(
    data: ProfessorCreate,
    service: ProfessorService = Depends(get_professor_service),
):
    return await service.create(data)


@router.get(
    "",
    response_model=list[ProfessorResponse],
)
async def list_professors(
    service: ProfessorService = Depends(get_professor_service),
):
    return await service.list()


@router.get(
    "/{professor_id}",
    response_model=ProfessorResponse,
)
async def get_professor(
    professor_id: UUID,
    service: ProfessorService = Depends(get_professor_service),
):
    return await service.get(professor_id)


@router.get(
    "/university/{university_id}",
    response_model=list[ProfessorResponse],
)
async def list_by_university(
    university_id: UUID,
    service: ProfessorService = Depends(get_professor_service),
):
    return await service.list_by_university(
        university_id
    )


@router.put(
    "/{professor_id}",
    response_model=ProfessorResponse,
)
async def update_professor(
    professor_id: UUID,
    data: ProfessorUpdate,
    service: ProfessorService = Depends(get_professor_service),
):
    return await service.update(
        professor_id,
        data,
    )


@router.delete(
    "/{professor_id}",
    response_model=MessageResponse,
)
async def delete_professor(
    professor_id: UUID,
    service: ProfessorService = Depends(get_professor_service),
):
    return await service.delete(professor_id)