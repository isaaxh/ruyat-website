# Ruyat website: instructions for Claude Code

Company-profile website for Ruyat (Saudi Arabia), a provider of business services and Umrah/Hajj coordination.
Languages: English, Arabic, Urdu, Bangla.

## Source of truth (read first)

- `design/prototype.html` is the visual source of truth. Build the site 1:1 from it.
- `design/design-system/` holds the tokens, components, fonts, breakpoints and `assets/`.
- `design/screenshots/` holds reference screenshots (mobile, tablet, desktop, Arabic RTL).
- `i18n/*.json` holds all copy per language. Never hardcode copy in components.

### Rules
- Match the prototype exactly: layout, spacing, colors, type, radii, shadows, motion.
- Use design-system tokens only. No hardcoded colors, sizes or fonts. Map tokens into the Tailwind config.
- Do not invent styles, components or content. If something is missing or ambiguous, ask before guessing.
- Use the assets in `design-system/assets/` (logos in SVG and PNG, images, icons). Do not substitute stock imagery.

## Stack

- Astro + Tailwind CSS, static output, no CMS, no backend.
- Mobile-first: write the mobile layout first, then scale up to tablet and desktop with similar (not identical) layouts, using the breakpoints from the design system.
- Breakpoints: tablet from 641px, desktop from 1024px (`tokens.css`). Tokens win where the prototype differs (it switches at 768px).
- Fonts: use the exact font names and weights from the design system for Latin, Arabic, Urdu (Nastaliq) and Bangla. Subset per language. Urdu Nastaliq needs a larger line-height than the other scripts, or it will clip.

## i18n and RTL

- Routes: `/ar`, `/en`, `/bn` (Urdu `/ur` paused for now; enable in `src/i18n/config.ts`). `/` redirects to the default language. Default language: Arabic (`/` → `/ar/`).
- Arabic and Urdu are RTL: set `dir="rtl"` and the matching `lang` on `<html>`.
- Use Tailwind logical properties only (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`, `text-start`). Avoid `left`/`right`/`ml-`/`mr-`.
- Flip directional icons and arrows with the `rtl:` variant.
- Numerals: Western digits in all languages. English uses Western digits, Gregorian dates, SAR currency, +966 phone format.
- SEO: `hreflang` for every live language plus `x-default`, per-language title and meta tags, sitemap.
- The language switcher keeps the user on the same page in the new language.

## Features

### Contact (WhatsApp only)
- The inquiry form builds a `wa.me` link from the form values (name, selected service, and so on) using `encodeURIComponent`, and opens it. No backend.
- `wa.me` needs the international format with no `+` or leading zero. The business number 0534880040 becomes `966534880040`.
- Message text is in the page's current language (Bangla is the exception: its templates are in English, by client request): templates `whatsapp.fab_message` and `whatsapp.form_message` in `src/i18n/<lang>/main.json`, filled by `buildInquiryMessage()` in `src/lib/whatsapp.ts`.

### Map
- Google Maps embed iframe, `loading="lazy"`, no API key.
- "Show directions" button linking to `https://www.google.com/maps/dir/?api=1&destination=LAT,LNG`.
- Office coordinates: 21.383771, 39.785028.

## Pages

- Home (includes a contact section), All Services (filter tabs and dynamic count), Service Detail (one page per service), Contact (separate page).
- Contact details still to be finalized: address, email, social links, design credit. Leave clearly marked placeholders; do not invent values.

## Workflow

1. Scaffold Astro + Tailwind + i18n, push to GitHub, deploy to `*.pages.dev`.
2. Build the site 1:1 from the prototype and design system.
3. After each page, screenshot with Playwright at mobile (375px), tablet (834px) and desktop (1440px) (and Arabic RTL) and compare against `design/screenshots/`. Fix differences before moving on.
4. Share previews with the client, then connect the domain at launch.

## Launch notes (human steps, not build tasks)

- Hosting: Cloudflare Pages (Free plan), auto-deploy from GitHub, preview URL per push. Client's own Cloudflare account, with the developer added as Administrator.
- Domain: ruyat.sa, registered at Souq T2. Connect at launch.
- Business email is on Google Workspace. Keep its MX records intact when changing DNS.
- Check that Souq T2 allows nameserver changes. If not, use records at Souq T2 instead.
