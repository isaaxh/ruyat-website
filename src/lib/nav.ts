import { getMain, localizePath, type Locale } from '../i18n';

export type NavKey = 'home' | 'about' | 'services' | 'testimonials';

/** Main navigation (header and burger menu). Paths are locale-less; section anchors live on the home page. */
const NAV: { key: NavKey; path: string }[] = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/#about' },
  { key: 'services', path: '/services/' },
  { key: 'testimonials', path: '/#testimonials' },
];

export const navItems = (lang: Locale, active?: NavKey) => {
  const t = getMain(lang).nav;
  return NAV.map((n) => ({ key: n.key, label: t[n.key], href: localizePath(lang, n.path), active: n.key === active }));
};
