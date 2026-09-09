import json

from openai import OpenAI

from app.core.config import settings


class PPTGenerator:

    def __init__(self):
        self.client = OpenAI(
            api_key=settings.OPENAI_API_KEY
        )

    def generate_outline(
        self,
        title: str,
        abstract: str,
        content: str,
        slides: int,
    ):
        prompt = f"""
You are an expert presentation designer.

Your task is to convert the following research paper into a professional PowerPoint presentation.

Generate EXACTLY {slides} slides.

Return ONLY valid JSON.

Each slide MUST follow this schema:

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
    "speaker_notes": "Notes for presenter.",
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

If a slide needs a chart:

"chart": {{
    "type": "bar",
    "title": "Accuracy Comparison",
    "labels": [
        "Model A",
        "Model B",
        "Model C"
    ],
    "values": [
        91,
        95,
        98
    ]
}}

Otherwise:

"chart": null

If a slide needs a table:

"table": {{
    "headers": [
        "Method",
        "Accuracy"
    ],
    "rows": [
        ["CNN","91%"],
        ["Transformer","98%"]
    ]
}}

Otherwise:

"table": null

Rules:

1. First slide must be title.
2. Second slide should be agenda.
3. Last slide should be thank_you.
4. Keep each slide concise.
5. Maximum 5 bullet points.
6. Maximum 12 words per bullet.
7. Speaker notes should explain the slide.
8. Generate meaningful image prompts.
9. Generate charts only if numerical data exists.
10. Generate tables only if comparison data exists.
11. Return ONLY JSON.
12. Do NOT use markdown.
13. Do NOT wrap JSON inside ```.

Paper Title:
{title}

Abstract:
{abstract}

Paper Content:
{content[:15000]}
"""

        response = self.client.chat.completions.create(
            model="gpt-5",
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are an expert academic presentation creator. "
                        "Always return valid JSON only."
                    ),
                },
                {
                    "role": "user",
                    "content": prompt,
                },
            ],
            temperature=0.3,
        )

        output = response.choices[0].message.content.strip()

        return json.loads(output)