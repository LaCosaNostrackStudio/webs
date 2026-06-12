document.getElementById('quoteForm').addEventListener('submit', function(event){
  event.preventDefault();
  const school = document.getElementById('school').value.trim();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const text = `Hola, deseo solicitar información o cotización de Si-Re-FaleanDo.%0A%0AEscuela: ${encodeURIComponent(school)}%0AContacto: ${encodeURIComponent(name)}%0ACorreo: ${encodeURIComponent(email || 'No indicado')}%0AMensaje: ${encodeURIComponent(message || 'Deseo recibir información sobre el programa musical para escuelas.')}`;
  window.open(`https://wa.me/17872156908?text=${text}`, '_blank');
});


// Smooth scroll para los botones del menú y botones internos
// Puedes editar o eliminar esta parte en Dreamweaver si necesitas otro comportamiento.
document.querySelectorAll('a[href^="#"]').forEach(function(link){
  link.addEventListener('click', function(event){
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
