// Outbound click (2): keep this page open while WhatsApp opens separately.
function gtag_report_conversion() {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-18480201971/k7KACL-4toodEPOBhuxE',
      'value': 1.0,
      'currency': 'INR'
    });
  }
  return true;
}
