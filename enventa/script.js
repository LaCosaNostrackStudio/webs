function sendAppointment(event){
  event.preventDefault();
  const nombre=document.getElementById('nombre').value.trim();
  const dia=document.getElementById('dia').value.trim();
  const hora=document.getElementById('hora').value;
  const phone='18496557362';
  const text=`Hola, quiero agendar una cita para ver el apartamento en Residencial Los Naranjos.%0A%0ANombre: ${encodeURIComponent(nombre)}%0ADía: ${encodeURIComponent(dia)}%0AHora: ${encodeURIComponent(hora)}%0A%0AGracias.`;
  window.open(`https://wa.me/${phone}?text=${text}`,'_blank');
}

const revealItems=document.querySelectorAll('.reveal');
const revealObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.14});
revealItems.forEach(item=>revealObserver.observe(item));

const galleryImages=[...document.querySelectorAll('.gallery img')];
const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightbox-img');
const closeBtn=document.querySelector('.lightbox-close');
const prevBtn=document.querySelector('.lightbox-prev');
const nextBtn=document.querySelector('.lightbox-next');
let currentImage=0;

function openLightbox(index){
  currentImage=index;
  lightboxImg.src=galleryImages[currentImage].src;
  lightboxImg.alt=galleryImages[currentImage].alt || 'Foto ampliada';
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden','false');
}

function closeLightbox(){
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImg.src='';
}

function moveLightbox(direction){
  currentImage=(currentImage+direction+galleryImages.length)%galleryImages.length;
  lightboxImg.src=galleryImages[currentImage].src;
  lightboxImg.alt=galleryImages[currentImage].alt || 'Foto ampliada';
}

galleryImages.forEach((img,index)=>img.addEventListener('click',()=>openLightbox(index)));
closeBtn.addEventListener('click',closeLightbox);
prevBtn.addEventListener('click',()=>moveLightbox(-1));
nextBtn.addEventListener('click',()=>moveLightbox(1));
lightbox.addEventListener('click',(event)=>{if(event.target===lightbox) closeLightbox();});
document.addEventListener('keydown',(event)=>{
  if(!lightbox.classList.contains('active')) return;
  if(event.key==='Escape') closeLightbox();
  if(event.key==='ArrowLeft') moveLightbox(-1);
  if(event.key==='ArrowRight') moveLightbox(1);
});
