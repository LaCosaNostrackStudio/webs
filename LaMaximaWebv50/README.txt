LA MÁXIMA 88.9 FM — SITIO WEB DEMO

ARCHIVOS
- index.html: estructura completa.
- styles.css: diseño, responsive y animaciones.
- script.js: interacción, menú, programación y reproductor.
- assets/logo-neon.png: logo suministrado.

CÓMO USAR
1. Abre index.html en el navegador.
2. Sube todos los archivos conservando la misma estructura.
3. Para conectar el streaming real, abre index.html y busca:
   TU-STREAM-AQUI
   Descomenta la etiqueta <source> y sustituye ese texto por la URL directa MP3/AAC del streaming.
4. Cambia los horarios y programas en el objeto "schedules" dentro de script.js.
5. Sustituye los enlaces # de redes sociales en el footer.

NOTA DEL FORMULARIO
El formulario incluido es visual. Para recibir mensajes debes conectarlo a PHP, Formspree, Netlify Forms u otro servicio.


TRANSMISIÓN EN VIVO
- Se integró el reproductor oficial desde:
  https://lamaximafm.com/la-maxima-fm/#reproductor
- La web intenta cargarlo automáticamente al entrar.
- Chrome, Safari, Firefox y navegadores móviles pueden bloquear el audio con sonido hasta que el visitante haga clic o toque la página.
- Para un autoplay más fiable y controles propios se necesita la URL directa MP3/AAC/HLS del servidor de streaming.


VERSIÓN 10 — METADATA EN VIVO
- El reproductor consulta la metadata SSE de Zeno FM.
- Muestra canción y artista cuando la emisora los envía.
- Si no hay metadata, muestra "La Máxima 88.9 FM / Transmisión en vivo".
- URL de metadata: https://api.zeno.fm/mounts/metadata/subscribe/mvxftmssvy8uv
- Para que aparezcan títulos reales, el software de automatización o encoder debe enviar la información a Zeno.


VERSIÓN 11 — PORTADA DINÁMICA
El reproductor consulta la metadata de Zeno y busca automáticamente la portada de la canción mediante el catálogo público de iTunes. Si no encuentra una coincidencia o la API no responde, mantiene la X de La Máxima como imagen de respaldo. Las portadas encontradas se guardan temporalmente en el navegador para reducir consultas.
