from uuid import UUID

from fastapi import HTTPException, status

from app.models.project import Project
from app.models.user import User
from app.modules.projects.repository import ProjectRepository


class ProjectService:

    def __init__(self, repo: ProjectRepository):
        self.repo = repo

    async def create(self, current_user: User, data):

        project = Project(
            owner_id=current_user.id,
            name=data.name,
            description=data.description,
        )

        return await self.repo.create(project)

    async def list(self, current_user: User):
        return await self.repo.get_user_projects(current_user.id)

    async def get(
        self,
        project_id: UUID,
        current_user: User,
    ):
        project = await self.repo.get_by_id(project_id)

        if project is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Project not found",
            )

        if project.owner_id != current_user.id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Access denied",
            )

        return project

    async def update(
        self,
        project_id: UUID,
        data,
        current_user: User,
    ):
        project = await self.get(
            project_id,
            current_user,
        )

        project.name = data.name
        project.description = data.description
        project.color = data.color

        await self.repo.update()

        return project

    async def delete(
        self,
        project_id: UUID,
        current_user: User,
    ):
        project = await self.get(
            project_id,
            current_user,
        )

        await self.repo.delete(project)

        return {
            "message": "Project deleted successfully",
        }