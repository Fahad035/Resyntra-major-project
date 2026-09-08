import fitz


def extract_pdf_metadata(file_path: str) -> dict:
    doc = fitz.open(file_path)

    metadata = doc.metadata

    text = ""
    for page in doc:
        text += page.get_text()

    return {
        "title": metadata.get("title"),
        "author": metadata.get("author"),
        "pages": len(doc),
        "text": text,
    }