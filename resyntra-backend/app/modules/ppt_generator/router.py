from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.modules.papers.repository import PaperRepository
from app.modules.ppt_generator.schemas import (
    PPTRequest,
    PPTResponse,
)
from app.modules.ppt_generator.service import (
    PPTService,
)

router = APIRouter(
    prefix="/ppt-generator",
    tags=["PPT Generator"],
)


def get_service(
    db: AsyncSession = Depends(get_db),
):
    return PPTService(
        PaperRepository(db)
    )


@router.post(
    "",
    response_model=PPTResponse,
)
async def generate(
    data: PPTRequest,
    service: PPTService = Depends(
        get_service
    ),
):
    return await service.generate(
        data.paper_id,
        data.slides,
    )