Rustrician automated fetch (overview)

This project includes a best-effort automation to extract an exported GIF (or fallback PNG) from a rustrician.io circuit page and save it under `images/` so your site can display the circuit directly.

How it works

- `scripts/fetch_rustrician.js <circuitId>` uses Puppeteer (headless Chromium) to open the rustrician page for the given circuit id. It listens to network responses for GIF assets and will save the first GIF it finds. If no GIF is captured it falls back to taking a PNG screenshot of the page or main canvas.

- `scripts/server.js` provides a minimal Express endpoint `/api/circuit/:id` that serves any previously-fetched file or starts a background fetch and returns 202 Accepted. It also statically serves the `images/` folder so your frontend can load the saved image at `/images/rustrician_<id>.gif` or `.png`.

Limitations and notes

- Embedding the rustrician page directly in an iframe often fails due to X-Frame-Options / CSP headers. This fetcher attempts to download the GIF via the export flow; if rustrician's UI changes or uses dynamic APIs that require interaction, the script may need selector adjustments.

- The script is "best-effort": if the export GIF URL isn't trivially discoverable via network responses after clicking the export controls, the script falls back to a PNG screenshot.

- Running this requires Node.js and enough resources to launch headless Chromium.

Install & run

From the repository root:

```bash
npm install
# Fetch a circuit manually (CLI)
node scripts/fetch_rustrician.js 2d586398af29dafea9c7c1fa00bc6f1f

# Or start the small server and trigger fetches via HTTP
node scripts/server.js
# then in another terminal, request:
curl -v http://localhost:3000/api/circuit/2d586398af29dafea9c7c1fa00bc6f1f
# The first call returns 202 while the fetch runs in background. Poll the same endpoint repeatedly until it returns the file.
```

After fetch completes the image will be available at:

  /images/rustrician_2d586398af29dafea9c7c1fa00bc6f1f.gif
  or .png if GIF wasn't captured.

Integration with the site

- Update your `electricalButtons` entry to use the image URL produced by the fetch (e.g. `fullImage: '/images/rustrician_<id>.gif'`) or keep using the external link and display with a fallback image if desired.

Security & hosting

- Running headless Chromium on a server has resource and security considerations. If you plan to fetch frequently or expose this publicly, run the fetcher on a controlled server with rate limiting.

If you'd like, I can:
- Try to adjust the script to click specific selectors from rustrician if you give me the page's DOM or screenshots of the export menu.
- Add an automatic polling UI to the front-end that requests `/api/circuit/:id` and replaces the electrical image once the file becomes available.
