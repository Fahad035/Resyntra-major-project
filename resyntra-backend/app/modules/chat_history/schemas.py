from uuid import UUID

from pydantic import BaseModel, ConfigDict


class ChatSessionCreate(BaseModel):
    project_id: UUID
    title: str


class ChatSessionResponse(BaseModel):
    id: UUID
    project_id: UUID
    title: str

    model_config = ConfigDict(from_attributes=True)


class ChatMessageCreate(BaseModel):
    question: str


class ChatMessageResponse(BaseModel):
    id: UUID
    role: str
    content: str

    model_config = ConfigDict(from_attributes=True)

class MessageResponse(BaseModel):
    message: str