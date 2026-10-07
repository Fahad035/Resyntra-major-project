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

        structure_text = "\n".join(slide_structure[:slides])

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
- claims
- statistics
- metrics
- comparisons
- workflows
- technical components

If information is unavailable, write:

"Not explicitly reported in the paper."

==================================================
REQUIRED ACADEMIC STRUCTURE
==================================================

{structure_text}

Follow this structure in the exact order.

==================================================
OUTPUT FORMAT
==================================================

Return ONLY valid JSON.

Return an array using this schema:

[
  {{
    "slide_number": 1,
    "layout": "title",
    "title": "Presentation Title",
    "subtitle": "Optional Subtitle",
    "bullets": [],
    "visual_type": "none",
    "visual_title": "",
    "stats": [],
    "process": [],
    "callout": null,
    "speaker_notes": "",
    "image_prompt": "",
    "chart": null,
    "table": null
  }}
]

==================================================
ALLOWED LAYOUTS
==================================================

- title
- content
- two_column
- image_left
- image_right
- comparison
- table
- chart
- conclusion

==================================================
ALLOWED VISUAL TYPES
==================================================

- none
- stat_cards
- process
- comparison
- chart
- quote
- callout
- concept_map

==================================================
VISUAL DATA FORMATS
==================================================

For stat_cards:

"stats": [
  {{
    "label": "Short Label",
    "value": "Value",
    "description": "Short explanation"
  }}
]

Only use values explicitly supported by the paper.

For process/workflow:

"process": [
  {{
    "step": 1,
    "title": "Step Title",
    "description": "Short description"
  }},
  {{
    "step": 2,
    "title": "Step Title",
    "description": "Short description"
  }}
]

Every process step must be directly supported by the paper.

For callout:

"callout": {{
  "label": "Key Insight",
  "text": "Important statement supported by the paper"
}}

For quote:

"callout": {{
  "label": "Key Message",
  "text": "Short statement faithfully derived from the paper"
}}

For concept_map:

"process": [
  {{
    "step": 1,
    "title": "Concept",
    "description": "Relationship or explanation"
  }}
]

Do not invent relationships that are not present in the paper.

==================================================
CHART FORMAT
==================================================

Use a chart ONLY if the paper contains actual numerical data.

"chart": {{
  "type": "bar",
  "title": "Chart Title",
  "labels": ["Item A", "Item B"],
  "values": [10, 20]
}}

Rules:

- Never create numbers yourself.
- Never estimate missing values.
- Never convert qualitative information into fake percentages.
- If no numerical data exists, use:

"chart": null

==================================================
TABLE FORMAT
==================================================

Use a table ONLY when the paper provides genuine comparison/table information.

"table": {{
  "headers": ["Column 1", "Column 2"],
  "rows": [
    ["A", "B"],
    ["C", "D"]
  ]
}}

Never invent table values.

==================================================
SLIDE DESIGN INTELLIGENCE
==================================================

Do NOT use the same visual structure for every slide.

Choose the most appropriate layout and visual type based on the
information actually available in the paper.

Recommended visual distribution:

TITLE:
- layout: title
- visual_type: none

INTRODUCTION:
- Prefer two_column, image_right, or concept_map.
- Highlight important concepts rather than using only bullets.

PROBLEM STATEMENT:
- Prefer callout or comparison.
- Visually emphasize the research problem and motivation.

OBJECTIVES:
- Prefer stat_cards or concept_map.
- Group related objectives when appropriate.

METHODOLOGY:
- Prefer process.
- Represent the methodology as a logical sequence when supported.

SYSTEM ARCHITECTURE / WORKFLOW:
- Prefer process or concept_map.
- Show relationships between major components.

EXPERIMENTS / DATASET / IMPLEMENTATION:
- Prefer two_column, stat_cards, table, or chart.
- Only show data actually present in the paper.

RESULTS & FINDINGS:
- Prefer stat_cards, chart, comparison, or callout.
- Do not fabricate metrics.

LIMITATIONS & FUTURE SCOPE:
- Prefer two_column or comparison.
- Clearly distinguish limitations from future directions.

CONCLUSION:
- Prefer conclusion with callout and concise key takeaways.

==================================================
CONTENT RULES
==================================================

1. Generate exactly {slides} slides.

2. First slide MUST use:
   "layout": "title"

3. Last slide MUST use:
   "layout": "conclusion"

4. Follow the academic structure exactly.

5. Maximum 5 bullet points per slide.

6. Maximum 18 words per bullet.

7. Keep presentation text concise.

8. Avoid paragraph-heavy slides.

9. Use visual_type whenever a visual representation is genuinely
   supported by the paper.

10. Do NOT force visuals when the paper does not contain enough
    information.

11. Speaker notes must contain only information supported by the paper.

12. image_prompt may describe a conceptual academic visual only.

13. image_prompt must NEVER introduce facts not contained in the paper.

14. No external images are required.

15. Charts ONLY when numerical data exists.

16. Tables ONLY when actual comparison/table information exists.

17. Never fabricate numerical values.

18. Never fabricate citations.

19. Never fabricate references.

20. Never fabricate datasets.

21. Never fabricate experiments.

22. Never fabricate system architecture.

23. Never fabricate results.

24. Preserve important technical terminology from the paper.

25. Use academic language.

26. Avoid repetitive bullet structures across slides.

27. Prefer visual storytelling over bullet repetition.

28. Every slide should communicate one clear idea.

29. Keep visual data concise enough to fit on a 16:9 presentation slide.

30. Return ONLY valid JSON.

31. Do not wrap JSON in markdown.

32. Do not include explanations outside the JSON.

==================================================
PAPER TITLE
==================================================

{title}

==================================================
ABSTRACT
==================================================

{abstract or "Not available"}

==================================================
PAPER CONTENT
==================================================

{content[:30000]}
"""

        system_prompt = """
You are an expert academic presentation designer for Resyntra.

Your task is to transform research papers into visually structured
academic presentation data.

The supplied research paper is the ONLY source of factual information.

You must be extremely strict about factual grounding.

Never invent:
- facts
- numbers
- datasets
- results
- experiments
- algorithms
- architectures
- statistics
- citations
- references
- comparisons
- workflows
- technical components

Your job is NOT simply to convert paragraphs into bullet points.

Instead, identify opportunities for:
- process diagrams
- workflow structures
- key insight callouts
- statistic cards
- comparisons
- concept relationships
- tables
- charts when actual numerical data exists

However, visual structure must NEVER introduce unsupported information.

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