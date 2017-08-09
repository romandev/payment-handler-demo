self.addEventListener('paymentrequest', function(e) {
  e.respondWith({
    methodName: "hello",
    details: {}
  });
});
