# Architecture Overview

**Purpose:** This document describes the architecture, core components, data flow, theming, build pipeline, and deployment strategy for the Portfolio Framework (Vite + React + TypeScript).

**High-level summary**
- The app is a single-page React application built with Vite and TypeScript.
- Content is JSON-driven: UI components consume small focused JSON files in `src/data/`.
- A ThemeProvider manages light/dark modes and persists user preference to localStorage.
- The repository is configured to build and deploy to GitHub Pages via a GitHub Actions workflow on `main`.

Folder structure (important files)
- `index.html` — app entry
- `src/main.tsx` — React bootstrap; wraps the app in `ThemeProvider`
- `src/App.tsx` — mounts top-level components
- `src/components/*` — reusable UI components (Header, Hero, Projects, Experience, About, Contact, Footer, ThemeToggle)
- `src/data/*` — JSON content files (site.json, hero.json, projects.json, experience.json, about.json, contact.json, theme.json)
- `src/theme/ThemeProvider.tsx` — theme context, persistence, system pref handling
- `src/styles/global.css` — CSS variables and theming rules
- `.github/workflows/deploy.yml` — build & deploy to GitHub Pages

Core concepts
- JSON-driven content: Each major UI component reads from its own JSON file to simplify updates and support content-authoring without code changes.
- Component responsibility: Components are intentionally small and focused: display-only components read content and render markup; logic like theme control is centralized in providers/hooks.
- Theming: CSS variables are used with `theme-dark`/`theme-light` classes applied on `document.documentElement` by `ThemeProvider`.
- Extensibility: Add new components and a matching JSON file, then import the component in `App.tsx` to include it.

Data flow
1. JSON files in `src/data/` contain content.
2. Components import their JSON file (`import hero from '../data/hero.json'`) and render UI.
3. Theme preference is read from `localStorage` on startup by `ThemeProvider`.

Theme system
- `src/data/theme.json` controls defaults (`default`: `system` | `light` | `dark`) and the storage key.
- `ThemeProvider` resolves `system` using `window.matchMedia('(prefers-color-scheme: dark)')` and toggles CSS classes.
- `ThemeToggle` calls `toggleTheme()` from context to flip between light/dark; provider persists selection to `localStorage`.

Build & Deploy
- `npm run build` runs Vite and outputs `dist/`.
- `.github/workflows/deploy.yml` uses GitHub Actions to run `npm ci`, `npm run build`, uploads `dist/`, and deploys via the GitHub Pages actions. The workflow triggers on push to `main`.

Security & performance notes
- The app is static; avoid embedding secrets in code. Use GitHub Secrets only for private deployment steps if needed.
- Keep JSON content small and server-side validated if using external content sources.
- Use Vite production build and code-splitting for performance; lazy-load large sections if necessary.

Operational notes
- Local dev: `npm install` then `npm run dev`.
- To preview build locally: `npm run build` then `npm run preview`.

How to add a new component driven by JSON
1. Add `src/data/newthing.json` with the content shape.
2. Create `src/components/NewThing.tsx` that imports the JSON and renders UI.
3. Import `NewThing` in `src/App.tsx` and place it where desired.

Open questions / recommended enhancements
- Add TypeScript type definitions for JSON shapes for stronger typing and validation.
- Add tests for rendering components with representative JSON fixtures.
- Add CI checks that `npm run build` succeeds and report errors early.
