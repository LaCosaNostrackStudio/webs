const META = 21000;
const STORAGE_KEY = 'egresosDiariosExtra';
const HISTORICAL_KEY = 'egresosDataHistorica';
const UNIFIED_KEY = 'egresosRegistrosUnificados';
const LAST_BACKUP_KEY = 'egresosUltimoBackupCompleto';
const PRE_IMPORT_BACKUP_KEY = 'egresosBackupAntesDeImportar';
const PASSWORD_FILE = 'pseleminar.txt';
const dataBase = [
  { month: 'Mayo', weeks: [
    { date: '11/5', total: 19200, items: [['Traje', 7500], ['Uber', 700], ['Luz', 5000], ['Banreservas', 4000], ['Préstamo STA', 2000]] },
    { date: '18/5', total: 21150, items: [['Gasolina', 650], ['Gasolina', 1000], ['Gasolina', 400], ['Fihogar', 9200], ['Préstamo STA', 2000], ['Gasolina', 1000], ['Mantenimiento', 2000], ['Regalo Brayan', 500], ['Cámara', 3200], ['Domingo comida', 700], ['Domingo gasolina', 500]] },
    { date: '25/5', total: 17500, items: [['Banreservas', 11000], ['Gasolina', 1000], ['Préstamo STA', 2000], ['Agua', 2000], ['Gasolina', 500], ['Pan y huevos', 500], ['Gasolina', 500]] }
  ]},
  { month: 'Junio', weeks: [
    { date: '1/6', total: 16426, items: [['Gasolina', 1000], ['Comida perros', 300], ['Préstamo STA', 2000], ['Préstamos Popular', 8600], ['Gasolina', 1000], ['Gasolina', 500], ['Mantenimiento marzo', 2000], ['Gas', 826], ['Dos refrescos', 200]] },
    { date: '8/6', total: 13835, items: [
      ['Huevos y pan', 350, '2026-06-08'], ['Gasolina', 500, '2026-06-08'], ['Comida lunes', 250, '2026-06-08'], ['Jugo', 70, '2026-06-08'], ['Cervezas', 300, '2026-06-08'], ['Cena lunes', 1000, '2026-06-08'],
      ['Comida perros', 300, '2026-06-09'], ['Cervezas', 450, '2026-06-09'], ['Comida martes', 275, '2026-06-09'], ['Cena martes', 225, '2026-06-09'],
      ['Comida miércoles', 275, '2026-06-10'], ['Pan y leche', 270, '2026-06-10'], ['Merienda Brayan y yo', 200, '2026-06-10'], ['Cervezas', 980, '2026-06-10'], ['Dos refrescos y dos aguas', 70, '2026-06-10'], ['Gasolina', 500, '2026-06-10'], ['Cena miércoles', 350, '2026-06-10'],
      ['Pastelitos', 400, '2026-06-11'], ['Agua', 200, '2026-06-11'], ['Cervezas', 620, '2026-06-11'],
      ['Banreservas', 5000, '2026-06-12'], ['Comida', 250, '2026-06-12'], ['Publicidad', 1000, '2026-06-12']
    ] }
  ]}
];

window.META = META;
window.STORAGE_KEY = STORAGE_KEY;
window.HISTORICAL_KEY = HISTORICAL_KEY;
window.UNIFIED_KEY = UNIFIED_KEY;
window.LAST_BACKUP_KEY = LAST_BACKUP_KEY;
window.PRE_IMPORT_BACKUP_KEY = PRE_IMPORT_BACKUP_KEY;
window.PASSWORD_FILE = PASSWORD_FILE;
window.dataBase = dataBase;
