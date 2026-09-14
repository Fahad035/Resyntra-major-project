from qdrant_client import QdrantClient
from qdrant_client.http.models import (
    Distance,
    PointStruct,
    FieldCondition,
    Filter,
    MatchValue,
    VectorParams,
)
from uuid import uuid4
from app.core.config import settings
from qdrant_client.models import Filter, FieldCondition, MatchValue


client = QdrantClient(
    host=settings.QDRANT_HOST,
    port=settings.QDRANT_PORT,
    check_compatibility=False,
)


COLLECTION_NAME = settings.QDRANT_COLLECTION


def create_collection():

    collections = client.get_collections().collections

    names = [c.name for c in collections]

    if COLLECTION_NAME in names:
        return

    client.create_collection(
        collection_name=COLLECTION_NAME,
        vectors_config=VectorParams(
            size=settings.EMBEDDING_DIMENSION,
            distance=Distance.COSINE,
        ),
    )

def insert_chunks(
    paper_id: str,
    chunks: list[str],
    embeddings: list[list[float]],
):

    points = []

    for index, (chunk, vector) in enumerate(
        zip(chunks, embeddings)
    ):
        points.append(
            PointStruct(
                id=str(uuid4()),
                vector=vector,
                payload={
                    "paper_id": paper_id,
                    "chunk_index": index,
                    "text": chunk,
                },
            )
        )

    client.upsert(
        collection_name=COLLECTION_NAME,
        points=points,
    )

# app/ai/qdrant.py

def search(
    embedding: list[float],
    limit: int = 5,
    paper_id: str | None = None,  # Add this parameter to accept the ID from rag.py
):
    query_filter = None
    
    # Apply a strict metadata boundary filter only if a valid paper_id is passed
    if paper_id and paper_id.strip():
        query_filter = Filter(
            must=[
                FieldCondition(
                    key="paper_id",
                    match=MatchValue(value=paper_id)
                )
            ]
        )

    response = client.query_points(
        collection_name=COLLECTION_NAME,
        query=embedding,
        query_filter=query_filter,  # Inject the metadata filter constraint here
        limit=limit,
    )

    return [
        {
            "score": point.score,
            "payload": point.payload,
        }
        for point in response.points
    ]

def get_paper_chunks(
    paper_id: str,
):
    """
    Retrieve all indexed chunks for a specific paper
    in their original chunk order.
    """

    query_filter = Filter(
        must=[
            FieldCondition(
                key="paper_id",
                match=MatchValue(
                    value=paper_id,
                ),
            )
        ]
    )

    points = []
    offset = None

    while True:
        result = client.scroll(
            collection_name=COLLECTION_NAME,
            scroll_filter=query_filter,
            limit=100,
            offset=offset,
            with_payload=True,
            with_vectors=False,
        )

        batch, offset = result

        points.extend(batch)

        if offset is None:
            break

    points.sort(
        key=lambda point: (
            point.payload or {}
        ).get(
            "chunk_index",
            0,
        )
    )

    return [
        {
            "chunk_index": (
                point.payload or {}
            ).get(
                "chunk_index"
            ),
            "text": (
                point.payload or {}
            ).get(
                "text"
            ),
        }
        for point in points
        if (
            point.payload or {}
        ).get("text")
    ]


def delete_paper_chunks(
    paper_id: str,
):
    client.delete(
        collection_name=COLLECTION_NAME,
        points_selector=Filter(
            must=[
                FieldCondition(
                    key="paper_id",
                    match=MatchValue(value=paper_id),
                )
            ]
        ),
    )


# ============================================================
# RESEARCH DISCOVERY COLLECTION
# ============================================================

RESEARCH_DISCOVERY_COLLECTION = "research_discovery"


def create_research_discovery_collection():
    """
    Creates a separate Qdrant collection for external research papers.

    This collection is independent from the existing paper chunk
    collection used by Chat with Papers.
    """

    collections = client.get_collections().collections

    names = [collection.name for collection in collections]

    if RESEARCH_DISCOVERY_COLLECTION in names:
        return

    client.create_collection(
        collection_name=RESEARCH_DISCOVERY_COLLECTION,
        vectors_config=VectorParams(
            size=settings.EMBEDDING_DIMENSION,
            distance=Distance.COSINE,
        ),
    )


def insert_research_paper(
    research_paper_id: str,
    embedding: list[float],
    payload: dict,
):
    """
    Stores one external research paper embedding in Qdrant.
    """

    client.upsert(
        collection_name=RESEARCH_DISCOVERY_COLLECTION,
        points=[
            PointStruct(
                id=str(uuid4()),
                vector=embedding,
                payload={
                    "research_paper_id": research_paper_id,
                    **payload,
                },
            )
        ],
    )


def search_research_papers(
    embedding: list[float],
    limit: int = 10,
):
    """
    Performs semantic search across external research papers.
    """

    response = client.query_points(
        collection_name=RESEARCH_DISCOVERY_COLLECTION,
        query=embedding,
        limit=limit,
    )

    return [
        {
            "score": point.score,
            "payload": point.payload,
        }
        for point in response.points
    ]