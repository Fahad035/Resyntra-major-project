from uuid import UUID

from sqlalchemy import Integer, String, Text
from sqlalchemy.dialects.postgresql import UUID as PGUUID
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import BaseModel


class ResearchPaper(BaseModel):
    __tablename__ = "research_papers"

    external_id: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
        unique=True,
        index=True,
    )

    title: Mapped[str] = mapped_column(
        String(1000),
        nullable=False,
    )

    authors: Mapped[str | None] = mapped_column(
        Text,
    )

    abstract: Mapped[str | None] = mapped_column(
        Text,
    )

    publication_year: Mapped[int | None] = mapped_column(
        Integer,
    )

    source: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
        index=True,
    )

    doi: Mapped[str | None] = mapped_column(
        String(500),
        unique=True,
        index=True,
    )

    url: Mapped[str] = mapped_column(
        String(2000),
        nullable=False,
    )

    field: Mapped[str | None] = mapped_column(
        String(255),
        index=True,
    )