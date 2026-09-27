import asyncio
import httpx
import xml.etree.ElementTree as ET


class ArxivClient:

    BASE_URL = "https://export.arxiv.org/api/query"

    async def search(
        self,
        query: str,
        limit: int = 10,
    ):
        query = query.strip()

        if not query:
            return []

        params = {
            "search_query": f"all:{query}",
            "start": 0,
            "max_results": min(limit, 50),
            "sortBy": "relevance",
            "sortOrder": "descending",
        }

        headers = {
            "User-Agent": (
                "Resyntra/1.0 "
                "(academic research assistant)"
            )
        }

        timeout = httpx.Timeout(
            connect=10.0,
            read=60.0,
            write=10.0,
            pool=10.0,
        )

        try:

            async with httpx.AsyncClient(
                timeout=timeout,
                headers=headers,
                follow_redirects=True,
            ) as client:

                for attempt in range(2):

                    try:

                        response = await client.get(
                            self.BASE_URL,
                            params=params,
                        )

                        if response.status_code == 429:

                            if attempt == 0:
                                await asyncio.sleep(5)
                                continue

                            print(
                                "arXiv API rate limit reached."
                            )

                            return []

                        response.raise_for_status()

                        break

                    except httpx.ReadTimeout:

                        if attempt == 0:
                            print(
                                "arXiv API timed out. "
                                "Retrying once..."
                            )

                            await asyncio.sleep(3)
                            continue

                        print(
                            "arXiv API timed out. "
                            "Skipping arXiv search."
                        )

                        return []

                else:
                    return []

        except httpx.HTTPError as error:

            print(
                f"arXiv API request failed: {error}"
            )

            return []

        try:
            root = ET.fromstring(response.text)

        except ET.ParseError:

            print(
                "arXiv returned an invalid XML response."
            )

            return []

        namespace = {
            "atom": "http://www.w3.org/2005/Atom"
        }

        results = []

        for entry in root.findall(
            "atom:entry",
            namespace,
        ):

            authors = []

            for author in entry.findall(
                "atom:author",
                namespace,
            ):

                name = author.find(
                    "atom:name",
                    namespace,
                )

                if (
                    name is not None
                    and name.text
                ):
                    authors.append(
                        name.text.strip()
                    )

            arxiv_id = entry.find(
                "atom:id",
                namespace,
            )

            title = entry.find(
                "atom:title",
                namespace,
            )

            summary = entry.find(
                "atom:summary",
                namespace,
            )

            published = entry.find(
                "atom:published",
                namespace,
            )

            results.append(
                {
                    "id": (
                        arxiv_id.text.strip()
                        if arxiv_id is not None
                        and arxiv_id.text
                        else None
                    ),
                    "title": (
                        " ".join(title.text.split())
                        if title is not None
                        and title.text
                        else None
                    ),
                    "authors": authors,
                    "abstract": (
                        " ".join(summary.text.split())
                        if summary is not None
                        and summary.text
                        else None
                    ),
                    "publication_date": (
                        published.text[:10]
                        if published is not None
                        and published.text
                        else None
                    ),
                    "source": "arxiv",
                    "url": (
                        arxiv_id.text.strip()
                        if arxiv_id is not None
                        and arxiv_id.text
                        else None
                    ),
                }
            )

        return results


    async def search_category(
        self,
        category: str,
        limit: int = 10,
    ):
        category = category.strip()

        if not category:
            return []

        params = {
            "search_query": f"cat:{category}",
            "start": 0,
            "max_results": min(limit, 50),
            "sortBy": "submittedDate",
            "sortOrder": "descending",
        }

        headers = {
            "User-Agent": (
                "Resyntra/1.0 "
                "(academic research assistant)"
            )
        }

        timeout = httpx.Timeout(
            connect=10.0,
            read=60.0,
            write=10.0,
            pool=10.0,
        )

        try:

            async with httpx.AsyncClient(
                timeout=timeout,
                headers=headers,
                follow_redirects=True,
            ) as client:

                for attempt in range(3):

                    try:
                        response = await client.get(
                            self.BASE_URL,
                            params=params,
                        )

                        if response.status_code == 429:

                            if attempt < 2:
                                wait_time = 10 * (
                                    attempt + 1
                                )

                                print(
                                    f"arXiv rate limited. "
                                    f"Retrying in "
                                    f"{wait_time} seconds..."
                                )

                                await asyncio.sleep(
                                    wait_time
                                )

                                continue

                            print(
                                "arXiv API rate limit "
                                "persisted."
                            )

                            return []

                        response.raise_for_status()

                        break

                    except httpx.ReadTimeout:

                        if attempt < 2:
                            print(
                                "arXiv API timed out. "
                                "Retrying..."
                            )

                            await asyncio.sleep(5)

                            continue

                        print(
                            "arXiv API timed out "
                            "after retries."
                        )

                        return []

                else:
                    return []

        except httpx.HTTPError as error:

            print(
                f"arXiv API request failed: {error}"
            )

            return []

        try:
            root = ET.fromstring(response.text)

        except ET.ParseError:

            print(
                "arXiv returned an invalid XML "
                "response."
            )

            return []

        namespace = {
            "atom": "http://www.w3.org/2005/Atom",
            "arxiv": (
                "http://arxiv.org/schemas/atom"
            ),
        }

        results = []

        for entry in root.findall(
            "atom:entry",
            namespace,
        ):

            authors = []

            for author in entry.findall(
                "atom:author",
                namespace,
            ):

                name = author.find(
                    "atom:name",
                    namespace,
                )

                if (
                    name is not None
                    and name.text
                ):
                    authors.append(
                        name.text.strip()
                    )

            arxiv_id = entry.find(
                "atom:id",
                namespace,
            )

            title = entry.find(
                "atom:title",
                namespace,
            )

            summary = entry.find(
                "atom:summary",
                namespace,
            )

            published = entry.find(
                "atom:published",
                namespace,
            )

            primary_category = entry.find(
                "arxiv:primary_category",
                namespace,
            )

            results.append(
                {
                    "id": (
                        arxiv_id.text.strip()
                        if arxiv_id is not None
                        and arxiv_id.text
                        else None
                    ),
                    "title": (
                        " ".join(
                            title.text.split()
                        )
                        if title is not None
                        and title.text
                        else None
                    ),
                    "authors": authors,
                    "abstract": (
                        " ".join(
                            summary.text.split()
                        )
                        if summary is not None
                        and summary.text
                        else None
                    ),
                    "publication_date": (
                        published.text[:10]
                        if published is not None
                        and published.text
                        else None
                    ),
                    "primary_category": (
                        primary_category.attrib.get(
                            "term"
                        )
                        if primary_category is not None
                        else None
                    ),
                    "source": "arxiv",
                    "url": (
                        arxiv_id.text.strip()
                        if arxiv_id is not None
                        and arxiv_id.text
                        else None
                    ),
                }
            )

        return results