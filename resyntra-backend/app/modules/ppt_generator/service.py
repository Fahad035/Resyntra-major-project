import os
from uuid import uuid4

from pptx import Presentation

from app.ai.ppt_generator import PPTGenerator
from app.modules.papers.repository import PaperRepository


class PPTService:

    def __init__(
        self,
        repo: PaperRepository,
    ):
        self.repo = repo
        self.generator = PPTGenerator()

    async def generate(
        self,
        paper_id,
        slides,
    ):

        paper = await self.repo.get_by_id(
            paper_id
        )

        outline = self.generator.generate_outline(
            paper.title,
            paper.abstract,
            paper.content,
            slides,
        )

        prs = Presentation()

        for slide_data in outline:

            layout = prs.slide_layouts[1]

            slide = prs.slides.add_slide(
                layout
            )

            slide.shapes.title.text = slide_data["title"]

            body = slide.placeholders[1].text_frame

            for item in slide_data["content"]:

                p = body.add_paragraph()

                p.text = item

        os.makedirs(
            "generated",
            exist_ok=True,
        )

        filename = f"{uuid4()}.pptx"

        path = os.path.join(
            "generated",
            filename,
        )

        prs.save(path)

        return {
            "download_url": f"/generated/{filename}"
        }