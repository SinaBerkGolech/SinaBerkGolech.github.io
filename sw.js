/* ==========================================================================
   Service Worker for Caching
   ========================================================================== */

const CACHE_NAME = 'sinaberkgolech-cache-v1';
const urlsToCache = [
  '/',
  '/assets/css/main.css',
  '/assets/js/main.min.js',
  '/assets/webfonts/fa-solid-900.woff2',
  '/assets/webfonts/fa-regular-400.woff2'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 