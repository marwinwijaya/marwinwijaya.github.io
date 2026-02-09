// sw.js - "dev-friendly" service worker

const CACHE_VERSION = "v11"; // <--- NAIKKAN INI tiap release
const CACHE_NAME = `portfolio-cache-${CACHE_VERSION}`;

// App shell / asset yang aman di-cache
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/css/bootstrap.css",
  "/css/style.css",
  "/js/custom.js",
  "/js/vendor/jquery-3.7.1.min.js",
  "/js/vendor/popper.min.js",
  "/js/vendor/bootstrap.min.js",
];

// Install: cache aset + langsung siap update
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate: hapus cache versi lama + ambil kontrol
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("portfolio-cache-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Kita handle GET doang
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Hanya handle request dari origin yang sama
  if (url.origin !== self.location.origin) return;

  const isHTML =
    req.mode === "navigate" ||
    (req.headers.get("accept") || "").includes("text/html");

  // ✅ HTML: Network-first (biar konten selalu fresh)
  if (isHTML) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match("/index.html")))
    );
    return;
  }

  // ✅ Asset (CSS/JS/img): Cache-first (biar ngebut)
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req).then((res) => {
        // Cache hanya response yang valid
        if (!res || res.status !== 200) return res;

        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      });
    })
  );
});
