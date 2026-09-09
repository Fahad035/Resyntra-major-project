from fastapi import APIRouter

from app.modules.chat.schemas import (
    ChatRequest,
    ChatResponse,
)
from app.modules.chat.service import ChatService

router = APIRouter(
    prefix="/chat",
    tags=["Chat"],
)


@router.post(
    "",
    response_model=ChatResponse,
)
async def chat(data: ChatRequest):

    service = ChatService()

    return await service.ask(
        data.paper_id,
        data.question,
    )