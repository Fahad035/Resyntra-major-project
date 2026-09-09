from uuid import UUID

from pydantic import BaseModel


class ResearchGapRequest(BaseModel):
    project_id: UUID
    collection_id: UUID | None = None
    topic: str


class ResearchGapResponse(BaseModel):
    research_gap: str