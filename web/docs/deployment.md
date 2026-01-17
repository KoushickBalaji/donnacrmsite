# Deployment

## Hosting model

This website is a client-rendered SPA. Any hosting must:

- Serve `index.html` for all “app routes” (e.g. `/privacy`, `/pricing`)
- Preserve `/api/*` for serverless endpoints (when applicable)

## Vercel

Vercel rewrites are configured in `vercel.json`:

- `/api/(.*)` → `/api/$1` (leave API routes alone)
- `/(.*)` → `/` (send all other paths to the SPA entry)

This keeps deep links working for React Router while still allowing serverless functions under `api/`.

## Netlify / Cloudflare Pages

`public/_redirects` includes:

- `/* /index.html 200`

This is the SPA rewrite equivalent for those platforms.

## Assets

- `public/` is served at the site root.
- Screenshots referenced in pages live in `public/screenshots/`.
