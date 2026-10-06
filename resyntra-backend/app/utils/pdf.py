import re

import fitz


def extract_pdf(file_path: str):
    """
    Extract readable text and basic metadata from a PDF.

    The extracted text is cleaned to reduce common PDF
    artifacts such as repeated headers, footers, page
    numbers, publisher notes, and non-scientific trailing
    sections.
    """

    doc = fitz.open(file_path)

    try:
        metadata = doc.metadata or {}

        pages = []

        for page in doc:
            page_text = page.get_text("text")

            if not page_text:
                continue

            page_text = _clean_page_text(page_text)

            if page_text:
                pages.append(page_text)

        text = "\n\n".join(pages)

        text = _remove_non_scientific_sections(text)

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

        if re.search(
            r"Volume 7, Issue 4, July-August-2021",
            line,
            flags=re.IGNORECASE,
        ):
            continue

        if re.search(
            r"Praba\. R et al Int\. J\. Sci\. Res\. Comput\. Sci\. Eng\. Inf\. Technol",
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


def _remove_non_scientific_sections(text: str):
    """
    Remove common non-scientific sections that usually appear
    near the end of academic papers.

    This prevents references, acknowledgements, licensing,
    and similar material from polluting the RAG index.
    """

    if not text:
        return ""

    section_patterns = [
    r"\n(?:[IVXLCDM]+\.\s*)?(?:references|bibliography)\s*\n",
    r"\n(?:[IVXLCDM]+\.\s*)?acknowledgements?\s*\n",
    r"\n(?:[IVXLCDM]+\.\s*)?author contributions?\s*\n",
    r"\n(?:[IVXLCDM]+\.\s*)?additional information\s*\n",
    r"\n(?:[IVXLCDM]+\.\s*)?data availability\s*\n",
    r"\n(?:[IVXLCDM]+\.\s*)?code availability\s*\n",
    r"\n(?:[IVXLCDM]+\.\s*)?competing interests?\s*\n",
    r"\n(?:[IVXLCDM]+\.\s*)?conflict[s]? of interest[s]?\s*\n",
    r"\n(?:[IVXLCDM]+\.\s*)?open access\s*\n",
    r"\n(?:[IVXLCDM]+\.\s*)?ethics (?:statement|approval)\s*\n",
]
    earliest_position = None

    for pattern in section_patterns:
        match = re.search(
            pattern,
            text,
            flags=re.IGNORECASE,
        )

        if match:
            position = match.start()

            if (
                earliest_position is None
                or position < earliest_position
            ):
                earliest_position = position

    if earliest_position is not None:
        text = text[:earliest_position]

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