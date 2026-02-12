import Script from 'next/script'

const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim()
const isProduction = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production'

export function Ga4Script() {
  if (!measurementId) return null
  if (!isProduction) return null

  return (
    <Script id="ga4" strategy="afterInteractive">
      {`(function () {
  var id = ${JSON.stringify(measurementId)};
  if (!id) return;
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
  window.gtag('config', id, { send_page_view: false });

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(s);
})();`}
    </Script>
  )
}
