from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.models.user import User
from app.modules.analytics.repository import AnalyticsRepository
from app.modules.analytics.schemas import AnalyticsResponse
from app.modules.analytics.service import AnalyticsService
from app.modules.auth.dependencies import get_current_user

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


def get_analytics_service(
    db: AsyncSession = Depends(get_db),
):
    return AnalyticsService(
        AnalyticsRepository(db)
    )


@router.get(
    "",
    response_model=AnalyticsResponse,
)
async def analytics(
    current_user: User = Depends(get_current_user),
    service: AnalyticsService = Depends(
        get_analytics_service,
    ),
):
    return await service.overview(
        current_user,
    )