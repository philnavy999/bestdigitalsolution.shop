const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduced) {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// Count a WhatsApp conversion only when a visitor clicks a WhatsApp link.
function gtag_report_conversion(url) {
  let redirected = false;
  const redirect = () => {
    if (!redirected && url) {
      redirected = true;
      window.location.href = url;
    }
  };

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-18480201971/-B-bCNbOsoodEPOBhuxE',
      value: 1.0,
      currency: 'INR',
      event_callback: redirect,
      event_timeout: 2000
    });
    window.setTimeout(redirect, 2100);
  } else {
    redirect();
  }
  return false;
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="https://wa.link/"]');
  if (!link) return;
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18480201971/-B-bCNbOsoodEPOBhuxE',
        value: 1.0,
        currency: 'INR'
      });
    }
    return;
  }
  event.preventDefault();
  gtag_report_conversion(link.href);
});

