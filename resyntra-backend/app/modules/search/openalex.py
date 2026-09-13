import httpx


class OpenAlexClient:

    BASE_URL = "https://api.openalex.org/works"

    async def semantic_search(
        self,
        query: str,
        limit: int = 10,
    ):
        query = query.strip()

        if not query:
            return []

        params = {
            "search.semantic": query,
            "per-page": min(limit, 50),
        }

        async with httpx.AsyncClient(
            timeout=30.0
        ) as client:

            response = await client.get(
                self.BASE_URL,
                params=params,
            )

            response.raise_for_status()

            data = response.json()

        results = []

        for paper in data.get(
            "results",
            [],
        ):

            primary_location = (
                paper.get(
                    "primary_location"
                )
                or {}
            )

            source = (
                primary_location.get(
                    "source"
                )
                or {}
            )

            ids = (
                paper.get(
                    "ids"
                )
                or {}
            )

            abstract = (
                self._reconstruct_abstract(
                    paper.get(
                        "abstract_inverted_index"
                    )
                )
            )

            results.append(
                {
                    "id": paper.get(
                        "id"
                    ),

                    "title": paper.get(
                        "title"
                    ),

                    "authors": [
                        author.get(
                            "author",
                            {},
                        ).get(
                            "display_name"
                        )
                        for author in paper.get(
                            "authorships",
                            []
                        )
                        if author.get(
                            "author"
                        )
                    ],

                    "abstract": abstract,

                    "publication_year": (
                        paper.get(
                            "publication_year"
                        )
                    ),

                    "publication_date": (
                        paper.get(
                            "publication_date"
                        )
                    ),

                    "doi": paper.get(
                        "doi"
                    ),

                    "relevance_score": (
                        paper.get(
                            "relevance_score"
                        )
                    ),

                    "journal": source.get(
                        "display_name"
                    ),

                    "is_open_access": (
                        primary_location.get(
                            "is_oa",
                            False,
                        )
                    ),

                    "landing_page_url": (
                        primary_location.get(
                            "landing_page_url"
                        )
                    ),

                    "openalex_id": (
                        ids.get(
                            "openalex"
                        )
                    ),
                }
            )

        return results

    def _reconstruct_abstract(
        self,
        inverted_index,
    ):
        """
        Convert OpenAlex's abstract_inverted_index
        into a normal readable abstract.

        OpenAlex stores abstracts in this form:

        {
            "Deep": [0],
            "learning": [1],
            "is": [2],
            ...
        }

        We reconstruct the original word order.
        """

        if not isinstance(
            inverted_index,
            dict,
        ):
            return None

        words = []

        for word, positions in (
            inverted_index.items()
        ):

            if not isinstance(
                positions,
                list,
            ):
                continue

            for position in positions:

                if not isinstance(
                    position,
                    int,
                ):
                    continue

                words.append(
                    (
                        position,
                        word,
                    )
                )

        if not words:
            return None

        words.sort(
            key=lambda item: item[0]
        )

        abstract = " ".join(
            word
            for _, word in words
        )

        return abstract.strip() or None