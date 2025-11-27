// 간단한 내비게이션 토글
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.nav-toggle');
  const list = document.querySelector('.nav-list');
  if(!btn || !list) return;
  btn.addEventListener('click', ()=>{
    const visible = list.style.display === 'flex' || list.style.display === '';
    list.style.display = visible ? 'none' : 'flex';
  });
});
