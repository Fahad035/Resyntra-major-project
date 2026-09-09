from app.ai.llm import LLMService


class PaperSummarizer:

    def __init__(self):
        self.client = LLMService()

    def generate(
        self,
        title: str,
        abstract: str | None,
        content: str,
    ):
        prompt = f"""
You are an expert research assistant.

Generate a concise academic summary of the following paper.

Title:
{title}

Abstract:
{abstract or "Not available"}

Content:
{content[:12000]}

Return only the summary.
"""

        return self.client.generate(prompt)