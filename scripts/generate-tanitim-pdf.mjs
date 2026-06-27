import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', 'tanitim_sayfasi');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
};

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    const filePath = path.join(ROOT, urlPath === '/' ? '/index.html' : urlPath);

    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403);
      res.end();
      return;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(data);
    });
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

// The route map is a live external iframe (media270.com/rota_gezgini) — it
// doesn't render inside a PDF print context, so a manually captured
// screenshot (full view, including the left-hand route list) is used
// instead of the iframe for the .route-embed-shot fallback.
const ROUTE_MAP_SHOT_PATH = path.join(ROOT, 'assets', 'route-map-screenshot.png');

function loadRouteMapShot() {
  const buffer = fs.readFileSync(ROUTE_MAP_SHOT_PATH);
  return `data:image/png;base64,${buffer.toString('base64')}`;
}

// <image-slot> renders into an open shadow root, so images live in
// slot.shadowRoot, not the main document — wait for those explicitly.
async function waitForImageSlots(page) {
  await page.evaluate(async () => {
    const slots = Array.from(document.querySelectorAll('image-slot'));
    const imgs = slots.flatMap((slot) =>
      slot.shadowRoot ? Array.from(slot.shadowRoot.querySelectorAll('img')) : []
    );
    const pending = imgs.filter((img) => img.src && !img.complete);
    await Promise.all(
      pending.map(
        (img) =>
          new Promise((resolve) => {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
          })
      )
    );
  });
}

const TARGETS = [
  { source: 'index.html', outFile: 'Media270-Tanitim-Dosyasi.pdf' },
  { source: 'premium.html', outFile: 'Media270-Premium-Dosyasi.pdf' },
];

async function renderTarget(browser, port, routeMapShot, { source, outFile }) {
  const page = await browser.newPage();
  try {
    await page.goto(`http://127.0.0.1:${port}/${source}`, { waitUntil: 'networkidle0' });

    // Bypass the access gate for rendering only — the live gate (HASH check,
    // localStorage) is untouched, this just unhides .doc for this CI render.
    await page.evaluate(() => document.body.classList.remove('locked'));

    await page.evaluate(() => document.fonts.ready);
    await waitForImageSlots(page);

    await page.evaluate((dataUrl) => {
      document.querySelectorAll('.route-embed-shot').forEach((img) => {
        img.src = dataUrl;
      });
    }, routeMapShot);

    const outPath = path.join(ROOT, outFile);
    await page.pdf({
      path: outPath,
      printBackground: true,
      preferCSSPageSize: true,
    });

    console.log(`PDF written to ${outPath}`);
  } finally {
    await page.close();
  }
}

async function main() {
  const server = await startServer();
  const { port } = server.address();

  const browser = await puppeteer.launch();
  try {
    const routeMapShot = loadRouteMapShot();
    for (const target of TARGETS) {
      await renderTarget(browser, port, routeMapShot, target);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
