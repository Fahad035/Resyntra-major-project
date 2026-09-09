from uuid import UUID

from fastapi import HTTPException, status

from app.models.university import University
from app.modules.universities.repository import UniversityRepository


class UniversityService:

    def __init__(self, repo: UniversityRepository):
        self.repo = repo

    async def create(self, data):

        existing = await self.repo.get_by_name(
            data.name
        )

        if existing:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="University already exists",
            )

        university = University(
            name=data.name,
            country=data.country,
            city=data.city,
            website=data.website,
            description=data.description,
            logo_url=data.logo_url,
        )

        return await self.repo.create(university)

    async def list(self):
        return await self.repo.get_all()

    async def get(self, university_id: UUID):

        university = await self.repo.get_by_id(
            university_id
        )

        if university is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="University not found",
            )

        return university

    async def update(
        self,
        university_id: UUID,
        data,
    ):
        university = await self.get(
            university_id
        )

        university.country = data.country
        university.city = data.city
        university.website = data.website
        university.description = data.description
        university.logo_url = data.logo_url

        await self.repo.update()

        return university

    async def delete(
        self,
        university_id: UUID,
    ):
        university = await self.get(
            university_id
        )

        await self.repo.delete(
            university
        )

        return {
            "message": "University deleted successfully",
        }