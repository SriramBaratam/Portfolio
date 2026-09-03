const certificates = [
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

const grid = document.getElementById('certGrid');
if (grid) {
  certificates.forEach(([n,title,issuer,file]) => {
    const el = document.createElement('article');
    el.className = 'cert-card reveal';
    el.innerHTML = `<span class="cert-no">CERTIFICATE ${n}</span><div><h3>${title}</h3><p>${issuer}</p></div><span class="cert-view">OPEN CREDENTIAL ↗</span>`;
    el.addEventListener('click', () => openCertificate(title, issuer, file));
    grid.appendChild(el);
  });
}

function openCertificate(title, issuer, file) {
  const src = 'assets/certificates/' + encodeURIComponent(file);
  const modal = document.createElement('div');
  modal.className = 'modal open';
  modal.innerHTML = `<div class="modal-box"><div class="modal-head"><div><strong>${title}</strong><small>${issuer}</small></div><button aria-label="Close">×</button></div><div class="modal-content"><img src="${src}" alt="${title} certificate"><a class="btn btn-solid modal-open" href="${src}" target="_blank" rel="noreferrer">Open full certificate ↗</a></div></div>`;
  const close = () => modal.remove();
  modal.addEventListener('click', e => { if (e.target === modal || e.target.tagName === 'BUTTON') close(); });
  const esc = e => { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); } };
  document.addEventListener('keydown', esc);
  document.body.appendChild(modal);
}

const progress = document.getElementById('progress');
const updateProgress = () => {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section,.metrics,.project-card,.stack-line,.journey-row,.showcase-card,.contact,.cert-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', event => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* Floating pill navigation + profile photo */
(() => {
  const style = document.createElement('style');
  style.textContent = `
    .site-header{position:fixed!important;top:28px!important;left:50%!important;transform:translateX(-50%)!important;width:min(1120px,calc(100% - 64px))!important;height:74px!important;padding:0 18px!important;border:1px solid rgba(255,255,255,.16)!important;border-radius:999px!important;background:rgba(8,10,13,.78)!important;backdrop-filter:blur(18px)!important;-webkit-backdrop-filter:blur(18px)!important;box-shadow:0 12px 42px rgba(0,0,0,.45),0 0 35px rgba(61,169,255,.05)!important;z-index:1000!important}
    .brand{display:flex!important;align-items:center!important;gap:12px!important;min-width:250px!important;color:#f4f5f7!important;font:600 15px var(--mono)!important;letter-spacing:.04em!important}
    .brand::before{display:none!important}
    .brand .nav-avatar{display:block!important;width:42px!important;height:42px!important;border-radius:9px!important;background:url('assets/profile.jpg') center/cover no-repeat!important;border:1px solid rgba(61,169,255,.5)!important;box-shadow:0 0 25px rgba(61,169,255,.16)!important;flex:0 0 auto!important}
    .nav-links{gap:34px!important;align-items:center!important}
    .nav-links a{font-size:11px!important;letter-spacing:.09em!important;text-transform:uppercase!important;color:#858b95!important;transition:color .25s ease,transform .25s ease!important}
    .nav-links a:hover{color:#fff!important;transform:translateY(-1px)!important}
    .header-cta{display:none!important}
    .hero{padding-top:145px!important;min-height:100vh!important}
    .hero-terminal{position:relative!important}
    .hero-photo{position:absolute!important;right:2%!important;top:4%!important;width:142px!important;height:142px!important;padding:5px!important;border:1px solid rgba(61,169,255,.5)!important;border-radius:18px!important;background:#070b10!important;box-shadow:0 0 50px rgba(61,169,255,.16)!important;z-index:20!important;transform:rotate(2deg)!important;transition:transform .35s ease,box-shadow .35s ease!important}
    .hero-photo img{width:100%!important;height:100%!important;object-fit:cover!important;border-radius:13px!important;display:block!important}
    .hero-terminal:hover .hero-photo{transform:rotate(0) translateY(-5px)!important;box-shadow:0 0 70px rgba(61,169,255,.24)!important}
    @media(max-width:900px){.site-header{top:14px!important;width:calc(100% - 28px)!important;height:62px!important;padding:0 12px!important}.brand{min-width:auto!important}.brand .nav-avatar{width:36px!important;height:36px!important}.nav-links{display:none!important}.site-header::after{content:"BS. / MENU";font:500 10px var(--mono);color:#777;letter-spacing:.12em}.hero{padding-top:110px!important}.hero-photo{width:105px!important;height:105px!important;right:3%!important;top:1%!important}}
    @media(max-width:650px){.site-header{top:10px!important}.hero-photo{position:relative!important;right:auto!important;top:auto!important;margin:0 auto 18px!important;width:120px!important;height:120px!important;transform:none!important}.hero-terminal{min-height:430px!important}.hero-terminal:hover .hero-photo{transform:none!important}}
  `;
  document.head.appendChild(style);
  const brand = document.querySelector('.brand');
  if (brand) brand.innerHTML = '<span class="nav-avatar" aria-hidden="true"></span><span class="nav-name">Baratam Sriram</span>';

  const terminal = document.querySelector('.hero-terminal');
  if (terminal && !terminal.querySelector('.hero-photo')) {
    const photo = document.createElement('div');
    photo.className = 'hero-photo';
    photo.innerHTML = '<img src="assets/profile.jpg" alt="Baratam Sriram">';
    terminal.prepend(photo);
  }
})();

/* Boot screen */
(() => {
  const loader = document.createElement('div');
  loader.className = 'boot-loader';
  loader.innerHTML = `<div class="boot-inner"><div class="boot-top"><span>SRIRAM.OS</span><span>INITIALIZING</span></div><div class="boot-name">BARATAM<br><em>SRIRAM.</em></div><div class="boot-log"><span>01</span> loading interface modules...<br><span>02</span> mounting AI systems...<br><span>03</span> establishing connection...</div><div class="boot-bar"><i></i></div><div class="boot-percent">0%</div></div>`;
  const style = document.createElement('style');
  style.textContent = `.boot-loader{position:fixed;inset:0;background:#050607;color:#f4f5f7;z-index:99999;display:grid;place-items:center;font-family:var(--mono);transition:opacity .65s ease,visibility .65s ease}.boot-loader.done{opacity:0;visibility:hidden;pointer-events:none}.boot-inner{width:min(760px,calc(100% - 48px))}.boot-top{display:flex;justify-content:space-between;color:#68717b;font:500 10px var(--mono);letter-spacing:.12em;margin-bottom:34px}.boot-name{font:700 clamp(58px,11vw,130px)/.78 var(--display);letter-spacing:-.075em}.boot-name em{font-style:normal;color:#3da9ff}.boot-log{margin-top:40px;color:#69727c;font:500 10px/2 var(--mono)}.boot-log span{color:#3da9ff;margin-right:10px}.boot-bar{height:1px;background:#22272d;margin-top:26px;overflow:hidden}.boot-bar i{display:block;width:0;height:100%;background:#3da9ff;box-shadow:0 0 15px #3da9ff}.boot-percent{margin-top:10px;color:#3da9ff;font:500 9px var(--mono);text-align:right}@media(prefers-reduced-motion:reduce){.boot-loader{display:none}}`;
  document.head.appendChild(style); document.body.prepend(loader);
  const bar = loader.querySelector('.boot-bar i'); const pct = loader.querySelector('.boot-percent');
  const start = performance.now();
  const run = now => { const p = Math.min(100,(now-start)/1500*100); bar.style.width=p+'%'; pct.textContent=Math.floor(p)+'%'; if(p<100) requestAnimationFrame(run); else setTimeout(()=>loader.classList.add('done'),220); };
  requestAnimationFrame(run);
})();