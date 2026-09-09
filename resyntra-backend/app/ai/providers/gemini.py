import google.genai as genai

from app.ai.providers.base import BaseAIProvider
from app.core.config import settings


class GeminiProvider(BaseAIProvider):

    def __init__(self):
        genai.configure(
            api_key=settings.GEMINI_API_KEY,
        )

        self.model = genai.GenerativeModel(
            settings.GEMINI_MODEL,
        )

    def generate(
        self,
        prompt: str,
        system_prompt: str | None = None,
        temperature: float = 0.3,
    ) -> str:

        if system_prompt:
            prompt = f"{system_prompt}\n\n{prompt}"

        response = self.model.generate_content(
            prompt,
            generation_config={
                "temperature": temperature,
            },
        )

        return response.text