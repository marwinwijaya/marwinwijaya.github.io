(function () {
  function initServiceWorker() {
    if (!("serviceWorker" in navigator)) return;

    var isLocalhost =
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1" ||
      location.hostname === "[::1]";

    if (!isLocalhost) {
      navigator.serviceWorker.register("/sw.js");
    } else {
      navigator.serviceWorker.getRegistrations().then(function (regs) {
        regs.forEach(function (r) {
          r.unregister();
        });
      });
    }
  }

  function initCurrentYear() {
    var year = new Date().getFullYear();
    var nodes = document.querySelectorAll(".currentYear");
    nodes.forEach(function (node) {
      node.textContent = year;
    });
  }

  function init() {
    initServiceWorker();
    initCurrentYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
