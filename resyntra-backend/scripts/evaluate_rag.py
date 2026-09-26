import asyncio
import json
import math
import sys
from pathlib import Path



PROJECT_ROOT = Path(__file__).resolve().parents[1]

if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from app.ai.rag import RAGPipeline

TESTSET_PATH = PROJECT_ROOT / "eval" / "qa_testset.json"
RESULTS_JSON_PATH = PROJECT_ROOT / "eval" / "rag_results.json"
RESULTS_MD_PATH = PROJECT_ROOT / "eval" / "rag_results.md"


def normalize_text(text):
    if not text:
        return ""

    return " ".join(str(text).lower().split())


def keyword_match(answer, keywords):
    """
    Checks whether the generated answer contains
    the expected relevant keywords.
    """

    normalized_answer = normalize_text(answer)

    if not keywords:
        return False

    matches = 0

    for keyword in keywords:
        if normalize_text(keyword) in normalized_answer:
            matches += 1

    return matches / len(keywords)


def calculate_cosine_similarity(vector_a, vector_b):
    if not vector_a or not vector_b:
        return 0.0

    if len(vector_a) != len(vector_b):
        return 0.0

    dot_product = sum(
        a * b
        for a, b in zip(vector_a, vector_b)
    )

    magnitude_a = math.sqrt(
        sum(a * a for a in vector_a)
    )

    magnitude_b = math.sqrt(
        sum(b * b for b in vector_b)
    )

    if magnitude_a == 0 or magnitude_b == 0:
        return 0.0

    return dot_product / (
        magnitude_a * magnitude_b
    )


def extract_answer(response):
    """
    Handles common RAG response formats.

    This keeps the evaluator flexible while
    we inspect the actual RAGPipeline response.
    """

    if response is None:
        return ""

    if isinstance(response, str):
        return response

    if isinstance(response, dict):
        for key in (
            "answer",
            "response",
            "content",
            "text",
        ):
            value = response.get(key)

            if isinstance(value, str):
                return value

    for attribute in (
        "answer",
        "response",
        "content",
        "text",
    ):
        value = getattr(
            response,
            attribute,
            None,
        )

        if isinstance(value, str):
            return value

    return str(response)


def extract_sources(response):
    """
    Extract retrieved source/chunk information
    when available.
    """

    if response is None:
        return []

    if isinstance(response, dict):
        for key in (
            "sources",
            "chunks",
            "documents",
            "retrieved_chunks",
        ):
            value = response.get(key)

            if isinstance(value, list):
                return value

    for attribute in (
        "sources",
        "chunks",
        "documents",
        "retrieved_chunks",
    ):
        value = getattr(
            response,
            attribute,
            None,
        )

        if isinstance(value, list):
            return value

    return []


def source_to_text(source):
    if isinstance(source, str):
        return source

    if isinstance(source, dict):
        for key in (
            "text",
            "content",
            "chunk",
        ):
            value = source.get(key)

            if isinstance(value, str):
                return value

    for attribute in (
        "text",
        "content",
        "chunk",
    ):
        value = getattr(
            source,
            attribute,
            None,
        )

        if isinstance(value, str):
            return value

    return str(source)


def retrieval_keyword_precision(
    sources,
    keywords,
):
    """
    Measures how many retrieved chunks contain
    at least one relevant keyword.

    precision@k =
        relevant retrieved chunks / retrieved chunks
    """

    if not sources:
        return 0.0

    relevant = 0

    normalized_keywords = [
        normalize_text(keyword)
        for keyword in keywords
    ]

    for source in sources:
        source_text = normalize_text(
            source_to_text(source)
        )

        if any(
            keyword in source_text
            for keyword in normalized_keywords
        ):
            relevant += 1

    return relevant / len(sources)


async def evaluate():
    print("=" * 70)
    print("Resyntra RAG Evaluation")
    print("=" * 70)

    if not TESTSET_PATH.exists():
        raise FileNotFoundError(
            f"Test set not found: {TESTSET_PATH}"
        )

    with open(
        TESTSET_PATH,
        "r",
        encoding="utf-8",
    ) as file:
        test_cases = json.load(file)

    print(
        f"Loaded {len(test_cases)} evaluation questions."
    )

    print()

    pipeline = RAGPipeline()

    results = []

    for index, test_case in enumerate(
        test_cases,
        start=1,
    ):
        paper_id = test_case["paper_id"]
        question = test_case["question"]
        expected_answer = test_case[
            "expected_answer"
        ]
        keywords = test_case[
            "relevant_chunk_keywords"
        ]

        print(
            f"[{index}/{len(test_cases)}] "
            f"Evaluating question..."
        )

        try:
            response = pipeline.ask(
                question=question,
                paper_id=paper_id,
            )

            answer = extract_answer(response)

            sources = extract_sources(response)

            answer_keyword_score = (
                keyword_match(
                    answer,
                    keywords,
                )
            )

            retrieval_precision = (
                retrieval_keyword_precision(
                    sources,
                    keywords,
                )
            )

            result = {
                "paper_id": paper_id,
                "question": question,
                "expected_answer": expected_answer,
                "generated_answer": answer,
                "retrieved_source_count": len(
                    sources
                ),
                "retrieval_precision": round(
                    retrieval_precision,
                    4,
                ),
                "answer_keyword_score": round(
                    answer_keyword_score,
                    4,
                ),
            }

            results.append(result)

            print(
                f"  Retrieval Precision: "
                f"{retrieval_precision:.2f}"
            )

            print(
                f"  Answer Keyword Score: "
                f"{answer_keyword_score:.2f}"
            )

        except Exception as error:
            print(
                f"  ERROR: {error}"
            )

            results.append(
                {
                    "paper_id": paper_id,
                    "question": question,
                    "expected_answer": expected_answer,
                    "generated_answer": "",
                    "retrieved_source_count": 0,
                    "retrieval_precision": 0.0,
                    "answer_keyword_score": 0.0,
                    "error": str(error),
                }
            )

    # ---------------------------------------------------------
    # Aggregate metrics
    # ---------------------------------------------------------

    if results:
        average_retrieval_precision = (
            sum(
                result[
                    "retrieval_precision"
                ]
                for result in results
            )
            / len(results)
        )

        average_answer_keyword_score = (
            sum(
                result[
                    "answer_keyword_score"
                ]
                for result in results
            )
            / len(results)
        )
    else:
        average_retrieval_precision = 0.0
        average_answer_keyword_score = 0.0

    evaluation_output = {
        "total_questions": len(results),
        "average_retrieval_precision": round(
            average_retrieval_precision,
            4,
        ),
        "average_answer_keyword_score": round(
            average_answer_keyword_score,
            4,
        ),
        "results": results,
    }

    # ---------------------------------------------------------
    # Write JSON
    # ---------------------------------------------------------

    with open(
        RESULTS_JSON_PATH,
        "w",
        encoding="utf-8",
    ) as file:
        json.dump(
            evaluation_output,
            file,
            indent=2,
            ensure_ascii=False,
        )

    # ---------------------------------------------------------
    # Write Markdown
    # ---------------------------------------------------------

    markdown = []

    markdown.append(
        "# Resyntra RAG Evaluation Results"
    )

    markdown.append("")

    markdown.append(
        f"**Total Questions:** {len(results)}"
    )

    markdown.append("")

    markdown.append(
        "**Average Retrieval Precision:** "
        f"{average_retrieval_precision:.2%}"
    )

    markdown.append("")

    markdown.append(
        "**Average Answer Keyword Score:** "
        f"{average_answer_keyword_score:.2%}"
    )

    markdown.append("")

    markdown.append(
        "## Per-Question Results"
    )

    markdown.append("")

    markdown.append(
        "| # | Question | Retrieval Precision | Answer Keyword Score |"
    )

    markdown.append(
        "|---:|---|---:|---:|"
    )

    for index, result in enumerate(
        results,
        start=1,
    ):
        question = (
            result["question"]
            .replace("|", "\\|")
            .replace("\n", " ")
        )

        markdown.append(
            f"| {index} | "
            f"{question} | "
            f"{result['retrieval_precision']:.2%} | "
            f"{result['answer_keyword_score']:.2%} |"
        )

    with open(
        RESULTS_MD_PATH,
        "w",
        encoding="utf-8",
    ) as file:
        file.write(
            "\n".join(markdown)
        )

    print()
    print("=" * 70)
    print("Evaluation Complete")
    print("=" * 70)

    print(
        f"Average Retrieval Precision: "
        f"{average_retrieval_precision:.2%}"
    )

    print(
        f"Average Answer Keyword Score: "
        f"{average_answer_keyword_score:.2%}"
    )

    print()
    print(
        f"JSON results: {RESULTS_JSON_PATH}"
    )

    print(
        f"Markdown results: {RESULTS_MD_PATH}"
    )


if __name__ == "__main__":
    asyncio.run(evaluate())