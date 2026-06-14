const currency = n => 'RD$' + Number(n || 0).toLocaleString('es-DO');
const monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
function uid(){ return String(Date.now()) + Math.random().toString(16).slice(2); }
function readJSON(key, fallback){ try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } }
function saveJSON(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function asNumber(v){ return Number(String(v || 0).replace(/[^0-9.-]/g,'')) || 0; }
function cleanText(t, fallback=''){ return String(t || '').trim() || fallback; }
function normalizeText(t){ return cleanText(t, 'Sin nombre'); }
function escapeHTML(v){ return String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function pad(n){ return String(n).padStart(2,'0'); }
function mondayStart(dateText){ const [y,m,d] = dateText.split('-').map(Number); const dt = new Date(y, m - 1, d); const day = dt.getDay(); const diff = (day + 6) % 7; dt.setDate(dt.getDate() - diff); return `${dt.getFullYear()}-${pad(dt.getMonth()+1)}-${pad(dt.getDate())}`; }
function weekLabel(dateText){ const start = mondayStart(dateText); const [,m,d] = start.split('-').map(Number); return `${d}/${m}`; }
function monthNameFromDate(dateText){ return monthNames[(Number(dateText.slice(5,7)) || 1) - 1]; }
function normalizeEntry(e){ return { id: e.id || uid(), date: e.date, client: normalizeText(e.client || e.description || e.name || 'Ingreso'), project: cleanText(e.project, ''), amount: asNumber(e.amount), source: e.source || 'manual' }; }
function readEntries(){ return (readJSON(UNIFIED_KEY, []) || []).map(normalizeEntry).filter(e => e.date && e.amount); }
function saveEntries(entries){ const clean = (entries || []).map(normalizeEntry).filter(e => e.date && e.amount); saveJSON(UNIFIED_KEY, clean); saveJSON(STORAGE_KEY, clean); }
function fullBackupObject(entries = readEntries()){ return { version: 6, createdAt: new Date().toISOString(), note: 'Backup completo unificado. Incluye ingresos, egresos y trabajos/proyectos.', metaSemanal: META, registros: entries, trabajos: { registros: readProjects() } }; }
function normalizeProject(p){ return { id: p.id || uid(), date: p.date || new Date().toISOString().slice(0,10), client: normalizeText(p.client), projectType: cleanText(p.projectType || p.project || p.type, 'Proyecto'), amount: asNumber(p.amount || p.price), status: ['pendiente','realizado','pagado'].includes(p.status) ? p.status : 'pendiente', incomeEntryId: p.incomeEntryId || '' }; }
function readProjects(){ return (readJSON(PROJECTS_KEY, []) || []).map(normalizeProject).filter(p => p.date && p.client && p.amount); }
function saveProjects(projects){ const clean = projects.map(normalizeProject); saveJSON(PROJECTS_KEY, clean); localStorage.setItem('backupCompletoIngresosEgresos', JSON.stringify(fullBackupObject(), null, 2)); render(); }
function setStatus(text){ document.getElementById('saveStatus').textContent = text; }
function normalizeSuggestionValue(value){ return cleanText(value, '').replace(/\s+/g, ' '); }
function uniqueSortedSuggestions(entries, field){ const seen = new Map(); (entries || []).forEach(e => { const value = normalizeSuggestionValue(e[field]); if(!value) return; const key = value.toLowerCase(); if(!seen.has(key)) seen.set(key, value); }); return [...seen.values()].sort((a,b) => a.localeCompare(b, 'es', { sensitivity: 'base' })); }
function renderDatalist(id, values){ const node = document.getElementById(id); if(!node) return; node.innerHTML = values.map(v => `<option value="${escapeHTML(v)}"></option>`).join(''); }
function updateSuggestions(){ const entries = readEntries(); const projects = readProjects(); renderDatalist('clientSuggestions', uniqueSortedSuggestions([...entries, ...projects], 'client')); renderDatalist('projectSuggestions', [...new Set([...uniqueSortedSuggestions(entries, 'project'), ...uniqueSortedSuggestions(projects, 'projectType')])]); }
function incomeFromProject(project){ return { id: project.incomeEntryId || uid(), date: project.date, client: project.client, project: project.projectType, amount: project.amount, source: 'trabajo pagado' }; }
function addProjectToMetrics(project){ const entries = readEntries(); const entryId = project.incomeEntryId || uid(); const exists = entries.some(e => e.id === entryId); if(!exists){ entries.push(incomeFromProject({ ...project, incomeEntryId: entryId })); saveEntries(entries); localStorage.setItem(LAST_BACKUP_KEY, JSON.stringify(fullBackupObject(entries))); } return entryId; }
function removeProjectFromMetrics(project){ if(!project.incomeEntryId) return; const entries = readEntries().filter(e => e.id !== project.incomeEntryId); saveEntries(entries); localStorage.setItem(LAST_BACKUP_KEY, JSON.stringify(fullBackupObject(entries))); }
function confirmPagado(project){ return confirm(`Vas a marcar este trabajo como pagado.\n\nCliente: ${project.client}\nProyecto: ${project.projectType}\nMonto: ${currency(project.amount)}\n\nAl aceptar, este monto se agregará al dashboard de ingresos, al total registrado, al backup TXT, al Excel y a la memoria del navegador.`); }
function changeStatus(id, newStatus){ const projects = readProjects(); const idx = projects.findIndex(p => p.id === id); if(idx < 0) return; const project = projects[idx]; const previous = project.status; if(newStatus === 'pagado' && !project.incomeEntryId){ if(!confirmPagado(project)) return; project.incomeEntryId = addProjectToMetrics(project); setStatus('Trabajo marcado como pagado y agregado a las métricas.'); } if(project.incomeEntryId && newStatus !== 'pagado'){ removeProjectFromMetrics(project); project.incomeEntryId = ''; setStatus('Trabajo retirado de las métricas porque ya no está marcado como pagado.'); }
  project.status = newStatus; projects[idx] = project; saveProjects(projects); if(newStatus === 'realizado' && previous !== 'realizado') setStatus('Trabajo marcado como realizado. No se agregó al dashboard porque aún no está pagado.'); }
function editProject(id){ const projects = readProjects(); const idx = projects.findIndex(p => p.id === id); if(idx < 0) return; const project = projects[idx]; const date = prompt('Editar fecha:', project.date); if(date === null) return; const client = prompt('Editar cliente:', project.client); if(client === null) return; const projectType = prompt('Editar tipo de proyecto:', project.projectType); if(projectType === null) return; const amount = prompt('Editar precio:', project.amount); if(amount === null) return; const updated = { ...project, date: cleanText(date, project.date), client: normalizeText(client), projectType: cleanText(projectType, project.projectType), amount: asNumber(amount) };
  if(!updated.date || !updated.client || !updated.projectType || !updated.amount){ alert('No se editó. Verifica fecha, cliente, tipo de proyecto y precio.'); return; }
  projects[idx] = updated;
  if(updated.incomeEntryId){ const entries = readEntries(); const eidx = entries.findIndex(e => e.id === updated.incomeEntryId); if(eidx >= 0){ entries[eidx] = incomeFromProject(updated); saveEntries(entries); localStorage.setItem(LAST_BACKUP_KEY, JSON.stringify(fullBackupObject(entries))); } }
  saveProjects(projects); setStatus('Proyecto editado'); }
function deleteProject(id){ const projects = readProjects(); const project = projects.find(p => p.id === id); if(!project) return; if(!confirm('Vas a eliminar este trabajo o proyecto.')) return; if(project.incomeEntryId && confirm('Este trabajo está en las métricas. ¿Quieres quitar también ese ingreso del dashboard?')) removeProjectFromMetrics(project); saveProjects(projects.filter(p => p.id !== id)); setStatus('Proyecto eliminado'); }
function row(project){ return `<tr><td>${escapeHTML(project.date)}</td><td>${escapeHTML(project.client)}</td><td>${escapeHTML(project.projectType)}</td><td>${currency(project.amount)}</td><td><select class="status-select" data-id="${project.id}"><option value="pendiente" ${project.status==='pendiente'?'selected':''}>Pendiente</option><option value="realizado" ${project.status==='realizado'?'selected':''}>Realizado</option><option value="pagado" ${project.status==='pagado'?'selected':''}>Pagado</option></select></td><td><button class="secondary-mini edit-project" data-id="${project.id}">Editar</button> <button class="danger-mini delete-project" data-id="${project.id}">Eliminar</button></td></tr>`; }
function weekTitleFromStart(start){ const [,m,d] = start.split('-').map(Number); return `Semana ${d}/${m} ${monthNames[m - 1]}`; }
function listTable(projects, emptyText){
  if(!projects.length) return `<div class="empty-state">${emptyText}</div>`;
  const groups = projects.reduce((acc, project) => {
    const key = mondayStart(project.date);
    if(!acc[key]) acc[key] = [];
    acc[key].push(project);
    return acc;
  }, {});
  return Object.keys(groups).sort((a,b) => b.localeCompare(a)).map(week => {
    const items = groups[week].sort((a,b) => b.date.localeCompare(a.date));
    const total = items.reduce((sum, p) => sum + p.amount, 0);
    return `<div class="project-week-block"><div class="month-title"><h2>${weekTitleFromStart(week)}</h2><strong>${currency(total)}</strong></div><table><thead><tr><th>Fecha</th><th>Cliente</th><th>Tipo de proyecto</th><th>Precio</th><th>Estado</th><th>Acción</th></tr></thead><tbody>${items.map(row).join('')}</tbody></table></div>`;
  }).join('');
}
function attachEvents(){ document.querySelectorAll('.status-select').forEach(sel => sel.addEventListener('change', () => changeStatus(sel.dataset.id, sel.value))); document.querySelectorAll('.edit-project').forEach(btn => btn.addEventListener('click', () => editProject(btn.dataset.id))); document.querySelectorAll('.delete-project').forEach(btn => btn.addEventListener('click', () => deleteProject(btn.dataset.id))); }
function render(){ updateSuggestions(); const projects = readProjects().sort((a,b)=>b.date.localeCompare(a.date)); const pendingProjects = projects.filter(p=>p.status==='pendiente'); const doneProjects = projects.filter(p=>p.status==='realizado'); const paidProjects = projects.filter(p=>p.status==='pagado'); const pendingTotal = pendingProjects.reduce((sum,p)=>sum + p.amount, 0); const doneTotal = doneProjects.reduce((sum,p)=>sum + p.amount, 0); document.getElementById('pendingTotal').textContent = currency(pendingTotal); document.getElementById('pendingCount').textContent = `${pendingProjects.length} pendientes`; document.getElementById('doneTotal').textContent = currency(doneTotal); document.getElementById('doneCount').textContent = `${doneProjects.length} realizados`; document.getElementById('pendingList').innerHTML = listTable(pendingProjects, 'No hay proyectos pendientes.'); document.getElementById('doneList').innerHTML = listTable(doneProjects, 'No hay proyectos realizados.'); document.getElementById('paidList').innerHTML = listTable(paidProjects, 'No hay proyectos pagados.'); attachEvents(); }
document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => { document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); tab.classList.add('active'); document.getElementById(tab.dataset.tab).classList.add('active'); }));
document.getElementById('date').valueAsDate = new Date();
document.getElementById('projectForm').addEventListener('submit', e => { e.preventDefault(); const project = { id: uid(), date: document.getElementById('date').value, client: normalizeText(document.getElementById('client').value), projectType: cleanText(document.getElementById('projectType').value, 'Proyecto'), amount: asNumber(document.getElementById('amount').value), status: document.getElementById('status').value, incomeEntryId: '' }; if(!project.date || !project.client || !project.projectType || !project.amount){ alert('Completa fecha, cliente, tipo de proyecto y precio.'); return; } if(project.status === 'pagado'){ if(!confirmPagado(project)) return; project.incomeEntryId = addProjectToMetrics(project); }
  saveProjects([...readProjects(), project]); e.target.reset(); document.getElementById('date').valueAsDate = new Date(); setStatus(project.status === 'pagado' ? 'Proyecto guardado como pagado y agregado a métricas.' : 'Proyecto guardado. No afecta el dashboard hasta que esté pagado.'); });

function cleanupNonPaidProjectMetrics(){
  const projects = readProjects();
  let changed = false;
  projects.forEach(project => {
    if(project.status !== 'pagado' && project.incomeEntryId){
      removeProjectFromMetrics(project);
      project.incomeEntryId = '';
      changed = true;
    }
  });
  if(changed){
    const clean = projects.map(normalizeProject);
    saveJSON(PROJECTS_KEY, clean);
    localStorage.setItem('backupCompletoIngresosEgresos', JSON.stringify(fullBackupObject(), null, 2));
  }
}
cleanupNonPaidProjectMetrics();
render();
