const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const schedules={
 lunes:[["06:00","EL DESPERTADOR","Música + energía"],["10:00","FLOW DE MEDIA MAÑANA","Hits urbanos"],["14:00","LA ZONA","Entretenimiento"],["18:00","MÁXIMA HORA","Top urbano"],["22:00","NOCHE SIN FILTRO","Trap & reggaetón"]],
 martes:[["06:00","ARRIBA EL MOVIMIENTO","Morning show"],["10:00","MÁXIMA MIX","Non-stop music"],["14:00","LA ZONA","Entrevistas"],["18:00","DEMBOW 88","Dembow dominicano"],["22:00","NOCHE SIN FILTRO","Trap & reggaetón"]],
 miercoles:[["06:00","EL DESPERTADOR","Música + energía"],["10:00","FLOW DE MEDIA MAÑANA","Hits urbanos"],["14:00","NUEVA ESCUELA","Talento emergente"],["18:00","MÁXIMA HORA","Top urbano"],["22:00","SESSIONS LIVE","Sesiones exclusivas"]],
 jueves:[["06:00","ARRIBA EL MOVIMIENTO","Morning show"],["10:00","MÁXIMA MIX","Non-stop music"],["14:00","LA ZONA","Entretenimiento"],["18:00","THROWBACK URBANO","Clásicos modernos"],["22:00","NOCHE SIN FILTRO","Trap & reggaetón"]],
 viernes:[["06:00","EL DESPERTADOR","Música + energía"],["10:00","PRE WEEKEND","Calentando motores"],["14:00","LA ZONA","Entrevistas"],["18:00","FRIDAY TAKEOVER","DJ set en vivo"],["22:00","MÁXIMA CLUB","Perreo non-stop"]],
 sabado:[["08:00","WEEKEND FLOW","Hits del momento"],["12:00","TOP 20 MÁXIMA","Conteo semanal"],["16:00","DEMBOW NATION","Dembow dominicano"],["20:00","MÁXIMA CLUB","DJ set en vivo"]],
 domingo:[["09:00","SUNDAY VIBES","Chill urbano"],["13:00","REPLAY MÁXIMA","Lo mejor de la semana"],["17:00","NUEVA ESCUELA","Estrenos"],["21:00","NOCHE SUAVE","R&B latino"]]
};
function renderDay(day){$('#shows').innerHTML=schedules[day].map((x,i)=>`<article class="show-row reveal in" style="transition-delay:${i*55}ms"><time>${x[0]}</time><h3>${x[1]}</h3><p>${x[2]}</p><i>↗</i></article>`).join('')}
renderDay('lunes');
$$('.day-tabs button').forEach(b=>b.onclick=()=>{$$('.day-tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderDay(b.dataset.day)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.transitionDelay=(e.target.dataset.delay||0)+'ms';e.target.classList.add('in')}}),{threshold:.12});$$('.reveal').forEach(x=>io.observe(x));
const sections=$$('main section[id]'), navLinks=$$('.nav a');
const sio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-45% 0px -48%'});sections.forEach(s=>sio.observe(s));
addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;$('#progress').style.width=(scrollY/max*100)+'%';$('.nav-wrap').classList.toggle('scrolled',scrollY>30)});
addEventListener('pointermove',e=>{const g=$('.cursor-glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
const menu=$('.nav'), menuBtn=$('.menu-btn');menuBtn.onclick=()=>{menu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',menu.classList.contains('open'))};$$('.nav a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));
const player=$('#player'), radio=$('#radio-stream'), streamStatus=$('#stream-status');
const STREAM_URL='https://streaming.lamaximafm.com:8000/stream';
const METADATA_URL='https://streaming.lamaximafm.com:8000/status-json.xsl';
const nowTitle=$('#now-title'), nowArtist=$('#now-artist'), nowPlaying=$('.now-playing');
const dynamicCover=$('#dynamic-cover'), coverImage=$('#cover-image');
let streamReady=false;
let metadataSource=null;
let metadataPollTimer=null;
let lastMetadata='';
let metadataReconnectTimer=null;
let artworkRequestId=0;
const artworkMemory=new Map();
const ARTWORK_CACHE_KEY='laMaximaArtworkCacheV1';
let artworkCache={};
try{artworkCache=JSON.parse(localStorage.getItem(ARTWORK_CACHE_KEY)||'{}')||{}}catch(_){artworkCache={}}


function cleanMetadata(value=''){
  return String(value)
    .replace(/\([^)]*@(?:lamaxima|la_maxima)[^)]*\)/ig,' ')
    .replace(/\[(?:en\s*vivo|live|radio\s*edit|official\s*(?:audio|video))\]/ig,' ')
    .replace(/\b(?:en\s*vivo|live)\b/ig,' ')
    .replace(/@(?:lamaximafm|lamaxima(?:88)?(?:9)?fm?)\b/ig,' ')
    .replace(/\s+/g,' ')
    .replace(/^[-–—|:]+|[-–—|:]+$/g,'')
    .trim();
}

function parseStreamTitle(raw=''){
  const text=cleanMetadata(raw);
  if(!text) return {title:'LA MÁXIMA 88.9 FM',artist:'TRANSMISIÓN EN VIVO'};

  // Admite "Artista - Canción", incluso cuando la automatización no deja
  // espacios alrededor del guion: "Monchy-Superhéroe".
  const separators=[/\s*[–—|]\s*/,/\s+-\s+/,/\s*-\s*/];
  for(const separator of separators){
    const parts=text.split(separator).map(cleanMetadata).filter(Boolean);
    if(parts.length>=2){
      return {artist:parts.shift(),title:parts.join(' - ')};
    }
  }
  return {title:text,artist:'LA MÁXIMA 88.9 FM'};
}

function normalizeSearchText(value=''){
  return cleanMetadata(value)
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .toLowerCase()
    .replace(/\b(feat|ft|featuring|con)\.?\b.*$/i,'')
    .replace(/\b(remix|version|radio edit|official audio|official video)\b/ig,' ')
    .replace(/[^a-z0-9]+/g,' ')
    .trim();
}

const DEFAULT_ARTWORK='assets/logo-maxima-fallback.jpg';

function setFallbackCover(){
  if(!dynamicCover || !coverImage) return;
  dynamicCover.classList.remove('is-loading');
  coverImage.src=DEFAULT_ARTWORK;
  coverImage.alt='La Máxima 88.9 FM';
  dynamicCover.classList.add('has-artwork');
}

function showArtwork(url,artist,title){
  if(!url || !dynamicCover || !coverImage){setFallbackCover();return;}
  dynamicCover.classList.add('is-loading');
  const preload=new Image();
  preload.referrerPolicy='no-referrer';
  preload.onload=()=>{
    coverImage.src=url;
    coverImage.alt=`Portada de ${title} de ${artist}`;
    dynamicCover.classList.add('has-artwork');
    dynamicCover.classList.remove('is-loading');
  };
  preload.onerror=()=>setFallbackCover();
  preload.src=url;
}

function saveArtworkCache(key,url){
  artworkCache[key]={url,at:Date.now()};
  const entries=Object.entries(artworkCache)
    .sort((a,b)=>(b[1]?.at||0)-(a[1]?.at||0))
    .slice(0,100);
  artworkCache=Object.fromEntries(entries);
  try{localStorage.setItem(ARTWORK_CACHE_KEY,JSON.stringify(artworkCache))}catch(_){}
}

function includesUseful(haystack,needle){
  return Boolean(haystack&&needle&&(haystack===needle||haystack.includes(needle)||needle.includes(haystack)));
}

function chooseBestArtwork(results,artist,title){
  const wantedArtist=normalizeSearchText(artist);
  const wantedTitle=normalizeSearchText(title);
  let best=null,bestScore=-1;
  for(const item of results||[]){
    if(!item.artworkUrl100) continue;
    const itemArtist=normalizeSearchText(item.artistName||'');
    const itemTitle=normalizeSearchText(item.trackName||item.collectionName||'');
    let score=0;
    if(itemArtist===wantedArtist) score+=8;
    else if(includesUseful(itemArtist,wantedArtist)) score+=4;
    if(itemTitle===wantedTitle) score+=9;
    else if(includesUseful(itemTitle,wantedTitle)) score+=5;
    if(item.kind==='song'||item.wrapperType==='track') score+=1;
    if(score>bestScore){best=item;bestScore=score;}
  }
  return bestScore>=6?best:null;
}

async function searchITunes(artist,title,requestId){
  const terms=[
    `${artist} ${title}`,
    `"${title}" ${artist}`,
    title,
    artist
  ];
  const countries=['DO','US'];
  for(const termText of terms){
    for(const country of countries){
      const url=`https://itunes.apple.com/search?term=${encodeURIComponent(termText)}&entity=song&limit=20&country=${country}`;
      const response=await fetch(url,{mode:'cors',cache:'no-store'});
      if(!response.ok) continue;
      const data=await response.json();
      if(requestId!==artworkRequestId) return null;
      const match=chooseBestArtwork(data.results,artist,title);
      if(match?.artworkUrl100){
        return match.artworkUrl100.replace(/100x100bb/i,'600x600bb');
      }
    }
  }
  return null;
}

async function searchMusicBrainz(artist,title,requestId){
  const query=`recording:"${title}" AND artist:"${artist}"`;
  const response=await fetch(`https://musicbrainz.org/ws/2/recording/?query=${encodeURIComponent(query)}&fmt=json&limit=8`,{
    headers:{'Accept':'application/json'},cache:'no-store'
  });
  if(!response.ok) return null;
  const data=await response.json();
  if(requestId!==artworkRequestId) return null;
  for(const recording of data.recordings||[]){
    for(const release of recording.releases||[]){
      if(!release.id) continue;
      const cover=`https://coverartarchive.org/release/${release.id}/front-500`;
      try{
        const check=await fetch(cover,{method:'HEAD',mode:'cors',cache:'no-store'});
        if(check.ok) return cover;
      }catch(_){}
    }
  }
  return null;
}

async function updateArtwork({artist,title}){
  const requestId=++artworkRequestId;
  const cleanArtist=cleanMetadata(artist);
  const cleanTitle=cleanMetadata(title);
  const isStationFallback=/la m[aá]xima/i.test(cleanArtist)&&/transmisi[oó]n en vivo|la m[aá]xima/i.test(cleanTitle);
  if(!cleanArtist||!cleanTitle||isStationFallback){setFallbackCover();return;}

  const key=`${normalizeSearchText(cleanArtist)}|${normalizeSearchText(cleanTitle)}`;
  const cached=artworkMemory.get(key)||artworkCache[key]?.url;
  if(cached){showArtwork(cached,cleanArtist,cleanTitle);return;}

  dynamicCover?.classList.add('is-loading');
  try{
    let artwork=await searchITunes(cleanArtist,cleanTitle,requestId);
    if(!artwork) artwork=await searchMusicBrainz(cleanArtist,cleanTitle,requestId);
    if(requestId!==artworkRequestId) return;
    if(!artwork){setFallbackCover();return;}
    artworkMemory.set(key,artwork);
    saveArtworkCache(key,artwork);
    showArtwork(artwork,cleanArtist,cleanTitle);
  }catch(error){
    if(requestId===artworkRequestId) setFallbackCover();
    console.warn('No se pudo obtener la portada:',error);
  }
}

function showMetadata(raw){
  const parsed=parseStreamTitle(raw);
  const fingerprint=`${parsed.artist}|${parsed.title}`;
  if(fingerprint===lastMetadata) return;
  lastMetadata=fingerprint;
  nowPlaying?.classList.add('is-changing');
  setTimeout(()=>{
    nowTitle.textContent=parsed.title;
    nowArtist.textContent=parsed.artist;
    nowPlaying?.classList.remove('is-changing');
    player.classList.add('metadata-live');
    document.title=`${parsed.artist} — ${parsed.title} | La Máxima 88.9 FM`;
    updateArtwork(parsed);
  },190);
}

function metadataFallback(){
  if(!lastMetadata){
    nowTitle.textContent='LA MÁXIMA 88.9 FM';
    nowArtist.textContent='TRANSMISIÓN EN VIVO';
    document.title='La Máxima 88.9 FM — Donde vibra el movimiento';
    setFallbackCover();
  }
  player.classList.remove('metadata-live');
}

function extractIcecastTitle(data){
  const source=data?.icestats?.source;
  const sources=Array.isArray(source) ? source : (source ? [source] : []);

  const current=sources.find(item=>{
    const listenurl=String(item?.listenurl||'');
    return listenurl.endsWith('/stream') || listenurl.includes(':8000/stream');
  }) || sources[0];

  return current?.title ||
         current?.yp_currently_playing ||
         current?.server_name ||
         current?.server_description ||
         '';
}

async function fetchMetadata(){
  try{
    const response=await fetch(`${METADATA_URL}?t=${Date.now()}`,{
      cache:'no-store',
      mode:'cors'
    });

    if(!response.ok) throw new Error(`HTTP ${response.status}`);

    const data=await response.json();
    const raw=extractIcecastTitle(data);

    if(raw){
      showMetadata(raw);
    }else{
      metadataFallback();
    }
  }catch(error){
    metadataFallback();
    console.warn('No se pudo consultar la metadata de la nueva señal:',error);
  }
}

function connectMetadata(){
  metadataSource?.close?.();
  metadataSource=null;
  clearTimeout(metadataReconnectTimer);
  clearInterval(metadataPollTimer);

  fetchMetadata();
  metadataPollTimer=setInterval(fetchMetadata,12000);
}

function prepareStream(){
  if(streamReady) return;
  streamReady=true;
  radio.src=STREAM_URL;
  radio.load();
}

async function startRadio(){
  prepareStream();
  player.classList.add('open');
  try{
    await radio.play();
    streamStatus.textContent='SEÑAL EN VIVO';
    player.classList.add('is-live');
    $$('.player-main').forEach(b=>{
      b.textContent='❚❚';
      b.setAttribute('aria-label','Pausar transmisión');
      b.setAttribute('aria-pressed','true');
    });
  }catch(error){
    streamStatus.textContent='TOCA CUALQUIER PARTE PARA ESCUCHAR';
    player.classList.remove('is-live');
  }
}

function stopRadio(){
  radio.pause();
  radio.removeAttribute('src');
  radio.load();
  streamReady=false;
  audioUnlocked=false;

  streamStatus.textContent='TRANSMISIÓN DETENIDA';
  player.classList.remove('is-live');

  $$('.player-main').forEach(b=>{
    b.textContent='▶';
    b.setAttribute('aria-label','Iniciar transmisión');
    b.setAttribute('aria-pressed','false');
  });
}

function togglePlay(event){
  event?.preventDefault();
  radio.paused ? startRadio() : stopRadio();
}

$$('[data-play]').forEach(b=>b.addEventListener('click',togglePlay));


radio.addEventListener('waiting',()=>streamStatus.textContent='CONECTANDO CON LA SEÑAL...');
radio.addEventListener('playing',()=>{
  streamStatus.textContent='SEÑAL EN VIVO';
  player.classList.add('is-live');
});
radio.addEventListener('error',()=>{
  streamStatus.textContent='NO SE PUDO CARGAR LA SEÑAL';
  player.classList.remove('is-live');
});

// Se intenta reproducir al cargar. En móviles, el navegador puede exigir
// una interacción real. Se aprovecha el primer toque, deslizamiento o tecla.
addEventListener('DOMContentLoaded',()=>{
  setFallbackCover();
  player.classList.add('open');
  prepareStream();
  radio.autoplay=true;
  connectMetadata();
  setTimeout(startRadio,350);
},{once:true});

let audioUnlocked=false;
let unlockInProgress=false;

async function unlockAudio(event){
  if(audioUnlocked || unlockInProgress || !radio.paused) return;
  if(event?.target?.closest?.('[data-play]')) return;
  unlockInProgress=true;
  prepareStream();
  player.classList.add('open');
  try{
    await radio.play();
    audioUnlocked=true;
    streamStatus.textContent='SEÑAL EN VIVO';
    player.classList.add('is-live');
    $$('.player-main').forEach(b=>{
      b.textContent='❚❚';
      b.setAttribute('aria-label','Pausar transmisión');
      b.setAttribute('aria-pressed','true');
    });
  }catch(_){
    // Algunos navegadores aceptan el gesto al finalizar el desplazamiento.
  }finally{
    unlockInProgress=false;
  }
}

// touchstart permite arrancar desde el primer contacto; touchstart/pointerup
// cubren especialmente el gesto de scroll en Android y iOS.
['touchstart','touchstart','pointerdown','pointerup','click','keydown'].forEach(type=>{
  document.addEventListener(type,unlockAudio,{capture:true,passive:type!=='keydown'});
});


// Intentar activar durante el primer desplazamiento táctil.
let scrollUnlockTried=false;
function unlockOnScroll(){
 if(scrollUnlockTried||audioUnlocked) return;
 scrollUnlockTried=true;
 unlockAudio();
}
document.addEventListener('touchmove',unlockOnScroll,{capture:true,passive:true});
document.addEventListener('scroll',unlockOnScroll,{capture:true,passive:true});

radio.addEventListener('playing',()=>{audioUnlocked=true});

$('#year').textContent=new Date().getFullYear();

addEventListener('beforeunload',()=>{metadataSource?.close?.();clearInterval(metadataPollTimer);clearTimeout(metadataReconnectTimer)});


// v15: pantalla de entrada. El clic es una interacción explícita y válida
// para iniciar audio con sonido en Android, iOS y navegadores de escritorio.
const entryGate=document.getElementById('entry-gate');
const entryGateButton=document.getElementById('entry-gate-button');

async function enterLaMaxima(){
  if(!entryGateButton || entryGateButton.disabled) return;
  entryGateButton.disabled=true;
  entryGateButton.querySelector('span:last-child').textContent='CONECTANDO...';
  prepareStream();
  player.classList.add('open');

  try{
    await radio.play();
    audioUnlocked=true;
    streamStatus.textContent='SEÑAL EN VIVO';
    player.classList.add('is-live');
    $$('.player-main').forEach(b=>{
      b.textContent='❚❚';
      b.setAttribute('aria-label','Pausar transmisión');
      b.setAttribute('aria-pressed','true');
    });
  }catch(error){
    // Se conserva el reproductor disponible incluso si un navegador excepcional
    // vuelve a pedir otra interacción.
    streamStatus.textContent='TOCA PLAY PARA ESCUCHAR';
    console.warn('El navegador bloqueó el primer intento de audio:',error);
  }

  entryGate?.classList.add('is-leaving');
  document.body.classList.remove('intro-open');
  setTimeout(()=>entryGate?.remove(),550);
}

entryGateButton?.addEventListener('click',enterLaMaxima);

// v17: portada ampliable. El evento vive en el contenedor, por lo que
// continúa funcionando aunque la imagen cambie dinámicamente.
const cover=document.getElementById('dynamic-cover');
const modal=document.getElementById('cover-modal');
const modalCard=modal?.querySelector('.cover-modal-card');
const modalImg=document.getElementById('cover-modal-image');
const modalFallback=modal?.querySelector('.cover-modal-fallback');
const modalTitle=document.getElementById('cover-modal-title');
const modalArtist=document.getElementById('cover-modal-artist');
const modalClose=modal?.querySelector('.cover-modal-close');
let lastFocusedBeforeModal=null;

function openCoverModal(event){
  justOpenedModal=true; setTimeout(()=>{justOpenedModal=false},250);
  event?.preventDefault();
  event?.stopPropagation();
  if(!modal || !cover) return;

  const img=document.getElementById('cover-image');
  const title=document.getElementById('now-title')?.textContent?.trim() || 'LA MÁXIMA 88.9 FM';
  const artist=document.getElementById('now-artist')?.textContent?.trim() || 'TRANSMISIÓN EN VIVO';
  const hasArtwork=Boolean(img?.getAttribute('src')) && cover.classList.contains('has-artwork');

  if(modalTitle) modalTitle.textContent=title;
  if(modalArtist) modalArtist.textContent=artist;

  if(modalImg){
    if(hasArtwork){
      modalImg.src=img.currentSrc || img.src;
      modalImg.alt=`Portada de ${title}${artist ? ` de ${artist}` : ''}`;
      modalImg.hidden=false;
      modalFallback?.classList.remove('show');
    }else{
      modalImg.removeAttribute('src');
      modalImg.hidden=true;
      modalFallback?.classList.add('show');
    }
  }

  lastFocusedBeforeModal=document.activeElement;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('cover-modal-open');
  requestAnimationFrame(()=>modalClose?.focus({preventScroll:true}));
}

function closeCoverModal(event){
  event?.preventDefault();
  if(!modal?.classList.contains('show')) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('cover-modal-open');
  if(lastFocusedBeforeModal instanceof HTMLElement){
    lastFocusedBeforeModal.focus({preventScroll:true});
  }
}

// v22: una sola activación por gesto, sin doble disparo ni "clip" en móvil.
const playerInfo=document.getElementById('player-info');
let playerTapLocked=false;
let playerPointerDown=false;
let playerStartX=0;
let playerStartY=0;
let playerMoved=false;

function triggerPlayerModal(event){
  if(event?.target?.closest?.('button,a,input,select,textarea')) return;
  if(playerTapLocked) return;

  playerTapLocked=true;
  openCoverModal(event);
  setTimeout(()=>{playerTapLocked=false},600);
}

playerInfo?.addEventListener('pointerdown',event=>{
  if(event.pointerType==='mouse' && event.button!==0) return;
  playerPointerDown=true;
  playerMoved=false;
  playerStartX=event.clientX;
  playerStartY=event.clientY;
});

playerInfo?.addEventListener('pointermove',event=>{
  if(!playerPointerDown) return;
  if(Math.abs(event.clientX-playerStartX)>12 || Math.abs(event.clientY-playerStartY)>12){
    playerMoved=true;
  }
});

playerInfo?.addEventListener('pointercancel',()=>{
  playerPointerDown=false;
  playerMoved=false;
});

playerInfo?.addEventListener('pointerup',event=>{
  if(!playerPointerDown) return;
  playerPointerDown=false;

  if(playerMoved){
    playerMoved=false;
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  triggerPlayerModal(event);
},{passive:false});

playerInfo?.addEventListener('click',event=>{
  // Solo teclado; los toques generan detail > 0 y se ignoran.
  if(event.detail!==0) return;
  triggerPlayerModal(event);
});

playerInfo?.addEventListener('keydown',event=>{
  if((event.key==='Enter' || event.key===' ') && !event.repeat){
    event.preventDefault();
    triggerPlayerModal(event);
  }
});

modalClose?.addEventListener('click',closeCoverModal);

let backdropPressStarted=false;
modal?.addEventListener('pointerdown',event=>{
  backdropPressStarted=(event.target===modal);
});
modal?.addEventListener('pointerup',event=>{
  if(backdropPressStarted && event.target===modal){
    event.preventDefault();
    event.stopPropagation();
    closeCoverModal(event);
  }
  backdropPressStarted=false;
});
modalCard?.addEventListener('pointerdown',event=>event.stopPropagation());
modalCard?.addEventListener('pointerup',event=>event.stopPropagation());
modalCard?.addEventListener('click',event=>event.stopPropagation());
document.addEventListener('keydown',event=>{
  if(event.key==='Escape' && modal?.classList.contains('show')) closeCoverModal(event);
});

