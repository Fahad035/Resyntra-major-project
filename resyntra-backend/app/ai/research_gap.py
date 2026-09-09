from app.ai.providers import AIProviderFactory


class ResearchGapGenerator:

    def __init__(self):
        self.provider = AIProviderFactory.get_provider()

    def generate(
        self,
        topic: str,
        papers: list,
    ):
        content = ""

        for index, paper in enumerate(papers, start=1):
            content += f"""
Paper {index}

Title:
{paper.title}

Abstract:
{paper.abstract or "Not available"}

Content:
{paper.content[:3000]}

----------------------------------------------------
"""

        prompt = f"""
Analyze the following research papers and identify research opportunities.

Research Topic:
{topic}

Research Papers:
{content}

Instructions:

- Carefully compare all papers.
- Do not summarize each paper individually.
- Identify areas where existing research is lacking.
- Highlight conflicting findings.
- Discuss methodological limitations.
- Identify unanswered research questions.
- Suggest realistic future research directions.
- Propose novel research ideas suitable for MSc/PhD research.
- Write in professional academic language.

The response must contain the following sections:

# Research Gaps

# Common Limitations

# Conflicting Findings

# Unanswered Questions

# Future Research Directions

# Novel Research Ideas

# Final Recommendation

Return only Markdown.
"""

        system_prompt = (
            "You are an experienced academic researcher and research "
            "advisor specializing in identifying research gaps, "
            "future work, and innovative research directions."
        )

        return self.provider.generate(
            prompt=prompt,
            system_prompt=system_prompt,
            temperature=0.3,
        )