# Deployment

## Hosting model

This package is a Next.js App Router app. Vercel is the primary deployment target.

## Runtime behavior in code

- No SPA rewrite rules are needed.
- `public/` is served at the site root.
- `src/middleware.ts` enforces HTTPS redirects in production requests.
- The middleware does not enforce host canonicalization (`non-www` to `www` is not implemented in this repo).

## Robots/indexing behavior

Global robots metadata is set in `src/app/layout.tsx`:

- `index/follow = true` when `VERCEL_ENV === 'production'` **or** `NODE_ENV === 'production'`
- `index/follow = false` otherwise

## Environment variables

### Recommended

- `NEXT_PUBLIC_SITE_ORIGIN=https://www.donnacrm.com`

### Optional analytics

- `NEXT_PUBLIC_GA4_MEASUREMENT_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_TAG_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_INSTALL_SEND_TO`
- `NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID`

### Required for contact email

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL` (optional, defaults to `support@donnacrm.com`)
