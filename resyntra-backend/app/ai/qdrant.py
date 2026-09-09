from qdrant_client import QdrantClient
from qdrant_client.http.models import (
    Distance,
    PointStruct,
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

def search(
    embedding: list[float],
    limit: int = 5,
):

    response = client.query_points(
        collection_name=COLLECTION_NAME,
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