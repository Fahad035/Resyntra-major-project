"""create research papers table

Revision ID: e3ef733d5d33
Revises: a414ac996edc
Create Date: 2026-09-13 18:42:39.043289

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "e3ef733d5d33"
down_revision: Union[str, Sequence[str], None] = "a414ac996edc"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_table(
        "research_papers",
        sa.Column(
            "external_id",
            sa.String(length=255),
            nullable=False,
        ),
        sa.Column(
            "title",
            sa.String(length=1000),
            nullable=False,
        ),
        sa.Column(
            "authors",
            sa.Text(),
            nullable=True,
        ),
        sa.Column(
            "abstract",
            sa.Text(),
            nullable=True,
        ),
        sa.Column(
            "publication_year",
            sa.Integer(),
            nullable=True,
        ),
        sa.Column(
            "source",
            sa.String(length=100),
            nullable=False,
        ),
        sa.Column(
            "doi",
            sa.String(length=500),
            nullable=True,
        ),
        sa.Column(
            "url",
            sa.String(length=2000),
            nullable=False,
        ),
        sa.Column(
            "field",
            sa.String(length=255),
            nullable=True,
        ),
        sa.Column(
            "id",
            sa.UUID(),
            nullable=False,
        ),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            nullable=False,
        ),
        sa.Column(
            "updated_at",
            sa.DateTime(timezone=True),
            nullable=False,
        ),
        sa.Column(
            "deleted_at",
            sa.DateTime(timezone=True),
            nullable=True,
        ),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_index(
        op.f("ix_research_papers_doi"),
        "research_papers",
        ["doi"],
        unique=True,
    )

    op.create_index(
        op.f("ix_research_papers_external_id"),
        "research_papers",
        ["external_id"],
        unique=True,
    )

    op.create_index(
        op.f("ix_research_papers_field"),
        "research_papers",
        ["field"],
        unique=False,
    )

    op.create_index(
        op.f("ix_research_papers_source"),
        "research_papers",
        ["source"],
        unique=False,
    )


def downgrade() -> None:
    """Downgrade schema."""

    op.drop_index(
        op.f("ix_research_papers_source"),
        table_name="research_papers",
    )

    op.drop_index(
        op.f("ix_research_papers_field"),
        table_name="research_papers",
    )

    op.drop_index(
        op.f("ix_research_papers_external_id"),
        table_name="research_papers",
    )

    op.drop_index(
        op.f("ix_research_papers_doi"),
        table_name="research_papers",
    )

    op.drop_table("research_papers")