// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { DEFAULT_LOCALE, LOCALES } from './src/i18n/config.ts';

export default defineConfig({
  site: 'https://ruyat.sa',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://ruyat.sa/', // "/" is only a redirect
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: Object.fromEntries(LOCALES.map((l) => [l, l])),
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
