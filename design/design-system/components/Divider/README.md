# Divider

The gold rule from the logo lockup: centred (fades in from both ends with a centre dot) or start-aligned (solid near the reading start with a larger dot, fading out toward the far edge).

- **Provide** a block element with `aria-hidden="true"`. Markup: `<div class="ra-divider"></div>` plus a modifier:
  - *(none)*: centred, max 420px. Under centred titles and slogans. `ra-divider--plain` drops the dot.
  - `ra-divider--start`: 45% wide (max 280px), 3px `gold-500` line, 16px dot `space-6` in from the reading start. Under every start-aligned section title. It mirrors itself in RTL: use this one on the website.
  - `ra-divider--left` / `--right`: the older fixed-side versions, full width. Kept for print layouts that don't flip.
- Leave `space-4` above and below. On navy the dot turns `accent-on-navy`.
- For column separators use a 1px `rule` line, not a divider.
