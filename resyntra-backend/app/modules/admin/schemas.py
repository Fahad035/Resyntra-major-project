from pydantic import BaseModel


class AdminDashboardResponse(BaseModel):
    total_users: int
    total_projects: int
    total_papers: int
    total_universities: int
    total_professors: int

class MessageResponse(BaseModel):
    message: str