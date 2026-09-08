import fitz


def extract_pdf(file_path: str):
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