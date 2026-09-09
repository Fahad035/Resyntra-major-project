from uuid import UUID

from pydantic import BaseModel, ConfigDict


class ProjectCreate(BaseModel):
    name: str
    description: str | None = None


class ProjectUpdate(BaseModel):
    name: str
    description: str | None = None
    color: str


class ProjectResponse(BaseModel):
    id: UUID
    name: str
    description: str | None
    color: str

    model_config = ConfigDict(from_attributes=True)


class MessageResponse(BaseModel):
    message: str