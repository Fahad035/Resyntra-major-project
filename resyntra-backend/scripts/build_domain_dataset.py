from pathlib import Path
import json
import os

os.environ["HF_HUB_DOWNLOAD_TIMEOUT"] = "120"
os.environ["HF_HUB_ETAG_TIMEOUT"] = "120"

from datasets import load_dataset



from datasets import load_dataset


# ---------------------------------------------------------
# Configuration
# ---------------------------------------------------------

TARGET_PER_DOMAIN = 55

DOMAINS = {
    "NLP": "cs.CL",
    "Computer Vision": "cs.CV",
    "Robotics": "cs.RO",
    "Bio/Medical": "q-bio.GN",
    "Systems": "cs.OS",
}


# ---------------------------------------------------------
# Paths
# ---------------------------------------------------------

ROOT_DIR = Path(__file__).resolve().parents[1]

OUTPUT_DIR = (
    ROOT_DIR
    / "data"
    / "domain_dataset"
)

OUTPUT_FILE = (
    OUTPUT_DIR
    / "papers.json"
)


# ---------------------------------------------------------
# Dataset loader
# ---------------------------------------------------------

def load_arxiv_dataset():
    print("=" * 70)
    print("Loading arXiv metadata dataset")
    print("=" * 70)

    print()
    print("Dataset:")
    print("librarian-bots/arxiv-metadata-snapshot")
    print()
    print("Streaming enabled.")
    print("The full dataset will NOT be downloaded.")
    print()

    dataset = load_dataset(
        "librarian-bots/arxiv-metadata-snapshot",
        split="train",
        streaming=True,
    )

    return dataset


# ---------------------------------------------------------
# Category matching
# ---------------------------------------------------------

def matches_category(
    categories: str,
    target_category: str,
) -> bool:

    if not categories:
        return False

    category_list = categories.split()

    return target_category in category_list


# ---------------------------------------------------------
# Convert arXiv record
# ---------------------------------------------------------

def convert_paper(
    record: dict,
    domain: str,
    category: str,
) -> dict:

    authors = record.get(
        "authors_parsed"
    )

    if not authors:
        authors = []

    cleaned_authors = []

    for author in authors:

        if not isinstance(
            author,
            list,
        ):
            continue

        parts = [
            str(part).strip()
            for part in author
            if part
        ]

        name = " ".join(parts).strip()

        if name:
            cleaned_authors.append(name)

    arxiv_id = str(
        record.get("id", "")
    ).strip()

    return {
        "id": arxiv_id,

        "title": (
            record.get("title")
            or ""
        ).strip(),

        "authors": cleaned_authors,

        "abstract": (
            record.get("abstract")
            or ""
        ).strip(),

        "publication_date": (
            record.get("update_date")
        ),

        "primary_category": category,

        "domain": domain,

        "source": "arxiv",

        "url": (
            f"https://arxiv.org/abs/{arxiv_id}"
            if arxiv_id
            else None
        ),
    }


# ---------------------------------------------------------
# Main dataset builder
# ---------------------------------------------------------

def build_dataset():

    dataset = load_arxiv_dataset()

    collected = {
        domain: []
        for domain in DOMAINS
    }

    total_required = (
        len(DOMAINS)
        * TARGET_PER_DOMAIN
    )

    print(
        f"Target papers: {total_required}"
    )

    print()

    # -----------------------------------------------------
    # Stream records
    # -----------------------------------------------------

    for record_number, record in enumerate(
        dataset,
        start=1,
    ):

        categories = (
            record.get("categories")
            or ""
        )

        title = (
            record.get("title")
            or ""
        ).strip()

        abstract = (
            record.get("abstract")
            or ""
        ).strip()

        # Skip incomplete records
        if not title or not abstract:
            continue

        # -------------------------------------------------
        # Check every domain
        # -------------------------------------------------

        for domain, category in DOMAINS.items():

            if len(
                collected[domain]
            ) >= TARGET_PER_DOMAIN:
                continue

            if matches_category(
                categories,
                category,
            ):

                paper = convert_paper(
                    record,
                    domain,
                    category,
                )

                collected[
                    domain
                ].append(paper)

                print(
                    f"{domain:<20} "
                    f"{len(collected[domain]):>2}/"
                    f"{TARGET_PER_DOMAIN}  "
                    f"{title[:70]}"
                )

        # -------------------------------------------------
        # Stop when all domains complete
        # -------------------------------------------------

        completed = all(
            len(collected[domain])
            >= TARGET_PER_DOMAIN
            for domain in DOMAINS
        )

        if completed:
            print()
            print(
                "All domain targets reached."
            )
            break

        # Progress indicator
        if record_number % 100000 == 0:

            print()
            print(
                f"Scanned "
                f"{record_number:,} records..."
            )

            for domain in DOMAINS:

                print(
                    f"  {domain:<20}"
                    f"{len(collected[domain])}"
                    f"/{TARGET_PER_DOMAIN}"
                )

            print()

    # -----------------------------------------------------
    # Combine datasets
    # -----------------------------------------------------

    papers = []

    for domain in DOMAINS:

        papers.extend(
            collected[domain]
        )

    # -----------------------------------------------------
    # Save
    # -----------------------------------------------------

    OUTPUT_DIR.mkdir(
        parents=True,
        exist_ok=True,
    )

    with OUTPUT_FILE.open(
        "w",
        encoding="utf-8",
    ) as file:

        json.dump(
            papers,
            file,
            indent=2,
            default=str,
        )

    # -----------------------------------------------------
    # Final report
    # -----------------------------------------------------

    print()
    print("=" * 70)
    print("DATASET BUILD COMPLETED")
    print("=" * 70)

    for domain in DOMAINS:

        print(
            f"{domain:<20}"
            f"{len(collected[domain])} papers"
        )

    print("-" * 70)

    print(
        f"{'TOTAL':<20}"
        f"{len(papers)} papers"
    )

    print()

    print(
        f"Saved to:"
    )

    print(
        OUTPUT_FILE
    )

    print("=" * 70)


# ---------------------------------------------------------
# Entry point
# ---------------------------------------------------------

if __name__ == "__main__":
    build_dataset()