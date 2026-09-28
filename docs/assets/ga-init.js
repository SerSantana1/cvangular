// Google Analytics initialisation.
// Kept in an external, self-hosted file so the Content-Security-Policy can use
// script-src 'self' (no 'unsafe-inline' and no fragile inline-script hash).
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-H3PFKJXB9F');
