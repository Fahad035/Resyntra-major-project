from openai import OpenAI

from app.ai.providers.base import BaseAIProvider
from app.core.config import settings


class DeepSeekProvider(BaseAIProvider):
    """
    DeepSeek's API is OpenAI-compatible, so this reuses the official
    OpenAI SDK pointed at DeepSeek's base URL rather than needing a
    separate client library.
    """

    def __init__(self):
        self.client = OpenAI(
            api_key=settings.DEEPSEEK_API_KEY,
            base_url="https://api.deepseek.com",
        )

    def generate(
        self,
        prompt: str,
        system_prompt: str | None = None,
        temperature: float = 0.3,
    ) -> str:

        messages = []

        if system_prompt:
            messages.append(
                {
                    "role": "system",
                    "content": system_prompt,
                }
            )

        messages.append(
            {
                "role": "user",
                "content": prompt,
            }
        )

        response = self.client.chat.completions.create(
            model=settings.DEEPSEEK_MODEL,
            messages=messages,
            temperature=temperature,
        )

        return response.choices[0].message.content