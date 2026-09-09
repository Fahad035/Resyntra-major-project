import asyncio

from fastapi import HTTPException, status

from app.models.paper import Paper
from app.models.professor import Professor
from app.models.project import Project
from app.models.university import University
from app.models.user import User
from app.modules.admin.repository import AdminRepository


class AdminService:

    def __init__(self, repo: AdminRepository):
        self.repo = repo

    async def dashboard(self):
        (
            users,
            projects,
            papers,
            universities,
            professors,
        ) = await asyncio.gather(
            self.repo.count(User),
            self.repo.count(Project),
            self.repo.count(Paper),
            self.repo.count(University),
            self.repo.count(Professor),
        )

        return {
            "total_users": users,
            "total_projects": projects,
            "total_papers": papers,
            "total_universities": universities,
            "total_professors": professors,
        }

    async def list_users(self):
        return await self.repo.get_users()

    async def block_user(self, user_id):
        user = await self.repo.get_user(user_id)

        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found",
            )

        user.is_active = False

        await self.repo.commit()

        return {
            "message": "User blocked successfully",
        }

    async def unblock_user(self, user_id):
        user = await self.repo.get_user(user_id)

        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found",
            )

        user.is_active = True

        await self.repo.commit()

        return {
            "message": "User unblocked successfully",
        }