import { DEFAULT_LOCALE, LOCALES, type Locale } from './config';

import enMain from './en/main.json';
import arMain from './ar/main.json';
import urMain from './ur/main.json';
import bnMain from './bn/main.json';
import enServices from './en/services.json';
import arServices from './ar/services.json';
import urServices from './ur/services.json';
import bnServices from './bn/services.json';

export * from './config';

const main = { en: enMain, ar: arMain, ur: urMain, bn: bnMain } satisfies Record<Locale, unknown>;
const services = { en: enServices, ar: arServices, ur: urServices, bn: bnServices } satisfies Record<Locale, unknown>;

export type MainCopy = typeof enMain;
export type ServicesCopy = typeof enServices;
export type Service = ServicesCopy['services'][number];

export const getMain = (l: Locale): MainCopy => main[l] as MainCopy;
export const getServices = (l: Locale): ServicesCopy => services[l] as ServicesCopy;

/** Language-independent category key. Category labels are translated, so derive the key from the English file by service id. */
const slug = (s: string) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export const CATEGORY_KEYS = [...new Set(enServices.services.map((s) => slug(s.category)))];
export const categoryKey = (serviceId: string) => {
  const s = enServices.services.find((x) => x.id === serviceId);
  return s ? slug(s.category) : '';
};

/** Interpolate `{name}` placeholders, e.g. count_label "{count} services". */
export const fmt = (str: string, vars: Record<string, string | number>) =>
  str.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));

/** Prefix a locale-less path ("/services/") with a locale ("/ar/services/"). */
export const localizePath = (l: Locale, path = '/') => `/${l}${path.startsWith('/') ? path : `/${path}`}`;

/** Strip the locale prefix from a pathname: "/ar/services/" -> "/services/". */
export const stripLocale = (pathname: string) => {
  const re = new RegExp(`^/(${LOCALES.join('|')})(?=/|$)`);
  return pathname.replace(re, '') || '/';
};

export const localeStaticPaths = () => LOCALES.map((lang) => ({ params: { lang } }));
export { DEFAULT_LOCALE };

/** All languages use Western (Latin) digits. */
export const formatNumber = (l: Locale, n: number, opts?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat(`${l}-u-nu-latn`, opts).format(n);

/** Contact form service options = every service on the site, in the page language. */
export const contactServiceOptions = (l: Locale) =>
  getServices(l).services.map((s) => ({ value: s.id, label: s.title }));
