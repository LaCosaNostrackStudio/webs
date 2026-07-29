const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const weekdaySchedule=[["07:00 A.M.","ESTO NO ES RADIO","Información y entretenimiento"],["10:00 A.M.","DJ COCA RD","Música y mezclas en vivo"],["12:00 P.M.","MUY DIFERENTE RADIO","Contenido, actualidad y diversión"],["02:00 P.M.","DJ LESS RD","Selección musical en vivo"],["05:00 P.M.","SIN FILTRO RADIO SHOW","Opinión y entretenimiento"],["07:00 P.M.","DJ BIVARDY STY","Música y cultura urbana"],["09:00 P.M.","EL GOBIERNO URBANO","La noche de La Máxima"]];
const schedules={lunes:weekdaySchedule,martes:weekdaySchedule,miercoles:weekdaySchedule,jueves:weekdaySchedule,viernes:weekdaySchedule,sabado:[["TODO EL DÍA","LA MÁXIMA MUSIC","Selección musical 88.9 FM"]],domingo:[["TODO EL DÍA","LA MÁXIMA MUSIC","Selección musical 88.9 FM"]]}
function renderDay(day){$('#shows').innerHTML=schedules[day].map((x,i)=>`<article class="show-row reveal in" style="transition-delay:${i*55}ms"><time>${x[0]}</time><h3>${x[1]}</h3><p>${x[2]}</p><i>↗</i></article>`).join('')}
renderDay('lunes');
$$('.day-tabs button').forEach(b=>b.onclick=()=>{$$('.day-tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderDay(b.dataset.day)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.transitionDelay=(e.target.dataset.delay||0)+'ms';e.target.classList.add('in')}}),{threshold:.12});$$('.reveal').forEach(x=>io.observe(x));
const sections=$$('main section[id]'), navLinks=$$('.nav a');
const sio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-45% 0px -48%'});sections.forEach(s=>sio.observe(s));
addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;$('#progress').style.width=(scrollY/max*100)+'%';$('.nav-wrap').classList.toggle('scrolled',scrollY>30)});
addEventListener('pointermove',e=>{const g=$('.cursor-glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
const menu=$('.nav'), menuBtn=$('.menu-btn');menuBtn.onclick=()=>{menu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',menu.classList.contains('open'))};$$('.nav a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));
const player=$('#player'), streamStatus=$('#stream-status');
let radio=$('#radio-stream');
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

function freshStreamUrl(){
  const separator=STREAM_URL.includes('?')?'&':'?';
  return `${STREAM_URL}${separator}_=${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function recreateRadioElement(){
  const previous=radio;
  if(previous){
    try{previous.pause()}catch(_){ }
    previous.removeAttribute('src');
    try{previous.load()}catch(_){ }
  }

  const fresh=document.createElement('audio');
  fresh.id='radio-stream';
  fresh.preload='none';
  fresh.setAttribute('playsinline','');
  previous?.replaceWith(fresh);
  radio=fresh;
  bindRadioEvents(radio);
  streamReady=false;
  return radio;
}

function prepareStream(force=false){
  if(streamReady && !force && radio?.src) return radio;

  if(force || !radio){
    recreateRadioElement();
  }else{
    try{radio.pause()}catch(_){ }
    radio.removeAttribute('src');
    try{radio.load()}catch(_){ }
  }

  radio.src=freshStreamUrl();
  radio.load();
  streamReady=true;
  return radio;
}

let audioUnlocked=false;
let unlockInProgress=false;
let userMutedPause=false;
let recoveryTimer=null;

function setRadioPlayingUi(){
  streamStatus.textContent='SEÑAL EN VIVO';
  player.classList.add('is-live');
  $$('.player-main').forEach(b=>{
    b.textContent='❚❚';
    b.setAttribute('aria-label','Pausar transmisión');
    b.setAttribute('aria-pressed','true');
  });
}

function setRadioPausedUi(){
  streamStatus.textContent='TRANSMISIÓN EN PAUSA';
  player.classList.remove('is-live');
  $$('.player-main').forEach(b=>{
    b.textContent='▶';
    b.setAttribute('aria-label','Continuar transmisión');
    b.setAttribute('aria-pressed','false');
  });
}

async function startRadio(forceReconnect=false){
  player.classList.add('open');
  userMutedPause=false;

  // Si la conexión sigue viva, simplemente se quita el silencio. Esto evita
  // el retraso de 30–45 segundos que produce Icecast al abrir otra sesión.
  if(!forceReconnect && radio && !radio.paused && radio.readyState>0){
    radio.muted=false;
    radio.volume=1;
    audioUnlocked=true;
    setRadioPlayingUi();
    return;
  }

  streamStatus.textContent='CONECTANDO CON LA SEÑAL...';
  prepareStream(true);
  radio.muted=false;
  radio.volume=1;

  try{
    await radio.play();
    streamStatus.textContent='INICIANDO TRANSMISIÓN...';
  }catch(firstError){
    try{
      await new Promise(resolve=>setTimeout(resolve,300));
      prepareStream(true);
      radio.muted=false;
      radio.volume=1;
      await radio.play();
      streamStatus.textContent='INICIANDO TRANSMISIÓN...';
    }catch(error){
      streamStatus.textContent='TOCA PLAY PARA REINTENTAR';
      player.classList.remove('is-live');
      console.warn('No se pudo iniciar la señal de radio:',error || firstError);
    }
  }
}

function stopRadio(){
  // Pausa silenciosa: se mantiene la conexión Icecast activa y al día,
  // pero no sale ningún sonido. Al volver a pulsar Play la respuesta es inmediata.
  userMutedPause=true;
  if(radio){
    radio.muted=true;
    radio.volume=0;
  }
  setRadioPausedUi();
}

function togglePlay(event){
  event?.preventDefault();

  const isAudiblyPlaying=Boolean(
    radio &&
    !radio.paused &&
    !radio.muted &&
    radio.volume>0 &&
    !userMutedPause
  );

  isAudiblyPlaying ? stopRadio() : startRadio(false);
}

$$('[data-play]').forEach(b=>b.addEventListener('click',togglePlay));

function scheduleRecovery(){
  clearTimeout(recoveryTimer);
  if(userMutedPause) return;
  recoveryTimer=setTimeout(()=>startRadio(true),900);
}

function bindRadioEvents(audio){
  if(!audio || audio.dataset.eventsBound==='1') return;
  audio.dataset.eventsBound='1';

  audio.addEventListener('loadstart',()=>{
    if(!userMutedPause) streamStatus.textContent='CONECTANDO CON LA SEÑAL...';
  });

  audio.addEventListener('waiting',()=>{
    if(!userMutedPause) streamStatus.textContent='CONECTANDO CON LA SEÑAL...';
  });

  audio.addEventListener('canplay',()=>{
    if(!userMutedPause && !audio.paused) streamStatus.textContent='INICIANDO TRANSMISIÓN...';
  });

  audio.addEventListener('playing',()=>{
    audioUnlocked=true;
    if(userMutedPause){
      audio.muted=true;
      audio.volume=0;
      setRadioPausedUi();
    }else{
      audio.muted=false;
      audio.volume=1;
      setRadioPlayingUi();
    }
  });

  audio.addEventListener('error',()=>{
    streamReady=false;
    if(!userMutedPause){
      streamStatus.textContent='RECONECTANDO CON LA SEÑAL...';
      player.classList.remove('is-live');
      scheduleRecovery();
    }
  });

  audio.addEventListener('stalled',()=>{
    if(!userMutedPause){
      streamStatus.textContent='RECONECTANDO CON LA SEÑAL...';
      scheduleRecovery();
    }
  });

  audio.addEventListener('ended',()=>{
    streamReady=false;
    if(!userMutedPause) scheduleRecovery();
  });
}

bindRadioEvents(radio);

addEventListener('DOMContentLoaded',()=>{
  setFallbackCover();
  player.classList.add('open');
  userMutedPause=false;
  connectMetadata();
  setTimeout(()=>startRadio(true),350);
},{once:true});

async function unlockAudio(event){
  // Los navegadores permiten audio con sonido después de un gesto real del usuario.
  // La primera interacción en cualquier zona de la web intenta activar la radio.
  if(userMutedPause || audioUnlocked || unlockInProgress || (radio && !radio.paused && !radio.muted)) return;
  if(event?.target?.closest?.('[data-play]')) return;
  unlockInProgress=true;
  try{
    await startRadio(false);
  }finally{
    setTimeout(()=>{unlockInProgress=false},300);
  }
}

['touchstart','pointerdown','pointerup','click','keydown'].forEach(type=>{
  document.addEventListener(type,unlockAudio,{capture:true,passive:type!=='keydown'});
});

let scrollUnlockTried=false;
function unlockOnScroll(){
  if(userMutedPause||scrollUnlockTried||audioUnlocked||(radio && !radio.paused)) return;
  scrollUnlockTried=true;
  unlockAudio();
}
document.addEventListener('touchmove',unlockOnScroll,{capture:true,passive:true});
document.addEventListener('scroll',unlockOnScroll,{capture:true,passive:true});

addEventListener('beforeunload',()=>{
  clearTimeout(recoveryTimer);
  try{radio?.pause()}catch(_){ }
  if(radio){
    radio.removeAttribute('src');
    try{radio.load()}catch(_){ }
  }
  metadataSource?.close?.();
  clearInterval(metadataPollTimer);
  clearTimeout(metadataReconnectTimer);
});

$('#year').textContent=new Date().getFullYear();

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


// Máxima TV: amplía el mismo video de vista previa, sin crear otra conexión HLS.
const tvFloating=document.getElementById('tv-floating');
const tvFloatingVideo=document.getElementById('tv-floating-video');
const tvPreview=document.getElementById('maxima-tv-preview');
const tvPreviewHome=tvPreview?.parentElement || null;
const tvClose=document.getElementById('tv-floating-close');
const tvStatus=document.getElementById('tv-floating-status');
let lastTvTrigger=null;
let tvWasMuted=true;

async function openMaximaTv(event){
  event?.preventDefault();
  event?.stopPropagation();
  if(tvFloating?.classList.contains('show')) return;

  lastTvTrigger=event?.currentTarget || event?.target?.closest?.('[data-maxima-tv]') || document.activeElement;

  // La radio queda en pausa silenciosa, conservando su conexión estable.
  stopRadio();

  if(tvPreview && tvFloatingVideo){
    tvWasMuted=tvPreview.muted;
    tvPreview.pause();
    tvFloatingVideo.insertBefore(tvPreview,tvStatus || null);
    tvPreview.controls=true;
    tvPreview.muted=false;
    tvPreview.defaultMuted=false;
    tvPreview.removeAttribute('autoplay');
    tvPreview.style.borderRadius='0';
  }

  tvFloating?.classList.add('show');
  tvFloating?.setAttribute('aria-hidden','false');
  document.body.classList.add('tv-open');
  if(tvStatus){
    tvStatus.textContent='MÁXIMA TV EN VIVO';
    tvStatus.classList.remove('is-playing');
  }

  try{
    await tvPreview?.play();
  }catch(_){
    if(tvStatus) tvStatus.textContent='PRESIONA PLAY PARA VER MÁXIMA TV';
  }
  setTimeout(()=>tvClose?.focus({preventScroll:true}),120);
}

function closeMaximaTv(event){
  event?.preventDefault();

  if(tvPreview){
    tvPreview.pause();
    tvPreview.controls=false;
    tvPreview.muted=true;
    tvPreview.defaultMuted=true;
    tvPreview.setAttribute('autoplay','');
    tvPreview.style.borderRadius='18px';
    tvPreviewHome?.appendChild(tvPreview);
    tvPreview.play().catch(()=>{});
  }

  tvFloating?.classList.remove('show');
  tvFloating?.setAttribute('aria-hidden','true');
  document.body.classList.remove('tv-open');

  // Reactiva la radio al cerrar TV.
  startRadio(false).catch(error=>{
    console.warn('No se pudo reanudar la radio al cerrar Máxima TV:',error);
  });

  if(lastTvTrigger instanceof HTMLElement) lastTvTrigger.focus({preventScroll:true});
}

document.querySelectorAll('[data-maxima-tv]').forEach(el=>{
  el.addEventListener('click',openMaximaTv);
  if(!['A','BUTTON'].includes(el.tagName)){
    el.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();openMaximaTv(e)}
    });
  }
});

tvPreview?.addEventListener('playing',()=>{
  if(tvFloating?.classList.contains('show') && tvStatus) tvStatus.classList.add('is-playing');
});
tvPreview?.addEventListener('waiting',()=>{
  if(tvFloating?.classList.contains('show') && tvStatus){
    tvStatus.textContent='CONECTANDO CON MÁXIMA TV...';
    tvStatus.classList.remove('is-playing');
  }
});
tvPreview?.addEventListener('error',()=>{
  if(tvFloating?.classList.contains('show') && tvStatus){
    tvStatus.textContent='NO SE PUDO CARGAR LA SEÑAL DE TV';
    tvStatus.classList.remove('is-playing');
  }
});
tvClose?.addEventListener('click',closeMaximaTv);
tvFloating?.addEventListener('click',e=>{if(e.target===tvFloating) closeMaximaTv(e)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&tvFloating?.classList.contains('show')) closeMaximaTv(e)});

