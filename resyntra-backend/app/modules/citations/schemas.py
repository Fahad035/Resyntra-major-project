from uuid import UUID

from pydantic import BaseModel, ConfigDict


class CitationCreate(BaseModel):
    paper_id: UUID
    style: str = "APA"


class CitationResponse(BaseModel):
    id: UUID
    paper_id: UUID
    style: str
    citation: str

    model_config = ConfigDict(from_attributes=True)