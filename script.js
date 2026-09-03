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

/* Certificate viewer */
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

/* Scroll progress */
const progress = document.getElementById('progress');
const updateProgress = () => {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

/* Reveal animations */
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

/* Smooth internal navigation */
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
    @media(max-width:900px){.site-header{top:14px!important;width:calc(100% - 28px)!important;height:62px!important;padding:0 12px!important}.brand{min-width:auto!important}.brand .nav-avatar{width:36px!important;height:36px!important}.nav-links{display:none!important}.site-header::after{content:"BS. / MENU";font:500 10px var(--mono);color:#777;letter-spacing:.12em}.hero{padding-top:110px!important}}
  `;
  document.head.appendChild(style);
  const brand = document.querySelector('.brand');
  if (brand) brand.innerHTML = '<span class="nav-avatar" aria-hidden="true"></span><span class="nav-name">Baratam Sriram</span>';
})();

/* ABOUT — interactive system dossier. This is intentionally the visual shock section. */
(() => {
  const about = document.querySelector('#about');
  if (!about) return;

  const style = document.createElement('style');
  style.textContent = `
    #about{position:relative!important;isolation:isolate!important;overflow:hidden!important;padding-top:150px!important;padding-bottom:170px!important;background:#050607!important}
    #about::before{content:"";position:absolute;inset:0;z-index:-5;pointer-events:none;background:linear-gradient(rgba(61,169,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(61,169,255,.055) 1px,transparent 1px);background-size:72px 72px;mask-image:linear-gradient(to bottom,transparent 0%,#000 18%,#000 80%,transparent 100%);opacity:.32;transform:perspective(700px) rotateX(58deg) scale(1.35) translateY(18%);transform-origin:center bottom}
    #about::after{content:"";position:absolute;z-index:-4;left:50%;top:8%;width:760px;height:760px;transform:translateX(-50%);border:1px solid rgba(61,169,255,.12);border-radius:50%;box-shadow:0 0 120px rgba(61,169,255,.045),inset 0 0 100px rgba(61,169,255,.025);pointer-events:none;animation:aboutSpin 24s linear infinite}
    #about .section-kicker{position:relative;z-index:5;color:#3da9ff!important;letter-spacing:.16em!important}
    #about .section-title-row{position:relative;min-height:360px;display:flex;align-items:flex-end!important;z-index:4}
    #about .section-title-row::before{content:"AI / SYSTEMS / ENGINEERING";position:absolute;left:0;top:15px;color:rgba(255,255,255,.035);font:700 clamp(70px,11vw,170px)/.82 var(--display);letter-spacing:-.075em;white-space:nowrap;pointer-events:none;transform:translateX(-2%)}
    #about .section-title-row::after{content:"SYS::BARATAM_SRIIRAM // ONLINE";position:absolute;right:0;top:35px;color:#313840;font:500 9px var(--mono);letter-spacing:.12em;writing-mode:vertical-rl;transform:rotate(180deg);pointer-events:none}
    #about .section-title-row h2{position:relative;margin:0!important;font-size:clamp(72px,10vw,152px)!important;line-height:.79!important;letter-spacing:-.07em!important;max-width:1100px!important;text-wrap:balance!important;transition:transform .5s cubic-bezier(.22,1,.36,1),text-shadow .5s ease!important}
    #about .section-title-row h2 em{display:inline-block!important;color:#3da9ff!important;font-style:normal!important;text-shadow:0 0 45px rgba(61,169,255,.08)!important;transition:transform .45s cubic-bezier(.22,1,.36,1),letter-spacing .45s ease!important}
    #about.about-active .section-title-row h2{transform:translateX(5px)!important;text-shadow:0 0 70px rgba(61,169,255,.12)!important}
    #about.about-active .section-title-row h2 em{transform:skewX(-5deg) translateX(10px)!important;letter-spacing:-.085em!important}
    .about-hud{position:absolute;right:0;bottom:18px;width:290px;padding:15px 16px;border:1px solid rgba(61,169,255,.2);background:rgba(5,8,11,.72);backdrop-filter:blur(10px);box-shadow:0 0 50px rgba(61,169,255,.06);font:500 9px/1.8 var(--mono);color:#69727c;z-index:6}
    .about-hud b{color:#3da9ff;font-weight:500}.about-hud .hud-line{display:flex;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.06);padding:3px 0}.about-hud .hud-line:last-child{border:0}.hud-live{display:inline-flex;align-items:center;gap:6px;color:#dce4ec}.hud-live i{width:6px;height:6px;border-radius:50%;background:#3da9ff;box-shadow:0 0 12px #3da9ff;animation:hudPulse 1.5s ease-in-out infinite}
    .about-scan{position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,transparent,#3da9ff,transparent);box-shadow:0 0 18px rgba(61,169,255,.9);z-index:7;opacity:.7;animation:aboutScan 5s ease-in-out infinite;pointer-events:none}
    .about-orbit{position:absolute;width:420px;height:420px;border:1px dashed rgba(61,169,255,.15);border-radius:50%;right:-130px;top:250px;z-index:-1;animation:aboutSpin 18s linear infinite}
    .about-orbit::before,.about-orbit::after{content:"";position:absolute;border-radius:50%;background:#3da9ff;box-shadow:0 0 18px #3da9ff}.about-orbit::before{width:5px;height:5px;left:12%;top:18%}.about-orbit::after{width:3px;height:3px;right:14%;bottom:16%}
    #about .about-grid{position:relative;z-index:5;margin-top:60px!important;grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr)!important;gap:100px!important}
    #about .big-copy{font-size:clamp(28px,3vw,45px)!important;line-height:1.12!important;letter-spacing:-.045em!important;position:relative!important}
    #about .big-copy::before{content:"01";position:absolute;left:-44px;top:6px;color:#3da9ff;font:500 9px var(--mono);letter-spacing:.1em}
    #about .body-copy{position:relative!important;padding-top:8px!important}
    #about .body-copy::before{content:"/ EXECUTION LOG";display:block;margin-bottom:22px;color:#3da9ff;font:500 9px var(--mono);letter-spacing:.15em}
    #about .body-copy p{transition:transform .45s cubic-bezier(.22,1,.36,1),color .3s ease!important}
    #about .body-copy p:hover{transform:translateX(8px)!important;color:#d9e0e7!important}
    .about-word{display:inline-block;transition:transform .45s cubic-bezier(.22,1,.36,1),color .3s ease;text-shadow:0 0 0 transparent}.about-word:hover{transform:translateY(-7px) rotate(-1deg);color:#fff}
    @keyframes aboutSpin{to{transform:translateX(-50%) rotate(360deg)}}
    @keyframes aboutScan{0%,100%{transform:translateY(0);opacity:0}15%{opacity:.7}50%{transform:translateY(520px);opacity:.35}85%{opacity:.7}}
    @keyframes hudPulse{0%,100%{opacity:.35;transform:scale(.8)}50%{opacity:1;transform:scale(1.2)}}
    @media(max-width:900px){#about{padding-top:110px!important;padding-bottom:110px!important}#about .section-title-row{min-height:300px!important}#about .section-title-row h2{font-size:clamp(60px,11vw,100px)!important}.about-hud{position:relative;right:auto;bottom:auto;margin-top:28px;width:min(100%,320px)}#about .about-grid{gap:55px!important;grid-template-columns:1fr!important}.about-orbit{right:-220px;top:250px}}
    @media(max-width:650px){#about::before{background-size:48px 48px}#about .section-title-row{min-height:270px!important}#about .section-title-row::before{font-size:74px;top:35px}#about .section-title-row::after{display:none}#about .section-title-row h2{font-size:54px!important;line-height:.86!important}.about-orbit{width:260px;height:260px;right:-150px}.about-hud{font-size:8px}#about .big-copy::before{display:none}}
  `;
  document.head.appendChild(style);

  const scan = document.createElement('div'); scan.className = 'about-scan'; about.prepend(scan);
  const orbit = document.createElement('div'); orbit.className = 'about-orbit'; about.appendChild(orbit);
  const hud = document.createElement('div');
  hud.className = 'about-hud';
  hud.innerHTML = `<div class="hud-line"><span>PROCESS</span><b>BARATAM.SRIRAM</b></div><div class="hud-line"><span>MODE</span><span class="hud-live"><i></i>BUILDING</span></div><div class="hud-line"><span>FOCUS</span><b>AI · SOFTWARE · DATA</b></div><div class="hud-line"><span>STACK</span><b>PY / JAVA / JS</b></div><div class="hud-line"><span>UPTIME</span><b id="aboutUptime">00:00:00</b></div>`;
  about.querySelector('.section-title-row')?.appendChild(hud);

  const title = about.querySelector('.section-title-row h2');
  if (title) {
    title.innerHTML = title.innerHTML.replace('Engineer at heart,','<span class="about-word">Engineer</span> <span class="about-word">at</span> <span class="about-word">heart,</span>');
  }

  const start = performance.now();
  const tick = () => {
    const sec = Math.floor((performance.now()-start)/1000);
    const h = String(Math.floor(sec/3600)).padStart(2,'0');
    const m = String(Math.floor((sec%3600)/60)).padStart(2,'0');
    const s = String(sec%60).padStart(2,'0');
    const el = document.getElementById('aboutUptime'); if (el) el.textContent = `${h}:${m}:${s}`;
    requestAnimationFrame(tick);
  }; tick();

  about.addEventListener('pointermove', e => {
    const r = about.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width;
    const y = (e.clientY-r.top)/r.height;
    about.style.setProperty('--about-x', `${x*100}%`);
    about.style.setProperty('--about-y', `${y*100}%`);
    about.style.setProperty('--about-rx', `${(y-.5)*-3}deg`);
    about.style.setProperty('--about-ry', `${(x-.5)*3}deg`);
  });
  about.addEventListener('pointerenter', () => about.classList.add('about-active'));
  about.addEventListener('pointerleave', () => about.classList.remove('about-active'));

  const cursorStyle = document.createElement('style');
  cursorStyle.textContent = `#about .section-title-row h2{transform:perspective(900px) rotateX(var(--about-rx,0deg)) rotateY(var(--about-ry,0deg)) translateX(0)}#about.about-active .section-title-row h2{transform:perspective(900px) rotateX(var(--about-rx,0deg)) rotateY(var(--about-ry,0deg)) translateX(5px)}`;
  document.head.appendChild(cursorStyle);
})();

/* Loading boot screen */
(() => {
  const loader = document.createElement('div');
  loader.className = 'boot-loader';
  loader.innerHTML = `<div class="boot-inner"><div class="boot-top"><span>SRIRAM.OS</span><span>INITIALIZING</span></div><div class="boot-name">BARATAM<br><em>SRIRAM.</em></div><div class="boot-log"><span>01</span> loading interface modules...<br><span>02</span> mounting AI systems...<br><span>03</span> establishing connection...</div><div class="boot-bar"><i></i></div><div class="boot-percent">0%</div></div>`;
  const style = document.createElement('style');
  style.textContent = `
    .boot-loader{position:fixed;inset:0;background:#050607;color:#f4f5f7;z-index:99999;display:grid;place-items:center;font-family:var(--mono);transition:opacity .65s ease,visibility .65s ease}.boot-loader.done{opacity:0;visibility:hidden;pointer-events:none}.boot-inner{width:min(760px,calc(100% - 48px))}.boot-top{display:flex;justify-content:space-between;color:#68717b;font:500 10px var(--mono);letter-spacing:.12em;margin-bottom:34px}.boot-name{font:700 clamp(58px,11vw,130px)/.78 var(--display);letter-spacing:-.075em}.boot-name em{font-style:normal;color:#3da9ff}.boot-log{margin-top:40px;color:#69727c;font:500 10px/2 var(--mono)}.boot-log span{color:#3da9ff;margin-right:10px}.boot-bar{height:1px;background:#22272d;margin-top:26px;overflow:hidden}.boot-bar i{display:block;width:0;height:100%;background:#3da9ff;box-shadow:0 0 15px #3da9ff}.boot-percent{margin-top:10px;color:#3da9ff;font:500 9px var(--mono);text-align:right}@media(prefers-reduced-motion:reduce){.boot-loader{display:none}}
  `;
  document.head.appendChild(style); document.body.prepend(loader);
  const bar = loader.querySelector('.boot-bar i'); const pct = loader.querySelector('.boot-percent');
  const start = performance.now();
  const run = now => { const p = Math.min(100,(now-start)/1500*100); bar.style.width=p+'%'; pct.textContent=Math.floor(p)+'%'; if(p<100) requestAnimationFrame(run); else setTimeout(()=>loader.classList.add('done'),220); };
  requestAnimationFrame(run);
})();

/* Load the visual polish layer after base behavior is ready. */
(() => {
  if (document.querySelector('script[data-polish]')) return;
  const s = document.createElement('script'); s.src = 'polish.js'; s.dataset.polish = 'true'; document.body.appendChild(s);
})();