self.addEventListener('paymentrequest', function(e) {
  e.respondWith({
    methodName: "hello",
    details: {}
  });
  e.waitUntil(clients.openWindow("https://paytest.github.io"));
});
