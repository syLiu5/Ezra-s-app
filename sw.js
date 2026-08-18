/* 成长足迹 PWA Service Worker —— 离线壳缓存
 * 数据本身存于 IndexedDB（本地优先），SW 仅缓存应用壳，保证断网也能打开 App。
 */
const CACHE = 'growth-trail-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/styles.css',
  './js/lib/ui.js',
  './js/lib/data.js',
  './js/db.js',
  './js/store.js',
  './js/auth.js',
  './js/sync.js',
  './js/screens/home.js',
  './js/screens/food.js',
  './js/screens/parenting.js',
  './js/screens/items.js',
  './js/screens/ledger.js',
  './js/screens/profile.js',
  './js/app.js',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // 应用壳：缓存优先
  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
