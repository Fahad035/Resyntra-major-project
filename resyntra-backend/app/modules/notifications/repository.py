from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.notification import Notification


class NotificationRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, notification: Notification):
        self.db.add(notification)
        await self.db.commit()
        await self.db.refresh(notification)
        return notification

    async def get_all(self, user_id: UUID):
        result = await self.db.execute(
            select(Notification)
            .where(Notification.user_id == user_id)
            .order_by(Notification.created_at.desc())
        )
        return result.scalars().all()

    async def get_by_id(self, notification_id: UUID):
        result = await self.db.execute(
            select(Notification).where(
                Notification.id == notification_id
            )
        )
        return result.scalar_one_or_none()

    async def commit(self):
        await self.db.commit()

    async def delete(self, notification: Notification):
        await self.db.delete(notification)
        await self.db.commit()