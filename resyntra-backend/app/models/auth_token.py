from datetime import datetime
from uuid import UUID

from sqlalchemy import DateTime, ForeignKey, String, UniqueConstraint
from sqlalchemy.dialects.postgresql import UUID as PGUUID
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import BaseModel


class AuthToken(BaseModel):
    __tablename__ = "auth_tokens"
    __table_args__ = (
        UniqueConstraint("token", name="uq_auth_tokens_token"),
    )

    user_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True),
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    token: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
        index=True,
    )

    token_type: Mapped[str] = mapped_column(
        String(30),
        nullable=False,
    )

    expires_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        index=True,
    )
