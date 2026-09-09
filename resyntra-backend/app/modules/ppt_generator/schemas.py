from uuid import UUID

from pydantic import BaseModel


class PPTRequest(BaseModel):
    paper_id: UUID
    slides: int = 10


class PPTResponse(BaseModel):
    download_url: str