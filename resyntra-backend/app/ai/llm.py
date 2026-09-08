from google import genai

from app.core.config import settings

client = genai.Client(api_key=settings.GOOGLE_API_KEY)


class LLMService:

    def generate(
        self,
        prompt: str,
    ) -> str:

        response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=prompt,
        )

        return response.text