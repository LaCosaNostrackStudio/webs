document.getElementById('whatsappForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const empresa = document.getElementById('empresa').value.trim();
  const ciudad = document.getElementById('ciudad').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const tipo = document.getElementById('tipo').value.trim();
  const fecha = document.getElementById('fecha').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  const texto = `Hola Belmor Representaciones. Quiero solicitar una cotización.%0A%0A` +
    `Nombre: ${encodeURIComponent(nombre)}%0A` +
    `Empresa: ${encodeURIComponent(empresa)}%0A` +
    `Ciudad: ${encodeURIComponent(ciudad)}%0A` +
    `Teléfono: ${encodeURIComponent(telefono)}%0A` +
    `Tipo de evento: ${encodeURIComponent(tipo)}%0A` +
    `Fecha del evento: ${encodeURIComponent(fecha)}%0A` +
    `Mensaje: ${encodeURIComponent(mensaje)}`;

  window.open(`https://wa.me/573192542807?text=${texto}`, '_blank');
});

const eventVideo = document.getElementById('eventVideo');
if (eventVideo) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        eventVideo.play().catch(() => {});
      } else {
        eventVideo.pause();
      }
    });
  }, { threshold: 0.45 });

  observer.observe(eventVideo);
}
