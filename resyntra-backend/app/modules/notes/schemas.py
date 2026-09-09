from uuid import UUID

from pydantic import BaseModel, ConfigDict


class NoteCreate(BaseModel):
    title: str
    content: str
    collection_id: UUID | None = None
    paper_id: UUID | None = None


class NoteUpdate(BaseModel):
    title: str
    content: str


class NoteResponse(BaseModel):
    id: UUID
    title: str
    content: str
    is_ai_generated: bool

    model_config = ConfigDict(from_attributes=True)