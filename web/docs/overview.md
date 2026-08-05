# Project overview

## Purpose

`web/` is a Next.js App Router marketing site for Donna CRM.

It includes:

- Public marketing pages and legal pages.
- A content-driven resources section (`/resources` and `/resources/[slug]`).
- A customer-facing product update history (`/updates`) backed by `src/content/updates.ts`.
- A contact form endpoint (`/api/contact`) that sends email via Resend.
- SEO metadata, sitemap, robots route, and JSON-LD markup.
- Consent-gated analytics (GA4 and optional Google Ads conversion tracking).

## Tech stack

- Framework: Next.js App Router (`src/app/`)
- UI: React + TypeScript (`src/views/`, `src/components/`)
- Styling: Tailwind CSS + CSS variables (`src/app/globals.css`, `tailwind.config.cjs`)
- Icons: `lucide-react`
- Serverless: Next.js route handlers (`src/app/api/`)

## Repository layout (high level)

- `src/app/`
  - Route files (`page.tsx`), metadata routes (`robots.ts`, `sitemap.ts`), root layout, and API handlers.
- `src/views/`
  - Page-level view components used by route files.
- `src/components/`
  - Shared UI building blocks, layout pieces, consent components.
- `src/content/`
  - Static content collections (`resources.ts`, `faqs.ts`, `updates.ts`).
- `src/lib/`
  - Shared utilities (`metadata`, `site`, `consent`, analytics helpers, URL builders).
- `src/middleware.ts`
  - Production HTTPS redirect middleware.
- `public/`
  - Static assets (icons, screenshots, stock images, OG image).

## Product boundary

This repository contains website UI and content only. It does not include the extension runtime/product logic.

The sibling `gmailCRM` repository is the implementation source used to verify product-update claims. The canonical writing standard for turning verified behavior into marketing copy is [content-and-voice.md](./content-and-voice.md).
