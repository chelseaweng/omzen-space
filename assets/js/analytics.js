(function () {
  var measurementId = window.OMZEN_GA_ID;
  if (!measurementId || measurementId.indexOf("G-") !== 0) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: true,
  });

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target && event.target.closest ? event.target.closest("a[href]") : null;
      if (!link) {
        return;
      }

      var href = link.href;
      if (!href || href.indexOf(window.location.origin) === 0) {
        return;
      }

      var label = link.getAttribute("title") || link.getAttribute("aria-label") || href;
      gtag("event", "outbound_click", {
        event_category: "engagement",
        event_label: label,
        link_url: href,
        transport_type: "beacon",
      });
    },
    true
  );
})();
