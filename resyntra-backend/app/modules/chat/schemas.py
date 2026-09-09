from uuid import UUID

from pydantic import BaseModel


class ChatRequest(BaseModel):
    paper_id: UUID
    question: str


class ChatResponse(BaseModel):
    answer: str