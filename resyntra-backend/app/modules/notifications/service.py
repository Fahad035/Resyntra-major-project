from uuid import UUID

from fastapi import HTTPException, status

from app.models.notification import Notification
from app.models.user import User
from app.modules.notifications.repository import NotificationRepository


class NotificationService:

    def __init__(self, repo: NotificationRepository):
        self.repo = repo

    async def create(
        self,
        current_user: User,
        data,
    ):
        notification = Notification(
            user_id=current_user.id,
            title=data.title,
            message=data.message,
        )

        return await self.repo.create(notification)

    async def list(
        self,
        current_user: User,
    ):
        return await self.repo.get_all(current_user.id)

    async def mark_as_read(
        self,
        notification_id: UUID,
    ):
        notification = await self.repo.get_by_id(notification_id)

        if notification is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Notification not found",
            )

        notification.is_read = True

        await self.repo.commit()

        return notification

    async def delete(
        self,
        notification_id: UUID,
    ):
        notification = await self.repo.get_by_id(notification_id)

        if notification is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Notification not found",
            )

        await self.repo.delete(notification)

        return {
            "message": "Notification deleted successfully",
        }