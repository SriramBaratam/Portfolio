const certificates=[
 ['01','PHIL102: Introduction to Critical Thinking and Logic','Saylor University','WhatsApp Image 2026-09-02 at 00.31.49 (1).jpeg'],
 ['02','Machine Learning for Data Science Projects','IBM SkillsBuild','WhatsApp Image 2026-09-02 at 00.31.51 (1).jpeg'],
 ['03','Networking Devices and Initial Configuration','Cisco Networking Academy','WhatsApp Image 2026-09-02 at 00.31.50.jpeg'],
 ['04','Certificate of Appreciation','CodeTech IT Solutions','WhatsApp Image 2026-09-02 at 00.31.46.jpeg'],
 ['05','Critical Thinking Skills','Mind Luster','WhatsApp Image 2026-09-02 at 00.31.49 (3).jpeg'],
 ['06','Adobe University Hackathon — Participation','Adobe / Unstop','WhatsApp Image 2026-09-02 at 00.31.50 (1).jpeg'],
 ['07','Networking Basics','Cisco Networking Academy','WhatsApp Image 2026-09-02 at 00.31.49 (2).jpeg'],
 ['08','Data Science & Analytics','L&T EduTech / L&T Foundation','WhatsApp Image 2026-09-02 at 00.31.47 (1).jpeg'],
 ['09','Certificate of Participation','THREX','WhatsApp Image 2026-09-02 at 00.31.48 (2).jpeg'],
 ['10','Software Engineering Job Simulation','JPMorgan Chase & Co. / Forage','WhatsApp Image 2026-09-02 at 00.31.47.jpeg'],
 ['11','Career Essentials in Generative AI','Microsoft & LinkedIn','WhatsApp Image 2026-09-02 at 00.31.48 (1).jpeg'],
 ['12','Generative AI Mastermind','Outskill','WhatsApp Image 2026-09-02 at 00.31.49 (3).jpeg'],
 ['13','Data Base Management System','NPTEL / IIT Kharagpur','WhatsApp Image 2026-09-02 at 00.33.17.jpeg'],
 ['14','Python Essentials 1 — Statement of Achievement','Cisco Networking Academy','WhatsApp Image 2026-09-02 at 00.31.48.jpeg'],
 ['15','Technology Job Simulation','Deloitte / Forage','WhatsApp Image 2026-09-02 at 00.31.51.jpeg']
];

const grid=document.getElementById('certGrid');
certificates.forEach(([n,title,issuer,file])=>{
 const el=document.createElement('article');
 el.className='cert-card reveal';
 el.innerHTML=`<span class="cert-no">CERTIFICATE ${n}</span><div><h3>${title}</h3><p>${issuer}</p></div><span class="cert-view">OPEN CREDENTIAL ↗</span>`;
 el.onclick=()=>openCertificate(title,issuer,file);
 grid.appendChild(el);
});

function openCertificate(title,issuer,file){
 const src='assets/certificates/'+encodeURIComponent(file);
 const modal=document.createElement('div');
 modal.className='modal open';
 modal.innerHTML=`<div class="modal-box"><div class="modal-head"><div><strong>${title}</strong><small>${issuer}</small></div><button aria-label="Close">×</button></div><div class="modal-content"><img src="${src}" alt="${title} certificate"><a class="btn btn-solid modal-open" href="${src}" target="_blank" rel="noreferrer">Open full certificate ↗</a></div></div>`;
 const close=()=>modal.remove();
 modal.onclick=e=>{if(e.target===modal||e.target.tagName==='BUTTON')close()};
 document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc)}});
 document.body.appendChild(modal);
}

const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{
 const max=document.documentElement.scrollHeight-window.innerHeight;
 progress.style.width=(max>0?(window.scrollY/max)*100:0)+'%';
},{passive:true});

const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}});
},{threshold:.12});

document.querySelectorAll('.section,.metrics,.project-card,.stack-line,.journey-row,.showcase-card,.contact').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
document.querySelectorAll('.cert-card').forEach(el=>observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'})));

/* Sree-Aditya-inspired floating navigation + profile treatment */
(() => {
  const style = document.createElement('style');
  style.textContent = `
    .site-header{position:fixed;top:28px;left:50%;transform:translateX(-50%);width:min(1120px,calc(100% - 64px));height:74px;padding:0 18px;border:1px solid rgba(255,255,255,.16);border-radius:999px;background:rgba(12,12,13,.78);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:0 10px 40px rgba(0,0,0,.45),0 0 0 1px rgba(61,169,255,.04);z-index:100}
    .site-header::before{content:"";position:absolute;inset:-1px;border-radius:inherit;padding:1px;background:linear-gradient(90deg,rgba(61,169,255,.08),rgba(255,255,255,.2),rgba(61,169,255,.08));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}
    .brand{display:flex;align-items:center;gap:12px;min-width:250px;font:600 17px var(--mono);letter-spacing:.03em;color:#e8e8e8}
    .brand::before{content:"";width:42px;height:42px;border-radius:9px;background:linear-gradient(135deg,#0b1622,#123a5a);border:1px solid rgba(61,169,255,.35);box-shadow:0 0 24px rgba(61,169,255,.14)}
    .brand span{display:none}
    .nav-links{gap:36px;align-items:center}
    .nav-links a{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#85858b;transition:color .25s,transform .25s}
    .nav-links a:hover{color:#fff;transform:translateY(-1px)}
    .header-cta{display:none}
    .hero{padding-top:145px;min-height:100vh}
    .hero-terminal{position:relative}
    .hero-photo{position:absolute;right:2%;top:4%;width:142px;height:142px;padding:5px;border:1px solid rgba(61,169,255,.5);border-radius:18px;background:#070b10;box-shadow:0 0 50px rgba(61,169,255,.16);z-index:5;transform:rotate(2deg);transition:transform .35s ease,box-shadow .35s ease}
    .hero-photo img{width:100%;height:100%;object-fit:cover;border-radius:13px;display:block;filter:saturate(.95) contrast(1.02)}
    .hero-terminal:hover .hero-photo{transform:rotate(0) translateY(-5px);box-shadow:0 0 70px rgba(61,169,255,.24)}
    @media(max-width:900px){.site-header{top:14px;width:calc(100% - 28px);height:62px;padding:0 12px}.brand{min-width:auto}.brand::before{width:36px;height:36px}.nav-links{display:none}.site-header::after{content:"BS. / MENU";font:500 10px var(--mono);color:#777;letter-spacing:.12em}.hero{padding-top:110px}.hero-photo{width:105px;height:105px;right:3%;top:1%}}
    @media(max-width:650px){.site-header{top:10px}.hero-photo{position:relative;right:auto;top:auto;margin:0 auto 18px;width:120px;height:120px;transform:none}.hero-terminal{min-height:430px}.hero-terminal:hover .hero-photo{transform:none}.terminal-window{width:100%}}
  `;
  document.head.appendChild(style);

  const brand = document.querySelector('.brand');
  if (brand) {
    brand.innerHTML = '<span class="nav-avatar"></span><span class="nav-name">Baratam Sriram</span>';
    const avatar = brand.querySelector('.nav-avatar');
    avatar.style.cssText = "display:block;width:42px;height:42px;border-radius:9px;background:url('assets/profile.jpg') center/cover no-repeat;border:1px solid rgba(61,169,255,.35);box-shadow:0 0 22px rgba(61,169,255,.16);flex:0 0 auto";
  }

  const terminal = document.querySelector('.hero-terminal');
  if (terminal && !terminal.querySelector('.hero-photo')) {
    const photo = document.createElement('div');
    photo.className = 'hero-photo';
    photo.innerHTML = '<img src="assets/profile.jpg" alt="Baratam Sriram">';
    terminal.prepend(photo);
  }
})();

/* Showcase interaction — the hover replaces the side micro-copy with a theme-blue information panel. */
(() => {
  const style = document.createElement('style');
  style.textContent = `
    .showcase-rows{display:block!important}
    .showcase-rows .showcase-row{
      position:relative!important;display:flex!important;align-items:center!important;box-sizing:border-box!important;width:100%!important;height:148px!important;min-height:148px!important;overflow:hidden!important;padding:0 28px 0 0!important;margin:0!important;border-top:1px solid rgba(255,255,255,.12)!important;border-bottom:0!important;background:transparent!important;color:#f4f5f7!important;outline:none!important;isolation:isolate!important;transition:background .35s ease!important;
    }
    .showcase-rows .showcase-row:last-child{border-bottom:1px solid rgba(255,255,255,.12)!important}
    .showcase-rows .showcase-row::before{display:none!important;content:none!important}
    .showcase-rows .showcase-row-number{position:relative!important;flex:0 0 110px!important;color:#3da9ff!important;font:500 11px var(--mono)!important;z-index:4!important}
    .showcase-rows .showcase-row strong{position:relative!important;left:auto!important;top:auto!important;transform:none!important;flex:1!important;margin:0!important;color:#f4f5f7!important;font-family:var(--display)!important;font-size:clamp(54px,5vw,82px)!important;line-height:.95!important;letter-spacing:-.055em!important;z-index:4!important;transition:color .28s ease,transform .35s cubic-bezier(.22,1,.36,1)!important}
    .showcase-rows .showcase-row small{display:block!important;flex:0 0 250px!important;text-align:right!important;color:#737983!important;font:500 12px var(--mono)!important;letter-spacing:.01em!important;z-index:4!important;transition:opacity .2s ease,transform .3s ease!important}
    .showcase-rows .showcase-row i{display:block!important;flex:0 0 24px!important;margin-left:18px!important;text-align:right!important;color:#3da9ff!important;font:500 18px var(--mono)!important;font-style:normal!important;z-index:4!important;transition:transform .3s ease,color .25s ease!important}
    .showcase-rows .showcase-row::after{content:""!important;position:absolute!important;inset:0!important;background:#3da9ff!important;transform:scaleX(0)!important;transform-origin:right center!important;z-index:1!important;transition:transform .45s cubic-bezier(.22,1,.36,1)!important}
    .showcase-rows .showcase-row:hover::after,.showcase-rows .showcase-row:focus-visible::after{transform:scaleX(1)!important}
    .showcase-rows .showcase-row:hover strong,.showcase-rows .showcase-row:focus-visible strong{color:#050505!important;transform:translateX(8px)!important}
    .showcase-rows .showcase-row:hover small,.showcase-rows .showcase-row:focus-visible small{color:#050505!important;opacity:1!important}
    .showcase-rows .showcase-row:hover i,.showcase-rows .showcase-row:focus-visible i{color:#050505!important;transform:translate(4px,-2px)!important}
    .showcase-rows .showcase-row:hover .showcase-row-number,.showcase-rows .showcase-row:focus-visible .showcase-row-number{color:#050505!important}
    @media(max-width:900px){.showcase-rows .showcase-row{height:126px!important;min-height:126px!important;padding-right:18px!important}.showcase-rows .showcase-row-number{flex-basis:72px!important}.showcase-rows .showcase-row strong{font-size:clamp(44px,8vw,66px)!important}.showcase-rows .showcase-row small{flex-basis:175px!important;font-size:10px!important}.showcase-rows .showcase-row i{flex-basis:18px!important;margin-left:8px!important}}
    @media(max-width:650px){.showcase-rows .showcase-row{height:108px!important;min-height:108px!important;padding-right:8px!important}.showcase-rows .showcase-row-number{flex-basis:48px!important}.showcase-rows .showcase-row strong{font-size:42px!important}.showcase-rows .showcase-row small{display:none!important}.showcase-rows .showcase-row i{flex-basis:18px!important;margin-left:5px!important}}
  `;
  document.head.appendChild(style);
})();

/* Premium first-load screen — inspired by the supplied reference, but built for this portfolio's blue/black identity. */
(() => {
  const style = document.createElement('style');
  style.textContent = `
    #boot-screen{position:fixed;inset:0;background:#05070a;color:#f2f4f7;z-index:9999;display:flex;align-items:center;justify-content:center;overflow:hidden;transition:opacity .65s ease,visibility .65s ease}
    #boot-screen.is-done{opacity:0;visibility:hidden;pointer-events:none}
    #boot-screen::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 42%,rgba(61,169,255,.10),transparent 38%),linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:auto,42px 42px,42px 42px;mask-image:linear-gradient(to bottom,transparent,black 18%,black 82%,transparent)}
    .boot-frame{position:relative;width:min(760px,calc(100% - 44px));padding:34px 34px 30px;border:1px solid rgba(61,169,255,.22);background:rgba(6,9,13,.82);box-shadow:0 0 90px rgba(61,169,255,.08),inset 0 0 50px rgba(255,255,255,.015);backdrop-filter:blur(12px)}
    .boot-top{display:flex;justify-content:space-between;align-items:center;font:500 11px var(--mono);letter-spacing:.14em;color:#707a86;text-transform:uppercase}
    .boot-live{display:flex;align-items:center;gap:8px;color:#3da9ff}.boot-live i{width:6px;height:6px;border-radius:50%;background:#3da9ff;box-shadow:0 0 14px #3da9ff}
    .boot-title{margin:70px 0 10px;font:700 clamp(58px,10vw,112px)/.86 var(--display);letter-spacing:-.07em;text-transform:uppercase}
    .boot-title span{color:#3da9ff}
    .boot-sub{margin:0 0 42px;font:500 13px var(--mono);color:#7f8791;letter-spacing:.04em}
    .boot-console{border-top:1px solid rgba(255,255,255,.10);border-bottom:1px solid rgba(255,255,255,.10);padding:16px 0;font:500 12px var(--mono);color:#a5adb8}
    .boot-console b{color:#3da9ff;font-weight:500}.boot-console .line{display:flex;gap:10px;margin:6px 0}.boot-console .ok{margin-left:auto;color:#59636f}
    .boot-progress{height:2px;margin-top:28px;background:rgba(255,255,255,.08);overflow:hidden}.boot-progress span{display:block;width:0;height:100%;background:#3da9ff;box-shadow:0 0 18px rgba(61,169,255,.8);animation:bootFill 1.55s cubic-bezier(.22,1,.36,1) forwards}
    .boot-footer{display:flex;justify-content:space-between;margin-top:12px;font:500 10px var(--mono);letter-spacing:.08em;color:#505966;text-transform:uppercase}.boot-footer strong{color:#dce2e8;font-weight:500}
    @keyframes bootFill{to{width:100%}}
    @media(max-width:650px){.boot-frame{padding:24px 20px}.boot-title{margin-top:52px}.boot-console{font-size:10px}.boot-footer{font-size:8px}}
  `;
  document.head.appendChild(style);

  const boot=document.createElement('div');
  boot.id='boot-screen';
  boot.innerHTML=`<div class="boot-frame"><div class="boot-top"><span>BARATAM Sriram // PORTFOLIO</span><span class="boot-live"><i></i> SYSTEM ONLINE</span></div><h1 class="boot-title">BOOT<span>.</span></h1><p class="boot-sub">AI/ML ENGINEERING · SOFTWARE · FULL STACK · DATA</p><div class="boot-console"><div class="line"><b>01</b><span>initializing interface</span><span class="ok">done</span></div><div class="line"><b>02</b><span>loading project systems</span><span class="ok">done</span></div><div class="line"><b>03</b><span>connecting ideas → execution</span><span class="ok">ready</span></div></div><div class="boot-progress"><span></span></div><div class="boot-footer"><span>status <strong>ready to build</strong></span><span>v2026.09</span></div></div>`;
  document.body.appendChild(boot);
  const finish=()=>setTimeout(()=>boot.classList.add('is-done'),1750);
  if(document.readyState==='complete') finish(); else window.addEventListener('load',finish,{once:true});
})();
