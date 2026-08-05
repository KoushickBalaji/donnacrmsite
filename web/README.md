# Donna CRM Website (web)

This package is the Donna CRM marketing website, built with **Next.js (App Router)** and deployed on Vercel.

## Quickstart

Prereqs: Node.js 18+.

- Install: `npm install`
- Run: `npm run dev`
- Page QA: `npm run qa`
- Lint: `npm run lint`
- Build/runtime verification: use Vercel preview deployments

### Dev-mode note

In `next dev`, Next.js compiles routes on-demand the first time you visit them (and prefetching is intentionally limited in development). Do not use local production builds as the verification path for this project; local Windows build artifacts can lock or hang. Use `npm run qa` locally, then use a Vercel preview deployment for build/runtime/layout verification.

Run `npm run qa` before publishing new or changed pages. It runs content QA, internal link QA, SEO QA, and ESLint.

## Documentation

Start here: [docs/README.md](docs/README.md).

All visitor-facing copy must follow the [Donna CRM content and voice guide](docs/content-and-voice.md). Agents should also read the repository-level [AGENTS.md](../AGENTS.md) before changing marketing content.

SEO: [docs/seo/README.md](docs/seo/README.md). Analytics: [docs/analytics/README.md](docs/analytics/README.md).

## Contact form email (Vercel)

The `/contact` page posts to `/api/contact` (`src/app/api/contact/route.ts`), which sends an email via Resend.

Set these environment variables in your deployment:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (must be a verified sender in Resend)
- `CONTACT_TO_EMAIL` (optional, defaults to `support@donnacrm.com`)

Note: `npm run dev` (Next.js) runs the API route locally, so the contact form can be tested end-to-end in development.
