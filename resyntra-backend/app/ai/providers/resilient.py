import time

from app.ai.providers.base import BaseAIProvider
from app.ai.providers.deepseek import DeepSeekProvider
from app.ai.providers.gemini import GeminiProvider
from app.ai.providers.openai import OpenAIProvider
from app.ai.providers.openrouter import OpenRouterProvider
from app.core.config import settings

QUOTA_MARKERS = (
    "429",
    "resource_exhausted",
    "rate limit",
    "rate_limit",
    "quota",
)

TRANSIENT_MARKERS = (
    "503",
    "unavailable",
    "overloaded",
    "timeout",
    "timed out",
)


def _classify(exc: Exception) -> str:
    """
    Sorts a provider failure into "quota" (retrying won't help within
    this request, skip straight to the next provider), "transient"
    (often resolves itself, worth one quick retry on the same
    provider), or "other" (unknown failure, treat like quota - move
    on rather than retry something that probably won't succeed).
    """
    status_code = getattr(exc, "status_code", None)
    message = str(exc).lower()

    if status_code == 429 or any(marker in message for marker in QUOTA_MARKERS):
        return "quota"

    if status_code == 503 or any(marker in message for marker in TRANSIENT_MARKERS):
        return "transient"

    return "other"


class AIProviderError(RuntimeError):
    """Raised when every configured AI provider has failed."""


class ResilientAIProvider(BaseAIProvider):
    """
    Wraps the configured AI providers with automatic retry for
    transient errors (e.g. "model temporarily overloaded") and
    automatic fallback to the next provider for exhausted quotas or
    persistent failures - so one provider having a bad day doesn't
    take down every AI feature in the app.

    Tries the configured AI_PROVIDER first, then falls back through
    the others in a fixed order.
    """

    _BUILDERS = {
        "gemini": GeminiProvider,
        "openai": OpenAIProvider,
        "openrouter": OpenRouterProvider,
        "deepseek": DeepSeekProvider,
    }

    def __init__(self):
        primary = settings.AI_PROVIDER.lower()
        others = [name for name in self._BUILDERS if name != primary]
        self._order = [primary, *others] if primary in self._BUILDERS else others

    def generate(
        self,
        prompt: str,
        system_prompt: str | None = None,
        temperature: float = 0.3,
    ) -> str:
        errors = []

        for name in self._order:
            builder = self._BUILDERS[name]
            # Only the transient path gets a second attempt - quota
            # errors won't resolve in the ~1s we're willing to wait.
            max_attempts = 2

            for attempt in range(max_attempts):
                try:
                    provider = builder()
                    return provider.generate(prompt, system_prompt, temperature)
                except Exception as exc:
                    errors.append(f"{name}: {exc}")
                    category = _classify(exc)

                    if category == "transient" and attempt < max_attempts - 1:
                        time.sleep(1.5 * (attempt + 1))
                        continue

                    break  # try the next provider

        raise AIProviderError(
            "All configured AI providers failed:\n" + "\n".join(errors)
        )