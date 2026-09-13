import httpx
import asyncio


async def test():
    url = "https://api.openalex.org/works/W2592929672"

    async with httpx.AsyncClient(timeout=30) as client:
        response = await client.get(url)
        response.raise_for_status()

        data = response.json()

    print("TITLE:")
    print(data.get("title"))

    print("\nABSTRACT INVERTED INDEX:")
    print(data.get("abstract_inverted_index"))


asyncio.run(test())