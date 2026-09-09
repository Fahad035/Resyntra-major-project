from app.ai.literature_review import LiteratureReviewGenerator
from app.modules.collections.repository import CollectionRepository
from app.modules.papers.repository import PaperRepository


class LiteratureReviewService:

    def __init__(
        self,
        paper_repo: PaperRepository,
        collection_repo: CollectionRepository,
    ):
        self.paper_repo = paper_repo
        self.collection_repo = collection_repo
        self.generator = LiteratureReviewGenerator()

    async def generate(
        self,
        project_id,
        collection_id,
        topic,
    ):
        if collection_id:
            papers = await self.collection_repo.get_collection_papers(
                collection_id
            )
        else:
            papers = await self.paper_repo.get_project_papers(
                project_id
            )

        review = self.generator.generate(
            topic,
            papers,
        )

        return {
            "review": review,
        }