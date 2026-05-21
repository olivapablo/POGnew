const CACHE_NAME = 'pog-cache-v4.1.0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo-dark.png.png',
  './logo-light.png.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (e) {
  // Solo interceptar peticiones del mismo origen para no romper APIs externas (como Groq/Unsplash)
  if (e.request.url.startsWith(self.location.origin)) {
    e.respondWith(
      fetch(e.request)
        .then(function (response) {
          // Si la respuesta es válida, clonarla y guardarla en el caché
          if (response && response.status === 200 && response.type === 'basic') {
            var responseToCache = response.clone();
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(e.request, responseToCache);
            });
          }
          return response;
        })
        .catch(function () {
          // Si la red falla (offline), servir desde caché
          return caches.match(e.request);
        })
    );
  }
});
