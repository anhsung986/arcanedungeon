
document.addEventListener("DOMContentLoaded", () => {
  // Reveal on scroll
  const els = document.querySelectorAll("section,.hero");
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.opacity="1";
        e.target.style.transform="translateY(0)";
      }
    });
  },{threshold:0.15});

  els.forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="opacity .8s ease, transform .8s ease";
    io.observe(el);
  });

  // Back to top button
  const btn=document.createElement("button");
  btn.textContent="↑";
  Object.assign(btn.style,{
    position:"fixed",right:"20px",bottom:"20px",width:"48px",height:"48px",
    borderRadius:"50%",border:"none",cursor:"pointer",fontSize:"22px",
    display:"none",zIndex:"999"
  });
  document.body.appendChild(btn);

  window.addEventListener("scroll",()=>{
    btn.style.display=window.scrollY>300?"block":"none";
  });
  btn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

  // Magic particles
  for(let i=0;i<25;i++){
    const p=document.createElement("div");
    Object.assign(p.style,{
      position:"fixed",
      width:"4px",height:"4px",borderRadius:"50%",
      background:"rgba(255,255,255,.8)",
      left:Math.random()*100+"vw",
      top:Math.random()*100+"vh",
      pointerEvents:"none",
      opacity:".7",
      zIndex:"0",
      transition:"transform 8s linear"
    });
    document.body.appendChild(p);
    const move=()=>{
      p.style.transform=`translate(${(Math.random()-0.5)*120}px,${-150-Math.random()*200}px)`;
      setTimeout(()=>{
        p.style.transition="none";
        p.style.transform="translate(0,0)";
        p.style.left=Math.random()*100+"vw";
        p.style.top="100vh";
        requestAnimationFrame(()=>{
          p.style.transition="transform 8s linear";
          move();
        });
      },8000);
    };
    move();
  }
});
