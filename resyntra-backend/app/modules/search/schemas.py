from uuid import UUID

from pydantic import BaseModel, ConfigDict


class PaperSearchResponse(BaseModel):
    id: UUID
    title: str
    authors: str | None
    abstract: str | None
    file_name: str
    pages: int | None
    processing_status: str

    model_config = ConfigDict(
        from_attributes=True
    )


class SemanticSearchRequest(BaseModel):
    query: str
    limit: int = 10


class HybridSearchRequest(BaseModel):
    query: str
    limit: int = 10


class SemanticSearchResult(BaseModel):
    paper_id: UUID
    chunk: str
    score: float


class SemanticSearchResponse(BaseModel):
    results: list[SemanticSearchResult]