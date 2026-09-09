import asyncio

from app.models.user import User
from app.modules.dashboard.repository import DashboardRepository


class DashboardService:

    def __init__(self, repo: DashboardRepository):
        self.repo = repo

    async def overview(
        self,
        current_user: User,
    ):
        (
            projects,
            collections,
            papers,
            notes,
            citations,
            chats,
        ) = await asyncio.gather(
            self.repo.count_projects(current_user.id),
            self.repo.count_collections(current_user.id),
            self.repo.count_papers(current_user.id),
            self.repo.count_notes(current_user.id),
            self.repo.count_citations(current_user.id),
            self.repo.count_chat_sessions(current_user.id),
        )

        return {
            "total_projects": projects,
            "total_collections": collections,
            "total_papers": papers,
            "total_notes": notes,
            "total_citations": citations,
            "total_chat_sessions": chats,
        }