(function () {
  var $ = function (id) { return document.getElementById(id); };
  var EMAIL = 'hello@ww2modeller.co.uk';
  var builds = [], filter = 'all';
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function card(b, i) {
    var img = (b.images && b.images[0]) || '';
    return '<button type="button" class="gl-card" data-open="' + i + '">' +
      (img ? '<img src="' + esc(img) + '" alt="' + esc(b.title + ' by ' + b.builder) + '" loading="lazy">' : '') +
      '<span class="gl-cap"><b>' + esc(b.title) + '</b><span>' + esc([b.kit, b.scale].filter(Boolean).join(' · ')) + '</span><small>by ' + esc(b.builder) + '</small></span></button>';
  }

  function render() {
    var list = builds.map(function (b, i) { return [b, i]; }).filter(function (x) { return filter === 'all' || x[0].nation === filter; });
    if (!builds.length) {
      $('gl-grid').innerHTML = '<div class="gl-empty"><h3>Be the first in the gallery</h3><p>The reader gallery is brand new. Send in your finished WW2 aircraft build — any scale, any kit, any skill level — and it could be the first one featured here.</p><a class="tool-btn" href="#submit" style="text-decoration:none">Submit your build</a></div>';
      $('gl-filters').hidden = true; return;
    }
    var nations = []; builds.forEach(function (b) { if (b.nation && nations.indexOf(b.nation) < 0) nations.push(b.nation); });
    $('gl-filters').hidden = nations.length < 2;
    $('gl-filters').innerHTML = '<button type="button" class="chip' + (filter === 'all' ? ' on' : '') + '" data-f="all">All</button>' +
      nations.sort().map(function (n) { return '<button type="button" class="chip' + (filter === n ? ' on' : '') + '" data-f="' + esc(n) + '">' + esc(n) + '</button>'; }).join('');
    $('gl-grid').innerHTML = list.map(function (x) { return card(x[0], x[1]); }).join('');
  }

  function open(i) {
    var b = builds[i], dlg = $('gl-dialog');
    $('gl-body').innerHTML = (b.images || []).map(function (src) { return '<img src="' + esc(src) + '" alt="' + esc(b.title) + '">'; }).join('') +
      '<h2>' + esc(b.title) + '</h2><p class="gl-meta">' + esc([b.kit, b.scale, 'by ' + b.builder, b.date].filter(Boolean).join(' · ')) + '</p>' +
      (b.story ? '<p>' + esc(b.story) + '</p>' : '') +
      (b.paints ? '<p><b>Paints:</b> ' + esc(b.paints) + '</p>' : '') +
      (b.aftermarket ? '<p><b>Aftermarket:</b> ' + esc(b.aftermarket) + '</p>' : '') +
      (b.guide ? '<p><a href="' + esc(b.guide) + '">Read the aircraft guide →</a></p>' : '');
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-open],[data-f],#gl-close'); if (!t) return;
    if (t.id === 'gl-close') { $('gl-dialog').close ? $('gl-dialog').close() : $('gl-dialog').removeAttribute('open'); }
    else if (t.dataset.open) open(+t.dataset.open);
    else { filter = t.dataset.f; render(); }
  });
  $('gl-dialog').addEventListener('click', function (e) { if (e.target === this && this.close) this.close(); });

  $('gl-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = this, v = function (n) { return (f.elements[n].value || '').trim(); };
    if (!f.elements.consent.checked) { $('gl-form-msg').textContent = 'Please tick the box to confirm the photos are yours and can be published.'; return; }
    var body = [
      'GALLERY SUBMISSION — please attach 1 to 4 photos of your build to this email.', '',
      'Name to credit: ' + v('builder'),
      'Aircraft / subject: ' + v('title'),
      'Kit: ' + v('kit'),
      'Scale: ' + v('scale'),
      'Paints used: ' + v('paints'),
      'Aftermarket: ' + v('aftermarket'), '',
      'About the build:', v('story'), '',
      'I confirm these photos are my own work and WW2 Modeller may publish them with the credit above.'
    ].join('\n');
    location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Gallery submission: ' + v('title')) + '&body=' + encodeURIComponent(body);
    $('gl-form-msg').textContent = 'Your email app should now open with the details filled in. Remember to attach your photos before sending.';
  });

  var s = document.querySelector('script[src*="assets/tools/gallery.js"]');
  var base = s ? s.src.replace(/assets\/tools\/gallery\.js.*$/, '') : '';
  fetch(base + 'assets/gallery/gallery.json').then(function (r) { return r.json(); }).then(function (d) {
    builds = (d.builds || []).slice().sort(function (a, b) { return String(b.date || '').localeCompare(String(a.date || '')); });
    render();
  }).catch(render);
})();
