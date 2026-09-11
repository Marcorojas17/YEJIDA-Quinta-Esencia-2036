(function(){
  // ===== FONDO DE GEOMETRÍA SAGRADA =====
  const canvas = document.getElementById('geo-canvas');
  if(canvas){
    const ctx = canvas.getContext('2d');
    let W,H,cx,cy,dpr;
    function resize(){
      dpr = window.devicePixelRatio || 1;
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W*dpr; canvas.height = H*dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      cx = W/2; cy = H/2;
    }
    window.addEventListener('resize', resize); resize();

    const particles = [];
    for(let i=0;i<90;i++){
      particles.push({
        x:Math.random()*W, y:Math.random()*H,
        r:Math.random()*1.6+0.4,
        vx:(Math.random()-.5)*.25, vy:(Math.random()-.5)*.25,
        a:Math.random()*.6+.2
      });
    }
    function drawCircle(x,y,r){
      ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2);
      ctx.strokeStyle='rgba(212,175,55,0.13)'; ctx.lineWidth=.7; ctx.stroke();
    }
    function drawFlower(t){
      const baseR=Math.min(W,H)*0.13;
      ctx.save(); ctx.translate(cx,cy); ctx.rotate(t*0.00008);
      for(let layer=0;layer<=2;layer++){
        const rc=layer===0?1:layer*6, r=baseR*layer;
        if(layer===0){drawCircle(0,0,baseR*0.6);}
        else for(let i=0;i<rc;i++){
          const a=(Math.PI*2/rc)*i;
          drawCircle(Math.cos(a)*r, Math.sin(a)*r, baseR*0.6);
        }
      }
      ctx.restore();
    }
    function drawMetatron(t){
      const R=Math.min(W,H)*0.22;
      ctx.save(); ctx.translate(cx,cy); ctx.rotate(t*0.00015);
      const pts=[{x:0,y:0}];
      for(let i=0;i<6;i++){
        const a=(Math.PI/3)*i-Math.PI/2;
        pts.push({x:Math.cos(a)*R, y:Math.sin(a)*R});
        pts.push({x:Math.cos(a)*R*2, y:Math.sin(a)*R*2});
      }
      ctx.strokeStyle='rgba(108,92,231,0.10)'; ctx.lineWidth=.5;
      for(let i=0;i<pts.length;i++)
        for(let j=i+1;j<pts.length;j++){
          ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y);
          ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke();
        }
      ctx.strokeStyle='rgba(79,209,197,0.14)'; ctx.lineWidth=.6;
      pts.forEach(p=>{ctx.beginPath(); ctx.arc(p.x,p.y,R*0.55,0,Math.PI*2); ctx.stroke();});
      ctx.restore();
    }
    const sefirot=[
      {y:-1.00,x:0},{y:-0.72,x:-0.35},{y:-0.72,x:0.35},
      {y:-0.30,x:-0.42},{y:-0.30,x:0.42},{y:0.05,x:0},
      {y:0.42,x:-0.42},{y:0.42,x:0.42},{y:0.72,x:0},{y:1.05,x:0}
    ];
    const paths=[[0,1],[0,2],[0,5],[0,6],[0,7],[1,2],[1,3],[1,5],[2,4],[2,5],
      [3,4],[3,5],[3,6],[4,5],[4,7],[5,6],[5,7],[5,8],[6,8],[7,8],[8,9]];
    function drawTree(t){
      const S=Math.min(W,H)*0.16;
      const pulse=0.5+0.5*Math.sin(t*0.0015);
      ctx.save(); ctx.translate(cx,cy+20);
      ctx.strokeStyle='rgba(212,175,55,0.18)'; ctx.lineWidth=.8;
      paths.forEach(([a,b])=>{
        ctx.beginPath(); ctx.moveTo(sefirot[a].x*S, sefirot[a].y*S);
        ctx.lineTo(sefirot[b].x*S, sefirot[b].y*S); ctx.stroke();
      });
      sefirot.forEach((s,i)=>{
        const x=s.x*S, y=s.y*S, isK=i===0, r=isK?5+pulse*3:3;
        const g=ctx.createRadialGradient(x,y,0,x,y,r*6);
        if(isK){g.addColorStop(0,'rgba(247,224,138,0.55)');g.addColorStop(1,'rgba(247,224,138,0)');}
        else{g.addColorStop(0,'rgba(212,175,55,0.30)');g.addColorStop(1,'rgba(212,175,55,0)');}
        ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,r*6,0,Math.PI*2); ctx.fill();
        ctx.fillStyle=isK?'#f7e08a':'#d4af37';
        ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
      });
      ctx.restore();
    }
    function drawRing(t){
      const R=Math.min(W,H)*0.42;
      ctx.save(); ctx.translate(cx,cy); ctx.rotate(-t*0.0001);
      ctx.strokeStyle='rgba(212,175,55,0.10)'; ctx.lineWidth=.6;
      ctx.beginPath(); ctx.arc(0,0,R,0,Math.PI*2); ctx.stroke();
      for(let i=0;i<12;i++){
        const a=(Math.PI*2/12)*i;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a)*R, Math.sin(a)*R);
        ctx.lineTo(Math.cos(a)*(R+8), Math.sin(a)*(R+8));
        ctx.stroke();
      }
      ctx.restore();
    }
    function drawParticles(){
      particles.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0)p.x=W; if(p.x>W)p.x=0;
        if(p.y<0)p.y=H; if(p.y>H)p.y=0;
        ctx.fillStyle=`rgba(247,224,138,${p.a})`;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
      });
    }
    function loop(t){
      ctx.clearRect(0,0,W,H);
      drawRing(t); drawFlower(t); drawMetatron(t); drawTree(t); drawParticles();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  // ===== LETRAS HEBREAS FLOTANTES =====
  const cont = document.getElementById('floaters');
  if(cont){
    const letters = ['י','ה','ו','ה','א','ח','ד','כ','ת','ר','נ','פ','ש','מ','צ','ל'];
    for(let i=0;i<14;i++){
      const el = document.createElement('span');
      el.textContent = letters[Math.floor(Math.random()*letters.length)];
      el.style.left = Math.random()*100 + '%';
      el.style.fontSize = (28 + Math.random()*50) + 'px';
      el.style.animationDuration = (18 + Math.random()*22) + 's';
      el.style.animationDelay = (-Math.random()*30) + 's';
      el.style.opacity = (0.06 + Math.random()*0.16).toFixed(2);
      cont.appendChild(el);
    }
  }

  // ===== NAV: resaltar el punto activo =====
  const body = document.body;
  const currentPage = parseInt(body.dataset.page || '1', 10);
  const dots = document.querySelectorAll('.pager-dots .dot');
  dots.forEach((d, i) => {
    if(i === currentPage - 1) d.classList.add('active');
  });

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
})();