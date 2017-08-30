self.addEventListener('install', function(e) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
      ]);
    })
  );
});

self.addEventListener('canmakepayment', function(e) {
  e.respondWith(false);
});

self.addEventListener('paymentrequest', function(e) {
  e.respondWith(new Promise(function(resolve, reject) {
    self.addEventListener('message', listener = function(e) {
      self.removeEventListener('message', listener);
      if (e.data.hasOwnProperty('name')) {
        reject(e.data);
      } else {
        resolve(e.data);
      }
    });
    
    e.openWindow("payment_window.html");
  }));
});
