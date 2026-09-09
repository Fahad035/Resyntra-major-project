from app.tasks.celery_app import celery_app

from app.ai.embeddings import EmbeddingService
from app.ai.qdrant import (
    create_collection,
    insert_chunks,
)
from app.database.sync_session import SessionLocal
from app.models.paper import Paper
from app.utils.chunking import split_text
from app.utils.pdf import extract_pdf


@celery_app.task
def process_paper(
    paper_id: str,
    file_path: str,
):

    db = SessionLocal()

    try:
        paper = db.get(Paper, paper_id)

        if paper is None:
            return

        paper.processing_status = "processing"
        db.commit()

        pdf = extract_pdf(file_path)

        chunks = split_text(pdf["text"])

        create_collection()

        embedding_service = EmbeddingService()

        embeddings = embedding_service.embed_batch(
            chunks
        )

        insert_chunks(
            paper_id=paper_id,
            chunks=chunks,
            embeddings=embeddings,
        )

        paper.abstract = pdf.get("abstract")
        paper.processing_status = "completed"

        db.commit()

        print(
            f"Paper {paper_id} processed successfully."
        )

    except Exception as e:

        paper = db.get(Paper, paper_id)

        if paper:
            paper.processing_status = "failed"
            db.commit()

        raise e

    finally:
        db.close()