# Analytics

This folder documents analytics instrumentation in the website codebase.

## Current implementation

- `GoogleTagScripts` renders GA4 and Google Ads tags in production when at least one Google tag ID is configured. It applies the stored consent choice and defaults storage and personalization to denied when no choice exists.
- Google Consent Mode may send cookieless measurement while storage is denied.
- The OpenAI Ads Measurement Pixel loads only when marketing consent is granted and Do Not Track is not enabled.
- SPA page views are sent on route changes (`page_view`).
- Chrome Web Store install CTA clicks are tracked as `install_click`.
- Optional Google Ads conversion event is sent on install CTA clicks when `NEXT_PUBLIC_GOOGLE_ADS_INSTALL_SEND_TO` is configured.
- The OpenAI Ads Measurement Pixel loads after marketing consent and sends the custom `install_cta_clicked` event for Chrome Web Store CTA clicks.

## Consent model

- Consent is stored in `localStorage` key `donna_consent_v1`.
- Consent schema has two categories: `analytics` and `marketing`.
- If either category is disabled, corresponding Google cookies are cleared.
- If marketing consent is disabled, the OpenAI Ads `__oppref` attribution cookie is cleared.
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

The same confirmed CTA boundary sends the OpenAI Ads custom event `install_cta_clicked` without customer identifiers.

## OpenAI Ads event coverage

- `page_viewed`: intentionally omitted from the initial setup because the campaign measures install intent and broad page-view conversions would be noisy.
- `contents_viewed`: omitted because content consumption is not a confirmed campaign conversion.
- `items_added`, `checkout_started`, and `order_created`: not applicable because the marketing site has no cart, checkout, or order-completion flow.
- `lead_created`: deferred. The contact form has a separate success boundary and should be added only if contact requests become a campaign goal.
- `registration_completed`, `trial_started`, and `subscription_created`: omitted because those outcomes happen outside the marketing website and no verified website success boundary exists.
- `appointment_scheduled`: not applicable because the site has no appointment-booking flow.
- `app_installed` and `app_opened`: not available through the browser Pixel, and the website cannot verify an extension installation or open event.

## Environment variables

- `NEXT_PUBLIC_GA4_MEASUREMENT_ID` (optional)
- `NEXT_PUBLIC_GOOGLE_ADS_TAG_ID` (optional)
- `NEXT_PUBLIC_GOOGLE_ADS_INSTALL_SEND_TO` (optional)
- `NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID` (optional override; defaults to DonnaCRM Pixel ID `Qu56HHWggwyxkPXmk5cUEk`)

## Code locations

- `src/lib/analytics/GoogleTagScripts.tsx`
- `src/lib/analytics/Analytics.tsx`
- `src/lib/analytics/ga4.ts`
- `src/lib/analytics/googleAds.ts`
- `src/lib/analytics/OpenAIAdsPixel.tsx`
- `src/lib/analytics/openaiAds.ts`
- `src/lib/consent.ts`
- `src/components/consent/*`
- `src/lib/chromeWebStore.ts`
