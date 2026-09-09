from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.modules.collections.repository import CollectionRepository
from app.modules.papers.repository import PaperRepository
from app.modules.research_gap.schemas import (
    ResearchGapRequest,
    ResearchGapResponse,
)
from app.modules.research_gap.service import (
    ResearchGapService,
)

router = APIRouter(
    prefix="/research-gap",
    tags=["Research Gap"],
)


def get_service(
    db: AsyncSession = Depends(get_db),
):
    return ResearchGapService(
        PaperRepository(db),
        CollectionRepository(db),
    )


@router.post(
    "",
    response_model=ResearchGapResponse,
)
async def generate_research_gap(
    data: ResearchGapRequest,
    service: ResearchGapService = Depends(
        get_service
    ),
):
    return await service.generate(
        data.project_id,
        data.collection_id,
        data.topic,
    )