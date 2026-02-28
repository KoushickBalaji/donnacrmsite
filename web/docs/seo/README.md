# SEO

This folder documents SEO behavior implemented in code.

Start here for Search Console workflow: `docs/seo/search-console.md`.

## Current implementation

- Canonical and metadata base use `resolveSiteOrigin()` from `src/lib/site.ts`.
  - `NEXT_PUBLIC_SITE_ORIGIN` is used when set.
  - Fallback is `https://www.donnacrm.com`.
- Sitemap and robots are served by metadata routes:
  - `/sitemap.xml` -> `src/app/sitemap.ts`
  - `/robots.txt` -> `src/app/robots.ts`
- Most pages export metadata via `pageMetadata(...)` helper (`src/lib/metadata.ts`).
- Root page (`/`) has explicit metadata in `src/app/page.tsx`.
- Resource article pages (`/resources/[slug]`) generate metadata dynamically per article.
- Default Open Graph image is `public/og.png`.
- Structured data includes:
  - Global Organization + WebSite JSON-LD in `src/app/layout.tsx`
  - Page JSON-LD on selected pages (for example Gmail CRM pages and resource articles)

## Redirects and indexing behavior

- `/home` redirects to `/`.
- `/compare` redirects to `/streak-crm-alternative`.
- Global robots metadata in `layout.tsx` uses:
  - `index/follow = true` when `VERCEL_ENV === 'production'` or `NODE_ENV === 'production'`
  - `index/follow = false` otherwise
- `src/middleware.ts` enforces HTTPS in production requests.

## Code locations

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/lib/site.ts`
- `src/lib/metadata.ts`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/resources/[slug]/page.tsx`
- `src/components/JsonLd.tsx`
