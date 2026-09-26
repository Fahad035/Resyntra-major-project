<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,100:1E293B&height=160&section=header&text=Resyntra%20Frontend&fontSize=42&fontColor=22D3EE&animation=fadeIn&fontAlignY=42&desc=React%20%C2%B7%20Vite%20%C2%B7%20Tailwind%20v4&descAlignY=65&descSize=14&descColor=94A3B8" width="100%" alt="Resyntra Frontend banner" />

![React](https://img.shields.io/badge/React-19-22D3EE?style=flat-square&logo=react&logoColor=0F172A)
![Vite](https://img.shields.io/badge/Vite-build-22D3EE?style=flat-square&logo=vite&logoColor=0F172A)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-22D3EE?style=flat-square&logo=tailwindcss&logoColor=0F172A)

</div>

React + Vite single-page app for Resyntra — marketing site, auth flow, and the authenticated AI workspace (Chat with Papers, Summarizer, Research Gap Finder, PPT Generator).

See the [root README](../README.md) for the full project overview and architecture diagram.

## Requirements

- Node.js 18+
- The backend running locally (or deployed) — see `../resyntra-backend/README.md`

## Setup

```bash
npm install
echo "VITE_API_URL=http://localhost:8000" > .env
npm run dev
```

App: `http://localhost:5173`

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project layout

```
src/
├── api/            # Axios wrapper per backend module (auth, papers, chat,
│                    # summarizer, researchGap, pptGenerator, voice, search...)
├── components/
│   ├── ui/          # Shared primitives: Button, Badge, GlassCard, Container...
│   ├── chat/         # Chat with Papers UI (ChatPanel, PaperSidebar, voice hooks)
│   ├── summarizer/tool/    # AI Summarizer UI
│   ├── researchGap/         # Research Gap Finder UI (multi-select + report view)
│   └── ppt-generator/        # PPT Generator UI (paper picker, generation workflow)
├── context/          # AuthContext, ThemeContext
├── hooks/             # usePapers, useChat, useVoiceRecorder, useTextToSpeech,
│                       # useSummarizer, useResearchGap...
├── layouts/            # PublicLayout, PageLayout
├── pages/
│   ├── public/          # Home, Pricing, About
│   ├── auth/             # Login, Register
│   └── platform/          # Chat with Papers, AI Summarizer, Research Gap Finder,
│                           # PPT Generator, Semantic Search*, Analytics*, Workspace*
│                           # (* = not yet wired to the backend)
├── routes/                 # Route definitions, split by section
├── styles/                  # theme.css — CSS variables for light/dark mode
└── validations/              # Zod schemas for forms
```

## Theming

The whole site is driven by CSS custom properties in `src/styles/theme.css`, flipped via a `data-theme` attribute on `<html>` (`context/ThemeContext.jsx`). Use the existing semantic classes — `bg-background`, `bg-surface`, `bg-card`, `text-foreground`, `text-muted`, `border-border` — or `bg-(--foreground)/N` for translucent surfaces. Never hardcode Tailwind colors like `bg-slate-900` or `text-white`; they won't respond to the toggle.

## Backend integration

`src/api/client.js` is the shared Axios instance — attaches the JWT access token to every request and automatically refreshes it via `/auth/refresh` on a `401`, retrying the original request once. Auth state lives in `AuthContext` and is consumed through `useAuth()`.

> ⚠️ `search.js`, `analytics.js`, and `projects.js` still import the older `./axios` client (no auto-refresh, hardcoded `localhost:8000`). Switch them to `./client` before wiring up those pages.

## Reusable feature hooks

Built once for Chat with Papers, reused as-is by Summarizer and Research Gap Finder:

- `usePapers` — list / upload / delete, with automatic polling while a paper is still processing
- `useTextToSpeech` — plays one AI answer aloud at a time via the `/voice/speak` endpoint
- `useVoiceRecorder` — records a mic clip and transcribes it via `/voice/transcribe`
- `FormattedAnswer` (`components/chat/`) — lightweight renderer for **bold** text and bullet lists in AI responses, no markdown library needed

## Known gaps

`Workspace`, `SemanticSearch`, and `Analytics` pages describe their features but aren't wired to the backend yet, despite working endpoints existing server-side. `ProtectedRoute` exists (`components/auth/ProtectedRoute.jsx`) but isn't currently applied to any platform route. See the root README's [Roadmap](../README.md#-roadmap).

## Tech stack

React 19 · Vite · Tailwind CSS v4 · Framer Motion · React Router v6 · React Hook Form + Zod · TanStack Query · Axios · lucide-react

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,100:1E293B&height=100&section=footer" width="100%" />
</div>