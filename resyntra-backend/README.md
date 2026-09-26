<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,100:1E293B&height=160&section=header&text=Resyntra%20Backend&fontSize=42&fontColor=22D3EE&animation=fadeIn&fontAlignY=42&desc=FastAPI%20%C2%B7%20RAG%20%C2%B7%20Multi-Provider%20AI&descAlignY=65&descSize=14&descColor=94A3B8" width="100%" alt="Resyntra Backend banner" />

![FastAPI](https://img.shields.io/badge/FastAPI-async-22D3EE?style=flat-square&logo=fastapi&logoColor=0F172A)
![Python](https://img.shields.io/badge/Python-3.12-22D3EE?style=flat-square&logo=python&logoColor=0F172A)
![Qdrant](https://img.shields.io/badge/Qdrant-vector%20db-22D3EE?style=flat-square)
![Celery](https://img.shields.io/badge/Celery-async%20tasks-22D3EE?style=flat-square)

</div>

FastAPI backend powering Resyntra's AI research platform — auth, paper management, RAG-based chat, semantic search, multi-provider AI (with automatic fallback), voice I/O, and AI-generated research outputs (summaries, gap analysis, literature reviews, presentations).

See the [root README](../README.md) for the full project overview and architecture diagram.

## Requirements

- Python 3.12 (`>=3.12,<3.13`)
- [`uv`](https://docs.astral.sh/uv/)
- Docker + Docker Compose (Postgres, Redis, Qdrant)
- LibreOffice installed locally (headless PPTX → PDF conversion for the PPT Generator)
- At least one AI provider key (Gemini / OpenAI / OpenRouter / DeepSeek), plus Deepgram + Murf AI for voice

## Setup

```bash
# 1. Start infrastructure
docker compose up -d postgres redis qdrant

# 2. Install dependencies
uv sync

# 3. Configure environment
cp .env.example .env
# See app/core/config.py for the full, authoritative list of settings.

# 4. Run migrations
uv run alembic upgrade head

# 5. Run the API
uv run uvicorn app.main:app --reload
```

API docs: `http://localhost:8000/docs`

## Background worker

Paper ingestion (text extraction → chunking → embedding → Qdrant upsert) runs as a Celery task:

```bash
uv run celery -A app.tasks.celery_app worker --loglevel=info
```

## Database migrations

```bash
uv run alembic revision --autogenerate -m "describe your change"
uv run alembic upgrade head
uv run alembic downgrade -1
```

## Project layout

```
app/
├── ai/
│   ├── providers/       # gemini.py, openai.py, openrouter.py, deepseek.py,
│   │                     # resilient.py (retry + fallback wrapper), factory.py
│   ├── rag.py            # Chat with Papers retrieval + generation
│   ├── summarizer.py, research_gap.py, literature_review.py, ppt_generator.py
│   ├── embeddings.py, qdrant.py
│   └── prompts.py
├── core/                  # settings, logging, middleware, exception handlers
├── database/               # SQLAlchemy session + Alembic migrations
├── models/                  # SQLAlchemy ORM models
├── modules/                   # one folder per feature: router → service → repository → schemas
│   ├── auth, papers, chat, summarizer, research_gap, ppt_generator, voice,
│   ├── search, projects, collections, notes, citations, chat_history,
│   └── dashboard, analytics, admin, notifications...
└── tasks/                       # Celery tasks
```

Every module under `app/modules/` follows the same layered pattern: `router.py` (HTTP) → `service.py` (business logic + auth/ownership checks) → `repository.py` (DB access) → `schemas.py` (Pydantic models).

## The resilient AI layer

`app/ai/providers/factory.py` returns a `ResilientAIProvider` (`resilient.py`) instead of a single raw provider. Every AI feature — Chat, Summarizer, Research Gap, PPT Generator — automatically gets:

- **Retry** on transient errors (503 / "overloaded" / timeouts) — one quick retry on the same provider
- **Fallback** on quota exhaustion (429 / "RESOURCE_EXHAUSTED") — immediately moves to the next configured provider
- A single clean `AIProviderError` → `503` response if every provider fails, instead of a raw traceback

Configure the try order with `AI_PROVIDER` in `.env` — it's tried first, then the other three follow in a fixed order.

## Voice

`app/modules/voice/` wraps two external APIs behind auth-protected endpoints:

- `POST /voice/transcribe` — multipart audio upload → Deepgram `/v1/listen`
- `POST /voice/speak` — text → Murf AI `/v1/speech/generate` → returns a playable audio URL

## Configuration reference

See `app/core/config.py` for the full list. Notable flags:

- `AI_PROVIDER` — selects the primary provider in the resilient fallback chain
- `AUTH_ENABLED` — **must be `True` outside local development**
- `ACCESS_TOKEN_EXPIRE_MINUTES` / `REFRESH_TOKEN_EXPIRE_DAYS` — JWT lifetimes

## Testing

`pytest`, `pytest-asyncio`, `mypy`, and `ruff` are already dev dependencies, though no tests exist yet:

```bash
uv sync --group dev
uv run pytest
uv run ruff check .
uv run mypy .
```

## Tech stack

FastAPI · SQLAlchemy 2.0 (async) · Alembic · PostgreSQL · Qdrant · Redis · Celery · Gemini / OpenAI / OpenRouter / DeepSeek · Deepgram · Murf AI · PyMuPDF · langchain-text-splitters · python-pptx · LibreOffice · python-jose · pwdlib (Argon2)

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,100:1E293B&height=100&section=footer" width="100%" />
</div>