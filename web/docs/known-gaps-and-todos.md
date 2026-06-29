# Known gaps and TODOs

This file tracks code-observable gaps and open decisions.

## Current TODO status in source

- No `TODO` markers were found in `src/` during this sync pass.
- `npm run qa:content` already fails on placeholder markers like `TODO`, `TBD`, and similar patterns.

## Known gaps / open decisions

- Global robots behavior currently treats `NODE_ENV=production` as indexable in `src/app/layout.tsx`.
  - This can make preview-like production-mode environments indexable unless controlled elsewhere.
- Host canonical redirect (`donnacrm.com` -> `www.donnacrm.com`) is implemented in repo middleware.
  - `src/middleware.ts` enforces HTTPS and canonical host redirects in production.
- Redirect routes such as `/home` and `/compare` should stay out of `src/app/sitemap.ts`.
  - `npm run qa:seo` checks for accidental sitemap entries for these routes.
- The Shipping policy page exists at `/shipping` for direct policy access, but it is noindexed and omitted from the sitemap because it is intentionally not a discoverable SEO page.
