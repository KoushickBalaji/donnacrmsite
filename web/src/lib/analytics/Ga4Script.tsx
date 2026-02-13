import Script from 'next/script'

const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()
const googleAdsTagId = process.env.NEXT_PUBLIC_GOOGLE_ADS_TAG_ID?.trim()
const isProduction =
  process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production'

export function Ga4Script() {
  if (!ga4MeasurementId && !googleAdsTagId) return null
  if (!isProduction) return null

  return (
    <Script id="ga4" strategy="afterInteractive">
      {`(function () {
  var ga4Id = ${JSON.stringify(ga4MeasurementId ?? '')};
  var adsId = ${JSON.stringify(googleAdsTagId ?? '')};
  var primaryId = ga4Id || adsId;
  if (!primaryId) return;
  if (
    navigator.doNotTrack === '1' ||
    (window.doNotTrack && window.doNotTrack === '1')
  ) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;
  window.gtag('js', new Date());
  if (ga4Id) window.gtag('config', ga4Id, { send_page_view: false });
  if (adsId) window.gtag('config', adsId);

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(primaryId);
  document.head.appendChild(s);
})();`}
    </Script>
  )
}
