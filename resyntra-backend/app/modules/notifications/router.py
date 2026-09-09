from uuid import UUID

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.modules.notifications.schemas import MessageResponse
from app.database.session import get_db
from app.models.user import User
from app.modules.auth.dependencies import get_current_user
from app.modules.notifications.repository import NotificationRepository
from app.modules.notifications.schemas import (
    NotificationCreate,
    NotificationResponse,
)
from app.modules.notifications.service import NotificationService

router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"],
)


def get_service(
    db: AsyncSession = Depends(get_db),
):
    return NotificationService(
        NotificationRepository(db)
    )


@router.post(
    "",
    response_model=NotificationResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_notification(
    data: NotificationCreate,
    current_user: User = Depends(get_current_user),
    service: NotificationService = Depends(get_service),
):
    return await service.create(
        current_user,
        data,
    )


@router.get(
    "",
    response_model=list[NotificationResponse],
)
async def list_notifications(
    current_user: User = Depends(get_current_user),
    service: NotificationService = Depends(get_service),
):
    return await service.list(current_user)


@router.patch(
    "/{notification_id}/read",
    response_model=NotificationResponse,
)
async def mark_as_read(
    notification_id: UUID,
    service: NotificationService = Depends(get_service),
):
    return await service.mark_as_read(notification_id)


@router.delete(
    "/{notification_id}",
    response_model=MessageResponse,
)
async def delete_notification(
    notification_id: UUID,
    service: NotificationService = Depends(get_service),
):
    return await service.delete(notification_id)