from fastapi import APIRouter, Depends, Request
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.rate_limit import limiter
from app.database.session import get_db
from app.models.user import User
from app.modules.auth.dependencies import get_current_user
from app.modules.chat.schemas import ChatRequest, ChatResponse
from app.modules.chat.service import ChatService

router = APIRouter(prefix="/chat", tags=["Chat"])


@router.post("", response_model=ChatResponse)
@limiter.limit(settings.AI_RATE_LIMIT)
async def chat(
    request: Request,
    data: ChatRequest,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ChatService(db)
    return await service.ask(data.paper_id, data.question, current_user)
