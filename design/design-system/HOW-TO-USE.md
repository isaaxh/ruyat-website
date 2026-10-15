# Ruyat Al Injaz design system: package

- `README.md`: the brand book (voice, colour, type, layout, motion, accessibility, logo, imagery).
- `tokens.json`: every token with usage notes. `tokens.css`: the same as CSS custom properties (light theme on `:root`, dark under `[data-theme="dark"]`).
- `components/bundle.css`: all component styles (loads the Google Fonts itself). Each `components/<Name>/` has a README (markup and rules) and `preview.html` (an HTML fragment).
- `assets/`: Logos, Hero photos, Applications mockups and Partners logos, in folders by group.
- `preview/index.html`: open in a browser to see every component.
- `design-system.json`: the index of the online version (asset ids); not needed to build with.

On a page: link `tokens.css`, then `components/bundle.css`; set `lang` and `dir` on `<html>` and `class="ra"` on `<body>`.
