// Outbound click (2): bestdigitalsolution.shop only.
function gtag_report_conversion(url) {
  var navigated = false;
  var callback = function () {
    if (!navigated && typeof url !== 'undefined') {
      navigated = true;
      window.location.href = url;
    }
  };
  if (typeof window.gtag !== 'function') {
    callback();
    return false;
  }
  window.setTimeout(callback, 2500);
  window.gtag('event', 'conversion', {
    'send_to': 'AW-18480201971/k7KACL-4toodEPOBhuxE',
    'value': 1.0,
    'currency': 'INR',
    'event_callback': callback,
    'event_timeout': 2000
  });
  return false;
}
