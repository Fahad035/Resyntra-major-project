from uuid import UUID

from pydantic import BaseModel, ConfigDict


class PaperResponse(BaseModel):
    id: UUID
    title: str
    authors: str | None
    abstract: str |None
    processing_status: str

    model_config = ConfigDict(from_attributes=True)


class MessageResponse(BaseModel):
    message: str