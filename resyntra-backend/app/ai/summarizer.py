from app.ai.providers import AIProviderFactory


class PaperSummarizer:

    def __init__(self):
        self.provider = AIProviderFactory.get_provider()

    def generate(
        self,
        title: str,
        abstract: str | None,
        content: str,
    ):
        prompt = f"""
Generate a concise academic summary of the following research paper.

Title:
{title}

Abstract:
{abstract or "Not available"}

Content:
{content[:12000]}

Instructions:
- Summarize the paper in 250-400 words.
- Explain the research problem.
- Describe the methodology.
- Highlight the key findings.
- Mention the conclusion.
- Use professional academic language.
- Return only the summary.
"""

        system_prompt = (
            "You are an expert research assistant specializing in "
            "academic paper summarization."
        )

        return self.provider.generate(
            prompt=prompt,
            system_prompt=system_prompt,
            temperature=0.3,
        )