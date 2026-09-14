from langchain_text_splitters import RecursiveCharacterTextSplitter


def split_text(text: str):
    """
    Split extracted research-paper text into
    meaningful overlapping chunks for embeddings
    and semantic search.
    """

    if not text:
        return []

    text = text.strip()

    if not text:
        return []

    # Normalize excessive whitespace while preserving
    # paragraph boundaries.
    paragraphs = [
        paragraph.strip()
        for paragraph in text.split("\n\n")
        if paragraph.strip()
    ]

    if not paragraphs:
        return []

    splitter = RecursiveCharacterTextSplitter(
        separators=[
            "\n\n",
            "\n",
            ". ",
            "? ",
            "! ",
            "; ",
            ", ",
            " ",
            "",
        ],
        chunk_size=1500,
        chunk_overlap=250,
        length_function=len,
    )

    chunks = []

    for paragraph in paragraphs:
        paragraph_chunks = splitter.split_text(
            paragraph
        )

        for chunk in paragraph_chunks:
            chunk = chunk.strip()

            if not chunk:
                continue

            # Ignore extremely small fragments.
            if len(chunk) < 100:
                continue

            chunks.append(chunk)

    return chunks