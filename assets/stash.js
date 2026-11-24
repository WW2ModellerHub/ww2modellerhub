/* WW2 Modeller "My Stash" storage.
   Everything is kept in this browser only (localStorage); nothing is sent anywhere.
   Data shape:
     { paints: { owned: {id:true}, want: {id:true} },
       kits:   [ {id, name, maker, scale, aircraft, status, notes, added} ] }
*/
(function () {
  var KEY = 'ww2stash.v1';
  var listeners = [];
  var mem = null; // fallback when storage is blocked

  function blank() { return { paints: { owned: {}, want: {} }, extra: [], kits: [] }; }

  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var d = JSON.parse(raw);
        d.paints = d.paints || { owned: {}, want: {} };
        d.paints.owned = d.paints.owned || {};
        d.paints.want = d.paints.want || {};
        d.kits = d.kits || [];
        d.extra = d.extra || [];
        return d;
      }
    } catch (e) { if (mem) return mem; }
    return mem || blank();
  }

  function write(d) {
    mem = d;
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* private mode: keep in memory */ }
    listeners.forEach(function (cb) { try { cb(d); } catch (e) {} });
  }

  var api = {
    get: read,
    onChange: function (cb) { listeners.push(cb); },
    hasPaint: function (id, list) { return !!read().paints[list || 'owned'][id]; },
    setPaint: function (id, list, on) {
      var d = read(); var l = d.paints[list];
      if (on) l[id] = true; else delete l[id];
      if (on && list === 'owned') delete d.paints.want[id]; // bought it
      write(d);
    },
    togglePaint: function (id, list) { api.setPaint(id, list, !api.hasPaint(id, list)); },
    /* free-text shopping items, e.g. from an aircraft page paint list */
    addExtra: function (text, from) {
      var d = read();
      if (d.extra.some(function (x) { return x.t === text; })) return false;
      d.extra.push({ t: text, from: from || '' }); write(d); return true;
    },
    removeExtra: function (i) { var d = read(); d.extra.splice(i, 1); write(d); },
    addKit: function (k) {
      var d = read();
      k.id = 'k' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      k.status = k.status || 'stash';
      k.added = new Date().toISOString().slice(0, 10);
      d.kits.push(k); write(d); return k.id;
    },
    updateKit: function (id, patch) {
      var d = read();
      d.kits.forEach(function (k) { if (k.id === id) for (var p in patch) k[p] = patch[p]; });
      write(d);
    },
    removeKit: function (id) {
      var d = read(); d.kits = d.kits.filter(function (k) { return k.id !== id; }); write(d);
    },
    exportJSON: function () { return JSON.stringify(read(), null, 2); },
    importJSON: function (text) {
      var d = JSON.parse(text);
      if (!d || typeof d !== 'object' || !d.paints || !Array.isArray(d.kits)) throw new Error('Not a WW2 Modeller stash file');
      write(d);
    },
    clear: function () { write(blank()); }
  };

  /* Paint catalogue shared by the converter, stash page and aircraft pages */
  var catalogue = null;
  api.paints = function () {
    if (!catalogue) {
      var s = document.querySelector('script[src*="assets/stash.js"]');
      var base = s ? s.src.replace(/assets\/stash\.js.*$/, '') : '';
      catalogue = fetch(base + 'assets/paints.json').then(function (r) { return r.json(); });
    }
    return catalogue;
  };

  window.addEventListener('storage', function (e) { if (e.key === KEY) listeners.forEach(function (cb) { cb(read()); }); });
  window.WW2Stash = api;
})();
