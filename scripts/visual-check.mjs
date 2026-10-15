// Visual check: screenshots the running dev server and compares each [data-section] against design/screenshots/.
// Usage: node scripts/visual-check.mjs [--page home] [--vp mobile,tablet,desktop] [--lang en,ar] [--section hero] [--range 400] [--css 'extra css for tuning'] [--base http://localhost:4321]
// Sections marked data-align="top" are compared at their own position; others are aligned to the best vertical offset within --range px.
// Output: test-results/visual/<lang>-<page>-<vp>[-<section>].png (mine | reference | diff) and a % report.
import { chromium } from '@playwright/test';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'node:fs';
import path from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) => (a.startsWith('--') ? [...acc, [a.slice(2), all[i + 1]]] : acc), []),
);
const BASE = args.base || 'http://localhost:4321';
const PAGES = {
  home: '/',
  'all-services': '/services/',
  'service-detail': '/services/company-establishment/',
  contact: '/contact/',
};
// Viewports the reference screenshots were taken at (measured from the fixed WhatsApp button's position).
// The device pixel ratio is derived from each reference's width (mobile home is 702px = 1.8x, other mobile pages 780px = 2x).
const VIEWPORTS = {
  mobile: { width: 390, height: 844 },
  tablet: { width: 834, height: 1112 },
  desktop: { width: 1440, height: 900 },
};
const pages = (args.page || Object.keys(PAGES).join(',')).split(',');
const vps = (args.vp || Object.keys(VIEWPORTS).join(',')).split(',');
const langs = (args.lang || 'en,ar').split(',');
const onlySection = args.section;
const OUT = 'test-results/visual';
fs.mkdirSync(OUT, { recursive: true });

const refPath = (lang, page, vp) =>
  lang === 'ar' ? `design/screenshots/arabic-rtl/${page}-${vp}.png` : `design/screenshots/${vp}/${page}.png`;

const crop = (png, y, h) => {
  const out = new PNG({ width: png.width, height: h });
  for (let r = 0; r < h; r++) {
    const sy = y + r;
    if (sy < 0 || sy >= png.height) continue;
    png.data.copy(out.data, r * png.width * 4, sy * png.width * 4, (sy + 1) * png.width * 4);
  }
  return out;
};

// Row signature: mean RGB per row, used to find the vertical offset of a section in the reference.
const rowSig = (png) => {
  const sig = new Float32Array(png.height * 3);
  for (let y = 0; y < png.height; y++) {
    let r = 0, g = 0, b = 0;
    for (let x = 0; x < png.width; x += 2) {
      const i = (y * png.width + x) * 4;
      r += png.data[i]; g += png.data[i + 1]; b += png.data[i + 2];
    }
    const n = Math.ceil(png.width / 2);
    sig[y * 3] = r / n; sig[y * 3 + 1] = g / n; sig[y * 3 + 2] = b / n;
  }
  return sig;
};

const bestOffset = (mineSig, y0, h, refSig, refH, range) => {
  let best = 0, bestScore = Infinity;
  for (let dy = -range; dy <= range; dy++) {
    const ry0 = y0 + dy;
    if (ry0 < 0 || ry0 + h > refH) continue;
    let s = 0;
    for (let r = 0; r < h; r += 2) {
      const a = (y0 + r) * 3, b = (ry0 + r) * 3;
      s += Math.abs(mineSig[a] - refSig[b]) + Math.abs(mineSig[a + 1] - refSig[b + 1]) + Math.abs(mineSig[a + 2] - refSig[b + 2]);
    }
    if (s < bestScore) { bestScore = s; best = dy; }
  }
  return best;
};

// mine | reference | diff: side by side for tall crops, stacked for wide ones.
const sideBySide = (a, b, d) => {
  const gap = 12;
  const stack = a.width > a.height;
  const out = stack
    ? new PNG({ width: a.width, height: a.height * 3 + gap * 2 })
    : new PNG({ width: a.width * 3 + gap * 2, height: a.height });
  out.data.fill(255);
  [a, b, d].forEach((img, k) => {
    for (let y = 0; y < img.height; y++) {
      const dst = stack ? (k * (a.height + gap) + y) * out.width : y * out.width + k * (a.width + gap);
      img.data.copy(out.data, dst * 4, y * img.width * 4, (y + 1) * img.width * 4);
    }
  });
  return out;
};

// State of interactive widgets in each reference screenshot (0-based): hero slide shown.
const STATE = {
  'en-home-desktop': { slide: 2 },
  'en-home-tablet': { slide: 2 },
  'en-home-mobile': { slide: 0 },
  'ar-home-desktop': { slide: 2 },
  'ar-home-tablet': { slide: 2 },
  'ar-home-mobile': { slide: 0 },
};

// Bring interactive widgets into the state the reference screenshots show, using the page's own controls.
async function prepare(page, tag) {
  if (args.css) await page.addStyleTag({ content: args.css });
  const st = { ...STATE[tag], ...(args.slide ? { slide: Number(args.slide) } : {}) };
  if (st.slide !== undefined) await page.locator(`[data-dot="${st.slide}"]`).click().catch(() => {});
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
}

const browser = await chromium.launch();
const report = [];
for (const lang of langs) {
  for (const pg of pages) {
    for (const vp of vps) {
      const ref = refPath(lang, pg, vp);
      if (!fs.existsSync(ref)) continue;
      const { width, height } = VIEWPORTS[vp];
      const refPng = PNG.sync.read(fs.readFileSync(ref));
      const dpr = refPng.width / width;
      const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: dpr, reducedMotion: 'reduce' });
      const page = await ctx.newPage();
      await page.goto(`${BASE}/${lang}${PAGES[pg]}?visual=1`, { waitUntil: 'networkidle' });
      await prepare(page, `${lang}-${pg}-${vp}`);
      const shot = PNG.sync.read(await page.screenshot({ fullPage: true, animations: 'disabled' }));
      const sections = await page.$$eval('[data-section]', (els) =>
        els.map((e) => {
          const r = e.getBoundingClientRect();
          return { name: e.dataset.section, y: r.top + window.scrollY, h: r.height, fixed: e.dataset.align === 'top' };
        }),
      );
      const mineSig = rowSig(shot), refSig = rowSig(refPng);
      const tag = `${lang}-${pg}-${vp}`;
      const full = { name: '(page)', y: 0, h: shot.height / dpr };
      for (const s of onlySection ? sections.filter((x) => x.name === onlySection) : [full, ...sections]) {
        const y0 = Math.round(s.y * dpr), h = Math.min(Math.round(s.h * dpr), shot.height - y0);
        if (h <= 0) continue;
        const range = Math.round(Number(args.range || 400) * dpr);
        const dy = s === full || s.fixed ? 0 : bestOffset(mineSig, y0, h, refSig, refPng.height, range);
        const a = crop(shot, y0, h), b = crop(refPng, y0 + dy, h);
        if (a.width !== b.width) { report.push({ tag, section: s.name, error: `width ${a.width} vs ${b.width}` }); continue; }
        const diff = new PNG({ width: a.width, height: h });
        const bad = pixelmatch(a.data, b.data, diff.data, a.width, h, { threshold: 0.15, includeAA: false });
        const pct = (100 * bad) / (a.width * h);
        const file = path.join(OUT, `${tag}-${s.name.replace(/[()]/g, '')}.png`);
        fs.writeFileSync(file, PNG.sync.write(sideBySide(a, b, diff)));
        report.push({ tag, section: s.name, offset: dy / dpr, diff: pct.toFixed(2) + '%', file, heights: s === full ? `${shot.height / dpr} vs ${refPng.height / dpr}` : undefined });
      }
      await ctx.close();
    }
  }
}
await browser.close();
console.table(report.map(({ file, ...r }) => r));
fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
