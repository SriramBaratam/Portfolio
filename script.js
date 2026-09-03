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

/* Showcase hover: match the reference interaction — the row stays dark, and a large detail panel appears underneath the title only while hovered. */
(() => {
  const style = document.createElement('style');
  style.textContent = `
    .showcase-rows .showcase-row{
      position:relative;
      min-height:130px;
      height:130px;
      overflow:hidden;
      background:transparent;
      color:#f1f1f1;
      border-color:rgba(255,255,255,.12);
      padding-left:0;
      padding-right:0;
      transition:height .42s cubic-bezier(.22,1,.36,1),background .3s ease,color .3s ease,padding .3s ease;
    }
    .showcase-rows .showcase-row small,
    .showcase-rows .showcase-row i{
      opacity:0!important;
      visibility:hidden!important;
      transform:none!important;
      pointer-events:none;
    }
    .showcase-rows .showcase-row strong{
      position:relative;
      z-index:2;
      color:#f1f1f1;
      transition:color .3s ease,transform .35s ease;
    }
    .showcase-rows .showcase-row::after{
      content:"";
      position:absolute;
      left:0;
      right:0;
      bottom:0;
      height:0;
      display:flex;
      align-items:center;
      padding:0 18px;
      box-sizing:border-box;
      background:#ead07e;
      color:#080808;
      font:500 28px/1.2 var(--mono);
      letter-spacing:.03em;
      opacity:0;
      transition:height .42s cubic-bezier(.22,1,.36,1),opacity .2s ease;
      white-space:nowrap;
    }
    .showcase-rows .showcase-row:nth-child(1)::after{content:"Models  ·  RAG  ·  GenAI"}
    .showcase-rows .showcase-row:nth-child(2)::after{content:"Java  ·  Python  ·  APIs"}
    .showcase-rows .showcase-row:nth-child(3)::after{content:"React  ·  Node  ·  Web"}
    .showcase-rows .showcase-row:nth-child(4)::after{content:"SQL  ·  Pandas  ·  NumPy"}
    .showcase-rows .showcase-row:hover,
    .showcase-rows .showcase-row:focus-visible{
      height:285px;
      min-height:285px;
      background:transparent;
      color:#f1f1f1;
      padding-left:0;
      padding-right:0;
    }
    .showcase-rows .showcase-row:hover strong,
    .showcase-rows .showcase-row:focus-visible strong{
      color:#f1f1f1;
      transform:translateX(4px);
    }
    .showcase-rows .showcase-row:hover::after,
    .showcase-rows .showcase-row:focus-visible::after{
      height:154px;
      opacity:1;
    }
    @media(max-width:900px){
      .showcase-rows .showcase-row::after{font-size:20px}
    }
    @media(max-width:650px){
      .showcase-rows .showcase-row{height:105px;min-height:105px}
      .showcase-rows .showcase-row:hover,
      .showcase-rows .showcase-row:focus-visible{height:235px;min-height:235px}
      .showcase-rows .showcase-row:hover::after,
      .showcase-rows .showcase-row:focus-visible::after{height:120px;font-size:16px;white-space:normal}
    }
  `;
  document.head.appendChild(style);
})();
