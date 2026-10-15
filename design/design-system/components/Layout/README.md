# Layout

The page frame every screen is built on: a centred container, section bands, section heads and responsive grids. Mobile first; layouts change at 641px (tablet) and 1024px (desktop).

- **Page:** `<html lang="en" dir="ltr">` (or `ar`/`rtl`, `ur`/`rtl`, `bn`/`ltr`) and `<body class="ra">`. Never set `dir` on single components; flip the whole page.
- **Container** `.ra-wrap`: max `container-max` (1200px), side padding 20 / 32 / 40px (mobile / tablet / desktop).
- **Section** `.ra-section`: padding `space-14` (56px) top and bottom on mobile, `space-28` (112px) from 641px. `.ra-section--alt` = ivory band (Stats, Testimonials, Contact). `.ra-navy` = navy band (Why Us, footer); it also switches text, gold and focus colours inside it.
- **Section head** `.ra-sechead`: eyebrow pill, `ra-h1` title, `ra-divider--start` (or centred `ra-divider` in `.ra-sechead--center`), optional `ra-lead`. 32px below on mobile, 40px from tablet.
- **Grids** `.ra-grid--2/3/4`: 1 column on mobile → 2 on tablet → 2/3/4 on desktop; gaps 16 / 20 / 24px. `.ra-split`: two columns from 1024px with a 72px gap (About, FAQ, Contact).
- **Home order:** Header › Hero › Stats (ivory) › About (split) › Services (3-up) › Why Us (navy) › Testimonials (ivory) › FAQ (split) › Contact (ivory) › Footer (navy). Alternate white and ivory so two ivory bands never touch.
- **Don't** set widths in px on content, add new spacing values, or put a section's padding on its children.
