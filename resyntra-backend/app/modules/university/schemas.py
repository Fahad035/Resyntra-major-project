from uuid import UUID

from pydantic import BaseModel, ConfigDict


class UniversityCreate(BaseModel):
    name: str
    country: str | None = None
    city: str | None = None
    website: str | None = None
    description: str | None = None
    logo_url: str | None = None


class UniversityUpdate(BaseModel):
    country: str | None = None
    city: str | None = None
    website: str | None = None
    description: str | None = None
    logo_url: str | None = None


class UniversityResponse(BaseModel):
    id: UUID
    name: str
    country: str | None
    city: str | None
    website: str | None
    description: str | None
    logo_url: str | None

    model_config = ConfigDict(from_attributes=True)