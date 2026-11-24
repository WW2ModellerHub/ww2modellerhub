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
