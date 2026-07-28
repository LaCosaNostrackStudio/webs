const fallbackPhotos = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg",
  "foto6.jpg",
  "foto7.jpg",
  "foto8.jpg",
  "foto9.jpg",
  "foto10.jpg",
  "foto11.jpg",
  "foto12.jpg",
  "foto13.jpg",
  "foto14.jpg",
  "foto15.jpg",
  "foto16.jpg",
  "foto17.jpg",
  "foto18.jpg",
  "foto19.jpg",
  "foto20.jpg",
  "foto21.jpg",
  "foto22.jpg",
  "foto23.jpg",
  "foto24.jpg",
  "foto25.jpg",
  "foto26.jpg",
  "foto27.jpg",
  "foto28.jpg",
  "foto29.jpg",
  "foto30.jpg",
  "foto31.jpg",
  "foto32.jpg",
  "foto33.jpg",
  "foto34.jpg",
  "foto35.jpg",
  "foto36.jpg",
  "foto37.jpg",
  "foto38.jpg",
  "foto39.jpg",
  "foto40.jpg",
  "foto41.jpg",
  "foto42.jpg",
  "foto43.jpg",
  "foto44.jpg",
  "foto45.jpg",
  "foto46.jpg",
  "foto47.jpg",
  "foto48.jpg",
  "foto49.jpg",
  "foto50.jpg",
  "foto51.jpg",
  "foto52.jpg",
  "foto53.jpg",
  "foto54.jpg",
  "foto55.jpg",
  "foto56.jpg",
  "foto57.jpg",
  "foto58.jpg",
];

let photos = [];
let currentIndex = 0;

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const photoCounter = document.getElementById('photoCounter');
const closeLightbox = document.getElementById('closeLightbox');
const prevPhoto = document.getElementById('prevPhoto');
const nextPhoto = document.getElementById('nextPhoto');

function renderGallery(photoList){
  photos = photoList;
  gallery.innerHTML = '';

  photos.forEach((photo, index) => {
    const button = document.createElement('button');
    button.className = 'gallery-item';
    button.type = 'button';
    button.setAttribute('aria-label', `Abrir foto ${index + 1}`);

    const image = document.createElement('img');
    image.src = `fotos/${photo}`;
    image.alt = `Actividad Si-Re-FaleanDo ${index + 1}`;
    image.loading = 'lazy';

    button.appendChild(image);
    button.addEventListener('click', () => openPhoto(index));
    gallery.appendChild(button);
  });
}

function openPhoto(index){
  currentIndex = index;
  lightboxImage.src = `fotos/${photos[currentIndex]}`;
  photoCounter.textContent = `${currentIndex + 1} / ${photos.length}`;
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePhoto(){
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  document.body.style.overflow = '';
}

function showNext(){
  currentIndex = (currentIndex + 1) % photos.length;
  openPhoto(currentIndex);
}

function showPrev(){
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  openPhoto(currentIndex);
}

closeLightbox.addEventListener('click', closePhoto);
nextPhoto.addEventListener('click', showNext);
prevPhoto.addEventListener('click', showPrev);

lightbox.addEventListener('click', (event) => {
  if(event.target === lightbox) closePhoto();
});

document.addEventListener('keydown', (event) => {
  if(!lightbox.classList.contains('active')) return;
  if(event.key === 'Escape') closePhoto();
  if(event.key === 'ArrowRight') showNext();
  if(event.key === 'ArrowLeft') showPrev();
});

fetch('fotos.json')
  .then(response => response.ok ? response.json() : fallbackPhotos)
  .then(data => renderGallery(Array.isArray(data) ? data : fallbackPhotos))
  .catch(() => renderGallery(fallbackPhotos));
