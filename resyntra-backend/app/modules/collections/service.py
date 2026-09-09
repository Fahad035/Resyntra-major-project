from uuid import UUID

from fastapi import HTTPException, status

from app.models.collection import Collection
from app.models.user import User
from app.modules.collections.repository import CollectionRepository


class CollectionService:

    def __init__(self, repo: CollectionRepository):
        self.repo = repo

    async def create(self,project_id: UUID,current_user: User,data,):
        collection = Collection(
            owner_id=current_user.id,
            project_id=project_id,
            name=data.name,
            description=data.description,
        )

        return await self.repo.create(collection)

    async def list(self,project_id: UUID,current_user: User,):
        return await self.repo.get_project_collections(
            project_id
        )

    async def get(self, collection_id: UUID, current_user: User):

        collection = await self.repo.get_by_id(collection_id)

        if collection is None:
            raise HTTPException(
                status.HTTP_404_NOT_FOUND,
                "Collection not found",
            )

        if collection.owner_id != current_user.id:
            raise HTTPException(
                status.HTTP_403_FORBIDDEN,
                "Access denied",
            )

        return collection

    async def update(self, collection_id, data, current_user):

        collection = await self.get(
            collection_id,
            current_user,
        )

        collection.name = data.name
        collection.description = data.description

        await self.repo.update()

        return collection

    async def delete(self, collection_id, current_user):

        collection = await self.get(
            collection_id,
            current_user,
        )

        await self.repo.delete(collection)

        return {
            "message": "Collection deleted successfully",
        }

    async def add_paper(
        self,
        collection_id,
        paper_id,
        current_user,
    ):
        await self.get(collection_id, current_user)

        await self.repo.add_paper(
            collection_id,
            paper_id,
        )

        return {
            "message": "Paper added successfully",
        }

    async def remove_paper(
        self,
        collection_id,
        paper_id,
        current_user,
    ):
        await self.get(collection_id, current_user)

        await self.repo.remove_paper(
            collection_id,
            paper_id,
        )

        return {
            "message": "Paper removed successfully",
        }

    async def papers(
        self,
        collection_id,
        current_user,
    ):
        await self.get(collection_id, current_user)

        return await self.repo.get_collection_papers(
            collection_id
        )