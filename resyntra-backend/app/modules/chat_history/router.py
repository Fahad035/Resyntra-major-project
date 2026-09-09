from uuid import UUID

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.modules.chat_history.schemas import MessageResponse
from app.database.session import get_db
from app.models.user import User
from app.modules.auth.dependencies import get_current_user
from app.modules.chat_history.repository import (
    ChatHistoryRepository,
)
from app.modules.chat_history.schemas import (
    ChatMessageCreate,
    ChatMessageResponse,
    ChatSessionCreate,
    ChatSessionResponse,
)
from app.modules.chat_history.service import (
    ChatHistoryService,
)

router = APIRouter(
    prefix="/chat-history",
    tags=["Chat History"],
)


def get_service(
    db: AsyncSession = Depends(get_db),
):
    return ChatHistoryService(
        ChatHistoryRepository(db)
    )


@router.post(
    "/sessions",
    response_model=ChatSessionResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_session(
    data: ChatSessionCreate,
    current_user: User = Depends(get_current_user),
    service: ChatHistoryService = Depends(get_service),
):
    return await service.create_session(
        data,
        current_user,
    )


@router.get(
    "/projects/{project_id}",
    response_model=list[ChatSessionResponse],
)
async def list_sessions(
    project_id: UUID,
    service: ChatHistoryService = Depends(get_service),
):
    return await service.list_sessions(
        project_id
    )


@router.post(
    "/sessions/{session_id}/messages",
    response_model=ChatMessageResponse,
)
async def send_message(
    session_id: UUID,
    data: ChatMessageCreate,
    service: ChatHistoryService = Depends(get_service),
):
    return await service.ask(
        session_id,
        data.question,
    )


@router.get(
    "/sessions/{session_id}/messages",
    response_model=list[ChatMessageResponse],
)
async def get_messages(
    session_id: UUID,
    service: ChatHistoryService = Depends(get_service),
):
    return await service.messages(
        session_id
    )


@router.delete(
    "/sessions/{session_id}",
    response_model=MessageResponse,
)
async def delete_session(
    session_id: UUID,
    service: ChatHistoryService = Depends(get_service),
):
    return await service.delete(
        session_id
    )