from app.ai.providers.gemini import GeminiProvider
from app.ai.providers.openai import OpenAIProvider
from app.ai.providers.openrouter import OpenRouterProvider
from app.core.config import settings


class AIProviderFactory:

    @staticmethod
    def get_provider():

        provider = settings.AI_PROVIDER.lower()

        if provider == "gemini":
            return GeminiProvider()

        if provider == "openai":
            return OpenAIProvider()

        if provider == "openrouter":
            return OpenRouterProvider()

        raise ValueError(
            f"Unsupported AI provider: {provider}"
        )