from uuid import UUID

from pydantic import BaseModel, Field


class ChatRequest(BaseModel):

    paper_id: UUID

    question: str


class ChatSource(BaseModel):

    chunk_index: int | None = None

    text: str

    score: float | None = None


class ChatConfidence(BaseModel):

    score: float

    label: str


class ChatResponse(BaseModel):

    answer: str

    sources: list[ChatSource] = Field(
        default_factory=list
    )

    confidence: ChatConfidence