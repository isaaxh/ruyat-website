# FAQ

An accordion of questions in rounded bordered cards; the open one turns ivory and its plus becomes a minus.

- **Markup:** `.ra-faq` › `details.ra-faq__item` › `summary.ra-faq__q` (question text + `span.ra-faq__icon`) and `div.ra-faq__a`. Native `<details>` keeps it keyboard- and screen-reader-ready with no script; open the first one by default.
- `radius-lg`, 1px `border`; open = `surface-alt`. Question `label` style (15px / 700), answer `body` in `ink-muted`. Toggle: 28px circle, `gold-500` outline.
- In a `.ra-split` on desktop: section head on one side (sticky), questions on the other.
