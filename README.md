# Ruyat Website

Company-profile website for **Ruyat Al-Injaz** (Saudi Arabia), a provider of business services and Umrah/Hajj coordination. A multilingual, static site built with Astro and Tailwind CSS.

- **Live domain:** https://ruyat.sa (to be connected at launch)
- **Languages:** Arabic (default), English, Bangla. Urdu is built but paused.
- **Hosting:** Cloudflare Pages (static output, no backend, no CMS)

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Internationalisation and RTL](#internationalisation-and-rtl)
- [Design system](#design-system)
- [Visual verification](#visual-verification)
- [Contact and map](#contact-and-map)
- [Deployment](#deployment)
- [Open items](#open-items)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Pages:** Home (with contact section), All Services (filter tabs and live count), Service Detail (one page per service), Contact.
- **Multilingual routing:** `/ar`, `/en`, `/bn`. `/` redirects to `/ar/`. The language switcher keeps the visitor on the same page.
- **RTL support** for Arabic (and Urdu) using Tailwind logical properties.
- **WhatsApp-only inquiries:** the form and floating button build a `wa.me` link in the page language. No backend.
- **Google Maps embed** with a "Show directions" button.
- **SEO:** per-language title and meta tags, `hreflang` for every live language plus `x-default`, generated sitemap, `robots.txt`.
- **Mobile-first** layouts scaling to tablet and desktop.

## Tech stack

| Area      | Choice                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| Framework | [Astro](https://astro.build) (static output)                                                                 |
| Styling   | [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/vite`, design tokens in `src/styles/tokens.css` |
| Language  | TypeScript                                                                                                   |
| SEO       | `@astrojs/sitemap`                                                                                           |
| Visual QA | Playwright, pixelmatch, pngjs                                                                                |
| Hosting   | Cloudflare Pages                                                                                             |

## Getting started

### Prerequisites

- Node.js 20 or newer (developed on Node 24)
- npm

### Install and run

```bash
git clone https://github.com/isaaxh/ruyat-website.git
cd ruyat-website
npm install
npm run dev
```

The dev server runs at http://localhost:4321. Open `/ar/`, `/en/` or `/bn/`.

### Production build

```bash
npm run build     # outputs static files to dist/
npm run preview   # serves dist/ locally
```

## Scripts

| Command             | Description                                                 |
| ------------------- | ----------------------------------------------------------- |
| `npm run dev`       | Start the Astro dev server                                  |
| `npm run build`     | Build the static site to `dist/`                            |
| `npm run preview`   | Preview the production build                                |
| `npm run check`     | Type-check and lint Astro files (`astro check`)             |
| `npm run visual`    | Compare pages against the reference screenshots (see below) |
| `npm run prototype` | Serve `design/prototype.html` locally for measuring         |

## Project structure

```
.
├── design/                  Source of truth for the visuals
│   ├── prototype.html       Visual prototype (build 1:1 from this)
│   ├── design-system/       Tokens, components, fonts, assets
│   └── screenshots/         Reference screenshots (mobile, tablet, desktop, Arabic RTL)
├── public/                  Static files: logos, images, robots.txt, _redirects
├── scripts/                 Visual-check and prototype helper scripts
└── src/
    ├── components/          Sections and shared UI (contact/, services/, icons/)
    ├── i18n/                Copy per language (ar, en, bn, ur) and config.ts
    ├── layouts/             BaseLayout (html lang/dir, SEO tags)
    ├── lib/                 Site constants, nav, icons, WhatsApp message builder
    ├── pages/               [lang]/ routes: home, services, contact
    └── styles/              tokens.css and global.css
```

## Internationalisation and RTL

- All copy lives in `src/i18n/<lang>/main.json` and `services.json`. Never hardcode copy in components.
- Live languages and the default are set in `src/i18n/config.ts`. To enable Urdu, add `'ur'` to `LOCALES`. If the default language changes, update `public/_redirects` too.
- Arabic and Urdu set `dir="rtl"` and the matching `lang` on `<html>`.
- Use logical properties only (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`, `text-start`), and flip directional icons with the `rtl:` variant.
- Western digits are used in every language. English uses Gregorian dates, SAR currency and the +966 phone format.
- Bangla WhatsApp message templates are in English, by client request.
- Urdu Nastaliq needs a larger line-height than other scripts or it clips.

## Design system

The prototype is the visual source of truth.

- Use design-system tokens only. No hardcoded colors, sizes or fonts.
- Breakpoints: tablet from 641px, desktop from 1024px (defined in `tokens.css`; they win where the prototype differs).
- Use the logos, images and icons from `design/design-system/assets/`. No stock imagery.
- Fonts follow the design system per script: Latin, Arabic, Urdu (Nastaliq) and Bangla (Hind Siliguri), subset per language.

See `design/design-system/README.md` and `HOW-TO-USE.md` for details.

## Visual verification

After each page change, compare against `design/screenshots/` using Playwright:

```bash
npx astro dev --port 4321
node scripts/visual-check.mjs --page home --lang en,ar --vp mobile,tablet,desktop
```

Options: `--page <home|all-services|service-detail|contact>`, `--lang`, `--vp`, `--section`, `--range`, `--css`. Output (mine, reference, diff) is written to `test-results/visual/`. The target is 2% or less difference per `[data-section]`, or a documented known difference.

## Contact and map

- **WhatsApp:** the business number `0534880040` is used as `966534880040` in `wa.me` links. Message templates are `whatsapp.fab_message` and `whatsapp.form_message` in `src/i18n/<lang>/main.json`, filled by `buildInquiryMessage()` in `src/lib/whatsapp.ts`.
- **Map:** lazy-loaded Google Maps iframe (no API key). Office coordinates are `21.383771, 39.785028`. Directions link: `https://www.google.com/maps/dir/?api=1&destination=21.383771,39.785028`.

## Deployment

Hosted on Cloudflare Pages (Free plan), auto-deployed from GitHub with a preview URL per push.

| Setting          | Value           |
| ---------------- | --------------- |
| Framework preset | Astro           |
| Build command    | `npm run build` |
| Output directory | `dist`          |
| Node version     | 20 or newer     |

Launch steps (human tasks):

1. Add the developer as Administrator on the client's Cloudflare account.
2. Connect `ruyat.sa` (registered at Souq T2). Check whether Souq T2 allows nameserver changes. If not, add DNS records at Souq T2 instead.
3. Keep the Google Workspace MX records intact when changing DNS.

## Open items

- Contact details still to be finalized: address, email, social links, design credit. These are marked placeholders in the code. Do not invent values.
- Urdu (`/ur`) is paused and its copy lacks some newer keys.

## Contributing

1. Branch from `main` (`feature/<name>`).
2. Build one section at a time and commit per section with a clear message.
3. Keep components modular and reusable.
4. Run `npm run check` and `npm run build` before opening a pull request.
5. Open a PR into `main`.

## License

Private client project. All rights reserved. Not licensed for reuse or redistribution without written permission from the owner.
