from uuid import UUID

from pydantic import BaseModel, Field


class ResearchGapRequest(BaseModel):
    paper_ids: list[UUID] = Field(min_length=2, max_length=8)
    topic: str = Field(min_length=1)


class ResearchGapResponse(BaseModel):
    research_gap: str