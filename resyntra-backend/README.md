# Resyntra Backend

FastAPI backend powering Resyntra's AI research platform — auth, paper
management, RAG-based chat, semantic search, and AI-generated research
outputs (summaries, gap analysis, literature reviews, presentations).

See the [root README](../README.md) for the full project overview and
architecture diagram.

## Requirements

- Python 3.12 (`>=3.12,<3.13`)
- [`uv`](https://docs.astral.sh/uv/)
- Docker + Docker Compose (for Postgres, Redis, Qdrant)
- At least one AI provider API key (Gemini and/or OpenAI)

## Setup

```bash
# 1. Start infrastructure
docker compose up -d postgres redis qdrant

# 2. Install dependencies
uv sync

# 3. Configure environment
cp .env.example .env
# Fill in DATABASE_URL, REDIS_URL, QDRANT_URL, SECRET_KEY, and your
# AI provider keys. See app/core/config.py for the full list of
# settings and their defaults.

# 4. Run migrations
uv run alembic upgrade head

# 5. Run the API
uv run uvicorn app.main:app --reload
```

API docs: `http://localhost:8000/docs`
Health check: `http://localhost:8000/health`

## Background worker

Paper ingestion (text extraction → chunking → embedding → Qdrant
upsert) runs as a Celery task. Start a worker alongside the API:

```bash
uv run celery -A app.tasks.celery_app worker --loglevel=info
```

## Database migrations

```bash
# Create a new migration after changing a model
uv run alembic revision --autogenerate -m "describe your change"

# Apply migrations
uv run alembic upgrade head

# Roll back one migration
uv run alembic downgrade -1
```

## Project layout

```
app/
├── ai/            # RAG pipeline: embeddings, Qdrant client, providers, prompts
│   └── providers/ # Gemini / OpenAI / OpenRouter — swappable via AI_PROVIDER
├── core/          # Settings, logging, middleware, exception handlers
├── database/      # SQLAlchemy session + Alembic migrations
├── models/        # SQLAlchemy ORM models
├── modules/       # One folder per feature: router + service + repository + schemas
└── tasks/         # Celery tasks
```

Each module under `app/modules/` follows the same pattern:
`router.py` (HTTP layer) → `service.py` (business logic) →
`repository.py` (DB access) → `schemas.py` (Pydantic request/response
models).

## Configuration reference

All settings are defined in `app/core/config.py`. Notable ones:

- `AI_PROVIDER` — selects which provider `AIProviderFactory` returns (`gemini` / `openai` / `openrouter`).
- `AUTH_ENABLED` — **must be `True` outside local development.** When `False`, `get_current_user()` bypasses auth entirely and returns the first user in the database.
- `ACCESS_TOKEN_EXPIRE_MINUTES` / `REFRESH_TOKEN_EXPIRE_DAYS` — JWT lifetimes.

## Testing

`pytest`, `pytest-asyncio`, `mypy`, and `ruff` are already listed as
dev dependencies but no tests exist yet. To add them:

```bash
uv sync --group dev
uv run pytest
uv run ruff check .
uv run mypy .
```

## Tech stack

FastAPI · SQLAlchemy 2.0 (async) · Alembic · PostgreSQL · Qdrant ·
Redis · Celery · Gemini / OpenAI / OpenRouter · PyMuPDF ·
langchain-text-splitters · python-pptx · python-jose · pwdlib (Argon2)