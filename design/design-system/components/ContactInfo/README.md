# ContactInfo

Contact rows (phone, office, email, hours) each with a navy icon circle, plus the office map with a "Show directions" button.

- **Markup:** `ul.ra-info` › `li` › `span.ra-info__icon` (18px `ra-ico`) + `div` (`span.ra-info__label`, `a.ra-info__value`). Phone as `tel:+966534880040`, displayed `+966 53 488 0040` in `ra-latin`.
- Map: `.ra-map` (4:3, `radius-lg`) holding a Google Maps embed `iframe` with a `title`, and `.ra-map__actions` with `a.ra-btn.ra-btn--navy` "Show directions" opening `https://www.google.com/maps/dir/?api=1&destination=…` in a new tab.
- Office: Al Shawqiyah, Makkah (Abi Raja Al-Utaridi St.). Email and hours are still to be confirmed: show `[EMAIL]`, `[HOURS]` until supplied.
