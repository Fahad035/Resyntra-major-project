"""fix auth tokens schema

Revision ID: e728f22941c8
Revises: bba1d001d6fc
Create Date: 2026-10-06 12:09:24.724664

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "e728f22941c8"
down_revision: Union[str, Sequence[str], None] = "bba1d001d6fc"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""

    # Columns inherited from BaseModelMixin
    op.add_column(
        "auth_tokens",
        sa.Column(
            "updated_at",
            sa.DateTime(timezone=True),
            nullable=True,
        ),
    )

    op.add_column(
        "auth_tokens",
        sa.Column(
            "deleted_at",
            sa.DateTime(timezone=True),
            nullable=True,
        ),
    )

    # Existing rows need a value because the model declares updated_at
    # as nullable=False.
    op.execute(
        """
        UPDATE auth_tokens
        SET updated_at = created_at
        WHERE updated_at IS NULL
        """
    )

    op.alter_column(
        "auth_tokens",
        "updated_at",
        nullable=False,
    )

    # Remove the column that is not present in the AuthToken model.
    op.drop_column(
        "auth_tokens",
        "used",
    )

    # Match the model's token_type length.
    op.alter_column(
        "auth_tokens",
        "token_type",
        existing_type=sa.String(length=50),
        type_=sa.String(length=30),
        existing_nullable=False,
    )

    # expires_at has index=True in AuthToken.
    op.create_index(
        "ix_auth_tokens_expires_at",
        "auth_tokens",
        ["expires_at"],
        unique=False,
    )


def downgrade() -> None:
    """Downgrade schema."""

    op.drop_index(
        "ix_auth_tokens_expires_at",
        table_name="auth_tokens",
    )

    op.alter_column(
        "auth_tokens",
        "token_type",
        existing_type=sa.String(length=30),
        type_=sa.String(length=50),
        existing_nullable=False,
    )

    op.add_column(
        "auth_tokens",
        sa.Column(
            "used",
            sa.Boolean(),
            nullable=False,
            server_default=sa.false(),
        ),
    )

    op.drop_column(
        "auth_tokens",
        "deleted_at",
    )

    op.drop_column(
        "auth_tokens",
        "updated_at",
    )