const INGRESOS_UNIFIED_KEY = 'ingresosRegistrosUnificados';
const INGRESOS_STORAGE_KEY = 'ingresosDiariosExtra';
const INGRESOS_HISTORICAL_KEY = 'ingresosDataHistorica';
const EGRESOS_UNIFIED_KEY = 'egresosRegistrosUnificados';
const EGRESOS_STORAGE_KEY = 'egresosDiariosExtra';
const EGRESOS_HISTORICAL_KEY = 'egresosDataHistorica';
const GLOBAL_PRE_IMPORT_KEY = 'backupCompletoAntesDeImportar';
const GLOBAL_LAST_BACKUP_KEY = 'backupCompletoIngresosEgresos';
const PASSWORD_FILE_NAME = 'pseleminar.txt';
const META_INGRESOS = 21000;
const META_EGRESOS = 21000;
const monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const currency = n => 'RD$' + Number(n || 0).toLocaleString('es-DO');
function uid(){ return String(Date.now()) + Math.random().toString(16).slice(2); }
function readJSON(key, fallback){ try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } }
function saveJSON(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function asNumber(v){ return Number(String(v || 0).replace(/[^0-9.-]/g,'')) || 0; }
function cleanText(t, fallback=''){ return String(t || '').trim() || fallback; }
function normalizeText(t, fallback='Sin nombre'){ return cleanText(t, fallback).replace(/\s+/g, ' '); }
function pad(n){ return String(n).padStart(2,'0'); }
function parseDM(label, fallbackMonth){
  const match = String(label || '').match(/(\d{1,2})\/(\d{1,2})/);
  if(match) return `2026-${pad(match[2])}-${pad(match[1])}`;
  const monthIndex = Math.max(0, monthNames.indexOf(fallbackMonth));
  return `2026-${pad(monthIndex + 1)}-28`;
}
function mondayStart(dateText){
  const [y,m,d] = String(dateText || '').split('-').map(Number);
  const dt = new Date(y || 2026, (m || 1) - 1, d || 1);
  const diff = (dt.getDay() + 6) % 7;
  dt.setDate(dt.getDate() - diff);
  return `${dt.getFullYear()}-${pad(dt.getMonth()+1)}-${pad(dt.getDate())}`;
}
function weekLabel(dateText){ const s = mondayStart(dateText); const [,m,d] = s.split('-').map(Number); return `${d}/${m}`; }
function monthNameFromDate(dateText){ return monthNames[(Number(String(dateText).slice(5,7)) || 1) - 1]; }
function normalizeIncomeEntry(e){
  const rawClient = e.client || e.description || e.name || 'Cliente';
  return { id: e.id || uid(), date: e.date, client: normalizeText(rawClient, 'Cliente'), project: cleanText(e.project || '', ''), amount: asNumber(e.amount), source: e.source || 'manual' };
}
function normalizeExpenseEntry(e){
  const rawClient = e.client || e.category || e.description || e.name || 'Gasto';
  return { id: e.id || uid(), date: e.date, client: normalizeText(rawClient, 'Gasto'), project: cleanText(e.project || e.detail || '', ''), amount: asNumber(e.amount), source: e.source || 'manual' };
}
function historicalToEntries(historical, type){
  const out = [];
  (historical || []).forEach(month => {
    (month.weeks || []).forEach(week => {
      const fallbackDate = parseDM(week.date, month.month);
      const items = Array.isArray(week.items) && week.items.length ? week.items : [[`Semana ${week.date}`, week.total || 0]];
      items.forEach(item => {
        const date = item[2] || fallbackDate;
        const entry = { id: uid(), date, client: item[0], project: '', amount: asNumber(item[1]), source: 'histórico' };
        out.push(type === 'egresos' ? normalizeExpenseEntry(entry) : normalizeIncomeEntry(entry));
      });
    });
  });
  return out.filter(e => e.date && e.amount);
}
function readIngresos(){
  const unified = readJSON(INGRESOS_UNIFIED_KEY, null);
  if(Array.isArray(unified)) return unified.map(normalizeIncomeEntry).filter(e => e.date && e.amount);
  const extras = readJSON(INGRESOS_STORAGE_KEY, []);
  const historical = readJSON(INGRESOS_HISTORICAL_KEY, []);
  return [...historicalToEntries(historical, 'ingresos'), ...(extras || []).map(normalizeIncomeEntry)].filter(e => e.date && e.amount);
}
function readEgresos(){
  const unified = readJSON(EGRESOS_UNIFIED_KEY, null);
  if(Array.isArray(unified)) return unified.map(normalizeExpenseEntry).filter(e => e.date && e.amount);
  const extras = readJSON(EGRESOS_STORAGE_KEY, []);
  const historical = readJSON(EGRESOS_HISTORICAL_KEY, Array.isArray(window.dataBase) ? window.dataBase : []);
  return [...historicalToEntries(historical, 'egresos'), ...(extras || []).map(normalizeExpenseEntry)].filter(e => e.date && e.amount);
}
function saveIngresos(entries){
  const clean = (entries || []).map(normalizeIncomeEntry).filter(e => e.date && e.amount);
  saveJSON(INGRESOS_UNIFIED_KEY, clean);
  saveJSON(INGRESOS_STORAGE_KEY, clean);
  saveJSON(INGRESOS_HISTORICAL_KEY, []);
}
function saveEgresos(entries){
  const clean = (entries || []).map(normalizeExpenseEntry).filter(e => e.date && e.amount);
  saveJSON(EGRESOS_UNIFIED_KEY, clean);
  saveJSON(EGRESOS_STORAGE_KEY, clean);
  saveJSON(EGRESOS_HISTORICAL_KEY, []);
}
function fullBackupObject(){
  const ingresos = readIngresos();
  const egresos = readEgresos();
  return {
    version: 5,
    createdAt: new Date().toISOString(),
    note: 'Backup completo unificado. Incluye ingresos y egresos en un solo archivo.',
    configuracion: { metaSemanalIngresos: META_INGRESOS, metaSemanalEgresos: META_EGRESOS },
    ingresos: { registros: ingresos },
    egresos: { registros: egresos }
  };
}
function downloadText(filename, text, type='text/plain;charset=utf-8'){
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}
function exportUnifiedBackup(){
  const backup = fullBackupObject();
  localStorage.setItem(GLOBAL_LAST_BACKUP_KEY, JSON.stringify(backup));
  downloadText(`backup_completo_ingresos_egresos_${new Date().toISOString().slice(0,10)}.txt`, JSON.stringify(backup, null, 2));
  setStatus('Backup completo descargado. Incluye ingresos y egresos.');
}
function rowsToHtml(title, rows, kind){
  const headers = kind === 'ingresos' ? ['Fecha','Semana','Mes','Cliente','Proyecto','Monto','Origen'] : ['Fecha','Semana','Mes','Categoría','Detalle','Monto','Origen'];
  const body = rows.map(e => `<tr><td>${escapeHTML(e.date)}</td><td>${escapeHTML(weekLabel(e.date))}</td><td>${escapeHTML(monthNameFromDate(e.date))}</td><td>${escapeHTML(e.client)}</td><td>${escapeHTML(e.project || '')}</td><td>${e.amount}</td><td>${escapeHTML(e.source || '')}</td></tr>`).join('');
  return `<h2>${title}</h2><table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table>`;
}
function exportUnifiedExcel(){
  const ingresos = readIngresos();
  const egresos = readEgresos();
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>${rowsToHtml('Ingresos', ingresos, 'ingresos')}<br>${rowsToHtml('Egresos', egresos, 'egresos')}</body></html>`;
  downloadText(`backup_completo_ingresos_egresos_${new Date().toISOString().slice(0,10)}.xls`, html, 'application/vnd.ms-excel;charset=utf-8');
  setStatus('Excel completo descargado. Incluye ingresos y egresos.');
}
function normalizeImportedBackup(raw){
  let ingresos = [], egresos = [];
  if(raw && raw.ingresos){
    const incomeRaw = Array.isArray(raw.ingresos) ? raw.ingresos : (raw.ingresos.registros || raw.ingresos.registrosAgregados || []);
    ingresos = incomeRaw.map(normalizeIncomeEntry);
  }
  if(raw && raw.egresos){
    const expenseRaw = Array.isArray(raw.egresos) ? raw.egresos : (raw.egresos.registros || raw.egresos.registrosAgregados || []);
    egresos = expenseRaw.map(normalizeExpenseEntry);
  }
  if(!ingresos.length && raw && Array.isArray(raw.registros)) ingresos = raw.registros.map(normalizeIncomeEntry);
  if(!ingresos.length && raw && Array.isArray(raw.dataHistorica)) ingresos = historicalToEntries(raw.dataHistorica, 'ingresos');
  if(!ingresos.length && raw && Array.isArray(raw.registrosAgregados)) ingresos = raw.registrosAgregados.map(normalizeIncomeEntry);
  return { ingresos: ingresos.filter(e => e.date && e.amount), egresos: egresos.filter(e => e.date && e.amount) };
}
function importUnifiedFile(event){
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      localStorage.setItem(GLOBAL_PRE_IMPORT_KEY, JSON.stringify(fullBackupObject(), null, 2));
      const parsed = JSON.parse(reader.result);
      const imported = normalizeImportedBackup(parsed);
      saveIngresos(imported.ingresos);
      saveEgresos(imported.egresos);
      setStatus(`Backup cargado. Ingresos: ${imported.ingresos.length}. Egresos: ${imported.egresos.length}.`);
      render();
    } catch(err) {
      setStatus('No se pudo cargar. Usa el TXT completo descargado desde esta página.');
    }
  };
  reader.readAsText(file);
}
function downloadPreImportBackup(){
  const backup = localStorage.getItem(GLOBAL_PRE_IMPORT_KEY);
  if(!backup){ setStatus('No hay backup antes de importar guardado.'); return; }
  downloadText(`backup_antes_de_importar_completo_${new Date().toISOString().slice(0,10)}.txt`, backup);
}
async function getDeletePassword(){
  try { const response = await fetch(PASSWORD_FILE_NAME + '?v=' + Date.now()); if(!response.ok) throw new Error('No disponible'); const text = await response.text(); return text.trim() || '2406'; } catch { return '2406'; }
}
async function confirmWithPassword(message){
  const sure = confirm(message + '\n\nEsta acción elimina ingresos y egresos. No se puede deshacer.');
  if(!sure) return false;
  const typed = prompt('Ingresa la contraseña para confirmar:');
  if(typed === null) return false;
  const password = await getDeletePassword();
  if(typed.trim() !== password.trim()){ alert('Contraseña incorrecta. No se eliminó información.'); return false; }
  return true;
}
async function clearAllData(){
  const ok = await confirmWithPassword('Vas a borrar todos los ingresos y egresos guardados.');
  if(!ok) return;
  localStorage.setItem(GLOBAL_PRE_IMPORT_KEY, JSON.stringify(fullBackupObject(), null, 2));
  saveIngresos([]);
  saveEgresos([]);
  setStatus('Toda la información fue borrada. Se guardó un backup previo recuperable.');
  render();
}
function escapeHTML(v){ return String(v ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function setStatus(text){ const n = document.getElementById('saveStatus'); if(n) n.textContent = text; }
function render(){
  const ingresos = readIngresos();
  const egresos = readEgresos();
  const totalIngresos = ingresos.reduce((s,e)=>s+e.amount,0);
  const totalEgresos = egresos.reduce((s,e)=>s+e.amount,0);
  const neto = totalIngresos - totalEgresos;
  document.getElementById('netTotal').textContent = currency(neto);
  document.getElementById('totalCount').textContent = `${ingresos.length + egresos.length} registros totales`;
  document.getElementById('summaryCards').innerHTML = [
    ['Ingresos', currency(totalIngresos), `${ingresos.length} registros`],
    ['Egresos', currency(totalEgresos), `${egresos.length} registros`],
    ['Balance', currency(neto), neto >= 0 ? 'positivo' : 'negativo'],
    ['Backup', '1 archivo', 'TXT y Excel completos']
  ].map(c => `<article class="metric-card"><span>${c[0]}</span><strong>${c[1]}</strong><small>${c[2]}</small></article>`).join('');
  document.getElementById('backupTable').innerHTML = `<tr><td>Ingresos</td><td>${ingresos.length}</td><td>${currency(totalIngresos)}</td></tr><tr><td>Egresos</td><td>${egresos.length}</td><td>${currency(totalEgresos)}</td></tr><tr><td>Balance neto</td><td>${ingresos.length + egresos.length}</td><td>${currency(neto)}</td></tr>`;
}
document.getElementById('exportUnifiedBtn').addEventListener('click', exportUnifiedBackup);
document.getElementById('exportUnifiedExcelBtn').addEventListener('click', exportUnifiedExcel);
document.getElementById('importUnifiedFile').addEventListener('change', importUnifiedFile);
document.getElementById('downloadPreImportBtn').addEventListener('click', downloadPreImportBackup);
document.getElementById('clearAllBtn').addEventListener('click', clearAllData);
render();
