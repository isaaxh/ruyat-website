# PartnerNetwork

The "Our Network" section: partner companies' logos on white cards, joined to the navy Ruyat hub card by gold connectors, with sparks travelling outward and a soft pulse ring around the hub.

- **Markup:** `section.ra-section.ra-section--alt.ra-network` › two `span.ra-network__corner` (`--start`, `--end`, `aria-hidden`) › `.ra-wrap` › `.ra-sechead.ra-sechead--center` (`.ra-eyebrow` + `h2.ra-h1`) › `.ra-network__row`:
  - `article.ra-partner` (partner) › `h3.ra-sr-only` name + `img` logo with a full `alt`
  - `span.ra-network__link` (`aria-hidden`) › `span.ra-network__spark`
  - `.ra-network__hub` › two `span.ra-network__pulse` (`aria-hidden`) + `article.ra-partner.ra-partner--hub` › `span.ra-ribbon` (`aria-hidden`), `h3.ra-sr-only`, `img` of `ruyat-lockup-on-dark.png`
  - `span.ra-network__link.ra-network__link--out` › `span.ra-network__spark`
  - `article.ra-partner` (second partner)
- **Layout:** stacked on mobile (cards 230 × 240, hub 270 × 290, 56px vertical connectors); a row from 641px (220 × 236 / 250 × 270, 40px connectors) and from 1024px (300 × 320 / 340 × 360, 90px connectors). Logos are `object-fit: contain` at 180 · 170 · 240px.
- **Cards:** partners `white`, `border`, `radius-lg`, `shadow-card`. Hub `navy-900`, inset 1px `gold-400` outline 8px in, `shadow-hub` halo, one gold `ra-ribbon` across the top end corner. The hub is always the middle card.
- **Connectors:** `gold-connector` (faint at the partner, full gold at the hub); sparks `gold-spark` with `shadow-spark`, one loop per `duration-flow`, always moving away from the hub. Pulse rings: 2px `gold-400`, scale to 1.16 and fade over `duration-pulse`, the second half a loop behind.
- **RTL:** corners, the hub ribbon and spark direction mirror on `dir="rtl"`; nothing else changes.
- **Motion:** decoration only. Under reduced motion sparks and rings are hidden; the static connectors stay.
- Heading copy: "Our Network" / "Connected to Serve You Better"; Arabic «شبكتنا» / «مترابطون لنخدمك بشكل أفضل». Exactly two partners plus the hub; partner logos live in the **Partners** asset group. Never recolour a partner's logo.
