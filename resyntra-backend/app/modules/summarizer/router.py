from fastapi import APIRouter, Depends, Request
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.rate_limit import limiter
from app.database.session import get_db
from app.models.user import User
from app.modules.auth.dependencies import get_current_user
from app.modules.papers.repository import PaperRepository
from app.modules.summarizer.schemas import SummaryRequest, SummaryResponse
from app.modules.summarizer.service import SummarizerService

router = APIRouter(prefix="/summarizer", tags=["Summarizer"])


def get_summarizer_service(db: AsyncSession = Depends(get_db)):
    return SummarizerService(PaperRepository(db))


@router.post("", response_model=SummaryResponse)
@limiter.limit(settings.AI_RATE_LIMIT)
async def summarize_paper(
    request: Request,
    data: SummaryRequest,
    service: SummarizerService = Depends(get_summarizer_service),
    current_user: User = Depends(get_current_user),
):
    return await service.summarize(data.paper_id, current_user)
