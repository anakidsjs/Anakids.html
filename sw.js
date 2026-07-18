// Service Worker do ANAKIDS - permite instalar como app e abrir offline
const CACHE_NAME = 'anakids-cache-v1';
const ARQUIVOS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ARQUIVOS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(nomes) {
      return Promise.all(
        nomes.filter(function(nome) { return nome !== CACHE_NAME; })
             .map(function(nome) { return caches.delete(nome); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resposta) {
      return resposta || fetch(event.request).catch(function() {
        return caches.match('./index.html');
      });
    })
  );
});
