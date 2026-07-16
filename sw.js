const CACHE_NAME = 'scorp-v1';
const ASSETS = [
  '/scorp/',
  '/scorp/index.html',
  '/scorp/manifest.json'
];

// Enregistrement des fichiers dans le cache du téléphone
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Utilisation des fichiers en cache si hors connexion
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
