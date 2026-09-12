/* ═══════════════════════════════════════════════════════════
   YEJIDÁ KABALÁH · shared.js
   Motor común: nav, fondo, pager, utilidades
   ═══════════════════════════════════════════════════════════ */

'use strict';

// ─────── CATÁLOGO DE LOS 21 PORTALES ───────
const PORTALES = [
  { id:1,  path:'portales/01-introduccion.html', title:'Introducción',      hebrew:'פתיחה',      icon:'📖' },
  { id:2,  path:'portales/02-niveles.html',      title:'Cinco Niveles',     hebrew:'נפש',        icon:'🔯' },
  { id:3,  path:'portales/03-sefirot.html',      title:'Las 10 Sefirot',    hebrew:'ספירות',     icon:'🌳' },
  { id:4,  path:'portales/04-mundos.html',       title:'Los 4 Mundos',      hebrew:'עולמות',     icon:'🌍' },
  { id:5,  path:'portales/05-partzufim.html',    title:'Los 5 Partzufim',   hebrew:'פרצופים',    icon:'👁️' },
  { id:6,  path:'portales/06-yhvh.html',         title:'El Nombre YHVH',    hebrew:'יהוה',       icon:'✡️' },
  { id:7,  path:'portales/07-letras.html',       title:'Las 22 Letras',     hebrew:'אותיות',     icon:'🔤' },
  { id:8,  path:'portales/08-caminos.html',      title:'32 Caminos',        hebrew:'נתיבות',     icon:'🛤️' },
  { id:9,  path:'portales/09-tzimtzum.html',     title:'Tzimtzum',          hebrew:'צמצום',      icon:'🌌' },
  { id:10, path:'portales/10-shevira.html',      title:'Shevirat HaKelim',  hebrew:'שבירה',      icon:'💔' },
  { id:11, path:'portales/11-tikkun.html',       title:'Tikkun Olam',       hebrew:'תיקון',      icon:'🔧' },
  { id:12, path:'portales/12-profecia.html',     title:'Profecía',          hebrew:'נבואה',      icon:'🔮' },
  { id:13, path:'portales/13-mashiaj.html',      title:'El Mashiaj',        hebrew:'משיח',       icon:'👑' },
  { id:14, path:'portales/14-meditacion.html',   title:'Meditación',        hebrew:'התבודדות',   icon:'🧘' },
  { id:15, path:'portales/15-mitzvot.html',      title:'Las Mitzvot',       hebrew:'מצוות',      icon:'📜' },
  { id:16, path:'portales/16-zohar.html',        title:'El Zohar',          hebrew:'זוהר',       icon:'📕' },
  { id:17, path:'portales/17-terminologia.html', title:'Terminología',      hebrew:'מונחים',     icon:'📚' },
  { id:18, path:'portales/18-sintesis.html',     title:'Síntesis Final',    hebrew:'סיכום',      icon:'✦' },
  { id:19, path:'portales/19-biblioteca.html',   title:'Biblioteca',        hebrew:'ספרייה',     icon:'🏛️' },
  { id:20, path:'portales/20-oraculo.html',      title:'Oráculo',           hebrew:'אורקל',      icon:'🔯' },
  { id:21, path:'portales/21-criptografia.html', title:'Sistema Infalsificable', hebrew:'מערכת', icon:'🔐' }
];

// ─────── MENÚ PRINCIPAL ───────
const MENU = [
  { href:'index.html',                        label:'🏠 Inicio' },
  { href:'gatitos.html',                      label:'🐱 Gatitos' },
  { href:'portales/01-introduccion.html',     label:'📖 Portales' },
  { href:'herramientas/guematria.html',       label:'🧮 Herramientas' },
  { href:'visual/arbol-2d.html',              label:'🎨 Visual' },
  { href:'practica/respiracion.html',         label:'🧘 Práctica' },
  { href:'aprender/curso-principiantes.html', label:'📚 Aprender' },
  { href:'comunidad/foro.html',               label:'👥 Comunidad' },
  { href:'juegos/aventura.html',              label:'🎮 Juegos' },
  { href:'extras/mandala.html',               label:'✨ Extras' },
  { href:'portales/21-criptografia.html',     label:'🔐 Sistema' }
];

// ─────── HELPERS ───────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function el(tag, attrs = {}, ...children){
  const node = document.createElement(tag);
  for(const [k, v] of Object.entries(attrs)){
    if(k === 'class') node.className = v;
    else if(k === 'html') node.innerHTML = v;
    else if(k.startsWith('on')) node.addEventListener(k.slice(2).toLowerCase(), v);
    else if(v === true) node.setAttribute(k, '');
    else if(v !== false && v != null) node.setAttribute(k, v);
  }
  children.flat().forEach(c => {
    if(c == null) return;
    node.append(c.nodeType ? c : document.createTextNode(String(c)));
  });
  return node;
}

// ─────── DETECTAR RAÍZ (raíz vs subcarpeta) ───────
function getRootPath(){
  const subdirs = ['portales','herramientas','visual','practica',
    'aprender','comunidad','juegos','extras','docs','api'];
  const parts = window.location.pathname.split('/').filter(Boolean);
  const inSubdir = parts.some(p => subdirs.includes(p));
  return inSubdir ? '../' : './';
}

// ─────── NAV ───────
function buildNav(){
  const nav = el('nav', { class:'top-nav', role:'navigation', 'aria-label':'Navegación principal' });

  const brand = el('a', { href: getRootPath() + 'index.html', class:'brand' },
    el('span', { class:'brand-symbol', 'aria-hidden':'true' }, '✡'),
    el('span', { class:'brand-name' }, 'YEJIDÁ', el('small', {}, 'Kabaláh · 2036'))
  );

  const toggle = el('button', {
    class:'nav-toggle', type:'button',
    'aria-label':'Abrir menú', 'aria-expanded':'false'
  }, '☰');

  const links = el('div', { class:'nav-links' });
  const currentPath = window.location.pathname;
  MENU.forEach(m => {
    const full = getRootPath() + m.href;
    const a = el('a', { href: full }, m.label);
    // Marcar activo si la URL contiene el path
    if(currentPath.includes(m.href.replace('.html','')) ||
       (m.href === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('index.html')))){
      a.classList.add('active');
    }
    links.appendChild(a);
  });

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.append(brand, toggle, links);
  return nav;
}

// ─────── FONDO GEOMETRÍA SAGRADA ───────
function initSacredBg(){
  const canvas = $('#geo-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, cx, cy, dpr;

  function resize(){
    dpr = window.devicePixelRatio || 1;
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = W / 2; cy = H / 2;
  }
  window.addEventListener('resize', resize);
  resize();

  const particles = [];
  for(let i = 0; i < 80; i++){
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.6 + 0.2
    });
  }

  const sefirot = [
    {y:-1.00,x:0},{y:-0.72,x:-0.35},{y:-0.72,x:0.35},
    {y:-0.30,x:-0.42},{y:-0.30,x:0.42},{y:0.05,x:0},
    {y:0.42,x:-0.42},{y:0.42,x:0.42},{y:0.72,x:0},{y:1.05,x:0}
  ];
  const paths = [[0,1],[0,2],[0,5],[0,6],[0,7],[1,2],[1,3],[1,5],
    [2,4],[2,5],[3,4],[3,5],[3,6],[4,5],[4,7],[5,6],[5,7],
    [5,8],[6,8],[7,8],[8,9]];

  function drawCircle(x, y, r){
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(212,175,55,0.12)';
    ctx.lineWidth = 0.7; ctx.stroke();
  }

  function drawFlower(t){
    const baseR = Math.min(W, H) * 0.13;
    ctx.save(); ctx.translate(cx, cy);
    ctx.rotate(t * 0.00008);
    for(let layer = 0; layer <= 2; layer++){
      const rc = layer === 0 ? 1 : layer * 6;
      const r = baseR * layer;
      if(layer === 0) drawCircle(0, 0, baseR * 0.6);
      else for(let i = 0; i < rc; i++){
        const a = (Math.PI * 2 / rc) * i;
        drawCircle(Math.cos(a) * r, Math.sin(a) * r, baseR * 0.6);
      }
    }
    ctx.restore();
  }

  function drawTree(t){
    const S = Math.min(W, H) * 0.16;
    const pulse = 0.5 + 0.5 * Math.sin(t * 0.0015);
    ctx.save(); ctx.translate(cx, cy + 20);
    ctx.strokeStyle = 'rgba(212,175,55,0.16)'; ctx.lineWidth = 0.8;
    paths.forEach(([a,b]) => {
      ctx.beginPath();
      ctx.moveTo(sefirot[a].x * S, sefirot[a].y * S);
      ctx.lineTo(sefirot[b].x * S, sefirot[b].y * S);
      ctx.stroke();
    });
    sefirot.forEach((s, i) => {
      const x = s.x * S, y = s.y * S;
      const isK = i === 0;
      const r = isK ? 5 + pulse * 3 : 3;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r * 6);
      if(isK){ g.addColorStop(0, 'rgba(247,224,138,0.55)');
               g.addColorStop(1, 'rgba(247,224,138,0)'); }
      else { g.addColorStop(0, 'rgba(212,175,55,0.28)');
             g.addColorStop(1, 'rgba(212,175,55,0)'); }
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r * 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = isK ? '#f7e08a' : '#d4af37';
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    });
    ctx.restore();
  }

  function drawRing(t){
    const R = Math.min(W, H) * 0.42;
    ctx.save(); ctx.translate(cx, cy);
    ctx.rotate(-t * 0.0001);
    ctx.strokeStyle = 'rgba(212,175,55,0.10)'; ctx.lineWidth = 0.6;
    ctx.beginPath(); ctx.arc(0, 0, R, 0, Math.PI * 2); ctx.stroke();
    for(let i = 0; i < 12; i++){
      const a = (Math.PI * 2 / 12) * i;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * R, Math.sin(a) * R);
      ctx.lineTo(Math.cos(a) * (R + 8), Math.sin(a) * (R + 8));
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawParticles(){
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0) p.x = W; if(p.x > W) p.x = 0;
      if(p.y < 0) p.y = H; if(p.y > H) p.y = 0;
      ctx.fillStyle = `rgba(247,224,138,${p.a})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    });
  }

  function loop(t){
    ctx.clearRect(0, 0, W, H);
    drawRing(t); drawFlower(t); drawTree(t); drawParticles();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

// ─────── LETRAS HEBREAS FLOTANTES ───────
function initFloatingLetters(){
  const cont = $('#floaters');
  if(!cont) return;
  const letters = ['י','ה','ו','ה','א','ח','ד','כ','ת','ר','נ','פ','ש','מ','צ','ל'];
  for(let i = 0; i < 14; i++){
    const s = document.createElement('span');
    s.textContent = letters[Math.floor(Math.random() * letters.length)];
    s.style.left = Math.random() * 100 + '%';
    s.style.fontSize = (28 + Math.random() * 50) + 'px';
    s.style.animationDuration = (18 + Math.random() * 22) + 's';
    s.style.animationDelay = (-Math.random() * 30) + 's';
    s.style.opacity = (0.06 + Math.random() * 0.16).toFixed(2);
    s.setAttribute('aria-hidden', 'true');
    cont.appendChild(s);
  }
}

// ─────── PAGER (anterior / siguiente / dots) ───────
function buildPager(pageId){
  const idx = PORTALES.findIndex(p => p.id === pageId);
  if(idx === -1) return null;
  const prev = PORTALES[idx - 1];
  const next = PORTALES[idx + 1];

  const pager = el('div', { class:'pager', role:'navigation', 'aria-label':'Paginación de portales' });

  const prevBtn = prev
    ? el('a', { href: getRootPath() + prev.path, class:'pager-btn', rel:'prev' },
        `← ${prev.icon} ${prev.title}`)
    : el('span', { class:'pager-btn disabled' }, '← Inicio');

  const dots = el('div', { class:'pager-dots', role:'tablist' });
  PORTALES.forEach(p => {
    const d = el('a', {
      href: getRootPath() + p.path,
      class: 'dot' + (p.id === pageId ? ' active' : ''),
      title: `${p.id}. ${p.title}`,
      'aria-label': `${p.id}. ${p.title}`
    });
    dots.appendChild(d);
  });

  const nextBtn = next
    ? el('a', { href: getRootPath() + next.path, class:'pager-btn', rel:'next' },
        `${next.icon} ${next.title} →`)
    : el('span', { class:'pager-btn disabled' }, 'Fin →');

  pager.append(prevBtn, dots, nextBtn);
  return pager;
}

// ─────── ATAJOS DE TECLADO ───────
function initKeyboardNav(){
  document.addEventListener('keydown', (e) => {
    if(e.target.matches('input, textarea, select')) return;
    if(e.key === 'ArrowLeft'){
      const prev = $('.pager-btn[rel="prev"]');
      if(prev) prev.click();
    }
    if(e.key === 'ArrowRight'){
      const next = $('.pager-btn[rel="next"]');
      if(next) next.click();
    }
  });
}

// ─────── SEGURIDAD BÁSICA ───────
function initSecurity(){
  if(window.self !== window.top){
    try{ window.top.location = window.self.location; }
    catch(e){ document.body.innerHTML =
      '<h1 style="padding:2rem;color:#d4af37">Acceso denegado.</h1>'; }
  }
}

// ─────── TOC AUTOMÁTICO ───────
function buildTOC(container){
  const sections = $$('section[id]', container);
  if(sections.length < 2) return null;
  const nav = el('nav', { class:'toc', 'aria-label':'Índice' });
  sections.forEach((sec, i) => {
    const h2 = $('h2', sec);
    if(!h2) return;
    const a = el('a', { href: '#' + sec.id });
    a.innerHTML = `<span class="toc-num">${String(i+1).padStart(2,'0')}</span>${h2.textContent}`;
    nav.appendChild(a);
  });
  return nav;
}

// ─────── BOOTSTRAP AUTOMÁTICO ───────
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  if(!document.querySelector('.top-nav')){
    body.insertBefore(buildNav(), body.firstChild);
  }
  if(!document.querySelector('.skip-link')){
    const skip = el('a', { href:'#main', class:'skip-link' }, 'Saltar al contenido');
    body.insertBefore(skip, body.firstChild);
  }
  initSacredBg();
  initFloatingLetters();
  initSecurity();
  initKeyboardNav();
});

// Exponer helpers globalmente
window.Yejida = { PORTALES, MENU, $, $$, el, buildPager, buildTOC, getRootPath };
