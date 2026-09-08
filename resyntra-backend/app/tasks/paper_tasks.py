from app.tasks.celery_app import celery_app
from app.utils.pdf import extract_pdf
from app.utils.chunking import split_text
from app.ai.embeddings import EmbeddingService
from app.ai.qdrant import (
    create_collection,
    insert_chunks,
)

@celery_app.task
def process_paper(paper_id: str, file_path: str):
    # 1. Extract raw text from the PDF
    pdf = extract_pdf(file_path)

    # 2. Chunk text
    chunks = split_text(pdf["text"])

    print(f"Paper: {paper_id}")
    print(f"Pages: {pdf['pages']}")
    print(f"Chunks: {len(chunks)}")

    try:
        # 3. Ensure the target Qdrant collection exists
        create_collection()

        # 4. Initialize embedding service and generate vectors in bulk
        embedding_service = EmbeddingService()
        embeddings = embedding_service.embed_batch(chunks)

        # 5. Save chunks and vectors to Qdrant vector database
        insert_chunks(
            paper_id=paper_id,
            chunks=chunks,
            embeddings=embeddings,
        )

        print(f"Embeddings stored successfully for Paper {paper_id}.")
        
        # 6. TODO: Update paper status in your main SQL database (e.g., Status: "COMPLETED")
        # Example: update_paper_status(paper_id, status="COMPLETED")

    except Exception as e:
        print(f"Failed to process paper {paper_id}: {str(e)}")
        # 7. TODO: Update paper status to failed in your main SQL database (e.g., Status: "FAILED")
        # Example: update_paper_status(paper_id, status="FAILED")
        raise e
