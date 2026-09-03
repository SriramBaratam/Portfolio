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
    .hero-terminal{position:relative!important}
    .hero-photo{position:absolute!important;right:2%!important;top:4%!important;width:142px!important;height:142px!important;padding:5px!important;border:1px solid rgba(61,169,255,.5)!important;border-radius:18px!important;background:#070b10!important;box-shadow:0 0 50px rgba(61,169,255,.16)!important;z-index:5!important;transform:rotate(2deg)!important;transition:transform .35s ease,box-shadow .35s ease!important}
    .hero-photo img{width:100%!important;height:100%!important;object-fit:cover!important;border-radius:13px!important;display:block!important}
    .hero-terminal:hover .hero-photo{transform:rotate(0) translateY(-5px)!important;box-shadow:0 0 70px rgba(61,169,255,.24)!important}
    @media(max-width:900px){.site-header{top:14px!important;width:calc(100% - 28px)!important;height:62px!important;padding:0 12px!important}.brand{min-width:auto!important}.brand .nav-avatar{width:36px!important;height:36px!important}.nav-links{display:none!important}.site-header::after{content:"BS. / MENU";font:500 10px var(--mono);color:#777;letter-spacing:.12em}.hero{padding-top:110px!important}.hero-photo{width:105px!important;height:105px!important;right:3%!important;top:1%!important}}
    @media(max-width:650px){.site-header{top:10px!important}.hero-photo{position:relative!important;right:auto!important;top:auto!important;margin:0 auto 18px!important;width:120px!important;height:120px!important;transform:none!important}.hero-terminal{min-height:430px!important}.hero-terminal:hover .hero-photo{transform:none!important}}
  `;
  document.head.appendChild(style);

  const brand = document.querySelector('.brand');
  if (brand) {
    brand.innerHTML = '<span class="nav-avatar" aria-hidden="true"></span><span class="nav-name">Baratam Sriram</span>';
  }

  const terminal = document.querySelector('.hero-terminal');
  if (terminal && !terminal.querySelector('.hero-photo')) {
    const photo = document.createElement('div');
    photo.className = 'hero-photo';
    photo.innerHTML = '<img src="assets/profile.jpg" alt="Baratam Sriram">';
    terminal.prepend(photo);
  }
})();

/* Showcase — true in-place text replacement on hover.
   The descriptor does NOT drop below the title. It becomes the title itself. */
(() => {
  const style = document.createElement('style');
  style.textContent = `
    #capabilities .showcase-rows .showcase-row{position:relative!important;display:grid!important;grid-template-columns:110px minmax(0,1fr) 34px!important;align-items:center!important;height:148px!important;min-height:148px!important;width:100%!important;box-sizing:border-box!important;padding:0 22px 0 0!important;margin:0!important;overflow:hidden!important;background:transparent!important;isolation:isolate!important;cursor:pointer!important;border-top:1px solid rgba(255,255,255,.12)!important}
    #capabilities .showcase-rows .showcase-row:last-child{border-bottom:1px solid rgba(255,255,255,.12)!important}
    #capabilities .showcase-rows .showcase-row::before{content:""!important;position:absolute!important;inset:0!important;background:#3da9ff!important;transform:scaleX(0)!important;transform-origin:left center!important;z-index:0!important;transition:transform .55s cubic-bezier(.22,1,.36,1)!important}
    #capabilities .showcase-rows .showcase-row > *{position:relative!important;z-index:2!important}
    #capabilities .showcase-rows .showcase-row-number{grid-column:1!important;grid-row:1!important;color:#3da9ff!important;font:500 11px var(--mono)!important;transition:color .25s ease!important}
    #capabilities .showcase-rows .showcase-row strong{grid-column:2!important;grid-row:1!important;display:block!important;margin:0!important;padding:0!important;opacity:1!important;visibility:visible!important;color:#f4f5f7!important;font-family:var(--display)!important;font-size:clamp(54px,5vw,82px)!important;font-weight:700!important;line-height:.9!important;letter-spacing:-.055em!important;white-space:nowrap!important;transform:none!important;transition:color .3s ease,transform .45s cubic-bezier(.22,1,.36,1)!important}
    #capabilities .showcase-rows .showcase-row small{display:none!important}
    #capabilities .showcase-rows .showcase-row i{grid-column:3!important;grid-row:1!important;justify-self:end!important;color:#3da9ff!important;font:500 18px var(--mono)!important;font-style:normal!important;transition:color .25s ease,transform .35s ease!important}
    #capabilities .showcase-rows .showcase-row:hover::before,#capabilities .showcase-rows .showcase-row:focus-visible::before{transform:scaleX(1)!important}
    #capabilities .showcase-rows .showcase-row.is-hovered strong{color:#050505!important;transform:translateX(8px)!important}
    #capabilities .showcase-rows .showcase-row:hover .showcase-row-number,#capabilities .showcase-rows .showcase-row:hover i,#capabilities .showcase-rows .showcase-row:focus-visible .showcase-row-number,#capabilities .showcase-rows .showcase-row:focus-visible i{color:#050505!important}
    #capabilities .showcase-rows .showcase-row:hover i,#capabilities .showcase-rows .showcase-row:focus-visible i{transform:translate(4px,-2px)!important}
    @media(max-width:900px){#capabilities .showcase-rows .showcase-row{height:126px!important;min-height:126px!important;grid-template-columns:72px minmax(0,1fr) 22px!important;padding-right:16px!important}#capabilities .showcase-rows .showcase-row strong{font-size:clamp(44px,8vw,66px)!important}}
    @media(max-width:650px){#capabilities .showcase-rows .showcase-row{height:108px!important;min-height:108px!important;grid-template-columns:48px minmax(0,1fr) 18px!important;padding-right:8px!important}#capabilities .showcase-rows .showcase-row strong{font-size:42px!important}}
  `;
  document.head.appendChild(style);

  document.querySelectorAll('#capabilities .showcase-row').forEach(row => {
    const title = row.querySelector('strong');
    const descriptor = row.querySelector('small');
    if (!title || !descriptor) return;

    const original = title.textContent.trim();
    const replacement = descriptor.textContent.trim();
    let active = false;

    const enter = () => {
      if (active) return;
      active = true;
      title.textContent = replacement;
      row.classList.add('is-hovered');
    };

    const leave = () => {
      active = false;
      title.textContent = original;
      row.classList.remove('is-hovered');
    };

    row.addEventListener('mouseenter', enter);
    row.addEventListener('mouseleave', leave);
    row.addEventListener('focusin', enter);
    row.addEventListener('focusout', leave);
  });
})();

/* Learning section polish */
(() => {
  const style = document.createElement('style');
  style.textContent = `
    #learning .section-title-row h2{transition:transform .45s cubic-bezier(.22,1,.36,1),text-shadow .45s ease!important}
    #learning:hover .section-title-row h2{transform:translateX(5px)!important;text-shadow:0 0 36px rgba(61,169,255,.12)!important}
    #learning .section-title-row h2 em{transition:color .3s ease!important}
    #learning:hover .section-title-row h2 em{color:#3da9ff!important}
    #learning .journey-table{position:relative!important}
    #learning .journey-table::before{content:"";position:absolute;left:0;top:0;width:1px;height:0;background:#3da9ff;box-shadow:0 0 18px rgba(61,169,255,.8);z-index:10;transition:height 1.1s cubic-bezier(.22,1,.36,1);pointer-events:none}
    #learning.visible .journey-table::before{height:100%}
    #learning .journey-row{position:relative!important;overflow:hidden!important;transition:transform .4s cubic-bezier(.22,1,.36,1),background .35s ease,box-shadow .35s ease!important}
    #learning .journey-row::after{content:"";position:absolute;left:0;top:0;bottom:0;width:2px;background:#3da9ff;transform:scaleY(0);transform-origin:bottom;box-shadow:0 0 18px rgba(61,169,255,.75);transition:transform .4s cubic-bezier(.22,1,.36,1);pointer-events:none}
    #learning .journey-row:hover{transform:translateX(8px)!important;background:linear-gradient(90deg,rgba(61,169,255,.075),transparent 58%)!important;box-shadow:inset 0 0 44px rgba(61,169,255,.025)!important}
    #learning .journey-row:hover::after{transform:scaleY(1);transform-origin:top}
    #learning .journey-row h3,#learning .journey-row p,#learning .journey-row>b{transition:color .25s ease,transform .35s cubic-bezier(.22,1,.36,1)!important}
    #learning .journey-row:hover h3{color:#fff!important;transform:translateX(5px)!important}
    #learning .journey-row:hover p{color:#b8c0ca!important;transform:translateX(5px)!important}
    #learning .journey-row:hover>b{color:#3da9ff!important;transform:translateX(-4px)!important}
  `;
  document.head.appendChild(style);
})();

/* Premium loading screen */
(() => {
  const style = document.createElement('style');
  style.textContent = `
    #boot-screen{position:fixed;inset:0;background:#05070a;color:#f2f4f7;z-index:9999;display:flex;align-items:center;justify-content:center;overflow:hidden;transition:opacity .7s ease,visibility .7s ease}
    #boot-screen.is-done{opacity:0;visibility:hidden;pointer-events:none}
    #boot-screen::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 42%,rgba(61,169,255,.10),transparent 38%),linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:auto,42px 42px,42px 42px;mask-image:linear-gradient(to bottom,transparent,black 18%,black 82%,transparent)}
    .boot-frame{position:relative;width:min(760px,calc(100% - 44px));padding:34px 34px 30px;border:1px solid rgba(61,169,255,.22);background:rgba(6,9,13,.82);box-shadow:0 0 90px rgba(61,169,255,.08),inset 0 0 50px rgba(255,255,255,.015);backdrop-filter:blur(12px)}
    .boot-top{display:flex;justify-content:space-between;align-items:center;font:500 11px var(--mono);letter-spacing:.14em;color:#707a86;text-transform:uppercase}
    .boot-live{display:flex;align-items:center;gap:8px;color:#3da9ff}.boot-live i{width:6px;height:6px;border-radius:50%;background:#3da9ff;box-shadow:0 0 14px #3da9ff}
    .boot-title{margin:70px 0 10px;font:700 clamp(58px,10vw,112px)/.86 var(--display);letter-spacing:-.07em;text-transform:uppercase}.boot-title span{color:#3da9ff}
    .boot-sub{margin:0 0 42px;font:500 13px var(--mono);color:#7f8791;letter-spacing:.04em}
    .boot-console{border-top:1px solid rgba(255,255,255,.10);border-bottom:1px solid rgba(255,255,255,.10);padding:16px 0;font:500 12px var(--mono);color:#a5adb8}.boot-console b{color:#3da9ff;font-weight:500}.boot-console .line{display:flex;gap:10px;margin:6px 0}.boot-console .ok{margin-left:auto;color:#59636f}
    .boot-progress{height:2px;margin-top:28px;background:rgba(255,255,255,.08);overflow:hidden}.boot-progress span{display:block;width:0;height:100%;background:#3da9ff;box-shadow:0 0 18px rgba(61,169,255,.8);animation:bootFill 1.65s cubic-bezier(.22,1,.36,1) forwards}.boot-footer{display:flex;justify-content:space-between;margin-top:12px;font:500 10px var(--mono);letter-spacing:.08em;color:#505966;text-transform:uppercase}.boot-footer strong{color:#dce2e8;font-weight:500}@keyframes bootFill{to{width:100%}}
    @media(max-width:650px){.boot-frame{padding:24px 20px}.boot-title{margin-top:52px}.boot-console{font-size:10px}.boot-footer{font-size:8px}}
  `;
  document.head.appendChild(style);

  const boot = document.createElement('div');
  boot.id = 'boot-screen';
  boot.innerHTML = `<div class="boot-frame"><div class="boot-top"><span>BARATAM SRIRAM // PORTFOLIO</span><span class="boot-live"><i></i> SYSTEM ONLINE</span></div><h1 class="boot-title">BOOT<span>.</span></h1><p class="boot-sub">AI/ML ENGINEERING · SOFTWARE · FULL STACK · DATA</p><div class="boot-console"><div class="line"><b>01</b><span>initializing interface</span><span class="ok">done</span></div><div class="line"><b>02</b><span>loading project systems</span><span class="ok">done</span></div><div class="line"><b>03</b><span>connecting ideas → execution</span><span class="ok">ready</span></div></div><div class="boot-progress"><span></span></div><div class="boot-footer"><span>status <strong>ready to build</strong></span><span>v2026.09</span></div></div>`;
  document.body.appendChild(boot);

  const finish = () => setTimeout(() => boot.classList.add('is-done'), 1900);
  if (document.readyState === 'complete') finish();
  else window.addEventListener('load', finish, { once: true });
})();

/* Contact form — direct delivery to Sriram's inbox */
(() => {
  const attach = () => {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('contactStatus');
    const button = form?.querySelector('.contact-submit');
    if (!form || form.dataset.mailConnected) return;
    form.dataset.mailConnected = 'true';

    form.addEventListener('submit', async event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const company = String(data.get('company') || '').trim();
      data.append('_subject', `Portfolio enquiry — ${company || name || 'New message'}`);
      data.append('_captcha', 'false');
      data.append('_template', 'table');
      if (button) button.disabled = true;
      if (status) status.textContent = 'SENDING MESSAGE…';

      try {
        const response = await fetch('https://formsubmit.co/ajax/sriram223399@gmail.com', { method:'POST', body:data, headers:{Accept:'application/json'} });
        if (!response.ok) throw new Error('send failed');
        form.reset();
        if (status) status.textContent = 'MESSAGE SENT ✓ — I’LL GET BACK TO YOU SOON.';
      } catch (error) {
        if (status) status.textContent = 'Could not send automatically — use the direct email below.';
      } finally {
        if (button) button.disabled = false;
      }
    }, true);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attach, { once:true });
  else attach();
})();
