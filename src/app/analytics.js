const gaMeasurementId = (import.meta.env.VITE_GA_MEASUREMENT_ID ?? '').trim();
const googleAdsConversionId = (import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID ?? '').trim();
const googleAdsConversionLabel = (import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL ?? '').trim();

let analyticsInitialized = false;

function ensureDataLayer() {
  if (typeof window === 'undefined') return [];
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function initializeAnalytics() {
  if (typeof window === 'undefined' || analyticsInitialized) return;

  analyticsInitialized = true;
  const dataLayer = ensureDataLayer();
  window.gtag = window.gtag || function gtag() {
    dataLayer.push(arguments);
  };

  const primaryId = gaMeasurementId || googleAdsConversionId;
  if (!primaryId || typeof document === 'undefined') return;

  if (!document.querySelector('script[data-arcane-analytics="gtag"]')) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryId)}`;
    script.dataset.arcaneAnalytics = 'gtag';
    document.head.appendChild(script);
  }

  window.gtag('js', new Date());
  if (gaMeasurementId) window.gtag('config', gaMeasurementId, { send_page_view: false });
  if (googleAdsConversionId && googleAdsConversionId !== gaMeasurementId) {
    window.gtag('config', googleAdsConversionId, { send_page_view: false });
  }
}

export function trackEvent(eventName, parameters = {}) {
  if (typeof window === 'undefined') return;

  initializeAnalytics();
  const payload = { event: eventName, ...parameters };
  ensureDataLayer().push(payload);

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
}

export function trackPageView(path) {
  trackEvent('page_view', {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
}

export function trackWhatsAppClick(parameters = {}) {
  trackEvent('whatsapp_click', parameters);
}

export function trackLead(parameters = {}) {
  trackEvent('generate_lead', parameters);

  if (typeof window !== 'undefined' && typeof window.gtag === 'function' && googleAdsConversionId && googleAdsConversionLabel) {
    window.gtag('event', 'conversion', {
      send_to: `${googleAdsConversionId}/${googleAdsConversionLabel}`,
    });
  }
}
