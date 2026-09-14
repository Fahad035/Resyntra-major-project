import os
from uuid import uuid4

from pptx import Presentation
from pptx.chart.data import ChartData
from pptx.enum.chart import XL_CHART_TYPE, XL_LEGEND_POSITION
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.util import Inches, Pt

from app.ai.ppt_generator import PPTGenerator
from app.ai.qdrant import get_paper_chunks
from app.modules.papers.repository import PaperRepository


class PPTService:
    def __init__(self, repo: PaperRepository):
        self.repo = repo
        self.generator = PPTGenerator()

    async def generate(self, paper_id, slides):
        # -----------------------------------------
        # 1. Get paper
        # -----------------------------------------
        paper = await self.repo.get_by_id(paper_id)

        if paper is None:
            raise ValueError("Research paper not found.")

        # -----------------------------------------
        # 2. Check processing status
        # -----------------------------------------
        if paper.processing_status != "completed":
            raise ValueError(
                "Research paper is not fully processed yet."
            )

        # -----------------------------------------
        # 3. Retrieve indexed paper content
        # -----------------------------------------
        content = self._get_paper_content(paper_id)

        if not content:
            raise ValueError(
                "No indexed content found for this research paper."
            )

        # -----------------------------------------
        # 4. Generate AI presentation outline
        # -----------------------------------------
        outline = self.generator.generate_outline(
            title=paper.title,
            abstract=paper.abstract or "",
            content=content,
            slides=slides,
        )

        if not outline:
            raise ValueError(
                "AI failed to generate a presentation outline."
            )

        # -----------------------------------------
        # 5. Create presentation
        # -----------------------------------------
        prs = Presentation()

        # Widescreen 16:9
        prs.slide_width = Inches(13.333)
        prs.slide_height = Inches(7.5)

        # Remove default first slide if necessary
        while len(prs.slides) > 0:
            r_id = prs.slides._sldIdLst[0].rId
            prs.part.drop_rel(r_id)
            del prs.slides._sldIdLst[0]

        # -----------------------------------------
        # 6. Add slides
        # -----------------------------------------
        for slide_data in outline:
            self._add_slide(
                prs,
                slide_data,
            )

        # -----------------------------------------
        # 7. Save PPTX
        # -----------------------------------------
        os.makedirs("generated", exist_ok=True)

        filename = f"{uuid4()}.pptx"

        path = os.path.join(
            "generated",
            filename,
        )

        prs.save(path)

        # -----------------------------------------
        # 8. Return download URL
        # -----------------------------------------
        return {
            "download_url": f"/generated/{filename}"
        }

    # =========================================================
    # PAPER CONTENT
    # =========================================================

    def _get_paper_content(self, paper_id):
        """
        Retrieve all indexed chunks belonging to the paper
        and rebuild the paper content in original order.
        """

        chunks = get_paper_chunks(
            paper_id=str(paper_id)
        )

        if not chunks:
            return ""

        return "\n\n".join(
            chunk["text"]
            for chunk in chunks
            if chunk.get("text")
        )

    # =========================================================
    # SLIDE ROUTER
    # =========================================================

    def _add_slide(self, prs, slide_data):
        layout = slide_data.get(
            "layout",
            "content",
        )

        if layout == "title":
            self._add_title_slide(
                prs,
                slide_data,
            )

        elif layout == "two_column":
            self._add_two_column_slide(
                prs,
                slide_data,
            )

        elif layout in [
            "table",
            "comparison",
        ]:
            self._add_table_slide(
                prs,
                slide_data,
            )

        elif layout == "chart":
            self._add_chart_slide(
                prs,
                slide_data,
            )

        elif layout == "conclusion":
            self._add_conclusion_slide(
                prs,
                slide_data,
            )

        else:
            self._add_content_slide(
                prs,
                slide_data,
            )

    # =========================================================
    # COMMON HELPERS
    # =========================================================

    def _add_background(self, slide):
        """
        Add a clean white background.
        """

        background = slide.background
        fill = background.fill
        fill.solid()
        fill.fore_color.rgb = self._color("FFFFFF")

    def _add_top_accent(self, slide):
        """
        Add Resyntra-style accent line.
        """

        shape = slide.shapes.add_shape(
            MSO_SHAPE.RECTANGLE,
            0,
            0,
            Inches(13.333),
            Inches(0.08),
        )

        shape.fill.solid()
        shape.fill.fore_color.rgb = self._rgb(
            "4F46E5"
        )

        shape.line.fill.background()

    def _add_footer(self, slide, slide_number):
        """
        Add subtle presentation footer.
        """

        line = slide.shapes.add_shape(
            MSO_SHAPE.RECTANGLE,
            Inches(0.65),
            Inches(7.05),
            Inches(12.0),
            Inches(0.01),
        )

        line.fill.solid()
        line.fill.fore_color.rgb = self._rgb(
            "E5E7EB"
        )
        line.line.fill.background()

        textbox = slide.shapes.add_textbox(
            Inches(0.65),
            Inches(7.08),
            Inches(5),
            Inches(0.25),
        )

        paragraph = textbox.text_frame.paragraphs[0]

        paragraph.text = "Resyntra • AI Research Assistant"

        paragraph.font.size = Pt(8)
        paragraph.font.color.rgb = self._rgb(
            "6B7280"
        )

        number_box = slide.shapes.add_textbox(
            Inches(11.8),
            Inches(7.08),
            Inches(0.8),
            Inches(0.25),
        )

        number_paragraph = (
            number_box.text_frame.paragraphs[0]
        )

        number_paragraph.text = str(
            slide_number
        )

        number_paragraph.alignment = PP_ALIGN.RIGHT

        number_paragraph.font.size = Pt(8)
        number_paragraph.font.color.rgb = self._rgb(
            "6B7280"
        )

    def _add_title(self, slide, title):
        """
        Add consistent slide title.
        """

        textbox = slide.shapes.add_textbox(
            Inches(0.7),
            Inches(0.45),
            Inches(11.9),
            Inches(0.7),
        )

        frame = textbox.text_frame
        frame.clear()

        paragraph = frame.paragraphs[0]

        paragraph.text = str(title)

        paragraph.font.size = Pt(27)
        paragraph.font.bold = True
        paragraph.font.color.rgb = self._rgb(
            "111827"
        )

    def _add_bullets(
        self,
        slide,
        bullets,
        left=0.9,
        top=1.6,
        width=11.5,
        height=4.9,
    ):
        """
        Add clean academic bullet points.
        """

        textbox = slide.shapes.add_textbox(
            Inches(left),
            Inches(top),
            Inches(width),
            Inches(height),
        )

        frame = textbox.text_frame

        frame.clear()
        frame.word_wrap = True
        frame.margin_left = Inches(0.08)
        frame.margin_right = Inches(0.08)

        for index, bullet in enumerate(
            bullets[:5]
        ):

            if index == 0:
                paragraph = frame.paragraphs[0]
            else:
                paragraph = frame.add_paragraph()

            paragraph.text = str(bullet)

            paragraph.level = 0

            paragraph.font.size = Pt(20)
            paragraph.font.color.rgb = self._rgb(
                "374151"
            )

            paragraph.space_after = Pt(14)

            paragraph.text = f"•  {bullet}"

        return textbox

    def _rgb(self, hex_value):
        """
        Convert HEX color to RGBColor.
        """

        from pptx.dml.color import RGBColor

        hex_value = hex_value.replace(
            "#",
            "",
        )

        return RGBColor(
            int(hex_value[0:2], 16),
            int(hex_value[2:4], 16),
            int(hex_value[4:6], 16),
        )

    # =========================================================
    # TITLE SLIDE
    # =========================================================

    def _add_title_slide(
        self,
        prs,
        slide_data,
    ):
        slide = prs.slides.add_slide(
            prs.slide_layouts[6]
        )

        self._add_background(slide)

        # Accent block
        block = slide.shapes.add_shape(
            MSO_SHAPE.RECTANGLE,
            0,
            0,
            Inches(0.18),
            Inches(7.5),
        )

        block.fill.solid()

        block.fill.fore_color.rgb = self._rgb(
            "4F46E5"
        )

        block.line.fill.background()

        # Resyntra label
        label = slide.shapes.add_textbox(
            Inches(0.9),
            Inches(0.85),
            Inches(4),
            Inches(0.4),
        )

        paragraph = (
            label.text_frame.paragraphs[0]
        )

        paragraph.text = (
            "RESYNTRA • AI RESEARCH ASSISTANT"
        )

        paragraph.font.size = Pt(12)
        paragraph.font.bold = True
        paragraph.font.color.rgb = self._rgb(
            "4F46E5"
        )

        # Main title
        title = slide.shapes.add_textbox(
            Inches(0.9),
            Inches(1.65),
            Inches(11.2),
            Inches(2.3),
        )

        frame = title.text_frame
        frame.word_wrap = True
        frame.vertical_anchor = MSO_ANCHOR.MIDDLE

        paragraph = frame.paragraphs[0]

        paragraph.text = slide_data.get(
            "title",
            "Research Presentation",
        )

        paragraph.font.size = Pt(34)
        paragraph.font.bold = True
        paragraph.font.color.rgb = self._rgb(
            "111827"
        )

        # Subtitle
        subtitle = slide_data.get(
            "subtitle",
            "",
        )

        if subtitle:
            box = slide.shapes.add_textbox(
                Inches(0.92),
                Inches(4.25),
                Inches(10.8),
                Inches(1.0),
            )

            paragraph = (
                box.text_frame.paragraphs[0]
            )

            paragraph.text = subtitle

            paragraph.font.size = Pt(18)
            paragraph.font.color.rgb = self._rgb(
                "6B7280"
            )

        # Bottom label
        bottom = slide.shapes.add_textbox(
            Inches(0.92),
            Inches(6.35),
            Inches(8),
            Inches(0.4),
        )

        paragraph = (
            bottom.text_frame.paragraphs[0]
        )

        paragraph.text = (
            "Academic Research Presentation"
        )

        paragraph.font.size = Pt(11)
        paragraph.font.color.rgb = self._rgb(
            "9CA3AF"
        )

    # =========================================================
    # CONTENT SLIDE
    # =========================================================

    def _add_content_slide(
        self,
        prs,
        slide_data,
    ):
        slide = prs.slides.add_slide(
            prs.slide_layouts[6]
        )

        self._add_background(slide)
        self._add_top_accent(slide)

        self._add_title(
            slide,
            slide_data.get(
                "title",
                "Research Overview",
            ),
        )

        self._add_bullets(
            slide,
            slide_data.get(
                "bullets",
                [],
            ),
        )

        self._add_footer(
            slide,
            len(prs.slides),
        )

    # =========================================================
    # TWO COLUMN
    # =========================================================

    def _add_two_column_slide(
        self,
        prs,
        slide_data,
    ):
        slide = prs.slides.add_slide(
            prs.slide_layouts[6]
        )

        self._add_background(slide)
        self._add_top_accent(slide)

        self._add_title(
            slide,
            slide_data.get(
                "title",
                "Research Approach",
            ),
        )

        bullets = slide_data.get(
            "bullets",
            [],
        )

        midpoint = max(
            1,
            len(bullets) // 2,
        )

        left_bullets = bullets[:midpoint]
        right_bullets = bullets[midpoint:]

        # Left card
        self._add_card(
            slide,
            0.7,
            1.55,
            5.8,
            4.9,
        )

        self._add_bullets(
            slide,
            left_bullets,
            left=1.0,
            top=1.9,
            width=5.2,
            height=4.1,
        )

        # Right card
        self._add_card(
            slide,
            6.85,
            1.55,
            5.8,
            4.9,
        )

        self._add_bullets(
            slide,
            right_bullets,
            left=7.15,
            top=1.9,
            width=5.2,
            height=4.1,
        )

        self._add_footer(
            slide,
            len(prs.slides),
        )

    def _add_card(
        self,
        slide,
        left,
        top,
        width,
        height,
    ):
        card = slide.shapes.add_shape(
            MSO_SHAPE.ROUNDED_RECTANGLE,
            Inches(left),
            Inches(top),
            Inches(width),
            Inches(height),
        )

        card.fill.solid()

        card.fill.fore_color.rgb = self._rgb(
            "F9FAFB"
        )

        card.line.color.rgb = self._rgb(
            "E5E7EB"
        )

    # =========================================================
    # TABLE / COMPARISON
    # =========================================================

    def _add_table_slide(
        self,
        prs,
        slide_data,
    ):
        slide = prs.slides.add_slide(
            prs.slide_layouts[6]
        )

        self._add_background(slide)
        self._add_top_accent(slide)

        self._add_title(
            slide,
            slide_data.get(
                "title",
                "Comparison",
            ),
        )

        table_data = slide_data.get(
            "table"
        )

        if not table_data:
            self._add_bullets(
                slide,
                slide_data.get(
                    "bullets",
                    [],
                ),
            )

            self._add_footer(
                slide,
                len(prs.slides),
            )

            return

        headers = table_data.get(
            "headers",
            [],
        )

        rows = table_data.get(
            "rows",
            [],
        )

        if not headers:
            return

        table = slide.shapes.add_table(
            len(rows) + 1,
            len(headers),
            Inches(0.8),
            Inches(1.65),
            Inches(11.75),
            Inches(4.8),
        ).table

        # Column widths
        total_width = 11.75 / len(headers)

        for column in table.columns:
            column.width = Inches(
                total_width
            )

        # Header
        for column_index, header in enumerate(
            headers
        ):
            cell = table.cell(
                0,
                column_index,
            )

            cell.text = str(header)

            cell.fill.solid()

            cell.fill.fore_color.rgb = self._rgb(
                "4F46E5"
            )

            for paragraph in (
                cell.text_frame.paragraphs
            ):
                paragraph.font.size = Pt(12)
                paragraph.font.bold = True
                paragraph.font.color.rgb = self._rgb(
                    "FFFFFF"
                )

        # Body
        for row_index, row in enumerate(
            rows,
            start=1,
        ):
            for column_index in range(
                len(headers)
            ):
                value = (
                    row[column_index]
                    if column_index < len(row)
                    else ""
                )

                cell = table.cell(
                    row_index,
                    column_index,
                )

                cell.text = str(value)

                cell.fill.solid()

                cell.fill.fore_color.rgb = self._rgb(
                    "F9FAFB"
                )

                for paragraph in (
                    cell.text_frame.paragraphs
                ):
                    paragraph.font.size = Pt(11)
                    paragraph.font.color.rgb = self._rgb(
                        "374151"
                    )

        self._add_footer(
            slide,
            len(prs.slides),
        )

    # =========================================================
    # CHART
    # =========================================================

    def _add_chart_slide(
        self,
        prs,
        slide_data,
    ):
        slide = prs.slides.add_slide(
            prs.slide_layouts[6]
        )

        self._add_background(slide)
        self._add_top_accent(slide)

        self._add_title(
            slide,
            slide_data.get(
                "title",
                "Research Results",
            ),
        )

        chart_data = slide_data.get(
            "chart"
        )

        if not chart_data:
            self._add_bullets(
                slide,
                slide_data.get(
                    "bullets",
                    [],
                ),
            )

            self._add_footer(
                slide,
                len(prs.slides),
            )

            return

        labels = chart_data.get(
            "labels",
            [],
        )

        values = chart_data.get(
            "values",
            [],
        )

        if not labels or not values:
            self._add_bullets(
                slide,
                slide_data.get(
                    "bullets",
                    [],
                ),
            )

            self._add_footer(
                slide,
                len(prs.slides),
            )

            return

        chart_data_obj = ChartData()

        chart_data_obj.categories = labels

        chart_data_obj.add_series(
            "Value",
            values,
        )

        chart_type = chart_data.get(
            "type",
            "bar",
        )

        if chart_type == "line":
            chart_type_enum = (
                XL_CHART_TYPE.LINE
            )

        elif chart_type == "pie":
            chart_type_enum = (
                XL_CHART_TYPE.PIE
            )

        else:
            chart_type_enum = (
                XL_CHART_TYPE.COLUMN_CLUSTERED
            )

        chart = slide.shapes.add_chart(
            chart_type_enum,
            Inches(1.0),
            Inches(1.55),
            Inches(11.3),
            Inches(4.9),
            chart_data_obj,
        ).chart

        chart.has_legend = False
        chart.has_title = False

        if chart_type != "pie":
            chart.value_axis.has_major_gridlines = True

        self._add_footer(
            slide,
            len(prs.slides),
        )

    # =========================================================
    # CONCLUSION
    # =========================================================

    def _add_conclusion_slide(
        self,
        prs,
        slide_data,
    ):
        slide = prs.slides.add_slide(
            prs.slide_layouts[6]
        )

        self._add_background(slide)

        # Large accent block
        block = slide.shapes.add_shape(
            MSO_SHAPE.ROUNDED_RECTANGLE,
            Inches(0.75),
            Inches(0.85),
            Inches(11.85),
            Inches(5.75),
        )

        block.fill.solid()

        block.fill.fore_color.rgb = self._rgb(
            "F5F3FF"
        )

        block.line.color.rgb = self._rgb(
            "DDD6FE"
        )

        # Title
        title = slide.shapes.add_textbox(
            Inches(1.15),
            Inches(1.3),
            Inches(10.8),
            Inches(0.8),
        )

        paragraph = (
            title.text_frame.paragraphs[0]
        )

        paragraph.text = slide_data.get(
            "title",
            "Conclusion & Key Takeaways",
        )

        paragraph.font.size = Pt(29)
        paragraph.font.bold = True
        paragraph.font.color.rgb = self._rgb(
            "111827"
        )

        # Bullets
        self._add_bullets(
            slide,
            slide_data.get(
                "bullets",
                [],
            ),
            left=1.15,
            top=2.25,
            width=10.6,
            height=3.6,
        )

        self._add_footer(
            slide,
            len(prs.slides),
        )