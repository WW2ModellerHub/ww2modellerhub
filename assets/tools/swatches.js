/* Adds small colour chips next to distinctive WW2 paint names in page text.
   Chips link to the paint converter. Swatches are approximate screen colours. */
(function () {
  var RULES = [
    ['RLM ?02\\b', 'rlm-02-grau'], ['RLM ?04\\b', 'rlm-04-gelb'], ['RLM ?65\\b', 'rlm-65-hellblau'], ['RLM ?66\\b', 'rlm-66-schwarzgrau'],
    ['RLM ?70\\b', 'rlm-70-schwarzgrun'], ['RLM ?71\\b', 'rlm-71-dunkelgrun'], ['RLM ?74\\b', 'rlm-74-graugrun'], ['RLM ?75\\b', 'rlm-75-grauviolett'],
    ['RLM ?76\\b', 'rlm-76-lichtblau'], ['RLM ?78\\b', 'rlm-78-himmelblau'], ['RLM ?79\\b', 'rlm-79-sandgelb'], ['RLM ?80\\b', 'rlm-80-olivgrun'],
    ['RLM ?81\\b', 'rlm-81-braunviolett'], ['RLM ?82\\b', 'rlm-82-hellgrun'], ['RLM ?83\\b', 'rlm-83-dunkelgrun'],
    ['Dark Earth', 'dark-earth'], ['RAF Dark Green', 'dark-green'], ['Ocean Gr[ae]y', 'ocean-grey'], ['Medium Sea Gr[ae]y', 'medium-sea-grey'],
    ['Dark Sea Gr[ae]y', 'dark-sea-grey'], ['PRU Blue', 'pru-blue'], ['Middle Stone', 'sand-middle-east'], ['Azure Blue', 'azure-blue-middle-east'],
    ['Interior Gr[ae]y-Green', 'interior-grey-green-cockpit'], ['Sky Type S', 'sky-camouflage'],
    ['Olive Drab', 'olive-drab-early'], ['Neutral Gr[ae]y', 'neutral-grey'], ['Interior Green', 'interior-green-usaaf-cockpit'],
    ['Intermediate Blue', 'intermediate-blue'], ['Glossy Sea Blue', 'glossy-sea-blue'], ['Non-specular Sea Blue', 'non-specular-sea-blue'], ['Blue Gr[ae]y', 'blue-gray'],
    ['AMT-4\\b', 'amt-4-green'], ['AMT-6\\b', 'amt-6-black'], ['AMT-7\\b', 'amt-7-blue'], ['AMT-11\\b', 'amt-11-blue-grey'], ['AMT-12\\b', 'amt-12-dark-grey'], ['A-14 steel grey', 'a-14-steel-grey'],
    ['Giallo Mimetico', 'giallo-mimetico-3'], ['Verde Mimetico', 'verde-mimetico-2'], ['Nocciola Chiaro', 'nocciola-chiaro-4'],
    ['Grigio Azzurro Chiaro', 'grigio-azzurro-chiaro'], ['Verde Oliva Scuro', 'verde-oliva-scuro-2'], ['\\bameiro\\b', 'ijn-amber-grey-ame-iro'], ['\\baotake\\b', 'aotake-translucent-blue-green']
  ];
  var big = new RegExp(RULES.map(function (r) { return '(' + r[0] + ')'; }).join('|'), 'i');
  var text = document.body ? document.body.textContent : '';
  if (!big.test(text)) return;
  var SKIP = 'A,BUTTON,SELECT,OPTION,TEXTAREA,INPUT,SCRIPT,STYLE,H1,H2,H3,H4,SUMMARY,NAV,HEADER,FOOTER,CODE,LABEL';
  var s = document.querySelector('script[src*="assets/tools/swatches.js"]');
  var base = s ? s.src.replace(/assets\/tools\/swatches\.js.*$/, '') : '';
  var byId = null;

  function chip(id, name) {
    var p = byId[id]; if (!p) return null;
    var a = document.createElement('a');
    a.className = 'paint-chip-link';
    a.href = base + 'paint-converter.html?q=' + encodeURIComponent(name);
    a.title = p.name + ' — approximate colour. Click for paint equivalents.';
    a.setAttribute('aria-label', p.name + ' paint equivalents');
    a.innerHTML = '<span class="paint-chip" style="background:' + p.hex + '"></span>';
    return a;
  }

  function process(root) {
    var els = root.querySelectorAll ? root.querySelectorAll('p, li, td, dd, .tl-text, .unit-notes, span.note') : [];
    [].forEach.call(els, function (el) {
      if (el.dataset.sw || el.closest('.paint-card, .tool-list, .ww2-sr, .ww2-sr-page, .ww2-top, .ww2-main-nav, footer, .paint-list-table, #pc-results, #ms-want, #ms-owned')) return;
      el.dataset.sw = '1';
      var used = {};
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
          for (var p = n.parentNode; p && p !== el; p = p.parentNode) if (SKIP.indexOf(p.nodeName) > -1) return NodeFilter.FILTER_REJECT;
          return big.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      var nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(function (node) {
        var frag = document.createDocumentFragment(), rest = node.nodeValue, changed = false, guard = 0;
        while (rest && guard++ < 20) {
          var m = big.exec(rest); if (!m) break;
          var idx = 0; for (var i = 1; i < m.length; i++) if (m[i]) { idx = i - 1; break; }
          var id = RULES[idx][1];
          frag.appendChild(document.createTextNode(rest.slice(0, m.index)));
          if (!used[id]) { var c = chip(id, m[0]); if (c) { frag.appendChild(c); used[id] = 1; changed = true; } }
          frag.appendChild(document.createTextNode(m[0]));
          rest = rest.slice(m.index + m[0].length);
        }
        if (changed) { frag.appendChild(document.createTextNode(rest)); node.parentNode.replaceChild(frag, node); }
      });
    });
  }

  var st = document.createElement('style');
  st.textContent = '.paint-chip-link{text-decoration:none!important;border:0!important}.paint-chip{display:inline-block;width:.8em;height:.8em;border:1px solid rgba(255,255,255,.5);border-radius:2px;margin-right:.28em;vertical-align:-.04em;box-shadow:0 0 0 1px rgba(0,0,0,.35)}';
  document.head.appendChild(st);

  fetch(base + 'assets/paints.json').then(function (r) { return r.json(); }).then(function (d) {
    byId = {}; d.paints.forEach(function (p) { byId[p.id] = p; });
    process(document.body);
    var t = null;
    new MutationObserver(function () { clearTimeout(t); t = setTimeout(function () { process(document.body); }, 150); })
      .observe(document.body, { childList: true, subtree: true });
  });
})();
