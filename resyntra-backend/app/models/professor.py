from uuid import UUID

from sqlalchemy import ForeignKey, String, Text
from sqlalchemy.dialects.postgresql import UUID as PGUUID
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import BaseModel


class Professor(BaseModel):
    __tablename__ = "professors"

    university_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True),
        ForeignKey("universities.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    name: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
        index=True,
    )

    department: Mapped[str | None] = mapped_column(
        String(255),
    )

    email: Mapped[str | None] = mapped_column(
        String(255),
    )

    website: Mapped[str | None] = mapped_column(
        String(255),
    )

    research_interests: Mapped[str | None] = mapped_column(
        Text,
    )

    profile_image: Mapped[str | None] = mapped_column(
        String(500),
    )