from app.tasks.celery_app import celery


@celery.task
def process_paper(paper_id: str):
    print(f"Processing paper: {paper_id}")

    # TODO
    # Extract metadata
    # Extract text
    # Chunk text
    # Generate embeddings
    # Save to Qdrant
    # Update paper status