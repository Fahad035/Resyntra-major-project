<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,100:1E293B&height=220&section=header&text=Resyntra&fontSize=72&fontColor=22D3EE&animation=fadeIn&fontAlignY=38&desc=AI%20Research%20Intelligence%20Platform&descAlignY=58&descSize=20&descColor=94A3B8" width="100%" alt="Resyntra banner" />

<a href="https://github.com/">
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&weight=500&size=20&duration=2800&pause=900&color=22D3EE&center=true&vCenter=true&width=640&lines=Chat+with+your+research+papers;Summarize+any+paper+in+seconds;Find+gaps+across+multiple+papers;Turn+findings+into+a+presentation;Powered+by+real+RAG%2C+not+just+prompts" alt="Typing SVG" />
</a>

<br/>

<p>
An AI-powered research workspace that helps students and researchers analyze papers, chat with their research library, detect research gaps, generate literature reviews, and turn findings into presentations — backed by a real retrieval-augmented generation (RAG) pipeline, multi-provider AI resilience, and full voice I/O.
</p>

<sub><b>B.E (CSE – AI/ML) Major Project</b></sub>

<br/><br/>

![React](https://img.shields.io/badge/React-19-22D3EE?style=for-the-badge&logo=react&logoColor=0F172A)
![FastAPI](https://img.shields.io/badge/FastAPI-async-22D3EE?style=for-the-badge&logo=fastapi&logoColor=0F172A)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-2.0-22D3EE?style=for-the-badge&logo=postgresql&logoColor=0F172A)
![Qdrant](https://img.shields.io/badge/Qdrant-vector%20db-22D3EE?style=for-the-badge&logoColor=0F172A)
![Docker](https://img.shields.io/badge/Docker-compose-22D3EE?style=for-the-badge&logo=docker&logoColor=0F172A)
![License](https://img.shields.io/badge/license-MIT-1E293B?style=for-the-badge)

<br/>

<img src="https://skillicons.dev/icons?i=react,vite,tailwind,fastapi,py,postgres,redis,docker&theme=dark" alt="tech stack icons" />

</div>

<br/>

<!--
  Add 2–3 screenshots or a short GIF walkthrough here before you submit.
  Example:
  ![Chat with papers](docs/screenshots/chat.png)
-->

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Overview](#-api-overview)
- [Roadmap](#-roadmap)
- [Known Limitations](#-known-limitations)
- [License](#-license)

---

## ✨ Features

| Area | Description |
|---|---|
| 🔐 Authentication | JWT access/refresh tokens, Argon2 password hashing |
| 📄 Paper Management | Upload, parse, and organize research papers (PyMuPDF text extraction) |
| 💬 Chat with Papers | Ask natural-language questions, grounded in your own papers via RAG |
| 🎙️ Voice In / Voice Out | Speak your question (Deepgram STT) and hear the answer read back (Murf AI TTS) |
| 🧠 AI Summarizer | Structured academic summaries — problem, methodology, findings, conclusion |
| 🕳️ Research Gap Finder | Compares 2–8 papers at once to surface gaps, conflicts, and future directions |
| 📚 Literature Review Generator | Produces a full, sectioned literature review across a paper set |
| 📊 PPT Generator | AI outline → real slide deck (python-pptx) → rendered PDF preview |
| 🌐 Multi-Source Discovery | Search external sources: arXiv, Crossref, OpenAlex, PubMed |
| 🗂️ Projects & Collections | Organize papers into projects and collections with notes and citations |
| ⚙️ Resilient Multi-Provider AI | Gemini / OpenAI / OpenRouter / DeepSeek behind one interface, with automatic retry and fallback |
| 🌓 Light / Dark Theme | Full theme system, driven by CSS variables, across the whole site |

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=cylinder&color=0:1E293B,100:0F172A&height=3&section=header" width="100%" />
</div>

## 🛠 Tech Stack

**Frontend**
`React 19` · `Vite` · `Tailwind CSS v4` · `Framer Motion` · `React Router v6` · `React Hook Form + Zod` · `TanStack Query` · `Axios`

**Backend**
`FastAPI (async)` · `SQLAlchemy 2.0` · `Alembic` · `PostgreSQL` · `Qdrant` · `Redis + Celery` · `PyMuPDF` · `python-pptx` · `LibreOffice (headless PDF render)`

**AI Providers** *(auto retry + fallback across all four)*
`Google Gemini` · `OpenAI` · `OpenRouter` · `DeepSeek`

**Voice**
`Deepgram` (speech-to-text) · `Murf AI` (text-to-speech)

**Infra**
`Docker Compose` (API, Postgres, Redis, Qdrant, pgAdmin, Mailpit)

## 🏗 Architecture

```mermaid
flowchart LR
    subgraph Client
        FE[React Frontend]
    end

    subgraph API["FastAPI Backend"]
        Auth[Auth Module]
        Papers[Papers Module]
        Chat[Chat / RAG Module]
        Summ[Summarizer Module]
        Gap[Research Gap Module]
        PPT[PPT Generator Module]
        Voice[Voice Module]
        Search[Search Module]
        Resilient[Resilient AI Provider<br/>retry + fallback]
    end

    subgraph Data
        PG[(PostgreSQL)]
        VDB[(Qdrant<br/>Vector DB)]
        Redis[(Redis)]
    end

    subgraph External
        LLM[Gemini / OpenAI /<br/>OpenRouter / DeepSeek]
        STT[Deepgram]
        TTS[Murf AI]
        Academic[arXiv · CrossRef ·<br/>OpenAlex · PubMed]
    end

    FE -->|REST + JWT| API
    Papers --> PG
    Papers --> Celery[Celery Worker]
    Celery --> VDB
    Chat --> VDB
    Chat --> Resilient
    Summ --> Resilient
    Gap --> Resilient
    PPT --> Resilient
    Resilient --> LLM
    Voice --> STT
    Voice --> TTS
    Search --> Academic
    Celery --> Redis
    API --> Redis
```

**RAG flow (Chat with Papers):**
1. A paper is uploaded → text extracted (PyMuPDF) → chunked (LangChain text splitters).
2. Chunks are embedded and stored in Qdrant, tagged with `paper_id`.
3. A user question is embedded and matched against Qdrant via cosine similarity.
4. Top-matching chunks are injected into a prompt and sent through the **resilient AI provider** — if the primary model is rate-limited or temporarily overloaded, it automatically retries or falls through to the next configured provider.
5. The model answers grounded in the retrieved context, not from memory alone.

## 📁 Project Structure

<details>
<summary><b>Click to expand</b></summary>

```
Resyntra-major-project/
├── resyntra-frontend/          # React + Vite SPA
│   └── src/
│       ├── api/                 # Axios wrappers per backend module
│       ├── components/          # UI components, grouped by feature
│       ├── context/              # AuthContext, ThemeContext
│       ├── hooks/                 # usePapers, useChat, useVoiceRecorder,
│       │                          # useTextToSpeech, useSummarizer, useResearchGap...
│       ├── pages/                  # public / auth / platform / solutions / resources
│       └── routes/                  # React Router route definitions
│
└── resyntra-backend/             # FastAPI backend
    └── app/
        ├── ai/                    # RAG pipeline, embeddings, resilient providers, prompts
        │   └── providers/          # gemini, openai, openrouter, deepseek + resilient.py
        ├── modules/                 # auth, papers, chat, search, citations, projects,
        │                            # research_gap, summarizer, ppt_generator, voice,
        │                            # dashboard, analytics, admin, notifications...
        ├── models/                   # SQLAlchemy models
        ├── database/                  # session + Alembic migrations
        ├── tasks/                      # Celery tasks (async paper processing)
        └── core/                        # config, logging, middleware, exceptions
```

</details>

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.12 (`>=3.12,<3.13`)
- [`uv`](https://docs.astral.sh/uv/) for Python dependency management
- Docker + Docker Compose (Postgres, Redis, Qdrant)
- LibreOffice installed locally (used headless for PPTX → PDF conversion)
- API keys: at least one AI provider (Gemini/OpenAI/OpenRouter/DeepSeek), plus Deepgram and Murf AI for voice features

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/Resyntra-major-project.git
cd Resyntra-major-project
```

### 2. Backend setup

```bash
cd resyntra-backend

# Start Postgres, Redis, Qdrant
docker compose up -d postgres redis qdrant

# Install dependencies
uv sync

# Configure environment
cp .env.example .env
# Fill in DATABASE_URL, REDIS_URL, QDRANT_URL, SECRET_KEY, your AI
# provider key(s), and DEEPGRAM_API_KEY / MURF_API_KEY for voice.

# Run database migrations
uv run alembic upgrade head

# Start the API
uv run uvicorn app.main:app --reload
```

API docs: `http://localhost:8000/docs`

Run a Celery worker alongside it to process paper uploads asynchronously:

```bash
uv run celery -A app.tasks.celery_app worker --loglevel=info
```

### 3. Frontend setup

```bash
cd resyntra-frontend
npm install
echo "VITE_API_URL=http://localhost:8000" > .env
npm run dev
```

App: `http://localhost:5173`

## 🔑 Environment Variables

| Variable | Required | Notes |
|---|---|---|
| `DATABASE_URL` | ✅ | `postgresql+psycopg://user:pass@host:5432/db` |
| `REDIS_URL` | ✅ | Used by Celery |
| `QDRANT_URL` | ✅ | e.g. `http://localhost:6333` |
| `SECRET_KEY` | ✅ | JWT signing key |
| `AUTH_ENABLED` | ⚠️ | **Must be `True` outside local dev** — when `False`, every request is authenticated as the first user in the database with no credential check |
| `AI_PROVIDER` | — | `gemini` \| `openai` \| `openrouter` \| `deepseek` — tried first, others used as automatic fallback |
| `GEMINI_API_KEY` / `GEMINI_MODEL` | conditional | Required if using Gemini |
| `OPENAI_API_KEY` | conditional | Required if using OpenAI |
| `OPENROUTER_API_KEY` | conditional | Required if using OpenRouter |
| `DEEPSEEK_API_KEY` / `DEEPSEEK_MODEL` | conditional | Required if using DeepSeek (defaults to `deepseek-flash`) |
| `DEEPGRAM_API_KEY` | ✅ for voice input | Speech-to-text |
| `MURF_API_KEY` / `MURF_VOICE_ID` | ✅ for voice output | Text-to-speech (defaults to `en-US-natalie`) |

Frontend (`resyntra-frontend/.env`):
```
VITE_API_URL=http://localhost:8000
```

## 📡 API Overview

Full interactive docs at `/docs` once the backend is running.

| Route | What it does |
|---|---|
| `/auth` | register, login, refresh, logout |
| `/papers` | upload, list, retrieve papers |
| `/chat` | RAG-based Q&A grounded in one paper |
| `/summarizer` | structured AI summary of one paper |
| `/research-gap` | compares 2–8 papers for gaps, conflicts, future directions |
| `/ppt-generator` | AI outline → generated slide deck + PDF |
| `/voice/transcribe` · `/voice/speak` | Deepgram STT · Murf AI TTS |
| `/search` | semantic search + external discovery (arXiv, Crossref, OpenAlex, PubMed) |
| `/projects`, `/collections`, `/notes`, `/citations` | organization tools |
| `/dashboard`, `/analytics` | usage insights |

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=cylinder&color=0:1E293B,100:0F172A&height=3&section=header" width="100%" />
</div>

## 🗺 Roadmap

- [ ] Wire up **Workspace**, **Semantic Search**, and **Analytics** — currently static explainer pages, same pattern already used successfully for Chat/Summarizer/Research Gap
- [ ] Restore `ProtectedRoute` on the platform routes (present in the codebase, currently unused — pages load for logged-out users and only fail at the API layer)
- [ ] Finish migrating `search.js`, `analytics.js`, `projects.js` off the legacy Axios client (no token refresh) onto the shared resilient client
- [ ] Authenticated Dashboard page (backend module already exists)
- [ ] Automated tests (`pytest` already a dev dependency) + CI pipeline
- [ ] Streaming chat responses (SSE/WebSocket)
- [ ] Citation network graph visualization

## ⚠️ Known Limitations

- Workspace, Semantic Search, and Analytics pages are not yet wired to their (working) backend endpoints.
- No automated test suite or CI yet.
- Route-level auth guarding is inconsistent on the frontend — the backend enforces it correctly regardless.
- `AUTH_ENABLED=False` is for local development only.

## 📄 License

MIT — see [LICENSE](./LICENSE).

<div align="center">
<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,100:1E293B&height=120&section=footer" width="100%" />

<sub>Built with research in mind, by researchers-in-training.</sub>

</div>