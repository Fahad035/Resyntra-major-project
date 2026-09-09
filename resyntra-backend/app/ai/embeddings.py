import time  # Imported to handle the free tier API rate-limit delay
from google import genai
from google.genai import types
from app.core.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)


class EmbeddingService:

    def embed(self, text: str) -> list[float]:
        response = client.models.embed_content(
            model=settings.EMBEDDING_MODEL,
            contents=text,
            config=types.EmbedContentConfig(output_dimensionality=768),
        )
        return response.embeddings[0].values

    def embed_batch(self, texts: list[str]) -> list[list[float]]:
        # Keeps batch size safe under the 100 requests per batch rule
        BATCH_SIZE = 90
        all_embeddings = []

        for i in range(0, len(texts), BATCH_SIZE):
            sub_batch = texts[i : i + BATCH_SIZE]
            
            # If this isn't the first batch, pause briefly to respect Google's free tier RPM limits
            if i > 0:
                print("Pausing for 2 seconds to protect free tier API quota...")
                time.sleep(2.0)
            
            response = client.models.embed_content(
                model=settings.EMBEDDING_MODEL,
                contents=sub_batch,
                config=types.EmbedContentConfig(output_dimensionality=768),
            )
            
            batch_vectors = [item.values for item in response.embeddings]
            all_embeddings.extend(batch_vectors)

        return all_embeddings
