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

    /* Image credits link in every footer. */
    var ft = document.querySelector('footer');
    if (ft && !ft.querySelector('a[href$="image-credits.html"]')) {
      var a2 = document.createElement('a');
      a2.href = (location.pathname.indexOf('/404') === 0 ? '/' : '') + 'image-credits.html';
      a2.textContent = 'Image credits';
      a2.style.marginLeft = '.6rem';
      ft.appendChild(a2);
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

/* ---------------------------------------------------------------
   Site search: instant results in the header search box and on
   search.html. Index: assets/search-index.json
   (rebuild with: python3 tools/build-search-index.py)
   --------------------------------------------------------------- */
(function () {
  var script = document.currentScript || document.querySelector('script[src*="assets/site.js"]');
  var BASE = script ? script.src.replace(/assets\/site\.js.*$/, '') : '/';
  var index = null, loading = null;

  function load() {
    if (index) return Promise.resolve(index);
    if (!loading) {
      loading = fetch(BASE + 'assets/search-index.json')
        .then(function (r) { return r.json(); })
        .then(function (d) {
          d.forEach(function (p) {
            p._t = norm(p.t); p._x = norm(p.x + ' ' + p.g); p._h = norm(p.h); p._d = norm(p.d);
            p._c = compact(p.t + ' ' + p.x + ' ' + p.g);
          });
          return (index = d);
        });
    }
    return loading;
  }
  function norm(s) { return ' ' + (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ') + ' '; }
  function compact(s) { return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, ''); }

  function search(q, limit) {
    var toks = norm(q).trim().split(' ').filter(Boolean);
    if (!toks.length) return [];
    var cq = compact(q);
    var res = [];
    index.forEach(function (p) {
      var score = 0, all = true;
      toks.forEach(function (t) {
        var sc = 0;
        var st = t.length > 4 ? t.replace(/(ings|ing|ed|es|s)$/, '') : t;
        if (p._t.indexOf(' ' + t + ' ') > -1) sc += 12;
        else if (p._t.indexOf(' ' + st) > -1) sc += 8;
        else if (p._t.indexOf(t) > -1) sc += 4;
        if (p._x.indexOf(' ' + st) > -1) sc += 4;
        if (p._h.indexOf(' ' + st) > -1) sc += 2;
        if (p._d.indexOf(' ' + st) > -1) sc += 2;
        if (!sc && t.length > 2 && p._c.indexOf(t) > -1) sc += 3;
        if (!sc) all = false;
        score += sc;
      });
      if (cq.length > 2 && p._c.indexOf(cq) > -1) { score += 10; all = true; }
      if (!all) score = score / 4;
      if (p.k === 'Aircraft' && score) score += 1;
      if (score >= 2) res.push({ p: p, s: score });
    });
    res.sort(function (a, b) { return b.s - a.s; });
    return res.slice(0, limit || 50).map(function (r) { return r.p; });
  }

  function esc(s) { return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var css = '.ww2-search{position:relative}' +
    '.ww2-sr{position:absolute;left:0;right:0;top:calc(100% + 4px);background:#0b1828;border:1px solid rgba(212,168,58,.5);z-index:5000;max-height:70vh;overflow:auto;box-shadow:0 12px 30px rgba(0,0,0,.5);text-align:left}' +
    '.ww2-sr a{display:block;padding:10px 12px;color:#f5f1e6;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.07);font:15px/1.35 Georgia,serif}' +
    '.ww2-sr a:hover,.ww2-sr a.on{background:rgba(212,168,58,.14)}' +
    '.ww2-sr b{display:block;font:600 14px Oswald,Arial,sans-serif;letter-spacing:.04em;color:#f5d06b}' +
    '.ww2-sr i{font-style:normal;font:700 10px Oswald,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#9fb3c8;margin-left:6px}' +
    '.ww2-sr span{display:block;color:#b9c0bc;font-size:13px;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
    '.ww2-sr .all{font:700 12px Oswald,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#d4a83a;text-align:center}';

  function item(p) {
    return '<a href="' + BASE + esc(p.u) + '"><b>' + esc(p.t) + '<i>' + esc(p.k) + '</i></b><span>' + esc(p.d) + '</span></a>';
  }

  function attach(form) {
    var input = form.querySelector('input');
    if (!input) return;
    form.onsubmit = null;
    form.removeAttribute('onsubmit');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('aria-label', 'Search the site');
    var box = document.createElement('div');
    box.className = 'ww2-sr'; box.hidden = true;
    form.appendChild(box);
    var sel = -1;
    function go(q) { location.href = BASE + 'search.html?q=' + encodeURIComponent(q); }
    function render() {
      var q = input.value.trim();
      if (q.length < 2) { box.hidden = true; return; }
      load().then(function () {
        var r = search(q, 7);
        sel = -1;
        box.innerHTML = r.length
          ? r.map(item).join('') + '<a class="all" href="' + BASE + 'search.html?q=' + encodeURIComponent(q) + '">See all results</a>'
          : '<a class="all" href="' + BASE + 'search.html?q=' + encodeURIComponent(q) + '">No quick matches — search all pages</a>';
        box.hidden = false;
      });
    }
    input.addEventListener('focus', function () { load(); });
    input.addEventListener('input', render);
    input.addEventListener('keydown', function (e) {
      var links = box.querySelectorAll('a');
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        if (box.hidden || !links.length) return;
        e.preventDefault();
        sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
        links.forEach(function (a, i) { a.classList.toggle('on', i === sel); });
      } else if (e.key === 'Escape') { box.hidden = true; }
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var links = box.querySelectorAll('a');
      if (sel > -1 && links[sel]) { location.href = links[sel].href; return; }
      var q = input.value.trim(); if (q) go(q);
    });
    document.addEventListener('click', function (e) { if (!form.contains(e.target)) box.hidden = true; });
  }

  function init() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    document.querySelectorAll('form.ww2-search').forEach(attach);
    var out = document.getElementById('search-results');
    if (out) {
      var q = new URLSearchParams(location.search).get('q') || '';
      var field = document.getElementById('search-page-input');
      if (field) field.value = q;
      document.querySelectorAll('form.ww2-search input').forEach(function (i) { i.value = q; });
      if (!q) { out.innerHTML = '<p>Type a search above — try an aircraft, a colour such as “RLM 74”, or a technique like “mottling”.</p>'; return; }
      load().then(function () {
        var r = search(q, 60);
        var label = document.getElementById('search-count');
        if (label) label.textContent = r.length + ' result' + (r.length === 1 ? '' : 's') + ' for “' + q + '”';
        out.innerHTML = r.length ? r.map(item).join('') :
          '<p>No pages matched. Try a shorter term, an aircraft name (e.g. “Hurricane”), or browse the <a href="' + BASE + 'sitemap.html">site map</a>.</p>';
      });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.WW2Search = { load: load, search: search };
})();

