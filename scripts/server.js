// scripts/server.js
// Small Express server that exposes an endpoint to fetch/serve a rustrician circuit GIF/PNG.
// Usage:
// 1) npm install
// 2) node scripts/server.js
// 3) GET /api/circuit/:id  - returns the file if available, triggers fetch if missing

const express = require('express');
const path = require('path');
const fs = require('fs');
const { fetchAndSave } = require('./fetch_rustrician');

const app = express();
const port = process.env.PORT || 3000;
const imagesDir = path.join(__dirname, '..', 'images');

app.get('/api/circuit/:id', async (req, res) => {
  const id = req.params.id;
  const gifPath = path.join(imagesDir, `rustrician_${id}.gif`);
  const pngPath = path.join(imagesDir, `rustrician_${id}.png`);

  // If GIF already exists, send it
  if (fs.existsSync(gifPath)) return res.sendFile(gifPath);
  if (fs.existsSync(pngPath)) return res.sendFile(pngPath);

  // Otherwise, kick off fetch, stream a 202 response and then send the file when ready
  res.status(202).json({ status: 'fetching', message: 'Started fetching circuit. Poll /api/circuit/:id to check when ready.' });

  // Run fetch in background (do not await to keep response quick)
  fetchAndSave(id, imagesDir).then(result => {
    if (result.success) console.log('Fetch finished for', id, '->', result.path);
    else console.error('Fetch failed for', id, result.error);
  }).catch(err => console.error('Background fetch error', err));
});

// Static serve images folder for the site to load resulting images
app.use('/images', express.static(path.join(__dirname, '..', 'images')));

app.listen(port, () => {
  console.log(`Fetcher server listening on http://localhost:${port}`);
  console.log('Endpoints:');
  console.log('  GET /api/circuit/<id>  - trigger fetch if missing (returns 202) or serve file if ready');
});
