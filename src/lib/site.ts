// Business constants. Values marked TODO are placeholders pending client confirmation; do not invent them.

export const BRAND = 'Ruyat';
export const SITE_URL = 'https://ruyat.sa';

/** Local format as given by the client. */
export const PHONE_LOCAL = '0534880040';
/** wa.me format: international, no "+", no leading zero. */
export const WHATSAPP_NUMBER = '966534880040';

export const OFFICE = {
  lat: 21.383771,
  lng: 39.785028,
};

export const mapsDirectionsUrl = (lat: number, lng: number) =>
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

/** Keyless Google Maps embed URL for the lazy iframe. */
export const mapsEmbedUrl = (lat: number, lng: number, lang = 'en') =>
  `https://www.google.com/maps?q=${lat},${lng}&hl=${lang}&z=16&output=embed`;

export const EMAIL = 'info@ruyat.sa';

/** Social profile URLs. null = placeholder, to be added later. Labels come from i18n footer.social (same order). */
export const SOCIAL = [
  { key: 'whatsapp', url: `https://wa.me/${WHATSAPP_NUMBER}` },
  { key: 'instagram', url: null }, // TODO
  { key: 'tiktok', url: 'https://www.tiktok.com/@ruyat.sa' },
  { key: 'x', url: null }, // TODO
  { key: 'snapchat', url: 'https://www.snapchat.com/add/ruyat.sa' },
  { key: 'youtube', url: null }, // TODO
] as const;

/** Footer quick links. Labels: nav.home, nav.about, nav.services, nav.contact, faq.heading. Paths are locale-less. */
export const QUICK_LINKS = [
  { label: 'nav.home', path: '/' },
  { label: 'nav.about', path: '/#about' },
  { label: 'nav.services', path: '/services/' },
  { label: 'nav.contact', path: '/contact/' },
  { label: 'faq.heading', path: '/#faq' },
] as const;
