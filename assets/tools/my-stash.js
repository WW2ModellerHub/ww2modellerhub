(function () {
  var S = window.WW2Stash, P = null, aircraft = [];
  var $ = function (id) { return document.getElementById(id); };
  var STATUS = { wish: 'Wishlist', stash: 'In the stash', building: 'On the bench', done: 'Finished' };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function kitRow(k) {
    var opts = Object.keys(STATUS).map(function (s) { return '<option value="' + s + '"' + (k.status === s ? ' selected' : '') + '>' + STATUS[s] + '</option>'; }).join('');
    var guide = k.page ? '<a href="' + esc(k.page) + '">Guide</a> · <a href="' + esc(k.page) + '#paint-list-generator">Paints</a>' : '';
    var meta = [k.maker, k.scale].filter(Boolean).join(' · ');
    return '<li><span class="grow"><b>' + esc(k.name) + '</b>' + (meta ? ' <small style="display:inline">' + esc(meta) + '</small>' : '') +
      '<small>' + (k.notes ? esc(k.notes) + ' · ' : '') + 'Added ' + esc(k.added || '') + (guide ? ' · ' + guide : '') + '</small></span>' +
      '<label class="sr-only" for="st-' + k.id + '">Status</label><select id="st-' + k.id + '" class="tool-input" data-kit-status="' + k.id + '" style="padding:6px">' + opts + '</select>' +
      '<button type="button" class="x-btn" data-kit-del="' + k.id + '" aria-label="Delete ' + esc(k.name) + '">Delete</button></li>';
  }

  function render() {
    var d = S.get();
    // stats
    var c = { wish: 0, stash: 0, building: 0, done: 0 };
    d.kits.forEach(function (k) { c[k.status] = (c[k.status] || 0) + 1; });
    $('ms-stats').innerHTML = Object.keys(STATUS).map(function (s) { return '<div><b>' + c[s] + '</b><span>' + STATUS[s] + '</span></div>'; }).join('') +
      '<div><b>' + Object.keys(d.paints.owned).length + '</b><span>Paints owned</span></div>';
    // kits grouped
    $('ms-kits').innerHTML = d.kits.length ? ['building', 'stash', 'wish', 'done'].map(function (s) {
      var ks = d.kits.filter(function (k) { return k.status === s; });
      return ks.length ? '<h3 class="ms-h">' + STATUS[s] + ' (' + ks.length + ')</h3><ul class="tool-list">' + ks.map(kitRow).join('') + '</ul>' : '';
    }).join('') : '<p class="tool-empty">No kits yet. Add one above, or use “Save to my builds” on any aircraft guide.</p>';
    if (!P) return;
    var byId = {}; P.paints.forEach(function (p) { byId[p.id] = p; });
    function paintLi(id, list) {
      var p = byId[id]; if (!p) return '';
      var codes = ['t', 'h', 'v', 'a', 'm'].filter(function (b) { return p[b]; }).map(function (b) { return P.brands[b] + ' ' + p[b].c; }).join(' · ');
      return '<li><span class="sw-dot" style="background:' + esc(p.hex) + '"></span><span class="grow">' + esc(p.name) + '<small>' + esc(codes) + '</small></span>' +
        (list === 'want' ? '<button type="button" class="x-btn" data-bought="' + id + '">Bought</button>' : '') +
        '<button type="button" class="x-btn" data-paint-del="' + id + '" data-list="' + list + '">Remove</button></li>';
    }
    var want = Object.keys(d.paints.want).map(function (id) { return paintLi(id, 'want'); }).join('') +
      d.extra.map(function (x, i) { return '<li><span class="sw-dot" style="background:repeating-linear-gradient(45deg,#3a4a5a,#3a4a5a 4px,#2a3440 4px,#2a3440 8px)"></span><span class="grow">' + esc(x.t) + (x.from ? '<small><a href="' + esc(x.from) + '">From guide</a></small>' : '') + '</span><button type="button" class="x-btn" data-extra-del="' + i + '">Remove</button></li>'; }).join('');
    $('ms-want').innerHTML = want || '<li class="tool-empty">Nothing on your shopping list. Add paints from the <a href="paint-converter.html">paint converter</a> or any aircraft guide.</li>';
    var owned = Object.keys(d.paints.owned).map(function (id) { return paintLi(id, 'owned'); }).join('');
    $('ms-owned').innerHTML = owned || '<li class="tool-empty">No paints marked as owned yet. Use “I own this” in the <a href="paint-converter.html">paint converter</a>.</li>';
  }

  function listText() {
    var d = S.get(), out = [];
    var byId = {}; (P ? P.paints : []).forEach(function (p) { byId[p.id] = p; });
    Object.keys(d.paints.want).forEach(function (id) { var p = byId[id]; if (p) out.push('- ' + p.name + (p.t ? ' (Tamiya ' + p.t.c + ')' : '')); });
    d.extra.forEach(function (x) { out.push('- ' + x.t); });
    return out.join('\n');
  }

  $('ms-add').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('ms-name').value.trim(); if (!name) { $('ms-name').focus(); return; }
    var ac = $('ms-aircraft').value, a = aircraft.filter(function (x) { return x.u === ac; })[0];
    S.addKit({ name: name, maker: $('ms-maker').value.trim(), scale: $('ms-scale').value, status: $('ms-status').value, notes: $('ms-notes').value.trim(), aircraft: a ? a.t : '', page: a ? a.u : '' });
    this.reset(); $('ms-name').focus();
  });

  document.addEventListener('change', function (e) {
    if (e.target.dataset.kitStatus) S.updateKit(e.target.dataset.kitStatus, { status: e.target.value });
  });
  document.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.dataset.kitDel) { if (confirm('Delete this kit from your stash?')) S.removeKit(b.dataset.kitDel); }
    else if (b.dataset.paintDel) S.setPaint(b.dataset.paintDel, b.dataset.list, false);
    else if (b.dataset.bought) S.setPaint(b.dataset.bought, 'owned', true);
    else if (b.dataset.extraDel) S.removeExtra(+b.dataset.extraDel);
    else if (b.id === 'ms-copy') { if (navigator.clipboard) navigator.clipboard.writeText(listText()).then(function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy shopping list'; }, 1500); }); }
    else if (b.id === 'ms-print') window.print();
    else if (b.id === 'ms-export') {
      var blob = new Blob([S.exportJSON()], { type: 'application/json' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob);
      a.download = 'ww2modeller-stash-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a); a.click(); a.remove();
    } else if (b.id === 'ms-import') $('ms-file').click();
    else if (b.id === 'ms-clear') { if (confirm('Clear your whole stash in this browser? Export a backup first if you want to keep it.')) S.clear(); }
  });
  $('ms-file').addEventListener('change', function () {
    var f = this.files[0]; if (!f) return;
    var r = new FileReader();
    r.onload = function () {
      try { if (confirm('Replace your current stash with this backup?')) S.importJSON(r.result); }
      catch (err) { alert('That file could not be read as a WW2 Modeller stash backup.'); }
    };
    r.readAsText(f); this.value = '';
  });

  S.onChange(render);
  render();
  S.paints().then(function (d) { P = d; render(); });
  if (window.WW2Search) window.WW2Search.load().then(function (idx) {
    aircraft = idx.filter(function (x) { return x.k === 'Aircraft'; }).sort(function (a, b) { return a.t.localeCompare(b.t); });
    $('ms-aircraft').innerHTML = '<option value="">— Link to an aircraft guide (optional) —</option>' + aircraft.map(function (a) { return '<option value="' + esc(a.u) + '">' + esc(a.t) + '</option>'; }).join('');
  });
})();
