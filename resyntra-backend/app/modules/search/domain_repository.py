import json
from pathlib import Path


class DomainRepository:

    def __init__(self):
        self.dataset_path = (
            Path(__file__).resolve().parents[3]
            / "data"
            / "domain_dataset"
            / "papers.json"
        )

        self.papers = self._load()

    def _load(self) -> list[dict]:
        if not self.dataset_path.exists():
            return []

        with self.dataset_path.open(
            "r",
            encoding="utf-8",
        ) as file:
            data = json.load(file)

        if not isinstance(data, list):
            return []

        return data

    def get_all(self) -> list[dict]:
        return self.papers

    def get_by_domain(
        self,
        domain: str,
    ) -> list[dict]:

        domain = domain.strip().lower()

        return [
            paper
            for paper in self.papers
            if paper.get("domain", "").lower() == domain
        ]

    def search(
        self,
        query: str,
        domain: str | None = None,
        limit: int = 10,
    ) -> list[dict]:

        query = query.strip().lower()

        if not query:
            return []

        papers = (
            self.get_by_domain(domain)
            if domain
            else self.papers
        )

        query_terms = query.split()

        scored = []

        for paper in papers:

            title = (
                paper.get("title") or ""
            ).lower()

            abstract = (
                paper.get("abstract") or ""
            ).lower()

            text = f"{title} {abstract}"

            score = sum(
                term in text
                for term in query_terms
            )

            if score > 0:
                scored.append(
                    (
                        score,
                        paper,
                    )
                )

        scored.sort(
            key=lambda item: item[0],
            reverse=True,
        )

        return [
            paper
            for _, paper in scored[:limit]
        ]