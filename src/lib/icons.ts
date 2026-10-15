// Generic line icons (24x24 stroke paths) from the prototype, shared by contact rows, footer and pages.
export const ICONS = {
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  mail: 'M3 5h18v14H3z M3.5 6.5l8.5 6.5 8.5-6.5',
  pin: 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z M14.5 9.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 1 1 5 0',
  globe: 'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20 M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20 M2 12h20',
} as const;

/** Social profile icons (24x24 stroke paths), keyed like SOCIAL in lib/site. */
export const SOCIAL_ICONS: Record<string, string> = {
  whatsapp: 'M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1',
  instagram: 'M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0M16.5 7.5v.01',
  tiktok: 'M21 7.917v4.034a9.948 9.948 0 0 1-5-1.951v4.5a6.5 6.5 0 1 1-8-6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z',
  x: 'M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.46-2.46l6.772-6.772',
  snapchat: 'M16.882 7.842a4.882 4.882 0 0 0-9.764 0c0 4.273-.213 6.409-4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3-2 6-2c1-2.118 1-2.118 3-3c-3.906-1.709-4.118-3.845-4.118-8.118z',
  youtube: 'M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zM10 9l5 3l-5 3z',
};
