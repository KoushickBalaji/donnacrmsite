# Donna CRM Website (web)

This package is the Donna CRM marketing website, built with **Next.js (App Router)** and deployed on Vercel.

## Quickstart

Prereqs: Node.js 18+.

- Install: `npm install`
- Run: `npm run dev`
- Page QA: `npm run qa`
- Lint: `npm run lint`
- Build: `npm run build`
- Production-like run (recommended for perf checks): `npm run build` then `npm run start`

### Dev-mode note

In `next dev`, Next.js compiles routes on-demand the first time you visit them (and prefetching is intentionally limited in development). If page-to-page navigation feels slow locally, validate the real user experience with `npm run build` + `npm run start` or a Vercel preview deploy.

Run `npm run qa` before publishing new or changed pages. It runs content QA, internal link QA, SEO QA, and ESLint.

## Documentation

Start here: [docs/README.md](docs/README.md).

SEO: [docs/seo/README.md](docs/seo/README.md). Analytics: [docs/analytics/README.md](docs/analytics/README.md).

## Contact form email (Vercel)

The `/contact` page posts to `/api/contact` (`src/app/api/contact/route.ts`), which sends an email via Resend.

Set these environment variables in your deployment:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (must be a verified sender in Resend)
- `CONTACT_TO_EMAIL` (optional, defaults to `support@donnacrm.com`)

Note: `npm run dev` (Next.js) runs the API route locally, so the contact form can be tested end-to-end in development.
