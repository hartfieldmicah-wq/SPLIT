/* SPLIT service worker: caches the app so it works fully offline. Bump VERSION when you upload a new index.html. */
const VERSION = "split-v9-1";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./logo.svg", "./icon-192.png", "./icon-512.png", "./icon-180.png", "./icon-maskable-512.png", "./favicon-32.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(FILES.map(f => c.add(f).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("message", e => { if (e.data === "skipWaiting") self.skipWaiting(); });
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  /* app pages: cache first (instant + offline), refresh the cache in the background */
  e.respondWith(
    caches.open(VERSION).then(async cache => {
      const hit = await cache.match(req, { ignoreSearch: true }) || (req.mode === "navigate" ? await cache.match("./index.html") : null);
      const net = fetch(req).then(r => { if (r && r.ok) cache.put(req, r.clone()); return r; }).catch(() => null);
      if (hit) { e.waitUntil(net); return hit; }
      const r = await net;
      return r || new Response("Offline", { status: 503 });
    })
  );
});
