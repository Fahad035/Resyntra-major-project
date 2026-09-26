import re
import numpy as np

from app.ai.embeddings import EmbeddingService


class GroundednessEvaluator:

    def __init__(self):
        self.embedding = EmbeddingService()

    @staticmethod
    def _cosine_similarity(
        vector_a,
        vector_b,
    ) -> float:

        a = np.array(vector_a, dtype=float)
        b = np.array(vector_b, dtype=float)

        denominator = (
            np.linalg.norm(a) *
            np.linalg.norm(b)
        )

        if denominator == 0:
            return 0.0

        return float(
            np.dot(a, b) / denominator
        )

    @staticmethod
    def _split_sentences(text: str) -> list[str]:

        sentences = re.split(
            r"(?<=[.!?])\s+",
            text.strip(),
        )

        return [
            sentence.strip()
            for sentence in sentences
            if sentence.strip()
        ]

    @staticmethod
    def _get_confidence_label(
        score: float,
    ) -> str:

        if score >= 0.75:
            return "High"

        if score >= 0.55:
            return "Medium"

        return "Low"

    def evaluate(
        self,
        answer: str,
        source_chunks: list[dict],
    ) -> dict:

        if not answer or not source_chunks:
            return {
                "score": 0.0,
                "label": "Low",
            }

        sentences = self._split_sentences(answer)

        if not sentences:
            return {
                "score": 0.0,
                "label": "Low",
            }

        source_texts = [
            chunk.get("text", "")
            for chunk in source_chunks
            if chunk.get("text")
        ]

        if not source_texts:
            return {
                "score": 0.0,
                "label": "Low",
            }

        source_embeddings = [
            self.embedding.embed(text)
            for text in source_texts
        ]

        sentence_scores = []

        for sentence in sentences:

            sentence_embedding = self.embedding.embed(
                sentence
            )

            similarities = [
                self._cosine_similarity(
                    sentence_embedding,
                    source_embedding,
                )
                for source_embedding in source_embeddings
            ]

            best_match = max(similarities)

            sentence_scores.append(best_match)

        groundedness_score = float(
            np.mean(sentence_scores)
        )

        groundedness_score = max(
            0.0,
            min(1.0, groundedness_score),
        )

        return {
            "score": round(
                groundedness_score,
                4,
            ),
            "label": self._get_confidence_label(
                groundedness_score
            ),
        }