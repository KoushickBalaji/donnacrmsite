# Deployment

## Hosting model

This website is a Next.js app (App Router). Vercel deployment is the primary target.

## Vercel

No SPA rewrite rules are required. Next.js handles routing and serverless functions natively on Vercel.

Notes:
- Preview deployments are configured as `noindex` via the global `robots` metadata in `src/app/layout.tsx`.
- Set `NEXT_PUBLIC_SITE_ORIGIN=https://www.donnacrm.com` in Production env for stable canonicals/metadata.

## Assets

- `public/` is served at the site root.
- Screenshots referenced in pages live in `public/screenshots/`.
