from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.chat_message import ChatMessage
from app.models.chat_session import ChatSession


class ChatHistoryRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def create_session(self, session: ChatSession):
        self.db.add(session)
        await self.db.commit()
        await self.db.refresh(session)
        return session

    async def get_session(self, session_id: UUID):
        result = await self.db.execute(
            select(ChatSession).where(
                ChatSession.id == session_id
            )
        )
        return result.scalar_one_or_none()

    async def get_project_sessions(
        self,
        project_id: UUID,
    ):
        result = await self.db.execute(
            select(ChatSession)
            .where(ChatSession.project_id == project_id)
            .order_by(ChatSession.created_at.desc())
        )
        return result.scalars().all()

    async def create_message(self, message: ChatMessage):
        self.db.add(message)
        await self.db.commit()
        await self.db.refresh(message)
        return message

    async def get_messages(
        self,
        session_id: UUID,
    ):
        result = await self.db.execute(
            select(ChatMessage)
            .where(ChatMessage.session_id == session_id)
            .order_by(ChatMessage.created_at)
        )
        return result.scalars().all()

    async def delete_session(
        self,
        session: ChatSession,
    ):
        await self.db.delete(session)
        await self.db.commit()