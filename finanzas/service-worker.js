const CACHE_NAME = "ingresos-egresos-v1";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./registrar.html",
  "./registrar.js",
  "./egresos.html",
  "./egresos.js",
  "./registrar-egresos.html",
  "./registrar-egresos.js",
  "./backup.html",
  "./backup.js",
  "./data-base.js",
  "./data-egresos-base.js",
  "./manifest.webmanifest",
  "./favicon.ico",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
