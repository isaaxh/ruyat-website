/** Every language we have copy for. */
export const ALL_LOCALES = ['ar', 'en', 'ur', 'bn'] as const;
export type Locale = (typeof ALL_LOCALES)[number];

/** Languages live on the site. Urdu is paused for now (copy kept in src/i18n/ur); add it back here to enable. */
export const LOCALES: readonly Locale[] = ['ar', 'en', 'bn'];

// Default language. Also update public/_redirects if this changes.
export const DEFAULT_LOCALE: Locale = 'ar';

export const RTL_LOCALES: readonly Locale[] = ['ar', 'ur'];

export const isLocale = (v: string | undefined): v is Locale =>
  !!v && (LOCALES as readonly string[]).includes(v);

export const dirFor = (l: Locale) => (RTL_LOCALES.includes(l) ? 'rtl' : 'ltr');
