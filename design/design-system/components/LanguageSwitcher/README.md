# LanguageSwitcher

A gold-outlined pill button showing the current language code that opens a white menu of the four languages, each written in its own script.

- **Markup:** `.ra-lang` › `button.ra-lang__btn` (`aria-haspopup="true"`, `aria-expanded`, globe icon + code: EN, AR, UR, BN) and `ul.ra-lang__menu` (`hidden` when closed) with `a.ra-lang__opt` per language: the name in its own language and `lang` attribute (English, العربية, اردو, বাংলা) and `span.ra-lang__code`. Mark the current one `aria-current="true"`.
- Each option links to the same page in that language (`/ar/…`, `/ur/…`, `/bn/…`) and carries `hreflang`. Switching changes `lang` and `dir` on `<html>`.
- Menu: white, `radius-md`, `shadow-menu`, `z-dropdown`, opens under the button aligned to the inline end; rows `size-tap` high, ivory on hover. Escape and outside click close it.
- Lives in the header; in the mobile menu sheet it sits above the links.
