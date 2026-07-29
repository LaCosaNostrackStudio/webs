const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
const modal = document.querySelector('#bookingModal');
const modalClose = document.querySelector('.modal-close');
const bookButtons = document.querySelectorAll('.js-book');
const bonaoLink = document.querySelector('#whatsappBonao');
const santiagoLink = document.querySelector('#whatsappSantiago');

const phoneByBranch = {
  Bonao: '18092020000',
  Santiago: '18495867777'
};

function makeWhatsapp(phone, branch, service = 'uno de sus servicios') {
  const message = `Hola José Philly. Deseo agendar una cita para ${service} en la sede de ${branch}. ¿Qué disponibilidad tienen?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function openBooking(){
  window.location.href = "jose-philly-agendador/index.html";
}

bookButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    openBooking(button.dataset.service || 'uno de sus servicios', button.dataset.branch || '');
  });
});

modalClose?.addEventListener('click', () => modal.close());
modal?.addEventListener('click', (event) => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) modal.close();
});

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

// Partículas doradas de fondo, ligeras y adaptables
(() => {
  const canvas = document.querySelector('#goldParticles');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  let rafId = 0;

  const palette = [
    'rgba(242,215,123,',
    'rgba(212,175,55,',
    'rgba(255,238,181,'
  ];

  function createParticle(initial = false) {
    return {
      x: Math.random() * width,
      y: initial ? Math.random() * height : height + Math.random() * 80,
      radius: .45 + Math.random() * 1.75,
      speedY: .12 + Math.random() * .42,
      drift: (Math.random() - .5) * .18,
      alpha: .12 + Math.random() * .48,
      pulse: Math.random() * Math.PI * 2,
      color: palette[Math.floor(Math.random() * palette.length)]
    };
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(110, Math.max(38, Math.floor((width * height) / 17000)));
    particles = Array.from({ length: count }, () => createParticle(true));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.y -= p.speedY;
      p.x += p.drift;
      p.pulse += .018;
      if (p.y < -12 || p.x < -20 || p.x > width + 20) Object.assign(p, createParticle(false));
      const glow = p.radius * 5.5;
      const alpha = Math.max(.04, p.alpha + Math.sin(p.pulse) * .1);
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glow);
      gradient.addColorStop(0, `${p.color}${alpha})`);
      gradient.addColorStop(.22, `${p.color}${alpha * .55})`);
      gradient.addColorStop(1, `${p.color}0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, glow, 0, Math.PI * 2);
      ctx.fill();
    }
    rafId = requestAnimationFrame(draw);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(rafId);
    else draw();
  });

  resize();
  draw();
})();

[bonaoLink,santiagoLink].forEach(link=>{
 if(link){
   link.href=makeWhatsapp(link.dataset.phone||'18092020000',link.dataset.branch||'');
 }
});
document.querySelectorAll('a[href*="wa.me"], .whatsapp-float').forEach(el=>{
 if(el.tagName==='A' && !el.href.includes('wa.me')) return;
});

document.querySelectorAll('.js-whatsapp').forEach(el=>{
 el.addEventListener('click',e=>{
  e.preventDefault();
  window.open(makeWhatsapp('18092020000','Bonao'),'_blank');
 });
});
