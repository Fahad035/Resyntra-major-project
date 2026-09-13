import httpx
import xml.etree.ElementTree as ET


class PubMedClient:

    SEARCH_URL = (
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi"
    )

    SUMMARY_URL = (
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi"
    )

    FETCH_URL = (
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi"
    )

    async def search(
        self,
        query: str,
        limit: int = 10,
    ):
        query = query.strip()

        if not query:
            return []

        limit = min(limit, 50)

        async with httpx.AsyncClient(
            timeout=30.0
        ) as client:

            # -------------------------------------------------
            # 1. Search PubMed
            # -------------------------------------------------

            search_response = await client.get(
                self.SEARCH_URL,
                params={
                    "db": "pubmed",
                    "term": query,
                    "retmode": "json",
                    "retmax": limit,
                    "sort": "relevance",
                },
            )

            search_response.raise_for_status()

            search_data = search_response.json()

            search_result = search_data.get(
                "esearchresult",
                {},
            )

            ids = search_result.get(
                "idlist",
                [],
            )

            if not ids:
                return []

            # -------------------------------------------------
            # 2. Retrieve metadata
            # -------------------------------------------------

            summary_response = await client.get(
                self.SUMMARY_URL,
                params={
                    "db": "pubmed",
                    "id": ",".join(ids),
                    "retmode": "json",
                },
            )

            summary_response.raise_for_status()

            summary_data = summary_response.json()

            # -------------------------------------------------
            # 3. Retrieve abstracts
            # -------------------------------------------------

            abstract_response = await client.get(
                self.FETCH_URL,
                params={
                    "db": "pubmed",
                    "id": ",".join(ids),
                    "retmode": "xml",
                    "rettype": "abstract",
                },
            )

            abstract_response.raise_for_status()

            abstract_data = (
                self._parse_abstracts(
                    abstract_response.text
                )
            )

        # -----------------------------------------------------
        # 4. Build normalized results
        # -----------------------------------------------------

        result_data = summary_data.get(
            "result",
            {},
        )

        results = []

        for pubmed_id in ids:

            paper = result_data.get(
                pubmed_id
            )

            if not isinstance(
                paper,
                dict,
            ):
                continue

            authors = []

            for author in paper.get(
                "authors",
                [],
            ):

                if not isinstance(
                    author,
                    dict,
                ):
                    continue

                name = author.get(
                    "name"
                )

                if name:
                    authors.append(
                        name.strip()
                    )

            doi = None

            for article_id in paper.get(
                "articleids",
                [],
            ):

                if not isinstance(
                    article_id,
                    dict,
                ):
                    continue

                if (
                    article_id.get(
                        "idtype"
                    )
                    == "doi"
                ):
                    doi = article_id.get(
                        "value"
                    )
                    break

            publication_date = (
                paper.get("pubdate")
                or paper.get("sortpubdate")
            )

            results.append(
                {
                    "id": str(
                        pubmed_id
                    ),

                    "title": paper.get(
                        "title"
                    ),

                    "authors": authors,

                    "abstract": abstract_data.get(
                        str(pubmed_id)
                    ),

                    "publication_date": (
                        publication_date
                    ),

                    "journal": paper.get(
                        "fulljournalname"
                    ),

                    "doi": doi,

                    "source": "pubmed",

                    "url": (
                        "https://pubmed.ncbi.nlm.nih.gov/"
                        f"{pubmed_id}/"
                    ),
                }
            )

        return results

    def _parse_abstracts(
        self,
        xml_text: str,
    ):
        """
        Extract abstracts from PubMed XML.

        Returns:

        {
            "38613918": "Abstract text...",
            "38052145": "Abstract text..."
        }
        """

        abstracts = {}

        try:
            root = ET.fromstring(
                xml_text
            )

        except ET.ParseError:
            print(
                "PubMed returned invalid XML "
                "while retrieving abstracts."
            )

            return abstracts

        for article in root.findall(
            ".//PubmedArticle"
        ):

            pmid_element = article.find(
                ".//PMID"
            )

            if (
                pmid_element is None
                or not pmid_element.text
            ):
                continue

            pubmed_id = (
                pmid_element.text.strip()
            )

            abstract_parts = []

            for abstract_text in article.findall(
                ".//Abstract/AbstractText"
            ):

                text = "".join(
                    abstract_text.itertext()
                ).strip()

                if not text:
                    continue

                label = (
                    abstract_text.get(
                        "Label"
                    )
                )

                if label:
                    text = (
                        f"{label}: {text}"
                    )

                abstract_parts.append(
                    text
                )

            if abstract_parts:
                abstracts[
                    pubmed_id
                ] = " ".join(
                    abstract_parts
                )

        return abstracts