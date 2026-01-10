(function () {
  function initAdblockAlert() {
    var alertEl = document.getElementById("adblock-alert");
    var dismissBtn = document.getElementById("adblock-dismiss");
    if (!alertEl || !dismissBtn) return;

    var hideTimer;
    var countdownTimer;
    var countdownEl = document.getElementById("adblock-countdown");
    function showAlert() {
      alertEl.removeAttribute("hidden");
      clearTimeout(hideTimer);
      clearInterval(countdownTimer);
      var remaining = 5;
      if (countdownEl) {
        countdownEl.textContent = remaining;
      }
      countdownTimer = setInterval(function () {
        remaining -= 1;
        if (countdownEl) {
          countdownEl.textContent = remaining;
        }
        if (remaining <= 0) {
          clearInterval(countdownTimer);
        }
      }, 1000);
      hideTimer = setTimeout(function () {
        alertEl.setAttribute("hidden", "");
      }, 5000);
    }

    dismissBtn.addEventListener("click", function () {
      clearTimeout(hideTimer);
      clearInterval(countdownTimer);
      alertEl.setAttribute("hidden", "");
    });

    // Bait element check (many adblockers hide common ad classes).
    var bait = document.createElement("div");
    bait.className = "ad adsbox adsbygoogle";
    bait.style.position = "absolute";
    bait.style.left = "-9999px";
    bait.style.height = "10px";
    bait.style.width = "10px";
    document.body.appendChild(bait);

    setTimeout(function () {
      var baitHidden = false;
      if (!bait || bait.offsetHeight === 0) {
        baitHidden = true;
      } else {
        var baitStyle = window.getComputedStyle(bait);
        baitHidden =
          baitStyle.display === "none" || baitStyle.visibility === "hidden";
      }
      if (bait && bait.parentNode) {
        bait.parentNode.removeChild(bait);
      }
      if (baitHidden) {
        showAlert();
      }
    }, 100);

    // Script load check for gtag.js (blocked scripts usually trigger onerror).
    var testScript = document.createElement("script");
    testScript.async = true;
    testScript.src =
      "https://www.googletagmanager.com/gtag/js?id=G-CVZKHH1X52";
    testScript.onerror = function () {
      showAlert();
    };
    document.head.appendChild(testScript);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAdblockAlert);
  } else {
    initAdblockAlert();
  }
})();
