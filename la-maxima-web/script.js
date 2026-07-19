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
const player=$('#player'), audio=$('#audio');let playing=false;
function togglePlay(){player.classList.add('open');if(!audio.querySelector('source')){playing=!playing;$$('[data-play]').forEach(b=>{if(b.classList.contains('player-main')) b.textContent=playing?'❚❚':'▶'});return;}if(audio.paused){audio.play();playing=true}else{audio.pause();playing=false}$$('[data-play]').forEach(b=>{if(b.classList.contains('player-main')) b.textContent=playing?'❚❚':'▶'})}
$$('[data-play]').forEach(b=>b.onclick=togglePlay);$('.player-close').onclick=()=>player.classList.remove('open');$('.volume input').oninput=e=>audio.volume=e.target.value/100;
$('#year').textContent=new Date().getFullYear();
