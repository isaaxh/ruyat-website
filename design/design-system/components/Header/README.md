# Header

The sticky navy site header: logo, nav links, language switcher, a gold CTA on desktop and a burger on mobile and tablet.

- **Markup:** `<header class="ra-header ra-navy">` › `.ra-wrap` › `.ra-header__bar` holding `a.ra-brand` (gold mark `ruyat-mark-gold.png` 36×41 + `ra-brand__name` "Ruyat Al Injaz" + `ra-brand__sub` "Business Services"), `nav.ra-nav` with `a.ra-nav__link` items (`aria-current="page"` on the current one), and `.ra-header__actions` (LanguageSwitcher, `a.ra-btn--primary.ra-header__cta`, `button.ra-burger` with `aria-expanded` and `aria-controls`).
- **Over the hero** add `ra-header--overlay`; it is pulled over the hero by its own height. Two gradients, exactly as on the website:
  - **At rest:** `header-shade` = `linear-gradient(180deg, rgba(4,18,56,0.6) 0%, rgba(4,18,56,0) 100%)`: navy at 60% at the top, fading to clear.
  - **Scrolled** (add `is-scrolled` as soon as the page scrolls): a second layer, header height + 3px tall, fades in on top over `duration-header-fade` (350ms): `header-fade` = `linear-gradient(180deg, rgba(4,18,56,0.95) 0%, rgba(4,18,56,0.82) 60%, rgba(4,18,56,0.4) 85%, rgba(4,18,56,0) 100%)`.
  - **Hiding:** add `is-hidden` while scrolling down (slides up, `duration-base`, and the scrolled layer fades out); remove it on any upward scroll.
  - **Menu open:** add `is-menu-open`: both gradients go transparent so the navy menu sheet shows through.
- On pages without a hero (detail pages) leave out `ra-header--overlay`: the header is solid `navy-slab`.
- **Heights:** 80px on mobile, 84px on tablet, `header-height` (88px) from 1024px. Links show from 1024px; below that the burger opens the **menu sheet** `.ra-menu` (fixed, `navy-900`, `z-overlay`; 26px links on mobile, 30px on tablet, a full-width primary button at the bottom). Trap focus in the open sheet; Escape closes it.
- Nav: Home · About Us · Services · Packages · Contact Us. Brand name and nav labels translate; the logo never does.
- **Don't** put the header on white, or add a second row.
