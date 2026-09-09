from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.modules.search.repository import SearchRepository
from app.modules.search.schemas import (
    HybridSearchRequest,
    PaperSearchResponse,
    SemanticSearchRequest,
    SemanticSearchResponse,
)
from app.modules.search.service import SearchService

router = APIRouter(
    prefix="/search",
    tags=["Search"],
)


def get_search_service(
    db: AsyncSession = Depends(get_db),
):
    return SearchService(SearchRepository(db))


@router.get(
    "/papers",
    response_model=list[PaperSearchResponse],
)
async def search_papers(
    q: str,
    service: SearchService = Depends(get_search_service),
):
    return await service.papers(q)


@router.post(
    "/semantic",
    response_model=SemanticSearchResponse,
)
async def semantic_search(
    data: SemanticSearchRequest,
    service: SearchService = Depends(get_search_service),
):
    return await service.semantic_search(
        data.query,
        data.limit,
    )


@router.post(
    "/hybrid",
)
async def hybrid_search(
    data: HybridSearchRequest,
    service: SearchService = Depends(get_search_service),
):
    return await service.hybrid_search(
        data.query,
        data.limit,
    )