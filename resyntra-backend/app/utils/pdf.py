import re

import fitz


def extract_pdf(file_path: str):
    """
    Extract readable text and basic metadata from a PDF.

    The extracted text is cleaned to reduce common PDF
    artifacts such as repeated headers, footers, page
    numbers, and publisher notes.
    """

    doc = fitz.open(file_path)

    try:
        metadata = doc.metadata or {}

        pages = []

        for page in doc:
            page_text = page.get_text("text")

            if not page_text:
                continue

            page_text = _clean_page_text(
                page_text
            )

            if page_text:
                pages.append(page_text)

        text = "\n\n".join(pages)

        return {
            "title": _clean_metadata_value(
                metadata.get("title")
            ),
            "author": _clean_metadata_value(
                metadata.get("author")
            ),
            "pages": len(doc),
            "text": text.strip(),
        }

    finally:
        doc.close()


def _clean_page_text(text: str):
    """
    Clean text extracted from one PDF page.
    """

    if not text:
        return ""

    lines = [
        line.strip()
        for line in text.splitlines()
    ]

    lines = [
        line
        for line in lines
        if line
    ]

    cleaned = []

    for line in lines:

        # Remove standalone page numbers.
        if re.fullmatch(
            r"(?:page\s*)?\d+",
            line,
            flags=re.IGNORECASE,
        ):
            continue

        # Remove common publisher note.
        if re.search(
            r"publisher'?s note",
            line,
            flags=re.IGNORECASE,
        ):
            continue

        # Remove common Springer copyright/jurisdiction note.
        if re.search(
            r"Springer Nature remains neutral",
            line,
            flags=re.IGNORECASE,
        ):
            continue

        cleaned.append(line)

    text = "\n".join(cleaned)

    # Fix excessive whitespace.
    text = re.sub(
        r"[ \t]+",
        " ",
        text,
    )

    # Normalize excessive blank lines.
    text = re.sub(
        r"\n{3,}",
        "\n\n",
        text,
    )

    return text.strip()


def _clean_metadata_value(value):
    """
    Clean PDF metadata values.
    """

    if not value:
        return None

    value = str(value).strip()

    if not value:
        return None

    return value