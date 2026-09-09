from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import BaseModel


class University(BaseModel):
    __tablename__ = "universities"

    name: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    country: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    city: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    website: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    description: Mapped[str | None] = mapped_column(
        nullable=True,
    )

    logo_url: Mapped[str | None] = mapped_column(
        nullable=True,
    )