(function () {
  var gaId = "G-CVZKHH1X52";

  if (!document.querySelector('script[src^="https://www.googletagmanager.com/gtag/js?id="]')) {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + gaId;
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;
  gtag("js", new Date());
  gtag("config", gaId);
})();
