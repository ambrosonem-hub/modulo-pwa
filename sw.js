self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('modulo-cache').then(cache => {
      return cache.addAll([
        '/MODULO.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
