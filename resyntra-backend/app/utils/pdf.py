import math
import re
from collections import Counter

import fitz


# Header/footer candidates are taken only from the edges of each page.
# This avoids deleting legitimate article content that happens to repeat
# inside the body while still removing journal headers and footers that
# recur across most pages.
_EDGE_LINE_COUNT = 6
_REPEAT_RATIO = 0.6
_MIN_REPEAT_LENGTH = 8


def extract_pdf(file_path: str):
    """
    Extract readable text and basic metadata from a PDF.

    Repeated page-edge lines are detected across the document instead of
    matching a specific journal's header/footer text. This makes cleaning
    work across different publishers and paper formats.
    """

    doc = fitz.open(file_path)

    try:
        metadata = doc.metadata or {}
        raw_pages = []

        for page in doc:
            page_text = page.get_text("text")
            if page_text:
                raw_pages.append(page_text)

        repeated_edge_lines = _detect_repeated_edge_lines(raw_pages)
        pages = [
            _clean_page_text(page_text, repeated_edge_lines)
            for page_text in raw_pages
        ]
        pages = [page for page in pages if page]

        text = "\n\n".join(pages)
        text = _remove_non_scientific_sections(text)

        return {
            "title": _clean_metadata_value(metadata.get("title")),
            "author": _clean_metadata_value(metadata.get("author")),
            "pages": len(doc),
            "text": text.strip(),
        }

    finally:
        doc.close()


def _normalize_edge_line(line: str) -> str:
    """Normalize a line so small whitespace differences do not defeat detection."""
    line = re.sub(r"\s+", " ", line).strip().casefold()
    return line


def _detect_repeated_edge_lines(page_texts: list[str]) -> set[str]:
    """
    Detect lines repeated across the top/bottom of most pages.

    Only edge lines are considered. A line must occur on at least 60% of
    pages (and on at least two pages) before it is treated as a repeated
    header/footer artifact.
    """
    page_count = len(page_texts)
    if page_count < 2:
        return set()

    minimum_pages = max(2, math.ceil(page_count * _REPEAT_RATIO))
    counts = Counter()

    for page_text in page_texts:
        lines = [line.strip() for line in page_text.splitlines() if line.strip()]
        edge_lines = lines[:_EDGE_LINE_COUNT] + lines[-_EDGE_LINE_COUNT:]
        normalized_on_page = {
            _normalize_edge_line(line)
            for line in edge_lines
            if len(line.strip()) >= _MIN_REPEAT_LENGTH
        }
        counts.update(normalized_on_page)

    return {
        line
        for line, count in counts.items()
        if count >= minimum_pages
    }


def _clean_page_text(text: str, repeated_edge_lines: set[str] | None = None):
    """Clean text extracted from one PDF page."""
    if not text:
        return ""

    repeated_edge_lines = repeated_edge_lines or set()
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    cleaned = []

    for line in lines:
        # Remove standalone page numbers.
        if re.fullmatch(r"(?:page\s*)?\d+", line, flags=re.IGNORECASE):
            continue

        # Remove common publisher notes.
        if re.search(r"publisher'?s note", line, flags=re.IGNORECASE):
            continue

        # Remove common Springer copyright/jurisdiction note.
        if re.search(
            r"Springer Nature remains neutral",
            line,
            flags=re.IGNORECASE,
        ):
            continue

        if _normalize_edge_line(line) in repeated_edge_lines:
            continue

        cleaned.append(line)

    text = "\n".join(cleaned)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def _remove_non_scientific_sections(text: str):
    """
    Remove common non-scientific sections that usually appear near the end
    of academic papers.
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
        match = re.search(pattern, text, flags=re.IGNORECASE)
        if match:
            position = match.start()
            if earliest_position is None or position < earliest_position:
                earliest_position = position

    if earliest_position is not None:
        text = text[:earliest_position]

    return text.strip()


def _clean_metadata_value(value):
    if not value:
        return None

    value = re.sub(r"\s+", " ", str(value)).strip()
    return value or None