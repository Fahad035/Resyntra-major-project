from pathlib import Path
import json
import os
from collections import defaultdict

# ---------------------------------------------------------
# Hugging Face timeout configuration
# ---------------------------------------------------------

os.environ["HF_HUB_DOWNLOAD_TIMEOUT"] = "120"
os.environ["HF_HUB_ETAG_TIMEOUT"] = "120"

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

OUTPUT_DIR = ROOT_DIR / "data" / "domain_dataset"

OUTPUT_FILE = OUTPUT_DIR / "papers.json"


# ---------------------------------------------------------
# Load existing dataset
# ---------------------------------------------------------

def load_existing_dataset():

    print("=" * 70)
    print("LOADING EXISTING DOMAIN DATASET")
    print("=" * 70)

    if not OUTPUT_FILE.exists():

        raise FileNotFoundError(
            f"Dataset not found:\n{OUTPUT_FILE}"
        )

    with OUTPUT_FILE.open(
        "r",
        encoding="utf-8",
    ) as file:

        papers = json.load(file)

    print()
    print(f"Existing papers: {len(papers)}")

    return papers


# ---------------------------------------------------------
# Check category
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
# Clean existing dataset
# ---------------------------------------------------------

def clean_existing_dataset(papers):

    print()
    print("=" * 70)
    print("CLEANING EXISTING DATASET")
    print("=" * 70)

    # -----------------------------------------------------
    # Group by domain
    # -----------------------------------------------------

    grouped = defaultdict(list)

    for paper in papers:

        domain = paper.get("domain")

        if domain in DOMAINS:

            grouped[domain].append(paper)

    # -----------------------------------------------------
    # Keep unique paper IDs
    # -----------------------------------------------------

    used_ids = set()

    cleaned = {
        domain: []
        for domain in DOMAINS
    }

    # -----------------------------------------------------
    # Domain priority
    #
    # This prevents the same paper from being counted
    # in multiple domains.
    # -----------------------------------------------------

    for domain in DOMAINS:

        for paper in grouped[domain]:

            paper_id = str(
                paper.get("id", "")
            ).strip()

            if not paper_id:
                continue

            if paper_id in used_ids:
                continue

            if len(
                cleaned[domain]
            ) >= TARGET_PER_DOMAIN:
                continue

            used_ids.add(paper_id)

            cleaned[domain].append(paper)

    # -----------------------------------------------------
    # Report
    # -----------------------------------------------------

    print()

    for domain in DOMAINS:

        count = len(
            cleaned[domain]
        )

        status = (
            "[PASS]"
            if count >= TARGET_PER_DOMAIN
            else "[NEED MORE]"
        )

        print(
            f"{status:<12}"
            f"{domain:<20}"
            f"{count}/{TARGET_PER_DOMAIN}"
        )

    return cleaned, used_ids


# ---------------------------------------------------------
# Load arXiv streaming dataset
# ---------------------------------------------------------

def load_arxiv_dataset():

    print()
    print("=" * 70)
    print("LOADING arXiv METADATA")
    print("=" * 70)

    print()
    print("Dataset:")
    print("librarian-bots/arxiv-metadata-snapshot")
    print()
    print("Streaming enabled.")
    print("Only needed replacement papers will be searched.")
    print()

    dataset = load_dataset(
        "librarian-bots/arxiv-metadata-snapshot",
        split="train",
        streaming=True,
    )

    return dataset


# ---------------------------------------------------------
# Fill missing domains
# ---------------------------------------------------------

def fill_missing_domains(
    cleaned,
    used_ids,
):

    missing = {}

    for domain in DOMAINS:

        current = len(
            cleaned[domain]
        )

        if current < TARGET_PER_DOMAIN:

            missing[domain] = (
                TARGET_PER_DOMAIN - current
            )

    # -----------------------------------------------------
    # Nothing missing
    # -----------------------------------------------------

    if not missing:

        print()
        print(
            "No replacement papers required."
        )

        return

    # -----------------------------------------------------
    # Show requirements
    # -----------------------------------------------------

    print()
    print("=" * 70)
    print("PAPERS REQUIRED")
    print("=" * 70)

    for domain, amount in missing.items():

        print(
            f"{domain:<20}"
            f"need {amount} more"
        )

    # -----------------------------------------------------
    # Load streaming dataset
    # -----------------------------------------------------

    dataset = load_arxiv_dataset()

    print()
    print("Searching for replacement papers...")
    print()

    scanned = 0

    # -----------------------------------------------------
    # Stream records
    # -----------------------------------------------------

    for record in dataset:

        scanned += 1

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

        paper_id = str(
            record.get("id", "")
        ).strip()

        # -------------------------------------------------
        # Skip incomplete records
        # -------------------------------------------------

        if not title or not abstract:
            continue

        if not paper_id:
            continue

        # -------------------------------------------------
        # Skip paper already used
        # -------------------------------------------------

        if paper_id in used_ids:
            continue

        # -------------------------------------------------
        # Try missing domains
        # -------------------------------------------------

        added = False

        for domain, category in DOMAINS.items():

            # Domain already complete
            if len(
                cleaned[domain]
            ) >= TARGET_PER_DOMAIN:
                continue

            # Not the required category
            if not matches_category(
                categories,
                category,
            ):
                continue

            # -------------------------------------------------
            # Important:
            # If paper has multiple target categories,
            # assign it to only ONE domain.
            # -------------------------------------------------

            paper = convert_paper(
                record,
                domain,
                category,
            )

            cleaned[domain].append(
                paper
            )

            used_ids.add(
                paper_id
            )

            added = True

            print(
                f"{domain:<20}"
                f"{len(cleaned[domain]):>2}/"
                f"{TARGET_PER_DOMAIN}  "
                f"{title[:70]}"
            )

            break

        # -------------------------------------------------
        # Check completion
        # -------------------------------------------------

        completed = all(
            len(cleaned[domain])
            >= TARGET_PER_DOMAIN
            for domain in DOMAINS
        )

        if completed:

            print()
            print(
                "All missing papers found."
            )

            break

        # -------------------------------------------------
        # Progress
        # -------------------------------------------------

        if scanned % 100000 == 0:

            print()
            print(
                f"Scanned {scanned:,} arXiv records..."
            )

            for domain in DOMAINS:

                print(
                    f"  {domain:<20}"
                    f"{len(cleaned[domain])}/"
                    f"{TARGET_PER_DOMAIN}"
                )

            print()

    # -----------------------------------------------------
    # Check if successful
    # -----------------------------------------------------

    incomplete = []

    for domain in DOMAINS:

        if len(
            cleaned[domain]
        ) < TARGET_PER_DOMAIN:

            incomplete.append(domain)

    if incomplete:

        print()
        print("=" * 70)
        print("WARNING: DATASET STILL INCOMPLETE")
        print("=" * 70)

        for domain in incomplete:

            print(
                f"{domain:<20}"
                f"{len(cleaned[domain])}/"
                f"{TARGET_PER_DOMAIN}"
            )

        print()

        raise RuntimeError(
            "Could not find enough replacement papers."
        )


# ---------------------------------------------------------
# Save final dataset
# ---------------------------------------------------------

def save_dataset(cleaned):

    papers = []

    for domain in DOMAINS:

        papers.extend(
            cleaned[domain]
        )

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
            ensure_ascii=False,
            default=str,
        )

    return papers


# ---------------------------------------------------------
# Final report
# ---------------------------------------------------------

def print_final_report(papers):

    print()
    print("=" * 70)
    print("DATASET BUILD COMPLETED")
    print("=" * 70)

    counts = defaultdict(int)

    ids = set()

    duplicates = 0

    for paper in papers:

        domain = paper.get("domain")

        counts[domain] += 1

        paper_id = paper.get("id")

        if paper_id in ids:

            duplicates += 1

        else:

            ids.add(paper_id)

    for domain in DOMAINS:

        print(
            f"{domain:<20}"
            f"{counts[domain]} papers"
        )

    print("-" * 70)

    print(
        f"{'TOTAL':<20}"
        f"{len(papers)} papers"
    )

    print()

    print(
        f"Unique IDs:          {len(ids)}"
    )

    print(
        f"Duplicate IDs:       {duplicates}"
    )

    print()

    print(
        "Saved to:"
    )

    print(
        OUTPUT_FILE
    )

    print("=" * 70)


# ---------------------------------------------------------
# Main
# ---------------------------------------------------------

def build_dataset():

    # 1. Load current papers.json
    existing = load_existing_dataset()

    # 2. Clean duplicate IDs and cross-domain duplicates
    cleaned, used_ids = clean_existing_dataset(
        existing
    )

    # 3. Fetch ONLY missing papers
    fill_missing_domains(
        cleaned,
        used_ids,
    )

    # 4. Save final dataset
    papers = save_dataset(
        cleaned
    )

    # 5. Print final result
    print_final_report(
        papers
    )


# ---------------------------------------------------------
# Entry point
# ---------------------------------------------------------

if __name__ == "__main__":
    build_dataset()