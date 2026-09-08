from qdrant_client import QdrantClient
from qdrant_client.http.models import (
    Distance,
    PointStruct,
    VectorParams,
)
from uuid import uuid4
from app.core.config import settings


client = QdrantClient(
    host=settings.QDRANT_HOST,
    port=settings.QDRANT_PORT,
    check_compatibility=False,
)


COLLECTION_NAME = "papers"


def create_collection():

    collections = client.get_collections().collections

    names = [c.name for c in collections]

    if COLLECTION_NAME in names:
        return

    client.create_collection(
        collection_name=COLLECTION_NAME,
        vectors_config=VectorParams(
            size=768,
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
    # Updated to query_points to support the modern qdrant-client SDK structure
    response = client.query_points(
        collection_name=COLLECTION_NAME,
        query=embedding,
        limit=limit,
    )
    
    # Extracts the underlying points so your existing list comprehension in rag.py works perfectly
    return response.points