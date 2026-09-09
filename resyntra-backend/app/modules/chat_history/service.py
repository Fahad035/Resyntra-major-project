from uuid import UUID

from fastapi import HTTPException, status

from app.ai.rag import RAGPipeline
from app.models.chat_message import ChatMessage
from app.models.chat_session import ChatSession
from app.models.user import User
from app.modules.chat_history.repository import (
    ChatHistoryRepository,
)


class ChatHistoryService:

    def __init__(
        self,
        repo: ChatHistoryRepository,
    ):
        self.repo = repo
        self.rag = RAGPipeline()

    async def create_session(
        self,
        data,
        current_user: User,
    ):
        session = ChatSession(
            owner_id=current_user.id,
            project_id=data.project_id,
            title=data.title,
        )

        return await self.repo.create_session(session)

    async def list_sessions(
        self,
        project_id: UUID,
    ):
        return await self.repo.get_project_sessions(
            project_id
        )

    async def get_session(
        self,
        session_id: UUID,
    ):
        session = await self.repo.get_session(
            session_id
        )

        if session is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Chat session not found",
            )

        return session

    async def ask(
        self,
        session_id: UUID,
        question: str,
    ):
        session = await self.get_session(
            session_id
        )

        await self.repo.create_message(
            ChatMessage(
                session_id=session.id,
                role="user",
                content=question,
            )
        )

        answer = self.rag.ask(question)

        ai_message = await self.repo.create_message(
            ChatMessage(
                session_id=session.id,
                role="assistant",
                content=answer,
            )
        )

        return ai_message

    async def messages(
        self,
        session_id: UUID,
    ):
        await self.get_session(session_id)

        return await self.repo.get_messages(
            session_id
        )

    async def delete(
        self,
        session_id: UUID,
    ):
        session = await self.get_session(
            session_id
        )

        await self.repo.delete_session(session)

        return {
            "message": "Chat deleted successfully",
        }