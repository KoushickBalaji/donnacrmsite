# Analytics

This folder tracks **analytics/instrumentation** work for the Donna CRM marketing website.

## Current status (what we did)

- **GA4 is installed** and verified in Realtime (active users show up).
- **SPA pageviews** are tracked on route changes.
- **Chrome Web Store CTA clicks** are tracked as `install_click`.
- **UTM parameters** are appended to all Chrome Web Store links so you can attribute which page/CTA drove the click.

## GA4 setup (Vercel)

1. In Vercel → Project → Settings → Environment Variables (Production), set:
   - `NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX`
2. Trigger a **new deploy/build** (env vars are baked at build time).
3. Verify in GA4 **Reports → Realtime**.

Tip: for local dev, copy `.env.example` → `.env` and set `NEXT_PUBLIC_GA4_MEASUREMENT_ID` if you want to test analytics locally.

## Where analytics lives in the codebase

- `src/lib/analytics/Ga4Script.tsx`: injects the Google tag snippet when `NEXT_PUBLIC_GA4_MEASUREMENT_ID` is set (Production only)
- `src/lib/analytics/ga4.ts`: GA4 init + event helpers
- `src/lib/analytics/Analytics.tsx`: SPA pageview tracking + click tracking
- `src/app/layout.tsx`: mounts `Ga4Analytics`
- `src/lib/chromeWebStore.ts`: builds Chrome Web Store URLs with UTMs

## Events we track

- `page_view`
  - Sent on SPA route changes.
- `install_click`
  - Sent when a user clicks a link to the Chrome Web Store extension listing.
  - Includes `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` when present.

## Pending / next actions

- **Mark `install_click` as a key event (conversion):**
  - GA4 → Admin → Key events → New key event → `install_click`
- **Internal traffic filter:** add an internal traffic rule for your own IP(s), keep it in “Testing” first.
- **True installs:** website analytics can only measure “install intent” (the click). Actual installs must be measured in the Chrome Web Store dashboard, or emitted by the extension itself.
