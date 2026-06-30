# Local development

## Prerequisites

- Node.js 18+
- npm

## Dev Server

### Starting the dev server

```bash
npm run dev
```

This will:
1. Clean the build cache using `scripts/clean-next.mjs`
2. Start the Next.js dev server on `http://localhost:3000`
3. Enable hot module reloading (HMR) for instant code changes

The server should be ready in 2-5 seconds. You'll see output like:
```
✓ Ready in 3s
```

### Troubleshooting dev server startup

**Port 3000 already in use:**
- If another process is using port 3000, Next.js will automatically use the next available port (3001, 3002, etc.)
- Check the console output to see which port was assigned

**Dev server stuck on "Starting...":**
- This can occur on Windows if a previous build cache is locked by an old process
- **Solution:** Restart your machine to clear process locks, then run `npm run dev` again
- The `scripts/clean-next.mjs` script will attempt to clean the `.next-windows` directory on startup

**Slow compilation on first run:**
- The initial dev server startup may take 10-30 seconds on Windows while Next.js compiles all pages
- Subsequent edits will be much faster with HMR

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Lint: `npm run lint`
- Page publication QA: `npm run qa`
- Content QA checks: `npm run qa:content`
- Internal link QA checks: `npm run qa:links`
- SEO QA checks: `npm run qa:seo`

Run `npm run qa` before publishing new or changed pages. It checks copy hygiene, internal links, SEO metadata, sitemap discoverability, duplicate H1s, image alt text, and lint errors without requiring a local production build.

## Build and preview verification

Do not use local production builds as the normal verification path for this project. On this Windows workspace, `.next-windows` artifacts can be locked by prior processes, which makes `npm run build` unreliable as a local signal.

Use this sequence instead:

1. Run `npm run qa` locally.
2. Deploy or inspect a Vercel preview.
3. Use the preview URL for runtime, layout, and content review.

## Windows dist-dir behavior

`next.config.ts` sets a Windows-specific dist dir (`.next-windows`).

The `dev` and `build` scripts run `scripts/clean-next.mjs` first to remove stale build artifacts from the active dist dir. Because these artifacts can be locked locally, treat Vercel preview deployments as the build authority.

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
