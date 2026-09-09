from app.ai.providers import AIProviderFactory


class LiteratureReviewGenerator:

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
Generate a comprehensive academic literature review.

Research Topic:
{topic}

Research Papers:
{content}

Instructions:

- Write in a formal academic style.
- Organize the review using Markdown headings.
- Compare the studies instead of summarizing them one by one.
- Identify similarities and differences.
- Discuss methodologies.
- Highlight strengths and limitations.
- Describe recent research trends.
- Identify research gaps when appropriate.
- Finish with a concise conclusion.

The literature review must contain:

# Introduction

# Existing Research

# Comparative Analysis

# Methodologies

# Strengths and Limitations

# Research Trends

# Future Directions

# Conclusion

Return only Markdown.
"""

        system_prompt = (
            "You are an expert academic researcher and scientific "
            "writing assistant specializing in literature reviews."
        )

        return self.provider.generate(
            prompt=prompt,
            system_prompt=system_prompt,
            temperature=0.3,
        )