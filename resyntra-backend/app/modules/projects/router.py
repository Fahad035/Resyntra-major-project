from uuid import UUID

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.models.user import User
from app.modules.auth.dependencies import get_current_user
from app.modules.projects.repository import ProjectRepository
from app.modules.projects.schemas import (
    MessageResponse,
    ProjectCreate,
    ProjectResponse,
    ProjectUpdate,
)
from app.modules.projects.service import ProjectService

router = APIRouter(
    prefix="/projects",
    tags=["Projects"],
)


def get_project_service(
    db: AsyncSession = Depends(get_db),
) -> ProjectService:
    repo = ProjectRepository(db)
    return ProjectService(repo)


@router.post(
    "",
    response_model=ProjectResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_project(
    data: ProjectCreate,
    current_user: User = Depends(get_current_user),
    service: ProjectService = Depends(get_project_service),
):
    return await service.create(current_user, data)


@router.get(
    "",
    response_model=list[ProjectResponse],
)
async def list_projects(
    current_user: User = Depends(get_current_user),
    service: ProjectService = Depends(get_project_service),
):
    return await service.list(current_user)


@router.get(
    "/{project_id}",
    response_model=ProjectResponse,
)
async def get_project(
    project_id: UUID,
    current_user: User = Depends(get_current_user),
    service: ProjectService = Depends(get_project_service),
):
    return await service.get(
        project_id,
        current_user,
    )


@router.put(
    "/{project_id}",
    response_model=ProjectResponse,
)
async def update_project(
    project_id: UUID,
    data: ProjectUpdate,
    current_user: User = Depends(get_current_user),
    service: ProjectService = Depends(get_project_service),
):
    return await service.update(
        project_id,
        data,
        current_user,
    )


@router.delete(
    "/{project_id}",
    response_model=MessageResponse,
)
async def delete_project(
    project_id: UUID,
    current_user: User = Depends(get_current_user),
    service: ProjectService = Depends(get_project_service),
):
    return await service.delete(
        project_id,
        current_user,
    )