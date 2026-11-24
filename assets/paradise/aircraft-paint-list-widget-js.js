(function(){
  function initPaintLists(){
    document.querySelectorAll('.paint-list-generator').forEach(function(box){
      var btn = box.querySelector('[data-generate-paints]');
      var out = box.querySelector('.paint-list-output');
      if(!btn || !out || btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', function(){
        box.classList.toggle('generated');
        btn.textContent = box.classList.contains('generated') ? 'Hide paint list' : 'Generate paint list';
      });
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initPaintLists);
  else initPaintLists();
})();

/* My Stash integration: save this paint list / aircraft (stored in this browser only) */
(function(){
  function init(){
    var S = window.WW2Stash; if(!S) return;
    document.querySelectorAll('.paint-list-generator').forEach(function(box){
      var out = box.querySelector('.paint-list-output');
      if(!out || out.querySelector('.plg-stash')) return;
      var h1 = document.querySelector('h1');
      var name = h1 ? h1.textContent.trim() : document.title.split(' Model')[0];
      var page = location.pathname.split('/').pop() || 'index.html';
      var bar = document.createElement('div');
      bar.className = 'plg-stash';
      bar.innerHTML = '<button type="button" data-plg="paints">Add these paints to my shopping list</button>' +
        '<button type="button" data-plg="kit">Save ' + name.replace(/[<>&"]/g,'') + ' to my builds</button>' +
        '<a href="my-stash.html">Open My Stash</a><span class="plg-msg" role="status"></span>';
      out.appendChild(bar);
      var msg = bar.querySelector('.plg-msg');
      bar.addEventListener('click', function(e){
        var b = e.target.closest('button'); if(!b) return;
        if(b.dataset.plg === 'paints'){
          var n = 0;
          out.querySelectorAll('.paint-list-table tbody tr').forEach(function(tr){
            var td = tr.querySelectorAll('td'); if(td.length < 3) return;
            var codes = [];
            var heads = [].map.call(out.querySelectorAll('.paint-list-table thead th'), function(th){ return th.textContent.trim(); });
            for(var i = 2; i < td.length; i++){ var c = td[i].textContent.trim(); if(c){ var h = heads[i] || ''; codes.push(c.indexOf(h) === 0 ? c : (h + ' ' + c)); } }
            if(S.addExtra(td[0].textContent.trim() + ' (' + name + ') — ' + codes.join(' · '), page)) n++;
          });
          msg.textContent = n ? n + ' paints added to your shopping list.' : 'Already on your shopping list.';
        } else if(b.dataset.plg === 'kit'){
          S.addKit({ name: name, aircraft: name, page: page, status: 'wish', maker: '', scale: '' });
          msg.textContent = name + ' saved to your builds.';
        }
      });
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
