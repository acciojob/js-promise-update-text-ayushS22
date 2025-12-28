//your JS code here. If required.
function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Use the promise
getMessage().then((message) => {
  document.getElementById("output").textContent = message;
});
