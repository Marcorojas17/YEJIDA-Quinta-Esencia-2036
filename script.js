// ===== NAV: construir/actualizar pager automáticamente =====
const body = document.body;
const currentPage = parseInt(body.dataset.page || '1', 10);

const PAGES = [
  {href:'index.html',        title:'1. Introducción'},
  {href:'niveles.html',      title:'2. Niveles del Alma'},
  {href:'yhvh.html',         title:'3. YHVH'},
  {href:'profecia.html',     title:'4. Profecía'},
  {href:'meditacion.html',   title:'5. Meditación'},
  {href:'terminologia.html', title:'6. Terminología'},
  {href:'sintesis.html',     title:'7. Síntesis'},
  {href:'oraculo.html',      title:'8. Oráculo'}
];

const dotsContainer = document.querySelector('.pager-dots');
if(dotsContainer){
  dotsContainer.innerHTML = '';
  PAGES.forEach((p, i) => {
    const a = document.createElement('a');
    a.href = p.href;
    a.className = 'dot' + (i === currentPage - 1 ? ' active' : '');
    a.title = p.title;
    dotsContainer.appendChild(a);
  });
}

// ===== Atajos de teclado: ← → =====
document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft'){
    const prev = document.querySelector('.pager-btn.prev');
    if(prev && !prev.classList.contains('disabled')) prev.click();
  }
  if(e.key === 'ArrowRight'){
    const next = document.querySelector('.pager-btn.next');
    if(next && !next.classList.contains('disabled')) next.click();
  }
});