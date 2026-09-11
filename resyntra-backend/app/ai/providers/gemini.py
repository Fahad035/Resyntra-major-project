from google import genai
from google.genai import types  # Required for clean generation configuration
from app.ai.providers.base import BaseAIProvider
from app.core.config import settings


class GeminiProvider(BaseAIProvider):

    def __init__(self):
        # Fix: Initializing using the modern client context structure
        self.client = genai.Client(api_key=settings.GEMINI_API_KEY)
        self.model_name = settings.GEMINI_MODEL

    def generate(
        self,
        prompt: str,
        system_prompt: str | None = None,
        temperature: float = 0.3,
    ) -> str:
        
        # Build configuration using types instead of legacy dictionary mappings
        config = types.GenerateContentConfig(
            temperature=temperature,
            system_instruction=system_prompt if system_prompt else None
        )

        # Fix: Route execution through models endpoint
        response = self.client.models.generate_content(
            model=self.model_name,
            contents=prompt,
            config=config,
        )

        return response.text
