(function () {
  var S = window.WW2Stash, data, brand = 'any', fam = 'all';
  var $ = function (id) { return document.getElementById(id); };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function compact(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ''); }

  function matches(p, q) {
    if (!q) return true;
    var cq = compact(q);
    var hay = [p.name, p.ref, data.families[p.cat]].join(' ').toLowerCase();
    if (q.toLowerCase().split(/\s+/).every(function (t) { return hay.indexOf(t) > -1; })) return true;
    return ['h', 't', 'v', 'a', 'm'].some(function (b) {
      if (!p[b]) return false;
      if (brand !== 'any' && brand !== b) return false;
      var code = compact(p[b].c), nm = compact(p[b].n);
      // "xf81" matches "XF-81"; "humbrol 29" matches Humbrol 29
      var cqb = cq.replace(compact(data.brands[b]), '');
      return (cqb && code.indexOf(cqb) === 0) || (cq.length > 3 && nm.indexOf(cq) > -1);
    });
  }

  function card(p) {
    var rows = ['h', 't', 'v', 'a', 'm'].map(function (b) {
      var v = p[b];
      return '<tr class="' + (brand === b ? 'hl' : '') + '"><td>' + data.brands[b] + '</td><td>' +
        (v ? '<b>' + esc(v.c) + '</b>' + (v.n ? ' ' + esc(v.n) : '') : '<span style="color:#7d8790">—</span>') + '</td></tr>';
    }).join('');
    var own = S.hasPaint(p.id, 'owned'), want = S.hasPaint(p.id, 'want');
    return '<article class="paint-card"><div class="sw" style="background:' + esc(p.hex) + '" role="img" aria-label="Approximate colour swatch for ' + esc(p.name) + '"></div>' +
      '<div class="pc-body"><h3>' + esc(p.name) + '</h3><div class="ref">' + esc(p.ref) + ' · ' + esc(data.families[p.cat]) + '</div><table>' + rows + '</table></div>' +
      '<div class="pc-actions"><button type="button" class="tool-btn ghost' + (own ? ' on' : '') + '" data-own="' + p.id + '" aria-pressed="' + own + '">' + (own ? '✓ I own this' : 'I own this') + '</button>' +
      '<button type="button" class="tool-btn ghost' + (want ? ' on' : '') + '" data-want="' + p.id + '" aria-pressed="' + want + '">' + (want ? '✓ On list' : 'Add to list') + '</button></div></article>';
  }

  function render() {
    var q = $('pc-q').value.trim();
    var list = data.paints.filter(function (p) { return (fam === 'all' || p.cat === fam) && matches(p, q); });
    $('pc-count').textContent = list.length + ' colour' + (list.length === 1 ? '' : 's');
    $('pc-results').innerHTML = list.length ? list.map(card).join('') :
      '<p class="tool-empty">No colours match. Try a colour name (“Sky”, “RLM 76”), or a paint code such as “XF-21” or “Humbrol 90”.</p>';
    renderList();
    try { history.replaceState(null, '', q ? '?q=' + encodeURIComponent(q) : location.pathname); } catch (e) {}
  }

  function renderList() {
    var d = S.get(), ids = Object.keys(d.paints.want);
    var byId = {}; data.paints.forEach(function (p) { byId[p.id] = p; });
    var pref = brand === 'any' ? 't' : brand;
    $('pc-list').innerHTML = ids.length ? ids.filter(function (id) { return byId[id]; }).map(function (id) {
      var p = byId[id], v = p[pref] || p.t || p.h || p.v || p.a || p.m;
      return '<li><span class="sw-dot" style="background:' + esc(p.hex) + '"></span><span class="grow">' + esc(p.name) +
        '<small>' + (v ? esc(data.brands[p[pref] ? pref : (p.t ? 't' : 'h')]) + ' ' + esc(v.c) : '') + '</small></span>' +
        '<button type="button" class="x-btn" data-want="' + id + '" aria-label="Remove ' + esc(p.name) + '">Remove</button></li>';
    }).join('') : '<li class="tool-empty">Your shopping list is empty. Use “Add to list” on any colour.</li>';
    $('pc-list-count').textContent = ids.length;
  }

  function listText() {
    var d = S.get(), pref = brand === 'any' ? 't' : brand;
    return data.paints.filter(function (p) { return d.paints.want[p.id]; }).map(function (p) {
      var v = p[pref] || p.t || p.h;
      return '- ' + p.name + (v ? ' — ' + data.brands[p[pref] ? pref : (p.t ? 't' : 'h')] + ' ' + v.c : '');
    }).join('\n');
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.dataset.own) { S.togglePaint(b.dataset.own, 'owned'); render(); }
    else if (b.dataset.want) { S.togglePaint(b.dataset.want, 'want'); render(); }
    else if (b.dataset.fam) { fam = b.dataset.fam; document.querySelectorAll('[data-fam]').forEach(function (c) { c.classList.toggle('on', c === b); c.setAttribute('aria-pressed', c === b); }); render(); }
    else if (b.id === 'pc-copy') {
      var t = listText();
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy list'; }, 1500); });
    } else if (b.id === 'pc-print') { window.print(); }
  });

  S.paints().then(function (d) {
    data = d;
    $('pc-fams').innerHTML = '<button type="button" class="chip on" data-fam="all" aria-pressed="true">All</button>' +
      Object.keys(d.families).map(function (k) { return '<button type="button" class="chip" data-fam="' + k + '" aria-pressed="false">' + esc(d.families[k]) + '</button>'; }).join('');
    $('pc-brand').innerHTML = '<option value="any">Any brand</option>' + Object.keys(d.brands).map(function (k) { return '<option value="' + k + '">' + d.brands[k] + '</option>'; }).join('');
    var q = new URLSearchParams(location.search).get('q'); if (q) $('pc-q').value = q;
    $('pc-q').addEventListener('input', render);
    $('pc-brand').addEventListener('change', function () { brand = this.value; render(); });
    S.onChange(renderList);
    render();
  });
})();
