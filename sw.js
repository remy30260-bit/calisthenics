// ── Service Worker — Calisthenics ─────────────────────────
const CACHE = 'calisthenics-v2';
const SCOPE = '/calisthenics/';

self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(clients.claim()); });

self.addEventListener('fetch', e => {
  if (e.request.url.includes(SCOPE)) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return resp;
      }))
    );
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      if (list.length > 0) return list[0].focus();
      return clients.openWindow(SCOPE);
    })
  );
});

self.addEventListener('periodicsync', e => {
  if (e.tag === 'workout-reminder') e.waitUntil(checkAndNotify());
});

async function checkAndNotify() {
  const day = new Date().getDay();
  const hour = new Date().getHours();
  if (![1,3,5].includes(day) || hour < 7 || hour > 21) return;
  const names = {1:'Lundi',3:'Mercredi',5:'Vendredi'};
  self.registration.showNotification('💪 Calisthenics', {
    body: `C'est ${names[day]} — ta séance t'attend !`,
    icon: SCOPE + 'icon-192.png',
    badge: SCOPE + 'icon-192.png',
    tag: 'workout-day', renotify: false,
  });
}

self.addEventListener('message', e => {
  if (e.data?.type === 'TEST_NOTIF') {
    self.registration.showNotification('💪 Calisthenics', {
      body: 'Les notifications fonctionnent !',
      icon: SCOPE + 'icon-192.png',
    });
  }
});
