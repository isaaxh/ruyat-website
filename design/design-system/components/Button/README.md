# Button

The call to action: a 48px soft-cornered button in gold, navy, outline, ghost (on navy), plus one WhatsApp button.

- **Provide** a short label, verb first («احجز استشارة», "Get in Touch"), and an `href` or click handler. Markup: `<a class="ra-btn ra-btn--primary" href="…">` or `<button class="ra-btn …">`. An icon goes after the label as `<svg class="ra-ico">` (it flips in RTL with `ra-flip`).
- **Variants:** `--primary` (`accent-fill` gold-400, navy text 8:1; hover `accent-fill-hover`) for the one main action per view · `--navy` for a strong secondary on light grounds · `--outline` (gold `rule` border) for the rest · `--ghost` (white outline) beside a primary on navy and photos · `--whatsapp` only for actions that open WhatsApp (see below) · `--block` for full width (forms, mobile menu).
- Height `size-control` (48px), side padding `space-6`, corner `radius-md`, type `label` (15px / 700 English and Arabic, 600 Bangla). Focus: 2px `focus` ring, offset 2px.
- **WhatsApp** `ra-btn--whatsapp`: the only approved style for "Send on WhatsApp". Navy `whatsapp` fill (hover `whatsapp-hover`), white label and white outline WhatsApp glyph (22px, before the label, 10px gap), 54px high, 16px / 800 (700 in Urdu and Bangla), `radius-md`. Full width in forms with `ra-btn--block`. No green, outline or gold version: green belongs only to the floating WhatsAppButton.
- Disabled: `disabled` or `aria-disabled="true"` → `opacity-disabled`.
- **Don't** put the `gold-metal` gradient behind a label, set two primary buttons side by side, or use `--whatsapp` for anything that doesn't open WhatsApp.
