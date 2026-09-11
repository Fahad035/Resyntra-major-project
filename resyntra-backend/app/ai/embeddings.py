import time
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
        # Fix: The response.embeddings is a list of structures. 
        # Grabbing the first item (.embeddings[0]) matches your single item strategy perfectly.
        return response.embeddings[0].values

    def embed_batch(self, texts: list[str]) -> list[list[float]]:
        # Lowered slightly from 90 to 45 to reduce density stress on the Free Tier
        BATCH_SIZE = 45
        all_embeddings = []

        for i in range(0, len(texts), BATCH_SIZE):
            sub_batch = texts[i : i + BATCH_SIZE]
            
            # Base cooling period between batches
            if i > 0:
                print("Pausing for 3 seconds to protect free tier API quota...")
                time.sleep(3.0)
            
            # Retry loop: Try up to 5 times with increasing wait durations if a 429 hits
            for attempt in range(5):
                try:
                    response = client.models.embed_content(
                        model=settings.EMBEDDING_MODEL,
                        contents=sub_batch,
                        config=types.EmbedContentConfig(output_dimensionality=768),
                    )
                    
                    batch_vectors = [item.values for item in response.embeddings]
                    all_embeddings.extend(batch_vectors)
                    break  # Success! Break out of the retry loop and move to the next batch
                    
                except Exception as e:
                    # Catch 429 rate limits or quota failures dynamically
                    if "429" in str(e) or "RESOURCE_EXHAUSTED" in str(e):
                        if attempt < 4:
                            # Progressive cooldown: 15s, 30s, 45s, 60s
                            sleep_time = (attempt + 1) * 15
                            print(f"⚠️ Rate limit hit for batch index {i}. Retrying in {sleep_time} seconds (Attempt {attempt + 1}/5)...")
                            time.sleep(sleep_time)
                        else:
                            raise e  # Max attempts reached, re-raise exception to fail task cleanly
                    else:
                        raise e  # Not a 429 error, re-raise immediately (e.g., 401 or 404)

        return all_embeddings
