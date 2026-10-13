from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock
from uuid import uuid4

import pytest
from fastapi import HTTPException

from app.modules.chat.service import ChatService
from app.modules.papers.service import PaperService
from app.models.user import User


@pytest.fixture
def users():
    owner = User(id=uuid4(), email="owner@example.com", username="owner", password_hash="hash")
    other = User(id=uuid4(), email="other@example.com", username="other", password_hash="hash")
    return owner, other


@pytest.mark.asyncio
async def test_get_paper_allows_owner(users):
    owner, _ = users
    paper = SimpleNamespace(owner_id=owner.id, title="Paper")
    repo = Mock()
    repo.get_by_id = AsyncMock(return_value=paper)

    result = await PaperService(repo).get_one(uuid4(), owner)

    assert result is paper


@pytest.mark.asyncio
async def test_get_paper_rejects_other_user(users):
    owner, other = users
    paper = SimpleNamespace(owner_id=owner.id)
    repo = Mock()
    repo.get_by_id = AsyncMock(return_value=paper)

    with pytest.raises(HTTPException) as exc:
        await PaperService(repo).get_one(uuid4(), other)

    assert exc.value.status_code == 403
    assert exc.value.detail == "Access denied"


@pytest.mark.asyncio
async def test_get_missing_paper_returns_404(users):
    owner, _ = users
    repo = Mock()
    repo.get_by_id = AsyncMock(return_value=None)

    with pytest.raises(HTTPException) as exc:
        await PaperService(repo).get_one(uuid4(), owner)

    assert exc.value.status_code == 404


@pytest.mark.asyncio
async def test_chat_rejects_other_user_paper(users):
    owner, other = users
    paper = SimpleNamespace(owner_id=owner.id, processing_status="completed")
    repo = Mock()
    repo.get_by_id = AsyncMock(return_value=paper)
    service = ChatService(Mock())
    service.papers = repo

    with pytest.raises(HTTPException) as exc:
        await service.ask(uuid4(), "What is the paper about?", other)

    assert exc.value.status_code == 403


@pytest.mark.asyncio
async def test_chat_rejects_processing_paper(users):
    owner, _ = users
    paper = SimpleNamespace(owner_id=owner.id, processing_status="processing")
    repo = Mock()
    repo.get_by_id = AsyncMock(return_value=paper)
    service = ChatService(Mock())
    service.papers = repo

    with pytest.raises(HTTPException) as exc:
        await service.ask(uuid4(), "What is the paper about?", owner)

    assert exc.value.status_code == 409


@pytest.mark.asyncio
async def test_chat_rejects_failed_paper(users):
    owner, _ = users
    paper = SimpleNamespace(owner_id=owner.id, processing_status="failed")
    repo = Mock()
    repo.get_by_id = AsyncMock(return_value=paper)
    service = ChatService(Mock())
    service.papers = repo

    with pytest.raises(HTTPException) as exc:
        await service.ask(uuid4(), "What is the paper about?", owner)

    assert exc.value.status_code == 422


@pytest.mark.asyncio
async def test_chat_returns_rag_answer_for_owner(users):
    owner, _ = users
    paper = SimpleNamespace(owner_id=owner.id, processing_status="completed")
    repo = Mock()
    repo.get_by_id = AsyncMock(return_value=paper)
    service = ChatService(Mock())
    service.papers = repo
    service.rag = Mock()
    service.rag.ask.return_value = {
        "answer": "The paper studies machine learning.",
        "sources": [{"chunk_index": 2, "text": "Machine learning...", "score": 0.91}],
        "confidence": {"score": 0.8, "label": "High"},
    }

    result = await service.ask(uuid4(), "What is the paper about?", owner)

    assert result["answer"].startswith("The paper")
    assert result["confidence"]["label"] == "High"
    service.rag.ask.assert_called_once()
