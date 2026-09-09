from app.ai.llm import LLMService


class ResearchGapGenerator:

    def __init__(self):
        self.client = LLMService()

    def generate(
        self,
        topic: str,
        papers: list,
    ):
        content = ""

        for paper in papers:
            content += f"""
Title:
{paper.title}

Abstract:
{paper.abstract}

Content:
{paper.content[:3000]}

--------------------------------
"""

        prompt = f"""
You are an experienced research advisor.

Analyze the following papers on:

{topic}

Identify:

1. Research gaps
2. Common limitations
3. Conflicting findings
4. Unanswered questions
5. Future research directions
6. Potential novel research ideas

Papers:

{content}

Return the result in Markdown.
"""

        return self.client.generate(prompt)