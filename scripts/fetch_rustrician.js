// fetch_rustrician.js
// Best-effort Puppeteer script that navigates to a rustrician circuit page and tries to capture the exported GIF.
// Usage: node scripts/fetch_rustrician.js <circuitId>

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function fetchAndSave(circuitId, outDir = path.join(__dirname, '..', 'images')) {
  if (!circuitId) throw new Error('circuitId required');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const url = `https://www.rustrician.io/?circuit=${circuitId}`;
  console.log('Opening', url);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  let foundBuffer = null;

  // Intercept responses and watch for GIF content
  page.on('response', async (res) => {
    try {
      const rurl = res.url();
      const ct = (res.headers() || {})['content-type'] || '';
      if (ct.includes('image/gif') || /\.gif(\?|$)/i.test(rurl)) {
        console.log('Captured potential gif response:', rurl);
        const buf = await res.buffer();
        if (buf && buf.length > 0) {
          foundBuffer = buf;
        }
      }
    } catch (err) {
      // ignore
    }
  });

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    // Try to click any button with text "Export" (best effort)
    const exportBtnXpath = "//button[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'), 'export')]";
    const exportBtns = await page.$x(exportBtnXpath);
    if (exportBtns.length) {
      console.log('Clicking Export button...');
      await exportBtns[0].click();
      await page.waitForTimeout(800);
    }

    // Try to click any element that mentions GIF
    const gifBtnXpath = "//button[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'), 'gif') or contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'), 'export to gif')]";
    const gifBtns = await page.$x(gifBtnXpath);
    if (gifBtns.length) {
      console.log('Clicking Export to GIF button...');
      await gifBtns[0].click();
    } else {
      // If there's a menu or link we might have to click other nodes — best-effort only
      console.log('No explicit GIF button found via XPath. Waiting to see if network produces a GIF automatically...');
    }

    // Wait up to 30s for a GIF response to be captured
    const maxWait = 30000;
    const start = Date.now();
    while (!foundBuffer && Date.now() - start < maxWait) {
      await new Promise((r) => setTimeout(r, 500));
    }

    if (foundBuffer) {
      const outPath = path.join(outDir, `rustrician_${circuitId}.gif`);
      fs.writeFileSync(outPath, foundBuffer);
      console.log('Saved GIF to', outPath);
      await browser.close();
      return { success: true, path: outPath };
    }

    // Fallback: try to screenshot the main canvas/container (PNG fallback)
    console.log('No GIF found; taking a screenshot fallback (PNG).');
    // Try some common selectors for the main drawing area
    const selectors = ['canvas', '.App', '#root', '.circuit-canvas', '.main', 'body'];
    let taken = false;
    for (const sel of selectors) {
      const el = await page.$(sel);
      if (el) {
        const outPath = path.join(outDir, `rustrician_${circuitId}.png`);
        await el.screenshot({ path: outPath });
        console.log('Saved PNG fallback to', outPath, 'using selector', sel);
        taken = true;
        await browser.close();
        return { success: true, path: outPath, fallback: true };
      }
    }

    // Last-resort full page screenshot
    const outPath = path.join(outDir, `rustrician_${circuitId}.png`);
    await page.screenshot({ path: outPath, fullPage: false });
    console.log('Saved fallback full-page PNG to', outPath);
    await browser.close();
    return { success: true, path: outPath, fallback: true };
  } catch (err) {
    console.error('Error during fetch:', err);
    await browser.close();
    return { success: false, error: String(err) };
  }
}

if (require.main === module) {
  const id = process.argv[2];
  if (!id) {
    console.error('Usage: node scripts/fetch_rustrician.js <circuitId>');
    process.exit(2);
  }
  fetchAndSave(id).then(res => {
    if (!res.success) process.exit(1);
    console.log('Done:', res.path);
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { fetchAndSave };
