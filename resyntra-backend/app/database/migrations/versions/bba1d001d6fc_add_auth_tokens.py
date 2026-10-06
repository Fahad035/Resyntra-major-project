"""add auth tokens

Revision ID: bba1d001d6fc
Revises: 81039858e839
Create Date: 2026-10-06 11:41:05.405405

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "bba1d001d6fc"
down_revision: Union[str, Sequence[str], None] = "81039858e839"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_table(
        "auth_tokens",
        sa.Column("id", sa.UUID(), nullable=False),
        sa.Column("user_id", sa.UUID(), nullable=False),
        sa.Column("token", sa.String(length=255), nullable=False),
        sa.Column("token_type", sa.String(length=50), nullable=False),
        sa.Column("expires_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("used", sa.Boolean(), nullable=False, server_default=sa.false()),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            nullable=False,
            server_default=sa.func.now(),
        ),
        sa.ForeignKeyConstraint(
            ["user_id"],
            ["users.id"],
            ondelete="CASCADE",
        ),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("token"),
    )

    op.create_index(
        "ix_auth_tokens_user_id",
        "auth_tokens",
        ["user_id"],
    )

    op.create_index(
        "ix_auth_tokens_token",
        "auth_tokens",
        ["token"],
        unique=True,
    )


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_index(
        "ix_auth_tokens_token",
        table_name="auth_tokens",
    )

    op.drop_index(
        "ix_auth_tokens_user_id",
        table_name="auth_tokens",
    )

    op.drop_table("auth_tokens")