// Captures full-page screenshots of the prototype (served by prototype-server.mjs) at the reference viewports.
// Usage: node scripts/capture-prototype.mjs <outDir> [slideIndex=2]
import { chromium } from '@playwright/test';
import fs from 'node:fs';

const out = process.argv[2] || 'test-results/prototype';
const slide = Number(process.argv[3] ?? 2);
fs.mkdirSync(out, { recursive: true });
const VIEWPORTS = { mobile: [351, 2], tablet: [834, 1], desktop: [1440, 1] };

const browser = await chromium.launch();
for (const [name, [width, dpr]] of Object.entries(VIEWPORTS)) {
  const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: dpr });
  await page.goto('http://localhost:4399/');
  await page.waitForSelector('#__bundler_placeholder', { state: 'detached' }).catch(() => {});
  await page.waitForTimeout(2500);
  // stop the slider on the requested slide
  const dots = page.locator(`button[aria-label="Show slide ${slide + 1}"]`);
  if (await dots.count()) await dots.first().click();
  // grow the viewport to the document (or inner scroller) height so every section reveals
  const h = await page.evaluate(() => {
    const s = document.getElementById('scroll-root');
    return Math.max(document.documentElement.scrollHeight, s ? s.scrollHeight : 0);
  });
  await page.setViewportSize({ width, height: h });
  await page.waitForTimeout(2500);
  const h2 = await page.evaluate(() => {
    const s = document.getElementById('scroll-root');
    return Math.max(document.documentElement.scrollHeight, s ? s.scrollHeight : 0);
  });
  if (h2 !== h) { await page.setViewportSize({ width, height: h2 }); await page.waitForTimeout(1500); }
  await page.screenshot({ path: `${out}/home-${name}.png`, fullPage: true, animations: 'disabled' });
  console.log(name, width, h2);
  await page.close();
}
await browser.close();
