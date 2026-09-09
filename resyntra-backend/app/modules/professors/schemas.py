from uuid import UUID

from pydantic import BaseModel, ConfigDict


class ProfessorCreate(BaseModel):
    university_id: UUID
    name: str
    department: str | None = None
    email: str | None = None
    website: str | None = None
    research_interests: str | None = None
    profile_image: str | None = None


class ProfessorUpdate(BaseModel):
    department: str | None = None
    email: str | None = None
    website: str | None = None
    research_interests: str | None = None
    profile_image: str | None = None


class ProfessorResponse(BaseModel):
    id: UUID
    university_id: UUID
    name: str
    department: str | None
    email: str | None
    website: str | None
    research_interests: str | None
    profile_image: str | None

    model_config = ConfigDict(from_attributes=True)

class MessageResponse(BaseModel):
    message: str