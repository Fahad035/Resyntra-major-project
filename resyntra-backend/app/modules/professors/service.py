from uuid import UUID

from fastapi import HTTPException, status

from app.models.professor import Professor
from app.modules.professors.repository import ProfessorRepository
from app.modules.universities.repository import UniversityRepository


class ProfessorService:

    def __init__(
        self,
        repo: ProfessorRepository,
        university_repo: UniversityRepository,
    ):
        self.repo = repo
        self.university_repo = university_repo

    async def create(self, data):
        university = await self.university_repo.get_by_id(
            data.university_id
        )

        if university is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="University not found",
            )

        professor = Professor(
            university_id=data.university_id,
            name=data.name,
            department=data.department,
            email=data.email,
            website=data.website,
            research_interests=data.research_interests,
            profile_image=data.profile_image,
        )

        return await self.repo.create(professor)

    async def list(self):
        return await self.repo.get_all()

    async def list_by_university(
        self,
        university_id: UUID,
    ):
        return await self.repo.get_by_university(
            university_id
        )

    async def get(
        self,
        professor_id: UUID,
    ):
        professor = await self.repo.get_by_id(
            professor_id
        )

        if professor is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Professor not found",
            )

        return professor

    async def update(
        self,
        professor_id: UUID,
        data,
    ):
        professor = await self.get(professor_id)

        professor.department = data.department
        professor.email = data.email
        professor.website = data.website
        professor.research_interests = data.research_interests
        professor.profile_image = data.profile_image

        await self.repo.update()

        return professor

    async def delete(
        self,
        professor_id: UUID,
    ):
        professor = await self.get(professor_id)

        await self.repo.delete(professor)

        return {
            "message": "Professor deleted successfully",
        }