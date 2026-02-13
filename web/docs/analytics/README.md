# Analytics

This folder tracks **analytics/instrumentation** work for the Donna CRM marketing website.

## Current status (what we did)

- **GA4 is installed** and verified in Realtime (active users show up).
- **SPA pageviews** are tracked on route changes.
- **Chrome Web Store CTA clicks** are tracked as `install_click`.
- **UTM parameters** are appended to all Chrome Web Store links so you can attribute which page/CTA drove the click.

## Setup (Vercel)

1. In Vercel → Project → Settings → Environment Variables (Production), set:
   - `NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX` (optional)
   - `NEXT_PUBLIC_GOOGLE_ADS_TAG_ID=AW-XXXXXXXXX` (optional)
   - `NEXT_PUBLIC_GOOGLE_ADS_INSTALL_SEND_TO=AW-XXXXXXXXX/XXXXXXXXXXXXXXX` (optional; records install CTA clicks as an Ads conversion)
2. Trigger a **new deploy/build** (env vars are baked at build time).
3. Verify:
   - GA4 → Reports → Realtime
   - Google Ads → Conversions / Diagnostics (after traffic)

Tip: for local dev, copy `.env.example` → `.env` and set `NEXT_PUBLIC_GA4_MEASUREMENT_ID` if you want to test analytics locally.

## Where analytics lives in the codebase

- `src/lib/analytics/Ga4Script.tsx`: injects the Google tag snippet (GA4 + optional Google Ads) in production
- `src/lib/analytics/ga4.ts`: GA4 init + event helpers
- `src/lib/analytics/googleAds.ts`: Google Ads conversion helper for install clicks
- `src/lib/analytics/Analytics.tsx`: SPA pageview tracking + click tracking
- `src/app/layout.tsx`: mounts `Ga4Analytics`
- `src/lib/chromeWebStore.ts`: builds Chrome Web Store URLs with UTMs

## Events we track

- `page_view` (SPA route changes)
- `install_click` (Chrome Web Store listing link clicks; includes UTM params when present)

## Notes

- Website analytics can only measure “install intent” (the click). True installs must be measured in the Chrome Web Store dashboard, or emitted by the extension itself.
