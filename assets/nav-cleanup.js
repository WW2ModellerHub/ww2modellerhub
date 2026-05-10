
(function(){
  function removeDupes(selector){
    var nodes=[].slice.call(document.querySelectorAll(selector));
    if(nodes.length>1){nodes.slice(1).forEach(function(n){n.remove();});}
  }
  function cleanup(){
    removeDupes('header.ww2-top');
    removeDupes('nav.ww2-main-nav');
    var hasUnified=document.querySelector('header.ww2-top') && document.querySelector('nav.ww2-main-nav');
    if(hasUnified){
      document.querySelectorAll('header.topbar, .topbar').forEach(function(n){ n.remove(); });
      document.querySelectorAll('header.site-nav, .site-nav').forEach(function(n){ if(!n.classList.contains('ww2-top') && !n.classList.contains('ww2-main-nav')) n.remove(); });
      document.querySelectorAll('nav.nav, .nav').forEach(function(n){
        if(n.classList.contains('ww2-main-nav')) return;
        if(n.closest('.paint-table-wrap') || n.closest('.family-filter-bar') || n.id==='paintFamilyButtons') return;
        n.remove();
      });
      document.querySelectorAll('form.search, .search').forEach(function(n){
        if(n.closest('.ww2-top') || n.closest('.ww2-main-nav') || n.closest('.controls') || n.closest('.filters')) return;
        if(n.closest('.panel-body') || n.closest('main')) return;
        n.remove();
      });
    }
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',cleanup);} else {cleanup();}
})();
