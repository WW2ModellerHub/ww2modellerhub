(function () {
  var D = window.WW2_MARKINGS;
  var $ = function (id) { return document.getElementById(id); };
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var ORDER = ['Camouflage', 'Undersides', 'National markings', 'Codes', 'Identification', 'Seasonal'];
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function ym(s) { var p = s.split('-'); return (+p[0]) * 12 + (+p[1] - 1); }
  function label(s) { var p = s.split('-'); return MONTHS[+p[1] - 1] + ' ' + p[0]; }

  function fill(sel, obj) { sel.innerHTML = Object.keys(obj).map(function (k) { return '<option value="' + k + '">' + esc(obj[k].name || obj[k]) + '</option>'; }).join(''); }

  function sync() {
    var af = D.airforces[$('mk-af').value];
    fill($('mk-th'), af.theatres); fill($('mk-role'), af.roles);
    $('mk-th').parentNode.hidden = Object.keys(af.theatres).length < 2;
    $('mk-role').parentNode.hidden = Object.keys(af.roles).length < 2;
  }

  function applies(r, af, th, role) {
    return r.af === af && (!r.th || r.th.indexOf(th) > -1) && (!r.roles || r.roles.indexOf(role) > -1);
  }

  function run() {
    var af = $('mk-af').value, th = $('mk-th').value, role = $('mk-role').value;
    var date = $('mk-y').value + '-' + ('0' + $('mk-m').value).slice(-2), t = ym(date);
    var now = [], soon = [], recent = [];
    D.rules.forEach(function (r) {
      if (!applies(r, af, th, role)) return;
      var a = ym(r.from), b = r.to ? ym(r.to) : 9e9;
      if (t >= a && t <= b) { now.push(r); if (t - a <= 2) recent.push(r); }
      else if (a > t && a - t <= 3) soon.push(r);
    });
    var afn = D.airforces[af].name;
    var head = '<p class="mk-summary"><b>' + esc(afn) + '</b> · ' + esc(D.airforces[af].theatres[th]) + ' · ' + esc(D.airforces[af].roles[role]) + ' · <b>' + label(date) + '</b></p>';
    if (!now.length) { $('mk-out').innerHTML = head + '<p class="tool-empty">No rules recorded for this combination and date. Try a nearby date or another theatre.</p>'; return; }
    var groups = {};
    now.forEach(function (r) { (groups[r.cat] = groups[r.cat] || []).push(r); });
    var html = head + ORDER.filter(function (c) { return groups[c]; }).map(function (c) {
      return '<div class="mk-group"><h3>' + c + '</h3><ul>' + groups[c].map(function (r) {
        var fresh = recent.indexOf(r) > -1 ? ' <span class="mk-flag">New around this date</span>' : '';
        return '<li>' + esc(r.text) + fresh + '<small>' + label(r.from) + ' – ' + (r.to ? label(r.to) : 'end of war') + '</small></li>';
      }).join('') + '</ul></div>';
    }).join('');
    if (soon.length || recent.length) {
      html += '<div class="mk-warn"><h3>Check your photo carefully</h3><ul>' +
        recent.map(function (r) { return '<li>Changed recently (' + label(r.from) + '): ' + esc(r.text) + '</li>'; }).join('') +
        soon.map(function (r) { return '<li>Changes soon (' + label(r.from) + '): ' + esc(r.text) + '</li>'; }).join('') +
        '</ul><p>Orders took weeks or months to reach every unit, so aircraft near a changeover often wore the old and new styles side by side.</p></div>';
    }
    $('mk-out').innerHTML = html;
    try { history.replaceState(null, '', '?af=' + af + '&th=' + th + '&role=' + role + '&d=' + date); } catch (e) {}
  }

  fill($('mk-af'), D.airforces);
  var y = ''; for (var i = 1939; i <= 1945; i++) y += '<option>' + i + '</option>'; $('mk-y').innerHTML = y;
  $('mk-m').innerHTML = MONTHS.map(function (m, i) { return '<option value="' + (i + 1) + '">' + m + '</option>'; }).join('');
  var q = new URLSearchParams(location.search);
  $('mk-af').value = D.airforces[q.get('af')] ? q.get('af') : 'raf';
  sync();
  if (q.get('th')) $('mk-th').value = q.get('th');
  if (q.get('role')) $('mk-role').value = q.get('role');
  var d = (q.get('d') || '1940-08').split('-'); $('mk-y').value = d[0]; $('mk-m').value = String(+d[1]);
  $('mk-af').addEventListener('change', function () { sync(); run(); });
  ['mk-th', 'mk-role', 'mk-y', 'mk-m'].forEach(function (id) { $(id).addEventListener('change', run); });
  document.querySelectorAll('[data-preset]').forEach(function (b) {
    b.addEventListener('click', function () {
      var p = b.dataset.preset.split('|');
      $('mk-af').value = p[0]; sync(); $('mk-th').value = p[1]; $('mk-role').value = p[2];
      var dd = p[3].split('-'); $('mk-y').value = dd[0]; $('mk-m').value = String(+dd[1]); run();
    });
  });
  run();
})();
