from pydantic import BaseModel


class DashboardResponse(BaseModel):
    total_projects: int
    total_collections: int
    total_papers: int
    total_notes: int
    total_citations: int
    total_chat_sessions: int