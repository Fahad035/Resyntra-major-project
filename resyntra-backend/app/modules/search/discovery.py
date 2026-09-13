import asyncio
import re

from app.modules.search.openalex import OpenAlexClient
from app.modules.search.arxiv import ArxivClient
from app.modules.search.pubmed import PubMedClient
from app.modules.search.crossref import CrossrefClient


class ResearchDiscoveryService:

    SOURCE_PRIORITY = {
        "openalex": 4,
        "pubmed": 3,
        "arxiv": 2,
        "crossref": 1,
    }

    def __init__(self):
        self.openalex = OpenAlexClient()
        self.arxiv = ArxivClient()
        self.pubmed = PubMedClient()
        self.crossref = CrossrefClient()

    async def search(
        self,
        query: str,
        limit: int = 10,
    ):
        query = query.strip()

        if not query:
            return []

        # Run the main scholarly sources together.
        #
        # arXiv is intentionally isolated because it can
        # sometimes be slow or rate-limited.
        main_results = await asyncio.gather(
            self._safe_search(
                self.openalex.semantic_search,
                query,
                limit,
                "openalex",
            ),
            self._safe_search(
                self.pubmed.search,
                query,
                limit,
                "pubmed",
            ),
            self._safe_search(
                self.crossref.search,
                query,
                limit,
                "crossref",
            ),
        )

        # arXiv is optional.
        #
        # Give it a short timeout so it can never hold up
        # the entire discovery request.
        arxiv_results = await self._search_arxiv_with_timeout(
            query=query,
            limit=limit,
        )

        combined = []

        for source_results in main_results:
            combined.extend(source_results)

        combined.extend(arxiv_results)

        deduplicated = self._deduplicate_results(
            combined
        )

        ranked = self._rank_results(
            deduplicated
        )

        return ranked

    async def _search_arxiv_with_timeout(
        self,
        query: str,
        limit: int,
    ):
        try:
            return await asyncio.wait_for(
                self._safe_search(
                    self.arxiv.search,
                    query,
                    limit,
                    "arxiv",
                ),
                timeout=8.0,
            )

        except asyncio.TimeoutError:
            print(
                "arXiv search timed out. "
                "Skipping arXiv results."
            )

            return []

        except Exception as error:
            print(
                f"arXiv search failed: {error}"
            )

            return []

    async def _safe_search(
        self,
        search_function,
        query: str,
        limit: int,
        source: str,
    ):
        try:
            results = await search_function(
                query=query,
                limit=limit,
            )

            return self._normalize_results(
                results,
                source,
            )

        except Exception as error:
            print(
                f"{source} search failed: {error}"
            )

            return []

    def _normalize_results(
        self,
        results: list,
        source: str,
    ):
        normalized = []

        for paper in results:

            if not isinstance(
                paper,
                dict,
            ):
                continue

            external_id = (
                paper.get("openalex_id")
                or paper.get("id")
            )

            title = paper.get(
                "title"
            )

            authors = self._clean_authors(
                paper.get(
                    "authors",
                    [],
                )
            )

            publication_year = (
                paper.get(
                    "publication_year"
                )
            )

            if not publication_year:
                publication_year = (
                    self._extract_year(
                        paper.get(
                            "publication_date"
                        )
                    )
                )

            normalized.append(
                {
                    "source": source,

                    "sources": [
                        source
                    ],

                    "external_id": (
                        str(external_id)
                        if external_id
                        else None
                    ),

                    "title": title,

                    "authors": authors,

                    "abstract": paper.get(
                        "abstract"
                    ),

                    "publication_year": (
                        publication_year
                    ),

                    "publication_date": (
                        paper.get(
                            "publication_date"
                        )
                    ),

                    "doi": paper.get(
                        "doi"
                    ),

                    "journal": paper.get(
                        "journal"
                    ),

                    "url": (
                        paper.get(
                            "landing_page_url"
                        )
                        or paper.get(
                            "url"
                        )
                    ),

                    "is_open_access": (
                        paper.get(
                            "is_open_access",
                            False,
                        )
                    ),

                    "relevance_score": (
                        paper.get(
                            "relevance_score"
                        )
                    ),
                }
            )

        return normalized

    def _clean_authors(
    self,
    authors,
    ):
        if not isinstance(
            authors,
            list,
        ):
            return []

        cleaned = []

        for author in authors:

            if not author:
                continue

            author = str(
                author
            ).strip()

            if not author:
                continue

            if author not in cleaned:
                cleaned.append(
                    author
            )

        return cleaned

    def _is_abbreviated_author(
        self,
        author: str,
    ):
        parts = author.split()

        if len(parts) < 2:
            return False

        last_part = parts[-1]

        return bool(
            re.fullmatch(
                r"[A-Z]{1,5}\.?[,]?",
                last_part,
            )
        )

    def _extract_year(
        self,
        publication_date,
    ):
        if not publication_date:
            return None

        match = re.search(
            r"\b(19|20)\d{2}\b",
            str(publication_date),
        )

        if not match:
            return None

        return int(
            match.group(0)
        )

    def _deduplicate_results(
        self,
        results: list,
    ):
        unique_results = {}

        for paper in results:

            key = self._get_duplicate_key(
                paper
            )

            if not key:
                key = (
                    "unique:"
                    + str(
                        len(
                            unique_results
                        )
                    )
                )

            if key not in unique_results:

                unique_results[key] = paper

                continue

            existing = unique_results[key]

            self._merge_results(
                existing,
                paper,
            )

        return list(
            unique_results.values()
        )

    def _get_duplicate_key(
        self,
        paper: dict,
    ):
        doi = paper.get(
            "doi"
        )

        if doi:

            normalized_doi = (
                self._normalize_doi(
                    doi
                )
            )

            if normalized_doi:
                return (
                    "doi:"
                    + normalized_doi
                )

        title = paper.get(
            "title"
        )

        if title:

            normalized_title = (
                self._normalize_title(
                    title
                )
            )

            if normalized_title:
                return (
                    "title:"
                    + normalized_title
                )

        return None

    def _normalize_doi(
        self,
        doi: str,
    ):
        doi = str(
            doi
        ).strip().lower()

        doi = doi.replace(
            "https://doi.org/",
            "",
        )

        doi = doi.replace(
            "http://doi.org/",
            "",
        )

        doi = doi.replace(
            "doi:",
            "",
        )

        return doi.strip()

    def _normalize_title(
        self,
        title: str,
    ):
        title = str(
            title
        ).lower()

        title = re.sub(
            r"[^a-z0-9\s]",
            " ",
            title,
        )

        title = re.sub(
            r"\s+",
            " ",
            title,
        )

        return title.strip()

    def _merge_results(
        self,
        existing: dict,
        new: dict,
    ):
        existing_sources = existing.get(
            "sources",
            [],
        )

        new_source = new.get(
            "source"
        )

        if (
            new_source
            and new_source
            not in existing_sources
        ):
            existing_sources.append(
                new_source
            )

        existing["sources"] = (
            existing_sources
        )

        fields = [
            "title",
            "abstract",
            "publication_year",
            "publication_date",
            "doi",
            "journal",
            "url",
            "external_id",
        ]

        for field in fields:

            if (
                not existing.get(field)
                and new.get(field)
            ):
                existing[field] = (
                    new[field]
                )

        existing_authors = (
            existing.get(
                "authors",
                [],
            )
        )

        new_authors = (
            new.get(
                "authors",
                [],
            )
        )

        existing_authors = (
            self._clean_authors(
                existing_authors
            )
        )

        new_authors = (
            self._clean_authors(
            new_authors
            )
        )

        existing_source = (
            existing.get(
            "source"
            )
        )

        new_source = (
            new.get(
            "source"
            )
        )

        existing_priority = (
            self.SOURCE_PRIORITY.get(
                existing_source,
                0,
            )
        )

        new_priority = (
            self.SOURCE_PRIORITY.get(
            new_source,
            0,
            )
        )

    # Prefer the author list from the
    # higher-priority source.
    #
    # OpenAlex > PubMed > arXiv > Crossref
        if (
            new_authors
            and new_priority > existing_priority
        ):
            existing_authors = new_authors

        elif (
            new_authors
            and not existing_authors
        ):
            existing_authors = new_authors

        else:
            for author in new_authors:

                if author not in existing_authors:
                    existing_authors.append(
                        author
                    )

        existing["authors"] = (
            existing_authors
        )

        if (
            existing.get(
                "relevance_score"
            )
            is None
            and new.get(
                "relevance_score"
            )
            is not None
        ):
            existing[
                "relevance_score"
            ] = new[
                "relevance_score"
            ]

        if new.get(
            "is_open_access",
            False,
        ):
            existing[
            "is_open_access"
            ] = True

    def _rank_results(
        self,
        results: list,
    ):
        def ranking_key(
            paper,
        ):
            relevance = (
                paper.get(
                    "relevance_score"
                )
            )

            if relevance is None:
                relevance = 0.0

            source_count = len(
                paper.get(
                    "sources",
                    [],
                )
            )

            source_priority = max(
                [
                    self.SOURCE_PRIORITY.get(
                        source,
                        0,
                    )
                    for source in paper.get(
                        "sources",
                        [],
                    )
                ],
                default=0,
            )

            publication_year = (
                paper.get(
                    "publication_year"
                )
                or 0
            )

            return (
                relevance,
                source_count,
                source_priority,
                publication_year,
            )

        return sorted(
            results,
            key=ranking_key,
            reverse=True,
        )