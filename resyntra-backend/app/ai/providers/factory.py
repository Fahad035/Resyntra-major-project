from app.ai.providers.resilient import ResilientAIProvider


class AIProviderFactory:

    @staticmethod
    def get_provider():
        # Wrapped in ResilientAIProvider so a rate-limited or
        # temporarily overloaded provider automatically retries and
        # falls back to the next configured provider, instead of
        # failing the whole request. See app/ai/providers/resilient.py.
        return ResilientAIProvider()