self.addEventListener('install', e=>{
  self.skipWaiting();
  e.waitUntil(caches.open('gp-v1').then(cache=>cache.addAll([
    './','./index.html','./manifest.json'
  ])));
});
self.addEventListener('activate', e=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});
