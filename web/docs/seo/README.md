# SEO

This folder tracks **SEO-specific** work for the Donna CRM marketing website.

Start here for GSC: `docs/seo/search-console.md`.

## Current status

- **Canonical host:** `https://www.donnacrm.com` (non-`www` redirects to `www`).
- **Sitemap + robots:** served at `/sitemap.xml` and `/robots.txt` via Next.js metadata routes (`src/app/sitemap.ts`, `src/app/robots.ts`).
- **Per-page metadata:** each route exports `metadata` in `src/app/**/page.tsx` (title/description/canonical/OpenGraph).
- **Share image:** `public/og.png` is used as the default `og:image`.
- **Structured data:** global `Organization` + `WebSite` via `src/app/layout.tsx`, plus page-level JSON-LD via `src/components/JsonLd.tsx`.

## Where SEO lives in the codebase

- `src/app/layout.tsx` (global metadata + preview `noindex`)
- `src/app/**/page.tsx` (per-route metadata)
- `src/app/robots.ts` (crawler directives + sitemap location)
- `src/app/sitemap.ts` (URL discovery list)
- `public/og.png` (default share image)

## Google Search Console checklist

1. Use the **Domain property** (`donnacrm.com`) for ongoing work.
2. Submit the sitemap: `https://www.donnacrm.com/sitemap.xml`.
3. For key URLs, run **URL inspection → Test live URL → Request indexing**:
   - `https://www.donnacrm.com/`
   - `https://www.donnacrm.com/features`
   - `https://www.donnacrm.com/pricing`
   - `https://www.donnacrm.com/contact`
4. Monitor **Indexing → Pages**:
   - *Discovered – currently not indexed*: usually needs time, stronger internal linking, and/or more authority (links).
   - *Crawled – currently not indexed*: often indicates thin/duplicate/low-demand content; improve the page.

## Pending / next actions

- **Make the canonical redirect permanent:** ensure `donnacrm.com → www.donnacrm.com` is a **301/308**.
- **Set `NEXT_PUBLIC_SITE_ORIGIN`:** in Vercel Production env, set `NEXT_PUBLIC_SITE_ORIGIN=https://www.donnacrm.com` for stable canonicals across environments.
- **Improve content quality for non-brand queries:** add high-intent landing pages and deeper resource content (current `/resources` is placeholder-heavy).
  - Good next candidates: `gmail crm`, `gmail crm extension`, `crm for consultants`, `crm for freelancers`.

