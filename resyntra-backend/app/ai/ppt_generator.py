import json

from app.ai.providers import AIProviderFactory


class PPTGenerator:

    def __init__(self):
        self.provider = AIProviderFactory.get_provider()

    def generate_outline(
        self,
        title: str,
        abstract: str,
        content: str,
        slides: int,
    ):
        prompt = f"""
Generate EXACTLY {slides} professional presentation slides from the following research paper.

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
    "image_prompt": "Describe an illustration for this slide.",
    "chart": null,
    "table": null
  }}
]

Allowed layouts:

- title
- agenda
- content
- two_column
- image_left
- image_right
- comparison
- table
- chart
- conclusion
- thank_you

Chart format:

{{
    "type": "bar",
    "title": "Chart Title",
    "labels": [
        "Item A",
        "Item B",
        "Item C"
    ],
    "values": [
        10,
        20,
        30
    ]
}}

Table format:

{{
    "headers": [
        "Column 1",
        "Column 2"
    ],
    "rows": [
        ["A","B"],
        ["C","D"]
    ]
}}

Rules:

1. Generate exactly {slides} slides.
2. First slide must use "title".
3. Second slide must use "agenda".
4. Last slide must use "thank_you".
5. Maximum 5 bullet points.
6. Maximum 12 words per bullet.
7. Keep slides concise.
8. Speaker notes should explain the slide.
9. Add an image_prompt whenever appropriate.
10. Add charts only when numerical data exists.
11. Add tables only when comparison data exists.
12. Return ONLY valid JSON.
13. Do not wrap JSON in markdown.
14. Do not include explanations.

Paper Title:
{title}

Abstract:
{abstract or "Not available"}

Paper Content:
{content[:15000]}
"""

        system_prompt = """
You are an expert academic presentation designer.

Your job is to transform research papers into professional PowerPoint presentations.

Always return ONLY valid JSON.

Never include markdown.

Never include explanations.

Never include ```json.
"""

        response = self.provider.generate(
            prompt=prompt,
            system_prompt=system_prompt,
            temperature=0.3,
        )

        try:
            return json.loads(response)

        except json.JSONDecodeError:
            cleaned = (
                response.replace("```json", "")
                .replace("```", "")
                .strip()
            )

            return json.loads(cleaned)