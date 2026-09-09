from uuid import UUID

from sqlalchemy import extract, func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.citation import Citation
from app.models.collection import Collection
from app.models.note import Note
from app.models.paper import Paper
from app.models.project import Project


class AnalyticsRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def count(self, model, owner_id: UUID):
        result = await self.db.execute(
            select(func.count())
            .select_from(model)
            .where(model.owner_id == owner_id)
        )
        return result.scalar_one()

    async def papers_this_month(self, owner_id: UUID):
        result = await self.db.execute(
            select(func.count())
            .select_from(Paper)
            .where(
                Paper.owner_id == owner_id,
                extract("month", Paper.created_at) == extract("month", func.now()),
                extract("year", Paper.created_at) == extract("year", func.now()),
            )
        )
        return result.scalar_one()

    async def notes_this_month(self, owner_id: UUID):
        result = await self.db.execute(
            select(func.count())
            .select_from(Note)
            .where(
                Note.owner_id == owner_id,
                extract("month", Note.created_at) == extract("month", func.now()),
                extract("year", Note.created_at) == extract("year", func.now()),
            )
        )
        return result.scalar_one()

    async def papers_grouped_by_year(self, owner_id: UUID):
        result = await self.db.execute(
            select(
                Paper.publication_year,
                func.count(Paper.id),
            )
            .where(Paper.owner_id == owner_id)
            .group_by(Paper.publication_year)
            .order_by(Paper.publication_year)
        )

        return {
            year: count
            for year, count in result.all()
            if year is not None
        }