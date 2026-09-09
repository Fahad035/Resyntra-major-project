from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.modules.papers.repository import PaperRepository
from app.modules.summarizer.schemas import (
    SummaryRequest,
    SummaryResponse,
)
from app.modules.summarizer.service import SummarizerService

router = APIRouter(
    prefix="/summarizer",
    tags=["Summarizer"],
)


def get_summarizer_service(
    db: AsyncSession = Depends(get_db),
):
    return SummarizerService(
        PaperRepository(db)
    )


@router.post(
    "",
    response_model=SummaryResponse,
)
async def summarize_paper(
    data: SummaryRequest,
    service: SummarizerService = Depends(
        get_summarizer_service
    ),
):
    return await service.summarize(
        data.paper_id,
    )