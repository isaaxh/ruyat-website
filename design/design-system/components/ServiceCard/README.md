# ServiceCard

A navy card that links to one service: gold icon tile, arrow, title, one-line description and two gold ribbons in the corner.

- **Markup:** `a.ra-svc-card` (whole card is the link, to the Service Detail page) › `.ra-svc-card__top` (`.ra-svc-card__icon` with a 48px outline `ra-ico`, `.ra-svc-card__arrow` with `arrow-up-right`, `ra-flip` in RTL) › two decorative `span.ra-ribbon` (`aria-hidden`) › `.ra-svc-card__body` (optional `.ra-svc-card__tag` category, `.ra-svc-card__title`, `.ra-svc-card__desc`).
- Min height 210px, padding 20 × 22px, `radius-lg`, `navy-900`. Title `h3` (19 / 20px), description `caption` in `on-navy-muted`. Hover lifts 4px with `shadow-card-hover`.
- Grid: 1 column on mobile, 2 on tablet, 3 on desktop (`ra-grid ra-grid--3`). On the home page show 6 with a "View All" `ra-link`; the All Services page shows all 15 under FilterTabs.
- Categories: Business Setup · Government · Umrah & Hajj. Keep descriptions to one line (about 60 characters).
