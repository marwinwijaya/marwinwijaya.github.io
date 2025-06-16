const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/bootstrap.css',
  '/css/animate.css',
  '/css/flexslider.css',
  '/css/style.css',
  '/js/custom.js',
  '/js/vendor/jquery-3.7.1.min.js',
  '/js/vendor/popper.min.js',
  '/js/vendor/bootstrap.min.js'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
