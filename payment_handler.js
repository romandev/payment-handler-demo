self.addEventListener('paymentrequest', function(e) {
  e.waitUntil(clients.openWindow("https://paytest.github.io"));
});
