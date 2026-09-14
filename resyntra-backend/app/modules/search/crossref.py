import httpx


class CrossrefClient:

    BASE_URL = "https://api.crossref.org/works"

    async def search(
        self,
        query: str,
        limit: int = 10,
    ):
        query = query.strip()

        if not query:
            return []

        limit = min(limit, 50)

        params = {
            "query.bibliographic": query,
            "rows": limit,
            "select": (
                "DOI,title,author,"
                "published,container-title,"
                "URL,type,abstract"
            ),
        }

        async with httpx.AsyncClient(
            timeout=30.0,
            headers={
                "User-Agent": (
                    "Resyntra/1.0 "
                    "(academic research assistant)"
                )
            },
        ) as client:

            response = await client.get(
                self.BASE_URL,
                params=params,
            )

            response.raise_for_status()

            data = response.json()

        items = (
            data.get("message", {})
            .get("items", [])
        )

        results = []

        for item in items:

            authors = []

            for author in item.get(
                "author",
                [],
            ):

                given = author.get(
                    "given",
                    ""
                )

                family = author.get(
                    "family",
                    ""
                )

                full_name = (
                    f"{given} {family}"
                ).strip()

                if full_name:
                    authors.append(
                        full_name
                    )

            titles = item.get(
                "title",
                []
            )

            title = (
                titles[0]
                if titles
                else None
            )

            journals = item.get(
                "container-title",
                []
            )

            journal = (
                journals[0]
                if journals
                else None
            )

            published = (
                item.get("published")
                or {}
            )

            date_parts = published.get(
                "date-parts",
                []
            )

            publication_year = None

            if (
                date_parts
                and date_parts[0]
            ):
                publication_year = (
                    date_parts[0][0]
                )

            doi = item.get(
                "DOI"
            )

            abstract = item.get(
                "abstract"
            )

            if abstract:
                abstract = self._clean_abstract(
                    abstract
                )

            results.append(
                {
                    "id": doi,

                    "title": title,

                    "authors": authors,

                    "abstract": abstract,

                    "publication_year": (
                        publication_year
                    ),

                    "journal": journal,

                    "doi": doi,

                    "source": "crossref",

                    "url": (
                        item.get("URL")
                        or (
                            f"https://doi.org/{doi}"
                            if doi
                            else None
                        )
                    ),

                    "type": item.get(
                        "type"
                    ),
                }
            )

        return results

    def _clean_abstract(
        self,
        abstract: str,
    ):
        """
        Crossref abstracts can contain
        JATS/XML-style markup.

        Convert the abstract into readable
        plain text for the Resyntra UI.
        """

        if not abstract:
            return None

        text = str(
            abstract
        )

        # Remove XML/HTML tags.
        import re

        text = re.sub(
            r"<[^>]+>",
            " ",
            text,
        )

        # Decode common HTML entities.
        text = (
            text.replace(
                "&amp;",
                "&",
            )
            .replace(
                "&lt;",
                "<",
            )
            .replace(
                "&gt;",
                ">",
            )
            .replace(
                "&quot;",
                '"',
            )
            .replace(
                "&#39;",
                "'",
            )
        )

        # Normalize whitespace.
        text = re.sub(
            r"\s+",
            " ",
            text,
        )

        text = text.strip()

        return text or None