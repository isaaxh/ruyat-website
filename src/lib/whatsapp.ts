import { WHATSAPP_NUMBER } from './site';

/** Convert a Saudi number (05xxxxxxxx, +9665…, 009665…) to wa.me format (9665xxxxxxxx). */
export function toWaNumber(input: string): string {
  let d = input.replace(/\D/g, '');
  if (d.startsWith('00')) d = d.slice(2);
  if (d.startsWith('0')) d = `966${d.slice(1)}`;
  return d;
}

/** Build a wa.me link. Message text must already be in the page's language. */
export function buildWhatsAppUrl(message: string, number: string = WHATSAPP_NUMBER): string {
  return `https://wa.me/${toWaNumber(number)}?text=${encodeURIComponent(message)}`;
}

export interface InquiryFields {
  name: string;
  phone: string;
  service: string; // service title in the page language
  message?: string;
}

/**
 * Fill the page-language template (i18n `whatsapp.form_message`).
 * Lines whose placeholder is empty (e.g. an optional message) are dropped.
 */
export function buildInquiryMessage(template: string, fields: InquiryFields): string {
  const vals: Record<string, string> = { ...fields, message: fields.message ?? '' };
  return template
    .split('\n')
    .filter((line) => {
      const keys = [...line.matchAll(/\{(\w+)\}/g)].map((m) => m[1]);
      return keys.length === 0 || keys.some((k) => (vals[k] ?? '').trim() !== '');
    })
    .map((line) => line.replace(/\{(\w+)\}/g, (_, k) => (vals[k] ?? '').trim()))
    .join('\n');
}
