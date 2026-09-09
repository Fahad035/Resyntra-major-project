import asyncio

from app.models.citation import Citation
from app.models.collection import Collection
from app.models.note import Note
from app.models.paper import Paper
from app.models.project import Project
from app.models.user import User
from app.modules.analytics.repository import AnalyticsRepository


class AnalyticsService:

    def __init__(self, repo: AnalyticsRepository):
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
            monthly_papers,
            monthly_notes,
            yearly_distribution,
        ) = await asyncio.gather(
            self.repo.count(Project, current_user.id),
            self.repo.count(Collection, current_user.id),
            self.repo.count(Paper, current_user.id),
            self.repo.count(Note, current_user.id),
            self.repo.count(Citation, current_user.id),
            self.repo.papers_this_month(current_user.id),
            self.repo.notes_this_month(current_user.id),
            self.repo.papers_grouped_by_year(current_user.id),
        )

        return {
            "total_projects": projects,
            "total_collections": collections,
            "total_papers": papers,
            "total_notes": notes,
            "total_citations": citations,
            "papers_this_month": monthly_papers,
            "notes_this_month": monthly_notes,
            "papers_by_year": yearly_distribution,
        }