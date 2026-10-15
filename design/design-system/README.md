Ruyat Al Injaz Business Services (رؤية الإنجاز لخدمات الأعمال) is a Makkah firm with two sides: business solutions (company formation, investment licences, government services and investor services) and Umrah and Hajj coordination (visas, hotels, transport, catering). The identity is **navy and metallic gold on white**: formal, trustworthy, quietly premium. Print collateral is Arabic-first and right-to-left; the website ships in four languages (English, Arabic, Urdu, Bangla) with English as the default.

## Using this system

1. Load `tokens.css` (generated from `tokens.json`), then `components/bundle.css`. bundle.css imports the four Google Fonts itself.
2. Set `lang` and `dir` on `<html>` (`en`/`ltr`, `ar`/`rtl`, `ur`/`rtl`, `bn`/`ltr`) and `class="ra"` on `<body>`. Fonts, leading, type sizes and layout direction all follow from those two attributes.
3. Build pages from the components (Layout first). Use tokens by name (`var(--space-6)`, `var(--accent)`); never paste a hex, px value or font name into page CSS. If something needs a value the system doesn't have, add the token here first.
4. Check every screen at 390px, 834px and 1440px, and in English and Arabic at least.

## Voice and content

- Write in Modern Standard Arabic, formal and confident; address the client as «أنت» in the singular (نحقق به **رؤيتك**). Speak as «نحن» (نصنع، نحقق).
- English: plain, warm and formal, the same voice. Speak as "we", address "you". Title case for headlines, sentence case for buttons and labels.
- Taglines: «من الفكرة .. إلى الإنجاز» (lockup slogan), «نصنع التميز ونحقق به رؤيتك» (headline), «خبرة .. احترافية .. إنجاز» (three-beat value line). Use the spaced double dot « .. » between beats, as the brand does.
- Name services exactly as the brand does: تأسيس الشركات، إصدار التراخيص الاستثمارية، الخدمات الحكومية، خدمات المستثمرين، الإقامة المميزة، الخدمات الإدارية والتجارية، الاستشارات القانونية، خدمات العامة والتخليص. On the website the 15 services sit in three categories: Business Setup · Government · Umrah & Hajj.
- Pilgrims are "Guests of the Most Merciful" (ضيوف الرحمن). Keep religious places and terms respectful and correctly spelled: Umrah, Hajj, Makkah, Madinah, the Haram.
- No emoji, no exclamation marks. Phone numbers, prices, stats and the domain `ruyat.sa` stay in Latin digits and letters in every language. Phone format `+966 53 488 0040`; currency `SAR`; dates Gregorian.
- Never invent figures, testimonials or claims: missing facts are placeholders like `[EMAIL]`.

## Colour

- Two colours carry the brand: `navy-900` and gold (`gold-700` → `gold-200`, the stops of the metallic mark). White and `ivory-100` are the paper.
- Light theme (paper): `surface` white, text in `ink` (navy), secondary text in `ink-muted` (`slate-600`), gold text in `accent` (`gold-700`). Dark theme (navy): `surface` `navy-900`, text white, gold text `gold-400`. Signage, nameplates and social posts use the dark theme; letterhead, roll-up and the website the light one.
- **Navy bands on a light page** (header, hero, Why Us, footer, service cards): add `.ra-navy`. It sets `navy-slab` with `on-navy` text and switches gold to `accent-on-navy`, muted text to `on-navy-muted` and focus rings to gold, so nothing inside needs its own colours.
- Put the brand gold `gold-600` in text only at 24px or larger: it is the logo tagline colour, not a body colour. For small gold text use `accent` (light) or `accent-on-navy` (navy).
- Fill solid gold areas with `accent-fill` (gold-400) and set text on them in `on-accent` (navy, 8:1); hover `accent-fill-hover`. Reserve the `gold-metal` gradient for large fills and diagonal ribbons, never behind text.
- Small gold kickers above section titles use `.ra-eyebrow` (plain `accent` text; uppercase and tracked in English only).
- Separate content with 1px `rule` (gold) hairlines; on navy use `on-navy-line`. Use `border` where gold would be too loud (FAQ items, neutral cards) and `field-border` for every form control (≥4:1).
- Status colours are for forms only: `danger` and `success`, each with a tint for alert grounds, always with a written message.
- WhatsApp is the only contact channel. Its buttons use `whatsapp` (brand navy, hover `whatsapp-hover`) with a white label and the white WhatsApp glyph: one approved variation (see Button). The floating WhatsApp button is the one exception: `whatsapp-green` with a soft green glow (see WhatsAppButton).
- Focus: a solid 2px `focus` ring, offset 2px: navy on light, gold on navy.

## Type

The brand speaks four languages. Each gets its own Google Font and style set; set `lang` (and `dir`) on the root of a localized view and `components/bundle.css` switches the family, leading and sizes.

| Language | `lang` / `dir` | Family token | Font | Styles |
|---|---|---|---|---|
| English | `en` / `ltr` | `--font-latin` | Plus Jakarta Sans 400, 500, 600, 700, 800 | `en-display`, `en-h1`–`en-h3`, `en-body-lg`, `en-body`, `en-label`, `en-caption`, `en-eyebrow` |
| Arabic | `ar` / `rtl` | `--font-sans` | Tajawal 400, 500, 700, 800 (no 600) | `display`, `h1`–`h3`, `body-lg`, `body`, `label`, `caption` |
| Urdu | `ur` / `rtl` | `--font-urdu` | Noto Nastaliq Urdu 400, 700 | `ur-display`, `ur-h1`–`ur-h3`, `ur-body-lg`, `ur-body`, `ur-label`, `ur-caption` |
| Bangla | `bn` / `ltr` | `--font-bangla` | Hind Siliguri 400, 500, 600, 700 | `bn-display`, `bn-h1`–`bn-h3`, `bn-body-lg`, `bn-body`, `bn-label`, `bn-caption` |

In markup use the role classes, not the style names: `ra-display`, `ra-h1`, `ra-h2`, `ra-h3`, `ra-lead`, `ra-body`, `ra-label`, `ra-caption`. Each one picks the right font, size, leading and weight for the page language and screen width.

**Roles**

| Role | Class | Use |
|---|---|---|
| display | `ra-display` | Hero headline (one per page) |
| h1 | `ra-h1` | Section and page titles |
| h2 | `ra-h2` | Sub-headings: detail-page blocks, contact block titles |
| h3 | `ra-h3` | Card titles, steps, Why Us items, footer columns |
| lead | `ra-lead` | Hero sub-line, section intros, slogans |
| body | `ra-body` | Running text, inputs, FAQ answers |
| label | `ra-label` | Buttons, nav links, pills, tabs, form labels |
| caption | `ra-caption` | Addresses, hints, roles, card descriptions |
| stat | `ra-stat__num` | Stats numbers, Latin digits in every language |

**Responsive sizes** (px; mobile below 641 · tablet 641–1023 · desktop 1024+)

| Role | English | Arabic | Urdu | Bangla |
|---|---|---|---|---|
| display | 32 · 42 · 52 | 34 · 44 · 56 | 28 · 36 · 44 | 30 · 38 · 46 |
| h1 | 28 · 38 · 38 | 30 · 40 · 40 | 26 · 34 · 34 | 26 · 34 · 34 |
| h2 | 22 · 26 · 26 | 24 · 28 · 30 | 22 · 26 · 28 | 22 · 24 · 26 |
| h3 | 19 · 19 · 20 | 20 · 22 · 22 | 20 · 22 · 22 | 18 · 20 · 20 |
| lead / body | 18 / 16 | 18 / 16 | 20 / 18 | 19 / 17 |
| label / caption | 15 / 13 | 15 / 13 | 15 / 15 | 15 / 14 |
| stat | 34 · 44 · 46 | same (Latin) | same | same |

**Weights by role**

| Role | English | Arabic | Urdu | Bangla |
|---|---|---|---|---|
| Display, h1 | 800 | 800 | 700 | 700 |
| h2 | 700 | 700 | 700 | 700 |
| h3 (card titles) | 800 | 700 | 700 | 700 |
| Body, lead | 400 | 400 (lead 500) | 400 | 400 |
| Buttons, labels | 700 | 700 | 700 | 600 |

**Google Fonts loaded by bundle.css:** `Plus Jakarta Sans:wght@400;500;600;700;800`, `Tajawal:wght@400;500;700;800`, `Noto Nastaliq Urdu:wght@400;700`, `Hind Siliguri:wght@400;500;600;700`.

**Script rules**

- Tajawal has no 600: use 500 or 700 for Arabic, never 600 (the browser would fake it).
- Arabic, Urdu and Bangla take no negative letter-spacing, no italics and no uppercase. Only English display (−0.02em), h1 (−0.01em), stat (−0.02em) and the eyebrow (+0.06em, uppercase) are tracked.
- Keep Urdu text at 15px or larger; Nastaliq becomes hard to read below that.
- Arabic headlines use 800, often split over two lines with the second in `accent`; body is 16px at 1.8 leading.
- English: tighten display slightly; don't set Arabic in Plus Jakarta Sans or English in Tajawal.
- Urdu is always Nastaliq, never Naskh. Give it 2.0–2.2 leading and set it one size up from Arabic; don't use 800 (it has no such weight). Leave extra room in buttons and pills: Nastaliq is tall.
- Bangla runs left-to-right at 1.75 leading; keep headlines to 700.
- Phone numbers, `ruyat.sa`, stats and Latin brand names stay in Plus Jakarta Sans inside any language: wrap them in `.ra-latin`.
- The wordmark is artwork in every language: always use the logo files, never retype the name. The header's small "Ruyat Al Injaz / Business Services" text beside the mark is the one exception, set in Plus Jakarta Sans.
- Align text to the reading start (right for Arabic/Urdu, left for English/Bangla); centre only short headline blocks, slogans, stats and service grids.

## Layout and shape

- **Mobile first.** Two breakpoints: `bp-tablet` 641px and `bp-desktop` 1024px. Write the phone layout, then add `min-width` rules.
- **Container** `.ra-wrap`: max `container-max` 1200px; side gutters 20 · 32 · 40px. Text blocks max `container-text` 680px.
- **Sections** `.ra-section`: `space-14` (56px) top and bottom on mobile, `space-28` (112px) from tablet. Alternate white and ivory (`.ra-section--alt`) and navy (`.ra-navy`) bands; never two ivory bands in a row.
- **Grids**: 1 column on mobile → 2 on tablet → 3 (services, testimonials) or 4 (stats, Why Us, footer) on desktop; gaps 16 · 20 · 24px. Split sections (About, FAQ, Contact) go side by side from 1024px with a 72px gap.
- Spacing only on the `space-*` scale (4 → 112px; the number × 4 = px).
- Corners are soft, not round: `radius-md` (10px) for buttons, inputs and menus; `radius-lg` (18px) for every card, panel and image frame; `radius-pill` for pills, tabs and the language button; `radius-circle` for avatars and round icon buttons.
- Signature compositions: a navy slab beside an ivory/white panel with a gold edge (door signs, nameplate); diagonal gold ribbons crossing navy corners (roll-up, social posts, service cards: `.ra-ribbon`); the gold fading rule with a dot (`Divider`) under titles. Partner logos connect to the navy Ruyat hub card with gold connectors (`PartnerNetwork`).
- Elevation: `shadow-card` for resting cards on light grounds, `shadow-card-hover` on hover, `shadow-menu` for dropdowns, `shadow-whatsapp-glow` only under the floating WhatsApp button. Nothing else casts a shadow.
- Layers: only `z-base`, `z-fab`, `z-header`, `z-dropdown`, `z-overlay`.
- Every tappable thing is at least `size-tap` (44px); buttons and inputs are `size-control` (48px).

## Motion

- Short and calm: colour changes `duration-fast` (200ms), menus, header and FAQ `duration-base` (300ms), section reveals `duration-slow` (600ms, fade + 24px rise, cards staggered 80ms), hero cross-fade `duration-slide` (800ms) every `hero-interval` (4.5s).
- Ambient loops are allowed in one place only, PartnerNetwork: the hub's pulse ring (`duration-pulse`, 3.6s) and the connector sparks (`duration-flow`, 1.8s), both decorative and hidden under reduced motion.
- `ease-standard` for colour and opacity, `ease-out` for things entering.
- Under `prefers-reduced-motion: reduce` the bundle drops movement: no zoom, no rise, no hover lift; pause the hero's auto-advance in script too.

## Accessibility

- Text meets 4.5:1 (3:1 at 24px and up) on its own ground in both themes; every token's usage note gives its ratios. Controls and focus rings meet 3:1.
- Real elements: `<a href>` for navigation, `<button>` for actions, `<label for>` on every field, native `<details>` for the FAQ. Icon-only buttons carry `aria-label`; decorative icons, ribbons and hero photos are `aria-hidden` or `alt=""`.
- One `h1`-level page title (the hero headline on Home), then section titles in order.
- A skip link (`.ra-skip`) first in the body; the mobile menu traps focus and closes on Escape.
- Never colour alone: errors and successes have an icon and words.

## Logo

- Use the files in **Logos** as supplied: `ruyat-lockup-on-light.png` on white/ivory, `ruyat-lockup-on-dark.png` on navy (footer), `ruyat-mark-gold.png` alone where space is tight (header, favicon, watermark). Never recolour the gold, change the wordmark font or place the white lockup on a light ground.
- The tagline «لخدمات الأعمال» and the separator always stay gold; the company name and the slogan «من الفكرة .. إلى الإنجاز» switch between navy and white per variation.

## Iconography

- The brand uses **gold outline icons** (buildings, documents with a check, a government building, a person, a briefcase, a globe) at about 1.5px stroke, in `accent` (or `accent-on-navy`), never filled in UI. The Saudi palm-and-swords emblem appears on the licences tile. Sizes: `size-icon-sm` 18px inline, `size-icon` 24px controls, `size-icon-lg` 48px features.
- Directional icons (arrows, back) add `ra-flip` so they point the right way in Arabic and Urdu.
- No icon files were supplied. Previews use Lucide-style outline paths as stand-ins (**flagged substitute**): replace them with the brand's own set when available. Social icons use each platform's official glyph.

## Imagery

- Photography is framed, never loose: navy corners and diagonal gold ribbons around the image, as in the **Hero** and **Applications** files.
- **Hero** holds the three home-page slides in order (skyline, business handshake, Kaaba) with their object-positions and headlines.
- Subjects: Saudi skylines at dusk, real business moments, the Haram and pilgrims. Treat holy sites with respect: no text or UI over the Kaaba, no playful crops.
