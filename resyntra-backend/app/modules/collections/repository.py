from uuid import UUID

from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.collection import Collection
from app.models.collection_paper import CollectionPaper
from app.models.paper import Paper


class CollectionRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, collection: Collection):
        self.db.add(collection)
        await self.db.commit()
        await self.db.refresh(collection)
        return collection

    async def get_by_id(self, collection_id: UUID):
        result = await self.db.execute(
            select(Collection).where(Collection.id == collection_id)
        )
        return result.scalar_one_or_none()

    async def get_user_collections(self, owner_id: UUID):
        result = await self.db.execute(
            select(Collection)
            .where(Collection.owner_id == owner_id)
            .order_by(Collection.created_at.desc())
        )
        return result.scalars().all()

    async def update(self):
        await self.db.commit()

    async def delete(self, collection: Collection):
        await self.db.delete(collection)
        await self.db.commit()

    async def add_paper(self, collection_id: UUID, paper_id: UUID):
        relation = CollectionPaper(
            collection_id=collection_id,
            paper_id=paper_id,
        )

        self.db.add(relation)
        await self.db.commit()

    async def remove_paper(self, collection_id: UUID, paper_id: UUID):
        await self.db.execute(
            delete(CollectionPaper).where(
                CollectionPaper.collection_id == collection_id,
                CollectionPaper.paper_id == paper_id,
            )
        )
        await self.db.commit()

    async def get_collection_papers(self, collection_id: UUID):
        result = await self.db.execute(
            select(Paper)
            .join(
                CollectionPaper,
                Paper.id == CollectionPaper.paper_id,
            )
            .where(CollectionPaper.collection_id == collection_id)
        )

        return result.scalars().all()