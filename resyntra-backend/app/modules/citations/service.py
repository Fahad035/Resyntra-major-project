from uuid import UUID

from fastapi import HTTPException, status

from app.models.citation import Citation
from app.models.paper import Paper
from app.models.user import User
from app.modules.citations.repository import CitationRepository
from app.modules.papers.repository import PaperRepository


class CitationService:

    def __init__(
        self,
        repo: CitationRepository,
        paper_repo: PaperRepository,
    ):
        self.repo = repo
        self.paper_repo = paper_repo

    async def create(
        self,
        project_id: UUID,
        current_user: User,
        data,
    ):
        paper: Paper | None = await self.paper_repo.get_by_id(
            data.paper_id
        )

        if paper is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Paper not found",
            )

        citation_text = (
            f"{paper.authors}. "
            f"({paper.publication_year}). "
            f"{paper.title}."
        )

        citation = Citation(
            owner_id=current_user.id,
            project_id=project_id,
            paper_id=data.paper_id,
            style=data.style,
            citation=citation_text,
        )

        return await self.repo.create(citation)

    async def list_project(
        self,
        project_id: UUID,
        current_user: User,
    ):
        return await self.repo.get_project_citations(project_id)

    async def list_paper(
        self,
        paper_id: UUID,
        current_user: User,
    ):
        return await self.repo.get_paper_citations(paper_id)

    async def get(
        self,
        citation_id: UUID,
        current_user: User,
    ):
        citation = await self.repo.get_by_id(citation_id)

        if citation is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Citation not found",
            )

        if citation.owner_id != current_user.id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Access denied",
            )

        return citation

    async def delete(
        self,
        citation_id: UUID,
        current_user: User,
    ):
        citation = await self.get(
            citation_id,
            current_user,
        )

        await self.repo.delete(citation)

        return {
            "message": "Citation deleted successfully",
        }