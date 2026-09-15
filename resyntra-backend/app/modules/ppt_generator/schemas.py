from uuid import UUID

from pydantic import BaseModel, Field


class PPTRequest(BaseModel):
    paper_id: UUID
    slides: int = Field(
        default=10,
        ge=9,
        le=10,
    )


class PPTResponse(BaseModel):
    pptx_url: str
    pdf_url: str