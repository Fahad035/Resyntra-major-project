from uuid import UUID

from pydantic import BaseModel, ConfigDict


class CollectionCreate(BaseModel):
    name: str
    description: str | None = None


class CollectionResponse(BaseModel):
    id: UUID
    name: str
    description: str | None

    model_config = ConfigDict(from_attributes=True)


class AddPaperRequest(BaseModel):
    paper_id: UUID


class MessageResponse(BaseModel):
    message: str