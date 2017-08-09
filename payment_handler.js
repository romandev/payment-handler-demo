self.addEventListener('paymentrequest', function(e) {
  e.respondWith(new Promise(function(resolve, reject) {
    resolve({
      methodName : "hello",
      details: {
        cardType: "visa"
      }
    });
  }));
});
