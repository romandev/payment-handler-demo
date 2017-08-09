self.addEventListener('paymentrequest', function(e) {
  e.respondWith(new Promise(function(resolve, reject) {
    clients.openWindow("http://naver.com").then(function() {
      resolve({
        methodName : "hello",
        details: {
          cardType: "visa"
        }
      });
    });
  }));
});
