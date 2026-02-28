# Analytics

This folder documents analytics instrumentation in the website codebase.

## Current implementation

- GA4 and Google Ads tags are loaded from `Ga4Script` only when all are true:
  - Runtime is considered production (`VERCEL_ENV === 'production'` or `NODE_ENV === 'production'`).
  - At least one tag ID is configured.
  - Consent is ready and opted in.
  - Do Not Track is not enabled.
- SPA page views are sent on route changes (`page_view`).
- Chrome Web Store install CTA clicks are tracked as `install_click`.
- Optional Google Ads conversion event is sent on install CTA clicks when `NEXT_PUBLIC_GOOGLE_ADS_INSTALL_SEND_TO` is configured.

## Consent model

- Consent is stored in `localStorage` key `donna_consent_v1`.
- Consent schema has two categories: `analytics` and `marketing`.
- If either category is disabled, corresponding Google cookies are cleared.
- If tracking was previously enabled and then disabled, the page reloads to reset runtime state.
- If browser DNT is enabled, tracking does not run.

## Event details

### `page_view`

Triggered on pathname/search changes when analytics consent is on.

- `page_path` includes pathname plus allowed query params only.
- Allowed query params: `utm_*`, `gclid`, `gbraid`, `wbraid`.

### `install_click`

Triggered for clicks to Donna's Chrome Web Store listing when consent allows tracking.

Captured fields include:

- `link_url`
- `link_text`
- `page_path`
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` (if present)

## Environment variables

- `NEXT_PUBLIC_GA4_MEASUREMENT_ID` (optional)
- `NEXT_PUBLIC_GOOGLE_ADS_TAG_ID` (optional)
- `NEXT_PUBLIC_GOOGLE_ADS_INSTALL_SEND_TO` (optional)

## Code locations

- `src/lib/analytics/Ga4Script.tsx`
- `src/lib/analytics/Analytics.tsx`
- `src/lib/analytics/ga4.ts`
- `src/lib/analytics/googleAds.ts`
- `src/lib/consent.ts`
- `src/components/consent/*`
- `src/lib/chromeWebStore.ts`
