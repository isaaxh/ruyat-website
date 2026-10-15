# WhatsAppButton

The round floating WhatsApp button: a WhatsApp-green circle with the white WhatsApp glyph and a soft green glow below it, fixed to the bottom inline-end corner of every page.

- **Markup:** `a.ra-fab` (`href="https://wa.me/966534880040"`, `aria-label="Chat with us on WhatsApp"`, `target="_blank" rel="noopener"`) › `svg.ra-fab__glyph` (outline speech bubble with its tail at the bottom-left, filled handset centred inside the bubble at 40% of the bubble's width, ring stroke about 10% of it, `currentColor`). Copy the SVG from the preview exactly; don't swap in another WhatsApp icon.
- **Exactly as approved:** `size-fab` (56px) circle in `whatsapp-green` (#21cd5b), no border or ring; glyph `on-whatsapp-green` (white) at 52% of the button (about 29px), centred; glow `shadow-whatsapp-glow` = green at 38% opacity, pushed down 11.5% of the button, blurred 36%, spread 2.6%. The CSS calculates the glow from `--size-fab`, so a resized button keeps the same look.
- Hover and keyboard focus: the glow strengthens (`shadow-whatsapp-glow-hover`) and the button lifts 1px; focus also shows a 2px white ring.
- Position: 16px from the corner on mobile and tablet, 32px on desktop; bottom-right in English and Bangla, bottom-left in Arabic and Urdu (`inset-inline-end`). `z-fab`, under the header and menus.
- The only green on the site. The form's "Send on WhatsApp" button stays navy (see Button).
- Hide it while the mobile menu is open and next to the Contact page's form, where the form's own button does the job.
