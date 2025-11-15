// Clean script (script.clean.js) - replacement for corrupted script.js
// Implements the same compact behavior: electrical preview, artwork gallery, and Tool Cupboard allocation.

function copyToClipboard(text, button) {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    if (!button) return;
    const original = button.innerHTML;
    button.innerHTML = '✅ Copied!';
    setTimeout(() => button.innerHTML = original, 1400);
  }).catch(() => {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
  });
}

function createButtons(containerId, buttons, action) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  buttons.forEach(btn => {
    const button = document.createElement('button');
    button.className = 'grid-btn';
    let inner = '';
    if (btn.image) {
      const imgSrc = (btn.image.startsWith('images/') || btn.image.startsWith('circuits/') || btn.image.startsWith('http')) ? btn.image : `images/${btn.image}`;
      inner += `<img src="${imgSrc}" alt=""/> `;
    }
    inner += `<span>${btn.label}</span>`;
    button.innerHTML = inner;
    button.onclick = () => action(btn, button);
    container.appendChild(button);
  });
}

function showPage(pageId) {
  const pages = ['industrial','electrical','artwork','toolcupboard'];
  pages.forEach(p => {
    const el = document.getElementById(p + 'Page');
    if (!el) return;
    if (p === pageId) el.classList.remove('hidden');
    else el.classList.add('hidden');
  });
  document.querySelectorAll('.nav-buttons button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick') && btn.getAttribute('onclick').includes("showPage('" + pageId + "')"));
  });
}

const electricalButtons = [
  { label: 'Electrical Wall', image: 'https://i.ibb.co/x82JTfDV/Untitled.gif', fullImage: 'https://i.ibb.co/x82JTfDV/Untitled.gif', link: 'https://www.rustrician.io/?circuit=beb2fdb954bda6a376005dbbb9f4dfc0' },
  { label: 'SAMs', image: 'https://i.ibb.co/0jcyHJLm/sams.gif', fullImage: 'https://i.ibb.co/0jcyHJLm/sams.gif', link: 'https://www.rustrician.io/?circuit=1002d7226638ce6d3a29a00011cc2653' },
  { label: 'Rig Alarms', image: 'https://i.ibb.co/0pgM8jyD/654645.gif', fullImage: 'https://i.ibb.co/0pgM8jyD/654645.gif', link: 'https://www.rustrician.io/?circuit=cf43e730185258517c28297ee4946f2a', codes: [ {name:'Small', code:'4765'}, {name:'Large', code:'4768'}, {name:'Excav', code:'4777'} ] }
];

function showElectricalImage(btn) {
  const imgEl = document.getElementById('electricalImage');
  const frameEl = document.getElementById('electricalFrame');
  const displayEl = document.getElementById('electricalDisplay');
  const special = document.getElementById('electricalSpecialButtons');
  if (!displayEl || !special) return;
  displayEl.classList.remove('hidden');
  special.innerHTML = '';
  if (btn.fullImage) { frameEl.classList.add('hidden'); imgEl.src = btn.fullImage; imgEl.style.display = 'block'; imgEl.classList.remove('hidden'); }
  else if (btn.link) { imgEl.classList.add('hidden'); frameEl.src = btn.link; frameEl.style.display = 'block'; frameEl.classList.remove('hidden'); }
  if (btn.link) { const linkBtn = document.createElement('button'); linkBtn.textContent = 'Open Link'; linkBtn.onclick = () => window.open(btn.link, '_blank'); special.appendChild(linkBtn); }
  if (btn.codes && Array.isArray(btn.codes)) { btn.codes.forEach(c => { const b = document.createElement('button'); b.textContent = `Copy ${c.name}`; b.onclick = () => copyToClipboard(c.code, b); special.appendChild(b); }); }
}

const artworkItems = [ { src: 'images/rig-alarms.png', alt: 'Rig Alarms', title: 'Rig Alarms' }, { src: 'images/rats-farms.png', alt: 'Rats Farms', title: 'Rats Farms' } ];

function addArtworkItem(item) {
  const gallery = document.getElementById('artworkGallery');
  if (!gallery) return;
  const div = document.createElement('div'); div.className = 'art-item';
  const img = document.createElement('img'); img.src = item.src; img.alt = item.alt || item.title || ''; img.style.maxWidth = '240px'; div.appendChild(img);
  const caption = document.createElement('div'); caption.className = 'art-title'; caption.textContent = item.title || ''; div.appendChild(caption);
  const copy = document.createElement('button'); copy.textContent = 'Copy Link'; copy.onclick = () => copyToClipboard(item.src, copy); div.appendChild(copy);
  gallery.appendChild(div);
}

function calculateToolCupboardAllocate() {
  const wood = parseFloat(document.getElementById('tcWood').value) || 0;
  const stone = parseFloat(document.getElementById('tcStone').value) || 0;
  const frags = parseFloat(document.getElementById('tcFrags').value) || 0;
  const hqm = parseFloat(document.getElementById('tcHqm').value) || 0;
  const rates = [ { key: 'wood', rate: wood, cap: 1000, label: 'Wood' }, { key: 'stones', rate: stone, cap: 1000, label: 'Stone' }, { key: 'metal.fragments', rate: frags, cap: 1000, label: 'Metal Fragments' }, { key: 'metal.refined', rate: hqm, cap: 100 } ];
  const SLOT_LIMIT = 24; const results = document.getElementById('tcResults'); if (!results) return; results.innerHTML = '';
  if (rates.every(r => r.rate <= 0)) { results.innerHTML = '<div>No upkeep rates entered.</div>'; return; }
  const maxTPerRes = rates.map(r => r.rate > 0 ? (r.cap * SLOT_LIMIT) / r.rate : 0); let high = Math.max(...maxTPerRes, 60 * 24); let low = 0; const eps = 1/60;
  while (high - low > eps) { const mid = (low + high) / 2; let neededSlots = 0; rates.forEach(r => { if (r.rate <= 0) return; const neededUnits = r.rate * mid; neededSlots += Math.ceil(neededUnits / r.cap); }); if (neededSlots <= SLOT_LIMIT) low = mid; else high = mid; }
  const T = low; let combinedSlots = 0; rates.forEach(r => { if (r.rate <= 0) { r.slots = 0; r.stored = 0; return; } const neededUnits = r.rate * T; r.slots = Math.max(1, Math.ceil(neededUnits / r.cap)); r.stored = r.slots * r.cap; combinedSlots += r.slots; });
  rates.forEach(r => { const row = document.createElement('div'); row.className = 'row'; const left = document.createElement('div'); const lbl = document.createElement('div'); lbl.textContent = r.label; const sub = document.createElement('div'); sub.className = 'slots-sub'; sub.textContent = `${r.slots} slot${r.slots === 1 ? '' : 's'}`; left.appendChild(lbl); left.appendChild(sub); const right = document.createElement('div'); right.className = 'value'; right.textContent = Number(r.stored).toLocaleString(); const cbtn = document.createElement('button'); cbtn.textContent = 'Copy'; cbtn.onclick = () => copyToClipboard(String(r.stored), cbtn); row.appendChild(left); row.appendChild(right); row.appendChild(cbtn); results.appendChild(row); });
  const totalSeconds = Math.floor(T * 60); const hours = Math.floor(totalSeconds / 3600); const minutes = Math.floor((totalSeconds % 3600) / 60); const seconds = totalSeconds % 60; const runtime = `${hours}h ${minutes}m ${seconds}s`;
  results.appendChild(document.createElement('hr')); const summary = document.createElement('div'); summary.className = 'tc-summary'; summary.innerHTML = `Total slots used: <strong>${combinedSlots}</strong> / ${SLOT_LIMIT} &nbsp; — &nbsp; Runtime: <strong>${runtime}</strong>`; if (combinedSlots > SLOT_LIMIT) { const warn = document.createElement('div'); warn.style.color = '#ff8080'; warn.textContent = 'Warning: Required slots exceed the Tool Cupboard capacity (24)'; summary.appendChild(warn); } results.appendChild(summary);
  const copyAllBtn = document.getElementById('tcCopyAll'); if (copyAllBtn) { copyAllBtn.onclick = () => { const payload = []; rates.forEach(r => { if (r.stored <= 0) return; payload.push({ TargetCategory: null, MaxAmountInOutput: r.stored, BufferAmount: 0, MinAmountInInput: 0, IsBlueprint: false, BufferTransferRemaining: 0, TargetItemName: r.key }); }); copyToClipboard(JSON.stringify(payload, null, 2), copyAllBtn); }; }
}

// init
document.addEventListener('DOMContentLoaded', () => {
  createButtons('electricalButtons', electricalButtons, (btn) => showElectricalImage(btn));
  artworkItems.forEach(addArtworkItem);
  showPage('industrial');
  ['tcWood','tcStone','tcFrags','tcHqm'].forEach(id => { const el = document.getElementById(id); if (el) el.addEventListener('input', () => calculateToolCupboardAllocate()); });
  const calcBtn = document.getElementById('tcCalculate'); if (calcBtn) calcBtn.addEventListener('click', calculateToolCupboardAllocate);
  const copyAll = document.getElementById('tcCopyAll'); if (copyAll) copyAll.addEventListener('click', () => calculateToolCupboardAllocate());
});
