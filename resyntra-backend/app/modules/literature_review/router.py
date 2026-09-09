from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.modules.collections.repository import CollectionRepository
from app.modules.literature_review.schemas import (
    LiteratureReviewRequest,
    LiteratureReviewResponse,
)
from app.modules.literature_review.service import (
    LiteratureReviewService,
)
from app.modules.papers.repository import PaperRepository

router = APIRouter(
    prefix="/literature-review",
    tags=["Literature Review"],
)


def get_service(
    db: AsyncSession = Depends(get_db),
):
    return LiteratureReviewService(
        PaperRepository(db),
        CollectionRepository(db),
    )


@router.post(
    "",
    response_model=LiteratureReviewResponse,
)
async def generate_review(
    data: LiteratureReviewRequest,
    service: LiteratureReviewService = Depends(
        get_service
    ),
):
    return await service.generate(
        data.project_id,
        data.collection_id,
        data.topic,
    )