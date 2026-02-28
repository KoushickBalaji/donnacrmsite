# Local development

## Prerequisites

- Node.js 18+
- npm

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Lint: `npm run lint`
- Content QA checks: `npm run qa:content`
- Build: `npm run build`
- Start production server: `npm run start` (after `npm run build`)

## Windows dist-dir behavior

`next.config.ts` sets a Windows-specific dist dir (`.next-windows`).

The `dev` and `build` scripts run `scripts/clean-next.mjs` first to remove stale build artifacts from the active dist dir.

## Environment variables

Common client env vars are documented in `web/.env.example`:

- `NEXT_PUBLIC_SITE_ORIGIN`
- `NEXT_PUBLIC_GA4_MEASUREMENT_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_TAG_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_INSTALL_SEND_TO`

Contact API env vars are documented in `docs/serverless-api.md`.

## Contact form in local dev

`src/views/Contact.tsx` posts to `/api/contact`, served by `src/app/api/contact/route.ts`.

- In `npm run dev`, the route runs locally.
- Without `RESEND_API_KEY` and `CONTACT_FROM_EMAIL`, the endpoint returns a `500` config error.
