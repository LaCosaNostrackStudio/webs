const currency = n => 'RD$' + Number(n || 0).toLocaleString('es-DO');
const monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const projectKeywords = ['video cuento','video final','dos videos','4 videos','3 juegos','juegos','juego','flyer','flayer','fyer','fler','flyers','intro','logo','portada','rifa','menu','menú','web','bumper','apertura','reparaciones','sub agentes','producto','adelanto','ofertas','decoracion','decoración','cafeteria','cafetería','pyme','apartamento','padre','español','invitacion','invitación'];
function uid(){ return String(Date.now()) + Math.random().toString(16).slice(2); }
function readJSON(key, fallback){ try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } }
function saveJSON(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function asNumber(v){ return Number(String(v || 0).replace(/[^0-9.-]/g,'')) || 0; }
function pad(n){ return String(n).padStart(2,'0'); }
function cleanText(t, fallback=''){ return String(t || '').trim() || fallback; }
function normalizeText(t){ return cleanText(t, 'Gasto'); }
function parseDM(label, fallbackMonth){
  const match = String(label || '').match(/(\d{1,2})\/(\d{1,2})/);
  if(match) return `2026-${pad(match[2])}-${pad(match[1])}`;
  const monthIndex = Math.max(0, monthNames.indexOf(fallbackMonth));
  return `2026-${pad(monthIndex + 1)}-28`;
}
function splitClientProject(text){
  const original = normalizeText(text);
  const lower = original.toLowerCase();
  let best = -1, found = '';
  projectKeywords.forEach(k => {
    const idx = lower.indexOf(k);
    if(idx > 0 && (best === -1 || idx < best)){ best = idx; found = k; }
  });
  if(best > 0){
    return { client: cleanText(original.slice(0, best), original), project: cleanText(original.slice(best), '') };
  }
  return { client: original, project: '' };
}
function mondayStart(dateText){
  const [y,m,d] = dateText.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  const day = dt.getDay();
  const diff = (day + 6) % 7;
  dt.setDate(dt.getDate() - diff);
  return `${dt.getFullYear()}-${pad(dt.getMonth()+1)}-${pad(dt.getDate())}`;
}
function weekLabel(dateText){ const start = mondayStart(dateText); const [,m,d] = start.split('-').map(Number); return `${d}/${m}`; }
function monthNameFromDate(dateText){ return monthNames[(Number(dateText.slice(5,7)) || 1) - 1]; }
function historicalToEntries(historical){
  const out = [];
  (historical || []).forEach(month => {
    (month.weeks || []).forEach(week => {
      const date = parseDM(week.date, month.month);
      const items = Array.isArray(week.items) && week.items.length ? week.items : [[`Semana ${week.date}`, week.total || 0]];
      items.forEach(item => {
        const dateItem = item[2] || date;
        const parts = splitClientProject(item[0]);
        out.push({ id: uid(), date: dateItem, client: parts.client, project: parts.project, amount: asNumber(item[1]), source: 'histórico' });
      });
    });
  });
  return out.filter(e => e.date && e.amount);
}
function normalizeEntry(e){
  const rawClient = e.client || e.description || e.name || 'Gasto';
  const hasProject = Object.prototype.hasOwnProperty.call(e, 'project');
  const parts = hasProject ? { client: normalizeText(rawClient), project: cleanText(e.project, '') } : splitClientProject(rawClient);
  return { id: e.id || uid(), date: e.date, client: parts.client, project: parts.project, amount: asNumber(e.amount), source: e.source || 'manual' };
}
function migrateIfNeeded(){
  const existing = readJSON(UNIFIED_KEY, null);
  if(Array.isArray(existing)) {
    const migrated = existing.map(normalizeEntry).filter(e => e.date && e.amount);
    saveJSON(UNIFIED_KEY, migrated);
    return migrated;
  }
  const historical = readJSON(HISTORICAL_KEY, dataBase);
  const extras = readJSON(STORAGE_KEY, []);
  const migrated = [...historicalToEntries(historical), ...(extras || []).map(normalizeEntry)].filter(e => e.date && e.amount);
  saveJSON(UNIFIED_KEY, migrated);
  return migrated;
}
function readEntries(){ return migrateIfNeeded(); }
function saveEntries(entries){
  const clean = (entries || []).map(normalizeEntry).filter(e => e.date && e.amount);
  saveJSON(UNIFIED_KEY, clean);
  saveJSON(STORAGE_KEY, clean);
  localStorage.setItem(LAST_BACKUP_KEY, JSON.stringify(fullBackupObject(clean)));
  render();
}
function fullBackupObject(entries = readEntries()){
  return { version: 4, createdAt: new Date().toISOString(), note: 'Backup completo unificado de egresos. Incluye categoría y detalle separados.', metaSemanal: META, registros: entries };
}
function normalizeImported(input){
  if(Array.isArray(input)) return input.map(normalizeEntry);
  if(input && Array.isArray(input.registros)) return input.registros.map(normalizeEntry);
  if(input && Array.isArray(input.dataHistorica)) return [...historicalToEntries(input.dataHistorica), ...(Array.isArray(input.registrosAgregados) ? input.registrosAgregados.map(normalizeEntry) : [])];
  if(input && Array.isArray(input.registrosAgregados)) return input.registrosAgregados.map(normalizeEntry);
  if(input && Array.isArray(input.extraEntries)) return input.extraEntries.map(normalizeEntry);
  throw new Error('Formato inválido');
}
async function getDeletePassword(){
  try { const response = await fetch(PASSWORD_FILE + '?v=' + Date.now()); if(!response.ok) throw new Error('No disponible'); const text = await response.text(); return text.trim() || '2406'; } catch { return '2406'; }
}
async function confirmWithPassword(message){
  const sure = confirm(message + '\n\nEsta acción no se puede deshacer.'); if(!sure) return false;
  const typed = prompt('Ingresa la contraseña para confirmar:'); if(typed === null) return false;
  const password = await getDeletePassword();
  if(typed.trim() !== password.trim()){ alert('Contraseña incorrecta. No se eliminó información.'); return false; }
  return true;
}

function normalizeSuggestionValue(value){ return cleanText(value, '').replace(/\s+/g, ' '); }
function uniqueSortedSuggestions(entries, field){
  const seen = new Map();
  (entries || []).forEach(e => {
    const value = normalizeSuggestionValue(e[field]);
    if(!value) return;
    const key = value.toLowerCase();
    if(!seen.has(key)) seen.set(key, value);
  });
  return [...seen.values()].sort((a,b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
}
function renderDatalist(id, values){
  const node = document.getElementById(id);
  if(!node) return;
  node.innerHTML = values.map(v => `<option value="${escapeHTML(v)}"></option>`).join('');
}
function updateSuggestions(){
  const entries = readEntries();
  renderDatalist('clientSuggestions', uniqueSortedSuggestions(entries, 'client'));
  renderDatalist('projectSuggestions', uniqueSortedSuggestions(entries, 'project'));
}

function downloadText(filename, text, type='text/plain;charset=utf-8'){
  const blob = new Blob([text], {type}); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename; a.click(); URL.revokeObjectURL(a.href);
}
function exportBackup(){ downloadText(`backup_egresos_completo_${new Date().toISOString().slice(0,10)}.txt`, JSON.stringify(fullBackupObject(), null, 2)); document.getElementById('saveStatus').textContent = 'Backup completo descargado'; }
function exportExcel(){
  const entries = readEntries().sort((a,b)=>a.date.localeCompare(b.date));
  const rows = [['Fecha','Semana lunes','Mes','Categoría','Detalle','Monto','Origen'], ...entries.map(e => [e.date, weekLabel(e.date), monthNameFromDate(e.date), e.client, e.project || '', e.amount, e.source || 'manual'])];
  const html = `<html><head><meta charset="UTF-8"></head><body><table>${rows.map(r=>`<tr>${r.map(c=>`<td>${String(c).replace(/&/g,'&amp;').replace(/</g,'&lt;')}</td>`).join('')}</tr>`).join('')}</table></body></html>`;
  downloadText(`egresos_excel_${new Date().toISOString().slice(0,10)}.xls`, html, 'application/vnd.ms-excel;charset=utf-8'); document.getElementById('saveStatus').textContent = 'Excel exportado';
}
function downloadPreImportBackup(){ const backup = localStorage.getItem(PRE_IMPORT_BACKUP_KEY); if(!backup){ document.getElementById('saveStatus').textContent = 'No hay backup antes de importar guardado.'; return; } downloadText(`backup_antes_de_importar_${new Date().toISOString().slice(0,10)}.txt`, backup); }
function escapeHTML(v){ return String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function matchesSearch(e,q){ const text = `${e.client} ${e.project || ''} ${e.date} ${e.amount}`.toLowerCase(); return !q || text.includes(q); }
function editEntry(id){
  const entries = readEntries(); const idx = entries.findIndex(e => e.id === id); if(idx < 0) return;
  const entry = entries[idx];
  const date = prompt('Editar fecha:', entry.date); if(date === null) return;
  const client = prompt('Editar categoría:', entry.client); if(client === null) return;
  const project = prompt('Editar detalle o trabajo:', entry.project || ''); if(project === null) return;
  const amount = prompt('Editar monto:', entry.amount); if(amount === null) return;
  const updated = { ...entry, date: cleanText(date, entry.date), client: normalizeText(client), project: cleanText(project, ''), amount: asNumber(amount), source: entry.source || 'manual' };
  if(!updated.date || !updated.client || !updated.amount){ alert('No se editó. Verifica fecha, categoría y monto.'); return; }
  entries[idx] = updated; saveEntries(entries); document.getElementById('saveStatus').textContent = 'Registro editado';
}
function render(){
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  updateSuggestions();
  const entries = readEntries().sort((a,b) => b.date.localeCompare(a.date));
  const filtered = entries.filter(e => matchesSearch(e,q));
  const total = entries.reduce((sum,e)=>sum + asNumber(e.amount), 0);
  document.getElementById('extraTotal').textContent = currency(total);
  document.getElementById('extraCount').textContent = `${entries.length} registros guardados`;
  document.getElementById('entriesTable').innerHTML = filtered.length ? filtered.map(e=>`
    <tr><td>${escapeHTML(e.date)}</td><td>${weekLabel(e.date)}</td><td>${escapeHTML(e.client)}</td><td>${escapeHTML(e.project || '')}</td><td>${currency(e.amount)}</td><td>${escapeHTML(e.source || 'manual')}</td><td><button class="secondary-mini edit-mini" data-id="${e.id}">Editar</button> <button class="danger-mini" data-id="${e.id}">Eliminar</button></td></tr>`).join('') : '<tr><td colspan="7">No hay registros para mostrar.</td></tr>';
  document.querySelectorAll('.edit-mini').forEach(btn => btn.addEventListener('click', () => editEntry(btn.dataset.id)));
  document.querySelectorAll('.danger-mini').forEach(btn => btn.addEventListener('click', async () => { const ok = await confirmWithPassword('Vas a eliminar este registro.'); if(!ok) return; saveEntries(readEntries().filter(e => e.id !== btn.dataset.id)); document.getElementById('saveStatus').textContent = 'Registro eliminado'; }));
}
document.getElementById('date').valueAsDate = new Date();
document.getElementById('incomeForm').addEventListener('submit', e => {
  e.preventDefault();
  const entry = { id: uid(), date: document.getElementById('date').value, client: normalizeText(document.getElementById('client').value), project: cleanText(document.getElementById('project').value, ''), amount: asNumber(document.getElementById('amount').value), source: 'manual' };
  saveEntries([...readEntries(), entry]); e.target.reset(); document.getElementById('date').valueAsDate = new Date(); document.getElementById('saveStatus').textContent = 'Egreso guardado. El dashboard se actualiza cada 10 segundos.';
});
document.getElementById('exportBtn')?.addEventListener('click', exportBackup);
document.getElementById('exportExcelBtn')?.addEventListener('click', exportExcel);
document.getElementById('downloadPreImportBtn')?.addEventListener('click', downloadPreImportBackup);
document.getElementById('searchInput')?.addEventListener('input', render);
document.getElementById('importFile')?.addEventListener('change', event => {
  const file = event.target.files[0]; if(!file) return; const reader = new FileReader();
  reader.onload = () => { try { localStorage.setItem(PRE_IMPORT_BACKUP_KEY, JSON.stringify(fullBackupObject(), null, 2)); const importedRaw = JSON.parse(reader.result); const clean = normalizeImported(importedRaw).filter(e => e.date && e.amount); saveEntries(clean); document.getElementById('saveStatus').textContent = 'Backup cargado. Se guardó una copia del estado anterior.'; } catch { document.getElementById('saveStatus').textContent = 'No se pudo cargar. Usa el TXT descargado desde esta página.'; } };
  reader.readAsText(file);
});
document.getElementById('clearBtn')?.addEventListener('click', async () => { const ok = await confirmWithPassword('Vas a borrar todos los registros guardados.'); if(!ok) return; localStorage.setItem(PRE_IMPORT_BACKUP_KEY, JSON.stringify(fullBackupObject(), null, 2)); saveEntries([]); document.getElementById('saveStatus').textContent = 'Todo fue borrado. Se guardó un backup previo recuperable.'; });
render();
