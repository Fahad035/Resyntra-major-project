from uuid import UUID

from pydantic import BaseModel


class LiteratureReviewRequest(BaseModel):
    project_id: UUID
    collection_id: UUID | None = None
    topic: str


class LiteratureReviewResponse(BaseModel):
    review: str