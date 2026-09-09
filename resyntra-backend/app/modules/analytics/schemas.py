from pydantic import BaseModel


class AnalyticsResponse(BaseModel):
    total_projects: int
    total_collections: int
    total_papers: int
    total_notes: int
    total_citations: int

    papers_this_month: int
    notes_this_month: int

    papers_by_year: dict[int, int]