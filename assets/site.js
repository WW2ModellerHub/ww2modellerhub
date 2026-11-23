/* WW2 Modeller shared site script.
   ---------------------------------------------------------------
   EDIT THESE VALUES to switch features on. Leave '' to keep off.
   --------------------------------------------------------------- */
var WW2_CONFIG = {
  ga4Id: '',          // Google Analytics 4 measurement ID, e.g. 'G-ABC123XYZ'
  amazonTag: '',      // Amazon Associates tag, e.g. 'ww2modeller-21'
  hannantsParam: '',  // Hannants affiliate query, e.g. 'ref=ABC123' (as given by Hannants)
  social: {           // full profile URLs; icons with no URL are hidden
    facebook: '',
    instagram: '',
    youtube: ''
  }
};

(function () {
  var C = WW2_CONFIG;

  /* Google consent mode v2: everything denied until the consent
     message (AdSense > Privacy & messaging) records a choice. */
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { dataLayer.push(arguments); };
  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    analytics_storage: 'denied', wait_for_update: 500
  });

  if (C.ga4Id) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(C.ga4Id);
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', C.ga4Id, { anonymize_ip: true });
  }

  function addParam(href, param) {
    var hash = '';
    var i = href.indexOf('#');
    if (i > -1) { hash = href.slice(i); href = href.slice(0, i); }
    return href + (href.indexOf('?') > -1 ? '&' : '?') + param + hash;
  }

  function onReady() {
    var hasAmazon = false;
    document.querySelectorAll('a[href*="amazon.co.uk"], a[href*="amazon.com"]').forEach(function (a) {
      hasAmazon = true;
      if (C.amazonTag && !/[?&]tag=/.test(a.href)) a.href = addParam(a.href, 'tag=' + encodeURIComponent(C.amazonTag));
      a.rel = 'sponsored noopener';
    });
    if (C.hannantsParam) {
      document.querySelectorAll('a[href*="hannants.co.uk"]').forEach(function (a) {
        if (a.href.indexOf(C.hannantsParam) === -1) a.href = addParam(a.href, C.hannantsParam);
        a.rel = 'sponsored noopener';
      });
    }
    if (C.amazonTag && hasAmazon) {
      var f = document.querySelector('footer');
      if (f && !document.getElementById('ww2-affiliate-note')) {
        var p = document.createElement('p');
        p.id = 'ww2-affiliate-note';
        p.style.cssText = 'margin:.6rem 0 0;font-size:12px;opacity:.75;width:100%';
        p.textContent = 'As an Amazon Associate WW2 Modeller earns from qualifying purchases.';
        f.appendChild(p);
      }
    }

    /* Social icons in the header: link them if configured, otherwise hide. */
    var map = { 'f': 'facebook', '◎': 'instagram', '▶': 'youtube' };
    document.querySelectorAll('.ww2-social').forEach(function (box) {
      var any = false;
      [].slice.call(box.children).forEach(function (el) {
        var key = map[(el.textContent || '').trim()];
        var url = key && C.social[key];
        if (url) {
          any = true;
          if (el.tagName !== 'A') {
            var a = document.createElement('a');
            a.href = url; a.target = '_blank'; a.rel = 'noopener me';
            a.setAttribute('aria-label', key);
            a.className = el.className; a.textContent = el.textContent;
            el.replaceWith(a);
          }
        } else {
          el.style.display = 'none';
        }
      });
      if (!any) box.style.display = 'none';
    });

    /* Track outbound shop clicks as GA4 events (only fires if GA is on). */
    if (C.ga4Id) {
      document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href^="http"]');
        if (a && a.hostname !== location.hostname) {
          gtag('event', 'click_outbound', { link_domain: a.hostname, link_url: a.href });
        }
      });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady);
  else onReady();
})();
