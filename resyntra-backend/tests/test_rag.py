from unittest.mock import Mock, patch

import pytest

from app.ai.rag import RAGPipeline


@pytest.fixture
def rag():
    pipeline = RAGPipeline()
    pipeline.embedding = Mock()
    pipeline.provider = Mock()
    pipeline.groundedness = Mock()
    pipeline.embedding.embed.return_value = [1.0, 0.0]
    pipeline.groundedness.evaluate.return_value = {"score": 0.9, "label": "High"}
    return pipeline


@patch("app.ai.rag.search")
def test_rag_returns_grounded_answer_with_sources(search, rag):
    search.return_value = [
        {"score": 0.91, "payload": {"chunk_index": 3, "text": "The paper studies supervised learning."}},
    ]
    rag.provider.generate.return_value = "The paper studies supervised learning [Chunk 3]."

    result = rag.ask("What does the paper study?", paper_id="paper-1")

    assert result["answer"].startswith("The paper studies")
    assert result["sources"][0]["chunk_index"] == 3
    assert result["confidence"]["label"] == "High"
    search.assert_called_once_with(embedding=[1.0, 0.0], limit=5, paper_id="paper-1")


@patch("app.ai.rag.search")
def test_rag_returns_safe_message_when_no_results(search, rag):
    search.return_value = []

    result = rag.ask("What dataset was used?", paper_id="paper-1")

    assert "couldn't find" in result["answer"]
    assert result["sources"] == []
    assert result["confidence"]["label"] == "Low"
    rag.provider.generate.assert_not_called()


@patch("app.ai.rag.search")
def test_rag_passes_only_retrieved_context_to_provider(search, rag):
    search.return_value = [
        {"score": 0.88, "payload": {"chunk_index": 4, "text": "MNIST is mentioned as an example dataset."}},
    ]
    rag.provider.generate.return_value = "The paper mentions MNIST as an example [Chunk 4]."

    rag.ask("Does the paper mention MNIST?", paper_id="paper-2")

    prompt = rag.provider.generate.call_args.kwargs["prompt"]
    assert "MNIST is mentioned as an example dataset." in prompt
    assert "paper-2" not in prompt


