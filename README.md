# Resyntra — AI Research Intelligence Platform

Resyntra is an AI-powered research workspace that helps students and
researchers analyze papers, chat with their research library, detect
research gaps, generate literature reviews, and turn findings into
presentations — backed by a real retrieval-augmented generation (RAG)
pipeline, not just a chatbot wrapper.

> B.Tech (CSE – AI/ML) Major Project

<!--
  Add 2–3 screenshots or a short GIF walkthrough here before you submit.
  Example:
  ![Home page](docs/screenshots/home.png)
  ![Chat with papers](docs/screenshots/chat.png)
-->

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [1. Clone the repo](#1-clone-the-repo)
  - [2. Backend setup](#2-backend-setup)
  - [3. Frontend setup](#3-frontend-setup)
- [Environment Variables](#environment-variables)
- [API Overview](#api-overview)
- [Roadmap](#roadmap)
- [Known Limitations](#known-limitations)
- [License](#license)

---

## Features

| Area | Description |
|---|---|
| 🔐 Authentication | JWT access/refresh tokens, Argon2 password hashing |
| 📄 Paper Management | Upload, parse, and organize research papers (PDF text extraction via PyMuPDF) |
| 💬 Chat with Papers | Ask natural-language questions and get answers grounded in your own papers (RAG) |
| 🔍 Semantic Search | Vector search over paper chunks using Qdrant |
| 🧠 AI Summarizer | Generate structured academic summaries of any paper |
| 🕳️ Research Gap Finder | Compares multiple papers to surface gaps, conflicting findings, and future research directions |
| 📚 Literature Review Generator | Produces a full, sectioned literature review across a paper set |
| 📊 PPT Generator | Turns research findings into a presentation (python-pptx) |
| 🌐 Multi-Source Discovery | Search external sources: arXiv, Crossref, OpenAlex, PubMed |
| 🗂️ Projects & Collections | Organize papers into projects and collections with notes and citations |
| 📈 Dashboard & Analytics | Usage and research analytics per user |
| 🌓 Light/Dark Theme | Full theme system across the whole site |
| ⚙️ Multi-Provider AI | Swap between Gemini, OpenAI, or OpenRouter via a single provider interface |

## Tech Stack

**Frontend**
- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animation)
- React Router v6
- React Hook Form + Zod (validation)
- TanStack Query, Axios

**Backend**
- FastAPI (async) + SQLAlchemy 2.0 + Alembic
- PostgreSQL — primary datastore
- Qdrant — vector database for embeddings / semantic search
- Redis + Celery — background/async processing (paper ingestion, embeddings)
- Google Gemini / OpenAI / OpenRouter — pluggable LLM + embedding providers
- python-jose + pwdlib (Argon2) — auth
- PyMuPDF, langchain-text-splitters — PDF parsing & chunking
- python-pptx — presentation generation

**Infra**
- Docker Compose (API, Postgres, Redis, Qdrant, pgAdmin, Mailpit)

## Architecture

```mermaid
flowchart LR
    subgraph Client
        FE[React Frontend]
    end

    subgraph API["FastAPI Backend"]
        Auth[Auth Module]
        Papers[Papers Module]
        Chat[Chat / RAG Module]
        Search[Search Module]
        AI[AI Layer<br/>Summarizer · Research Gap · Lit Review]
    end

    subgraph Data
        PG[(PostgreSQL)]
        VDB[(Qdrant<br/>Vector DB)]
        Redis[(Redis)]
    end

    subgraph External
        LLM[Gemini / OpenAI / OpenRouter]
        Academic[arXiv · CrossRef · OpenAlex · PubMed]
    end

    FE -->|REST + JWT| API
    Papers --> PG
    Papers --> Celery[Celery Worker]
    Celery --> VDB
    Chat --> VDB
    Chat --> AI
    AI --> LLM
    Search --> Academic
    Celery --> Redis
    API --> Redis
```

**RAG flow (Chat with Papers):**
1. A paper is uploaded → text extracted (PyMuPDF) → chunked (LangChain text splitters).
2. Chunks are embedded (Gemini embeddings) and stored in Qdrant, tagged with `paper_id`.
3. A user question is embedded and matched against Qdrant via cosine similarity.
4. The top-matching chunks are injected into a prompt and sent to the selected LLM provider.
5. The model answers grounded in the retrieved context, not from memory alone.

## Project Structure

```
Resyntra-major-project/
├── resyntra-frontend/          # React + Vite SPA
│   └── src/
│       ├── api/                # Axios wrappers per backend module
│       ├── components/         # UI components (navbar, hero, pricing, about, auth...)
│       ├── context/             # AuthContext, ThemeContext
│       ├── pages/                # public / auth / platform / solutions / resources
│       └── routes/               # React Router route definitions
│
└── resyntra-backend/            # FastAPI backend
    └── app/
        ├── ai/                  # RAG pipeline, embeddings, providers, prompts
        ├── modules/              # auth, papers, chat, search, citations, projects,
        │                         # research_gap, literature_review, ppt_generator,
        │                         # dashboard, analytics, admin, notifications...
        ├── models/                # SQLAlchemy models
        ├── database/              # session + Alembic migrations
        ├── tasks/                 # Celery tasks (async paper processing)
        └── core/                  # config, logging, middleware, exceptions
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.12 (the backend pins `>=3.12,<3.13`)
- [`uv`](https://docs.astral.sh/uv/) for Python dependency management
- Docker + Docker Compose (for Postgres, Redis, Qdrant)
- API keys for at least one AI provider (Gemini and/or OpenAI)

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/Resyntra-major-project.git
cd Resyntra-major-project
```

### 2. Backend setup

```bash
cd resyntra-backend

# Start Postgres, Redis, Qdrant (and optional pgAdmin/Mailpit)
docker compose up -d postgres redis qdrant

# Install dependencies
uv sync

# Configure environment
cp .env.example .env
# then fill in DATABASE_URL, REDIS_URL, QDRANT_URL, SECRET_KEY,
# and your AI provider keys — see Environment Variables below

# Run database migrations
uv run alembic upgrade head

# Start the API
uv run uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`, with interactive
docs at `http://localhost:8000/docs`.

To process paper uploads asynchronously, also run a Celery worker in a
second terminal:

```bash
uv run celery -A app.tasks.celery_app worker --loglevel=info
```

### 3. Frontend setup

```bash
cd resyntra-frontend

npm install

# Configure environment
echo "VITE_API_URL=http://localhost:8000" > .env

npm run dev
```

The app will be available at `http://localhost:5173`.

## Environment Variables

The backend reads these from `resyntra-backend/.env` (see
`app/core/config.py` for the authoritative list):

| Variable | Required | Notes |
|---|---|---|
| `DATABASE_URL` | ✅ | `postgresql+psycopg://user:pass@host:5432/db` |
| `REDIS_URL` | ✅ | Used by Celery |
| `QDRANT_URL` | ✅ | e.g. `http://localhost:6333` |
| `QDRANT_HOST` / `QDRANT_PORT` | — | Defaults to `localhost` / `6333` |
| `SECRET_KEY` | ✅ | JWT signing key — generate a strong random value |
| `ALGORITHM` | — | Defaults to `HS256` |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | — | Defaults to `15` |
| `REFRESH_TOKEN_EXPIRE_DAYS` | — | Defaults to `30` |
| `AI_PROVIDER` | — | `gemini` \| `openai` \| `openrouter` |
| `GEMINI_API_KEY` / `GEMINI_MODEL` | ✅ if using Gemini | |
| `OPENAI_API_KEY` / `OPENAI_MODEL` | ✅ if using OpenAI | |
| `OPENROUTER_API_KEY` | ✅ if using OpenRouter | |
| `EMBEDDING_MODEL` / `EMBEDDING_DIMENSION` | — | Gemini embedding config |
| `AUTH_ENABLED` | ⚠️ | **Set to `True` for anything beyond local dev.** When `False`, every request is authenticated as the first user in the database with no credential check. |

> ⚠️ `.env.example` in the backend is currently out of date relative to
> `config.py` — it's missing `REDIS_URL`, `QDRANT_*`, the AI provider
> keys, and `AUTH_ENABLED`. Update it so a fresh clone can actually run
> without digging through `config.py`.

The frontend needs one variable in `resyntra-frontend/.env`:

```
VITE_API_URL=http://localhost:8000
```

## API Overview

Full interactive documentation is auto-generated by FastAPI at
`/docs` once the backend is running. Key module groups:

- `/auth` — register, login, refresh, logout
- `/papers` — upload, list, retrieve papers
- `/chat` — RAG-based chat with a paper or a project's paper set
- `/search` — semantic search + external discovery (arXiv, Crossref, OpenAlex, PubMed)
- `/summarizer` — AI paper summarization
- `/research-gap` — research gap analysis across multiple papers
- `/literature-review` — literature review generation
- `/ppt-generator` — export findings as a presentation
- `/projects`, `/collections`, `/notes`, `/citations` — organization tools
- `/dashboard`, `/analytics` — usage insights
- `/admin`, `/notifications` — platform management

## Roadmap

- [ ] Wire up the "Chat with Papers", "AI Summarizer", and "Semantic
      Search" frontend pages to their existing backend endpoints
      (currently static explainer pages)
- [ ] Authenticated dashboard page on the frontend
- [ ] Streaming chat responses (SSE/WebSocket)
- [ ] Citation network graph visualization
- [ ] Automated tests (`pytest` is already a dev dependency) + CI
- [ ] Rate limiting on AI endpoints

## Known Limitations

- The interactive AI tools (chat, summarizer, semantic search) are not
  yet connected on the frontend — the backend endpoints work and can
  be exercised via `/docs`.
- No automated test suite yet.
- `AUTH_ENABLED=False` by default is intended for local development
  only — do not deploy with this setting.

## License

<!-- Add a LICENSE file and reference it here, e.g.: -->
This project currently has no license file. Add one (MIT is a common
choice for academic/portfolio projects) before making the repo public
if you want to specify usage terms.