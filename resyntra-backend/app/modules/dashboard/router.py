from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.models.user import User
from app.modules.auth.dependencies import get_current_user
from app.modules.dashboard.repository import DashboardRepository
from app.modules.dashboard.schemas import DashboardResponse
from app.modules.dashboard.service import DashboardService

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


def get_dashboard_service(
    db: AsyncSession = Depends(get_db),
):
    return DashboardService(
        DashboardRepository(db)
    )


@router.get(
    "",
    response_model=DashboardResponse,
)
async def dashboard(
    current_user: User = Depends(get_current_user),
    service: DashboardService = Depends(
        get_dashboard_service
    ),
):
    return await service.overview(
        current_user
    )