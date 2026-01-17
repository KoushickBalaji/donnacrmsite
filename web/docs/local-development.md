# Local development

## Prerequisites

- Node.js 18+ (Vite 5 and modern tooling expect a recent Node runtime)
- npm (repo includes `package-lock.json`)

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`
- Preview production build: `npm run preview`

## Environment variables

The website itself does not require env vars to run.

The Contact form’s serverless email function (Vercel) requires env vars when deployed; see `docs/serverless-api.md`.

## Contact form in local dev (important)

The Contact page (`src/pages/Contact.tsx`) posts to `/api/contact`.

- In production on Vercel, `/api/contact` is served by `api/contact.ts`.
- In local development with `npm run dev` (Vite), there is no serverless runtime by default, so `/api/contact` will typically 404.

If you need end-to-end local testing, use one of these approaches:

- Run with Vercel CLI (`vercel dev`) so `/api/*` is available.
- Add a Vite dev proxy to a local server implementing the same route.

## Linting and typechecking

- ESLint config is in `eslint.config.js` (flat config).
- `npm run build` runs `tsc -b` before `vite build`, so type errors break builds.
