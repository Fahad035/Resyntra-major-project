from uuid import UUID

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.modules.admin.schemas import MessageResponse
from app.database.session import get_db
from app.modules.admin.repository import AdminRepository
from app.modules.admin.schemas import AdminDashboardResponse
from app.modules.admin.service import AdminService

router = APIRouter(
    prefix="/admin",
    tags=["Admin"],
)


def get_service(
    db: AsyncSession = Depends(get_db),
):
    return AdminService(
        AdminRepository(db)
    )


@router.get(
    "/dashboard",
    response_model=AdminDashboardResponse,
)
async def dashboard(
    service: AdminService = Depends(get_service),
):
    return await service.dashboard()


@router.get("/users")
async def users(
    service: AdminService = Depends(get_service),
):
    return await service.list_users()


@router.patch(
    "/users/{user_id}/block",
    response_model=MessageResponse,
)
async def block_user(
    user_id: UUID,
    service: AdminService = Depends(get_service),
):
    return await service.block_user(user_id)


@router.patch(
    "/users/{user_id}/unblock",
    response_model=MessageResponse,
)
async def unblock_user(
    user_id: UUID,
    service: AdminService = Depends(get_service),
):
    return await service.unblock_user(user_id)