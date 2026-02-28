# Known gaps and TODOs

This file tracks code-observable gaps and open decisions.

## Current TODO status in source

- No `TODO` markers were found in `src/` during this sync pass.
- `npm run qa:content` already fails on placeholder markers like `TODO`, `TBD`, and similar patterns.

## Known gaps / open decisions

- Global robots behavior currently treats `NODE_ENV=production` as indexable in `src/app/layout.tsx`.
  - This can make preview-like production-mode environments indexable unless controlled elsewhere.
- Host canonical redirect (`donnacrm.com` -> `www.donnacrm.com`) is not implemented in repo middleware.
  - `src/middleware.ts` currently enforces HTTPS only.
- `/compare` is included in sitemap paths even though route behavior is a redirect to `/streak-crm-alternative`.
- The Shipping policy page exists at `/shipping` but is intentionally not linked in the footer (commented in `src/components/SiteFooter.tsx`).
