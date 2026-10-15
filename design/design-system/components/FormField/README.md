# FormField

The inquiry form's fields: label, input, select or textarea, hint and error message. The form sends nothing itself: its submit opens WhatsApp with the filled-in details.

- **Markup:** `form.ra-form` › `.ra-field` › `label.ra-field__label` (`for`), control (`input.ra-input`, `.ra-select-wrap > select.ra-select`, `textarea.ra-textarea`), optional `p.ra-field__hint`, and on error `p.ra-field__msg` with an alert icon (`aria-describedby` from the control, `aria-invalid="true"`). Add `ra-field--error` on the field. Two fields side by side: `.ra-form__row.ra-form__row--2` (from 641px).
- Controls: `size-control` (48px) high, `radius-md`, 1px `field-border` (≥4:1), text at least 16px (no zoom on iPhone). Focus: navy border + 2px `focus` ring. Error: 2px `danger` border and the written message, never colour alone.
- Phone and email inputs add `ra-input--latin` (Latin digits, left-to-right even in Arabic and Urdu). Phone placeholder `+966 5X XXX XXXX`.
- Fields on Ruyat's form: Name · Phone · Service (select, grouped by category) · Message. Submit: `ra-btn ra-btn--whatsapp ra-btn--block` "Send on WhatsApp" (the navy WhatsApp button, see Button), which opens `https://wa.me/966534880040?text=…` with the fields filled in.
- Validate on submit, then on each change; put focus on the first field with an error.
