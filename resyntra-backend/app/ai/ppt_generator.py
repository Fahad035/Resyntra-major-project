import json

from app.ai.providers.openrouter import OpenRouterProvider


class PPTGenerator:
    def __init__(self):
        # PPT generation uses OpenRouter Free.
        # Other Resyntra AI features remain unchanged.
        self.provider = OpenRouterProvider()

    def generate_outline(
        self,
        title: str,
        abstract: str,
        content: str,
        slides: int,
    ):
        slides = max(9, min(slides, 10))

        slide_structure = [
            "1. Title",
            "2. Introduction / Background",
            "3. Problem Statement & Motivation",
            "4. Objectives",
            "5. Methodology / Proposed Approach",
            "6. System Architecture / Workflow",
            "7. Experiments / Dataset / Implementation",
            "8. Results & Findings",
            "9. Limitations & Future Scope",
            "10. Conclusion & Key Takeaways",
        ]

        structure_text = "\n".join(
            slide_structure[:slides]
        )

        prompt = f"""
Generate EXACTLY {slides} professional academic presentation slides
from the research paper provided below.

The presentation must be grounded ONLY in the supplied paper content.

Do NOT invent:
- datasets
- results
- algorithms
- numerical values
- architectures
- experiments
- conclusions
- references
- claims not supported by the paper

If information is unavailable, write:

"Not explicitly reported in the paper."

REQUIRED ACADEMIC STRUCTURE:

{structure_text}

Return ONLY valid JSON.

Each slide must follow this schema:

[
  {{
    "slide_number": 1,
    "layout": "title",
    "title": "Presentation Title",
    "subtitle": "Optional Subtitle",
    "bullets": [
      "Bullet 1",
      "Bullet 2",
      "Bullet 3"
    ],
    "speaker_notes": "Notes for the presenter.",
    "image_prompt": "",
    "chart": null,
    "table": null
  }}
]

Allowed layouts:

- title
- content
- two_column
- image_left
- image_right
- comparison
- table
- chart
- conclusion

Rules:

1. Generate exactly {slides} slides.
2. First slide must use "title".
3. Last slide must use "conclusion".
4. Follow the academic structure in the exact order provided.
5. Maximum 5 bullet points per slide.
6. Maximum 18 words per bullet.
7. Keep slides concise and presentation-friendly.
8. Speaker notes must be based only on the paper.
9. Use image_prompt only when genuinely useful.
10. Do not require external images.
11. Add charts ONLY when numerical data exists in the paper.
12. Add tables ONLY when comparison/table data exists in the paper.
13. Never fabricate chart values.
14. Never fabricate table values.
15. Preserve important technical terminology.
16. Do not invent citations.
17. Return ONLY valid JSON.
18. Do not wrap JSON in markdown.
19. Do not include explanations outside the JSON.

Chart format:

{{
    "type": "bar",
    "title": "Chart Title",
    "labels": ["Item A", "Item B"],
    "values": [10, 20]
}}

Table format:

{{
    "headers": ["Column 1", "Column 2"],
    "rows": [
        ["A", "B"],
        ["C", "D"]
    ]
}}

PAPER TITLE:

{title}

ABSTRACT:

{abstract or "Not available"}

PAPER CONTENT:

{content[:30000]}
"""

        system_prompt = """
You are an expert academic presentation designer.

Transform research papers into professional academic presentations.

The supplied research paper is the ONLY source of factual information.

Never invent information.

Always return ONLY valid JSON.

Never include markdown.

Never include ```json.

Never include explanations outside the JSON.
"""

        response = self.provider.generate(
            prompt=prompt,
            system_prompt=system_prompt,
            temperature=0.3,
        )

        return self._parse_response(response)

    def _parse_response(self, response):
        """
        Convert the AI response into Python JSON.
        """

        if not response:
            raise ValueError(
                "AI provider returned an empty response."
            )

        response = response.strip()

        # Remove accidental markdown fences.
        if response.startswith("```json"):
            response = response[7:]

        elif response.startswith("```"):
            response = response[3:]

        if response.endswith("```"):
            response = response[:-3]

        response = response.strip()

        try:
            result = json.loads(response)

        except json.JSONDecodeError as exc:
            raise ValueError(
                "AI provider returned invalid JSON "
                "for the presentation outline."
            ) from exc

        if not isinstance(result, list):
            raise ValueError(
                "Presentation outline must be a JSON array."
            )

        if not result:
            raise ValueError(
                "AI returned an empty presentation outline."
            )

        return result