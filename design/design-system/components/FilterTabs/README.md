# FilterTabs

A row of pill tabs that filters the All Services page by category, each with a live count.

- **Markup:** `div.ra-tabs[role="tablist"]` › `button.ra-tab[role="tab"]` with `aria-selected` and `aria-controls`, label + `span.ra-tab__count`. Tabs: All (15) · Business Setup · Government · Umrah & Hajj.
- `size-tap` high, `radius-pill`, `field-border` outline; selected = `navy-slab` with gold text. The row scrolls sideways on narrow screens instead of wrapping.
- Arrow keys move between tabs; the count updates with the filter and is announced (`aria-live="polite"` on the results heading).
