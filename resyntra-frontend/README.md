# Resyntra Frontend

React + Vite single-page app for Resyntra — marketing site, auth flow,
and (in progress) the authenticated AI workspace.

See the [root README](../README.md) for the full project overview and
architecture diagram.

## Requirements

- Node.js 18+
- The backend running locally (or a deployed instance) — see
  `../resyntra-backend/README.md`

## Setup

```bash
npm install

# Point the app at your backend
echo "VITE_API_URL=http://localhost:8000" > .env

npm run dev
```

The app runs at `http://localhost:5173`.

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
├── api/           # Axios wrapper per backend module (auth, papers, chat, search...)
├── components/    # UI components, grouped by feature/section
│   └── ui/        # Shared primitives: Button, Badge, GlassCard, Container...
├── context/       # AuthContext, ThemeContext
├── data/          # Static content (pricing plans, about page data, etc.)
├── hooks/         # useAuth, useTheme, etc.
├── layouts/       # PublicLayout, PageLayout
├── pages/
│   ├── public/    # Home, Pricing, About, Contact
│   ├── auth/      # Login, Register
│   ├── platform/  # Chat with Papers, AI Summarizer, Semantic Search, PPT Generator, Analytics
│   ├── solutions/ # Students, Researchers, Universities, Professors
│   └── resources/ # Documentation, Tutorials, Blog, API Reference, Roadmap, Support
├── routes/        # Route definitions, split by section
├── styles/        # theme.css — CSS variables for light/dark mode
└── validations/   # Zod schemas for forms
```

## Theming

The whole site is driven by CSS custom properties defined in
`src/styles/theme.css` and flipped via a `data-theme` attribute on
`<html>` (see `context/ThemeContext.jsx`). When adding new
components, use the existing semantic classes (`bg-background`,
`bg-surface`, `text-foreground`, `text-muted`, `border-border`) or
`bg-(--foreground)/N` for translucent surfaces — never hardcode
Tailwind colors like `bg-slate-900` or `text-white`, since they won't
respond to the toggle.

## Backend integration

`src/api/client.js` is a shared Axios instance that attaches the JWT
access token to every request and automatically refreshes it via
`/auth/refresh` on a `401`, retrying the original request once. Auth
state lives in `AuthContext` (`src/context/AuthContext.jsx`) and is
consumed through the `useAuth()` hook.

## Known gaps

The platform pages (`pages/platform/*`) currently describe each AI
feature but aren't wired to the backend yet, even though the matching
`api/*.js` wrappers already exist. This is the top priority for
turning the marketing site into a working product — see the root
README's [Roadmap](../README.md#roadmap).

## Tech stack

React 19 · Vite · Tailwind CSS v4 · Framer Motion · React Router v6 ·
React Hook Form + Zod · TanStack Query · Axios · lucide-react