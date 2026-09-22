from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.models.user import User
from app.modules.auth.dependencies import get_current_user
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
    current_user: User = Depends(get_current_user),
):
    return await service.generate(
        data.paper_ids,
        data.topic,
        current_user,
    )