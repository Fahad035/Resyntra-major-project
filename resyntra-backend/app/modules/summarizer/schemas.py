from uuid import UUID

from pydantic import BaseModel


class SummaryRequest(BaseModel):
    paper_id: UUID


class SummaryResponse(BaseModel):
    summary: str