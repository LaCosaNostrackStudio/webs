let lastSnapshot = '';
let currentEntries = [];
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

function statusBadge(total){
  if(total <= META) return '<span class="badge ok">Dentro</span>';
  if(total <= META * 1.1) return '<span class="badge warn">Cerca del límite</span>';
  return '<span class="badge low">Sobre límite</span>';
}
function getYear(dateText){ return Number(String(dateText || '').slice(0,4)) || new Date().getFullYear(); }
function buildWeeks(entries){
  const map = new Map();
  entries.forEach(e => {
    const start = mondayStart(e.date);
    if(!map.has(start)) map.set(start, { start, date: weekLabel(e.date), month: monthNameFromDate(start), year: getYear(start), total: 0, items: [] });
    const w = map.get(start); w.total += asNumber(e.amount); w.items.push(e);
  });
  return [...map.values()].sort((a,b) => a.start.localeCompare(b.start));
}
function buildMonths(weeks){
  const map = new Map();
  weeks.forEach(w => {
    const key = `${w.year}-${String(monthNames.indexOf(w.month)+1).padStart(2,'0')}`;
    if(!map.has(key)) map.set(key, { key, month: w.month, year: w.year, weeks: [], total: 0 });
    const m = map.get(key); m.weeks.push(w); m.total += w.total;
  });
  return [...map.values()].sort((a,b)=>a.key.localeCompare(b.key));
}
function bestAndWorst(weeks){
  if(!weeks.length) return { best:null, worst:null };
  return { best: weeks.reduce((a,b)=> b.total > a.total ? b : a, weeks[0]), worst: weeks.reduce((a,b)=> b.total < a.total ? b : a, weeks[0]) };
}
function previousMonthComparison(months){
  if(months.length < 2) return { text:'Sin mes anterior', diff:0 };
  const last = months[months.length - 1], prev = months[months.length - 2], diff = last.total - prev.total;
  return { text:`${last.month} vs ${prev.month}: ${diff >= 0 ? '+' : ''}${currency(diff)}`, diff };
}
function annualProjection(entries, total){
  if(!entries.length) return 0;
  const dates = entries.map(e => new Date(e.date + 'T00:00:00')).sort((a,b)=>a-b);
  const first = dates[0], last = dates[dates.length - 1];
  const days = Math.max(1, Math.round((last - first) / 86400000) + 1);
  const year = first.getFullYear();
  const yearDays = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 366 : 365;
  return Math.round((total / days) * yearDays);
}
function emptyMessage(text){ return `<div class="empty-state">${text}</div>`; }
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
  entries[idx] = updated; saveEntries(entries); renderDashboard();
}
function renderDashboard(){
  currentEntries = readEntries();
  const weeks = buildWeeks(currentEntries); const months = buildMonths(weeks);
  const totalYear = currentEntries.reduce((s,e)=>s+asNumber(e.amount),0);
  const avgWeek = weeks.length ? Math.round(totalYear / weeks.length) : 0;
  const above = weeks.filter(w=>w.total<=META).length; const below = weeks.length - above;
  const { best, worst } = bestAndWorst(weeks); const monthComp = previousMonthComparison(months);
  const projection = annualProjection(currentEntries, totalYear); const monthlyGoal = META * 4; const annualGoal = META * 52;
  document.getElementById('totalYear').textContent = currency(totalYear);
  document.getElementById('yearStatus').textContent = `${weeks.length} semanas registradas. Promedio semanal: ${currency(avgWeek)}.`;
  const updatedAt = document.getElementById('updatedAt'); if(updatedAt) updatedAt.textContent = `Actualizado: ${new Date().toLocaleTimeString('es-DO')}`;
  document.getElementById('summaryCards').innerHTML = [
    ['Total egresos', currency(totalYear), `Límite anual: ${currency(annualGoal)}`], ['Límite mensual', currency(monthlyGoal), 'Calculado con 4 semanas por mes'], ['Promedio semanal', currency(avgWeek), avgWeek <= META ? 'Dentro del límite' : 'Sobre el límite'], ['Semanas dentro', above, `${above} de ${weeks.length} semanas`], ['Semanas sobre límite', below, `${below} de ${weeks.length} semanas`], ['Mejor semana', best ? `${best.date} ${best.month}` : 'Sin data', best ? currency(best.total) : 'RD$0'], ['Peor semana', worst ? `${worst.date} ${worst.month}` : 'Sin data', worst ? currency(worst.total) : 'RD$0'], ['Proyección anual', currency(projection), monthComp.text]
  ].map(c => `<article class="metric-card"><span>${c[0]}</span><strong>${c[1]}</strong><small>${c[2]}</small></article>`).join('');
  document.getElementById('annualBreakdown').innerHTML = months.length ? months.map(renderMonthBlock).join('') : emptyMessage('Carga un backup TXT para ver las métricas.');
  renderMonthOptions(months);
  document.getElementById('weeksTable').innerHTML = weeks.length ? weeks.map(w=>`<tr><td>${w.date}</td><td>${w.month}</td><td>${currency(w.total)}</td><td>${w.total-META>=0 ? '+' : ''}${currency(w.total-META)}</td><td>${statusBadge(w.total)}</td></tr>`).join('') : '<tr><td colspan="5">No hay semanas registradas.</td></tr>';
  renderClients(currentEntries); renderDetails(currentEntries); drawChart(weeks);
}
function renderMonthBlock(month){
  const months = buildMonths(buildWeeks(currentEntries)); const prevIndex = months.findIndex(m => m.key === month.key) - 1; const prev = months[prevIndex]; const diff = prev ? month.total - prev.total : 0;
  return `<section class="month-block"><div class="month-title"><h2>${month.month} ${month.year}</h2><strong>${currency(month.total)}</strong></div><p>${prev ? `Comparación con ${prev.month}: ${diff >= 0 ? '+' : ''}${currency(diff)}` : 'Primer mes registrado.'}</p><div class="week-grid">${month.weeks.map(w => `<article class="week-card"><h3>Semana ${w.date}</h3><strong>${currency(w.total)}</strong><p>${w.total <= META ? 'Disponible ' + currency(META - w.total) : 'Se pasó por ' + currency(w.total - META)}</p>${statusBadge(w.total)}</article>`).join('')}</div></section>`;
}
function renderMonthOptions(months){
  const monthSelect = document.getElementById('monthSelect'); const selectedValue = monthSelect.value || '0';
  monthSelect.innerHTML = months.length ? months.map((m,i)=>`<option value="${i}">${m.month} ${m.year}</option>`).join('') : '<option value="0">Sin datos</option>';
  monthSelect.value = Number(selectedValue) < months.length ? selectedValue : '0'; renderSelectedMonth(months);
}
function renderSelectedMonth(months){
  const month = months[Number(document.getElementById('monthSelect').value)] || months[0];
  if(!month){ document.getElementById('monthView').innerHTML = emptyMessage('No hay meses registrados.'); return; }
  document.getElementById('monthView').innerHTML = `<div class="table-card"><h2>${month.month} ${month.year}: ${currency(month.total)}</h2><table><thead><tr><th>Semana</th><th>Total</th><th>Diferencia vs límite</th><th>Estado</th></tr></thead><tbody>${month.weeks.map(w=>`<tr><td>${w.date}</td><td>${currency(w.total)}</td><td>${w.total-META>=0 ? '+' : ''}${currency(w.total-META)}</td><td>${statusBadge(w.total)}</td></tr>`).join('')}</tbody></table></div>`;
}
function renderClients(entries){
  const map = new Map();
  entries.forEach(e => { const key = normalizeText(e.client).toLowerCase(); if(!map.has(key)) map.set(key, { client: normalizeText(e.client), total: 0, count: 0 }); const c = map.get(key); c.total += asNumber(e.amount); c.count += 1; });
  const rows = [...map.values()].sort((a,b)=>b.total-a.total);
  document.getElementById('clientsTable').innerHTML = rows.length ? rows.map((c,i)=>`<tr><td>${i+1}</td><td>${escapeHTML(c.client)}</td><td>${c.count}</td><td>${currency(c.total)}</td></tr>`).join('') : '<tr><td colspan="4">No hay categorías registrados.</td></tr>';
}
function renderDetails(entries){
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  const filtered = entries.filter(e => matchesSearch(e,q)); const weeks = buildWeeks(filtered);
  document.getElementById('detailView').innerHTML = weeks.length ? weeks.map(w=>`<section class="month-block"><div class="month-title"><h2>Semana ${w.date} ${w.month}</h2><strong>${currency(w.total)}</strong></div><table><thead><tr><th>Fecha</th><th>Categoría</th><th>Detalle</th><th>Monto</th><th>Origen</th><th>Acción</th></tr></thead><tbody>${w.items.sort((a,b)=>a.date.localeCompare(b.date)).map(i=>`<tr><td>${escapeHTML(i.date)}</td><td>${escapeHTML(i.client)}</td><td>${escapeHTML(i.project || '')}</td><td>${currency(i.amount)}</td><td>${escapeHTML(i.source || 'manual')}</td><td><button class="secondary-mini edit-detail" data-id="${i.id}">Editar</button></td></tr>`).join('')}</tbody></table></section>`).join('') : emptyMessage('No hay resultados para esa búsqueda.');
  document.querySelectorAll('.edit-detail').forEach(btn => btn.addEventListener('click', () => editEntry(btn.dataset.id)));
}
function drawChart(weeks){
  const canvas = document.getElementById('weeklyChart'); const ctx = canvas.getContext('2d'); const W = canvas.width, H = canvas.height; const pad = {l:70, r:25, t:35, b:85};
  ctx.clearRect(0,0,W,H); ctx.fillStyle = '#ffffff'; ctx.fillRect(0,0,W,H);
  if(!weeks.length){ ctx.fillStyle = '#6f617f'; ctx.font = 'bold 24px Arial'; ctx.fillText('Carga un backup TXT para ver la gráfica.', 70, 120); return; }
  const maxVal = Math.max(...weeks.map(w=>w.total), META) * 1.12; const x = i => weeks.length === 1 ? W/2 : pad.l + i * ((W-pad.l-pad.r)/(weeks.length-1)); const y = v => H-pad.b - (v/maxVal)*(H-pad.t-pad.b);
  ctx.strokeStyle = '#eadff7'; ctx.lineWidth = 1; ctx.fillStyle = '#6f617f'; ctx.font = '14px Arial';
  for(let t=0;t<=5;t++){ const val = Math.round(maxVal/5*t); const yy = y(val); ctx.beginPath(); ctx.moveTo(pad.l,yy); ctx.lineTo(W-pad.r,yy); ctx.stroke(); ctx.fillText(currency(val), 8, yy+5); }
  ctx.setLineDash([9,7]); ctx.strokeStyle = '#f5a524'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(pad.l,y(META)); ctx.lineTo(W-pad.r,y(META)); ctx.stroke(); ctx.setLineDash([]); ctx.fillStyle = '#9a6500'; ctx.font = 'bold 14px Arial'; ctx.fillText('Límite RD$21,000', W-170, y(META)-10);
  ctx.strokeStyle = '#7c3aed'; ctx.lineWidth = 4; ctx.beginPath(); weeks.forEach((w,i)=> i===0 ? ctx.moveTo(x(i),y(w.total)) : ctx.lineTo(x(i),y(w.total))); ctx.stroke();
  weeks.forEach((w,i)=>{ ctx.beginPath(); ctx.arc(x(i),y(w.total),6,0,Math.PI*2); ctx.fillStyle = w.total <= META ? '#159947' : '#d83a3a'; ctx.fill(); ctx.fillStyle = '#22172f'; ctx.font = '12px Arial'; ctx.save(); ctx.translate(x(i)-6,H-58); ctx.rotate(-Math.PI/4); ctx.fillText(`${w.date} ${w.month.slice(0,3)}`,0,0); ctx.restore(); });
}
function exportExcel(){
  const entries = readEntries().sort((a,b)=>a.date.localeCompare(b.date));
  const rows = [['Fecha','Semana lunes','Mes','Categoría','Detalle','Monto','Origen'], ...entries.map(e => [e.date, weekLabel(e.date), monthNameFromDate(e.date), e.client, e.project || '', e.amount, e.source || 'manual'])];
  const html = `<html><head><meta charset="UTF-8"></head><body><table>${rows.map(r=>`<tr>${r.map(c=>`<td>${String(c).replace(/&/g,'&amp;').replace(/</g,'&lt;')}</td>`).join('')}</tr>`).join('')}</table></body></html>`;
  const blob = new Blob([html], {type:'application/vnd.ms-excel;charset=utf-8'}); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `egresos_excel_${new Date().toISOString().slice(0,10)}.xls`; a.click(); URL.revokeObjectURL(a.href);
}
document.getElementById('monthSelect').addEventListener('change', () => renderSelectedMonth(buildMonths(buildWeeks(readEntries()))));
document.getElementById('searchInput').addEventListener('input', () => renderDetails(currentEntries));
document.getElementById('exportExcelBtn').addEventListener('click', exportExcel);
document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('.tab').forEach(b => b.classList.remove('active')); document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); btn.classList.add('active'); document.getElementById(btn.dataset.tab).classList.add('active'); }));
renderDashboard();
setInterval(() => { const current = localStorage.getItem(UNIFIED_KEY) || ''; if(current !== lastSnapshot){ lastSnapshot = current; renderDashboard(); } else { const updatedAt = document.getElementById('updatedAt'); if(updatedAt) updatedAt.textContent = `Verificado: ${new Date().toLocaleTimeString('es-DO')}`; } }, 10000);
lastSnapshot = localStorage.getItem(UNIFIED_KEY) || '';
