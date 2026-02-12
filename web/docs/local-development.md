# Local development

## Prerequisites

- Node.js 18+
- npm (repo includes `package-lock.json`)

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`
- Start production server: `npm run start` (after `npm run build`)

## Environment variables

The website itself does not require env vars to run.

The Contact form’s serverless email function (Vercel) requires env vars when deployed; see `docs/serverless-api.md`.

## Contact form in local dev (important)

The Contact page (`src/views/Contact.tsx`) posts to `/api/contact`.

- In production on Vercel, `/api/contact` is served by `src/app/api/contact/route.ts`.
- In local development (`npm run dev`), the API route runs locally, so the contact form can be tested end-to-end.

## Linting and typechecking

- ESLint config is in `eslint.config.js` (flat config).
- `npm run build` runs `next build`, so type errors break builds.
