from app.ai.llm import LLMService


class LiteratureReviewGenerator:

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
You are an expert research assistant.

Write a comprehensive academic literature review.

Topic:
{topic}

Papers:
{content}

The review should contain:

1. Introduction
2. Existing Research
3. Method Comparison
4. Strengths
5. Weaknesses
6. Research Trends
7. Conclusion

Return Markdown only.
"""

        return self.client.generate(prompt)