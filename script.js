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

/* Floating navigation + profile treatment */
(() => {
 const style=document.createElement('style');style.textContent=`
 .site-header{position:fixed;top:28px;left:50%;transform:translateX(-50%);width:min(1120px,calc(100% - 64px));height:74px;padding:0 18px;border:1px solid rgba(255,255,255,.16);border-radius:999px;background:rgba(12,12,13,.78);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:0 10px 40px rgba(0,0,0,.45),0 0 0 1px rgba(61,169,255,.04);z-index:100}.site-header::before{content:"";position:absolute;inset:-1px;border-radius:inherit;padding:1px;background:linear-gradient(90deg,rgba(61,169,255,.08),rgba(255,255,255,.2),rgba(61,169,255,.08));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}.brand{display:flex;align-items:center;gap:12px;min-width:250px;font:600 17px var(--mono);letter-spacing:.03em;color:#e8e8e8}.brand::before{content:"";width:42px;height:42px;border-radius:9px;background:linear-gradient(135deg,#0b1622,#123a5a);border:1px solid rgba(61,169,255,.35);box-shadow:0 0 24px rgba(61,169,255,.14)}.brand span{display:none}.nav-links{gap:36px;align-items:center}.nav-links a{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#85858b;transition:color .25s,transform .25s}.nav-links a:hover{color:#fff;transform:translateY(-1px)}.header-cta{display:none}.hero{padding-top:145px;min-height:100vh}.hero-terminal{position:relative}.hero-photo{position:absolute;right:2%;top:4%;width:142px;height:142px;padding:5px;border:1px solid rgba(61,169,255,.5);border-radius:18px;background:#070b10;box-shadow:0 0 50px rgba(61,169,255,.16);z-index:5;transform:rotate(2deg);transition:transform .35s ease,box-shadow .35s ease}.hero-photo img{width:100%;height:100%;object-fit:cover;border-radius:13px;display:block;filter:saturate(.95) contrast(1.02)}.hero-terminal:hover .hero-photo{transform:rotate(0) translateY(-5px);box-shadow:0 0 70px rgba(61,169,255,.24)}@media(max-width:900px){.site-header{top:14px;width:calc(100% - 28px);height:62px;padding:0 12px}.brand{min-width:auto}.brand::before{width:36px;height:36px}.nav-links{display:none}.site-header::after{content:"BS. / MENU";font:500 10px var(--mono);color:#777;letter-spacing:.12em}.hero{padding-top:110px}.hero-photo{width:105px;height:105px;right:3%;top:1%}}@media(max-width:650px){.site-header{top:10px}.hero-photo{position:relative;right:auto;top:auto;margin:0 auto 18px;width:120px;height:120px;transform:none}.hero-terminal{min-height:430px}.hero-terminal:hover .hero-photo{transform:none}.terminal-window{width:100%}}
 `;document.head.appendChild(style);
 const brand=document.querySelector('.brand');if(brand){brand.innerHTML='<span class="nav-avatar"></span><span class="nav-name">Baratam Sriram</span>';const avatar=brand.querySelector('.nav-avatar');avatar.style.cssText="display:block;width:42px;height:42px;border-radius:9px;background:url('assets/profile.jpg') center/cover no-repeat;border:1px solid rgba(61,169,255,.35);box-shadow:0 0 22px rgba(61,169,255,.16);flex:0 0 auto"}
 const terminal=document.querySelector('.hero-terminal');if(terminal&&!terminal.querySelector('.hero-photo')){const photo=document.createElement('div');photo.className='hero-photo';photo.innerHTML='<img src="assets/profile.jpg" alt="Baratam Sriram">';terminal.prepend(photo)}
})();

/* Showcase hover: the description REPLACES the title in the exact same position. */
(() => {
 const style=document.createElement('style');style.textContent=`
 #capabilities .showcase-rows .showcase-row{position:relative!important;display:grid!important;grid-template-columns:110px minmax(0,1fr) 34px!important;align-items:center!important;height:148px!important;min-height:148px!important;width:100%!important;box-sizing:border-box!important;padding:0 22px 0 0!important;margin:0!important;overflow:hidden!important;background:transparent!important;border-top:1px solid rgba(255,255,255,.12)!important;border-bottom:0!important;isolation:isolate!important;cursor:pointer!important}#capabilities .showcase-rows .showcase-row:last-child{border-bottom:1px solid rgba(255,255,255,.12)!important}#capabilities .showcase-rows .showcase-row::after{content:""!important;position:absolute!important;inset:0!important;background:#3da9ff!important;transform:scaleX(0)!important;transform-origin:left center!important;z-index:1!important;transition:transform .5s cubic-bezier(.22,1,.36,1)!important}#capabilities .showcase-rows .showcase-row-number{position:relative!important;z-index:8!important;grid-column:1!important;grid-row:1!important;color:#3da9ff!important;font:500 11px var(--mono)!important;transition:color .2s ease!important}#capabilities .showcase-rows .showcase-row strong{position:relative!important;z-index:5!important;grid-column:2!important;grid-row:1!important;display:block!important;margin:0!important;padding:0!important;color:#f4f5f7!important;font-family:var(--display)!important;font-size:clamp(54px,5vw,82px)!important;font-weight:700!important;line-height:.9!important;letter-spacing:-.055em!important;white-space:nowrap!important;opacity:1!important;transform:translateX(0)!important;transition:opacity .16s ease,transform .42s cubic-bezier(.22,1,.36,1)!important}#capabilities .showcase-rows .showcase-row small{position:relative!important;z-index:7!important;grid-column:2!important;grid-row:1!important;justify-self:start!important;align-self:center!important;width:auto!important;max-width:calc(100% - 8px)!important;margin:0!important;padding:0!important;text-align:left!important;color:#050505!important;font:600 clamp(21px,2.2vw,34px)/1 var(--mono)!important;letter-spacing:-.035em!important;white-space:nowrap!important;opacity:0!important;transform:translateX(-28px)!important;transition:opacity .16s ease,transform .42s cubic-bezier(.22,1,.36,1)!important}#capabilities .showcase-rows .showcase-row i{position:relative!important;z-index:8!important;grid-column:3!important;grid-row:1!important;justify-self:end!important;color:#3da9ff!important;font:500 18px var(--mono)!important;font-style:normal!important;transition:color .2s ease,transform .3s ease!important}#capabilities .showcase-rows .showcase-row:hover::after,#capabilities .showcase-rows .showcase-row:focus-visible::after{transform:scaleX(1)!important}#capabilities .showcase-rows .showcase-row:hover strong,#capabilities .showcase-rows .showcase-row:focus-visible strong{opacity:0!important;transform:translateX(28px)!important}#capabilities .showcase-rows .showcase-row:hover small,#capabilities .showcase-rows .showcase-row:focus-visible small{opacity:1!important;transform:translateX(0)!important}#capabilities .showcase-rows .showcase-row:hover .showcase-row-number,#capabilities .showcase-rows .showcase-row:hover i,#capabilities .showcase-rows .showcase-row:focus-visible .showcase-row-number,#capabilities .showcase-rows .showcase-row:focus-visible i{color:#050505!important}#capabilities .showcase-rows .showcase-row:hover i,#capabilities .showcase-rows .showcase-row:focus-visible i{transform:translate(4px,-2px)!important}@media(max-width:900px){#capabilities .showcase-rows .showcase-row{height:126px!important;min-height:126px!important;grid-template-columns:72px minmax(0,1fr) 22px!important;padding-right:16px!important}#capabilities .showcase-rows .showcase-row strong{font-size:clamp(44px,8vw,66px)!important}#capabilities .showcase-rows .showcase-row small{font-size:clamp(17px,2.8vw,27px)!important}}@media(max-width:650px){#capabilities .showcase-rows .showcase-row{height:108px!important;min-height:108px!important;grid-template-columns:48px minmax(0,1fr) 18px!important;padding-right:8px!important}#capabilities .showcase-rows .showcase-row strong{font-size:42px!important}#capabilities .showcase-rows .showcase-row small{font-size:16px!important;white-space:normal!important;line-height:1.15!important}#capabilities .showcase-rows .showcase-row i{font-size:15px!important}}
 `;document.head.appendChild(style);
})();

/* Learning hover polish */
(() => {
 const style=document.createElement('style');style.textContent=`#learning .section-title-row h2{transition:transform .45s cubic-bezier(.22,1,.36,1),text-shadow .45s ease!important}#learning:hover .section-title-row h2{transform:translateX(5px)!important;text-shadow:0 0 36px rgba(61,169,255,.12)!important}#learning .section-title-row h2 em{transition:color .3s ease!important}#learning:hover .section-title-row h2 em{color:#3da9ff!important}#learning .journey-table{position:relative!important}#learning .journey-table::before{content:"";position:absolute;left:0;top:0;width:1px;height:0;background:#3da9ff;box-shadow:0 0 18px rgba(61,169,255,.8);z-index:10;transition:height 1.1s cubic-bezier(.22,1,.36,1);pointer-events:none}#learning.visible .journey-table::before{height:100%}#learning .journey-row{position:relative!important;overflow:hidden!important;transition:transform .4s cubic-bezier(.22,1,.36,1),background .35s ease,box-shadow .35s ease!important}#learning .journey-row::after{content:"";position:absolute;left:0;top:0;bottom:0;width:2px;background:#3da9ff;transform:scaleY(0);transform-origin:bottom;box-shadow:0 0 18px rgba(61,169,255,.75);transition:transform .4s cubic-bezier(.22,1,.36,1);pointer-events:none}#learning .journey-row:hover{transform:translateX(8px)!important;background:linear-gradient(90deg,rgba(61,169,255,.075),transparent 58%)!important;box-shadow:inset 0 0 44px rgba(61,169,255,.025)!important}#learning .journey-row:hover::after{transform:scaleY(1);transform-origin:top}#learning .journey-row h3,#learning .journey-row p,#learning .journey-row>b{transition:color .25s ease,transform .35s cubic-bezier(.22,1,.36,1)!important}#learning .journey-row:hover h3{color:#fff!important;transform:translateX(5px)!important}#learning .journey-row:hover p{color:#b8c0ca!important;transform:translateX(5px)!important}#learning .journey-row:hover>b{color:#3da9ff!important;transform:translateX(-4px)!important}`;document.head.appendChild(style)
})();

/* Contact form — visitors can submit from the website and the message is delivered to Sriram's inbox. */
(() => {
 const style=document.createElement('style');style.textContent=`#contact.contact{position:relative!important;display:block!important;padding-top:95px!important;padding-bottom:120px!important;overflow:hidden!important}#contact.contact::before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,#3da9ff,rgba(61,169,255,.12),transparent);box-shadow:0 0 22px rgba(61,169,255,.35);pointer-events:none}.contact-intro{max-width:760px!important;position:relative!important;z-index:2!important}#contact .terminal-status{margin-bottom:24px!important}#contact h2{font-size:clamp(58px,7vw,96px)!important;margin:0 0 24px!important}#contact h2 em{display:inline-block!important;transition:transform .45s cubic-bezier(.22,1,.36,1),text-shadow .45s ease!important}#contact:hover h2 em{transform:translateX(7px)!important;text-shadow:0 0 40px rgba(61,169,255,.16)!important}.contact-sub{max-width:640px!important;color:#8f8f96!important;font-size:15px!important;line-height:1.8!important;margin:0!important}.contact-form-wrap{margin-top:68px!important;position:relative!important}.contact-form-wrap::before{content:"CONTACT.REQUEST";position:absolute;right:0;top:-35px;color:#34363b;font:500 9px var(--mono);letter-spacing:.14em}.contact-form{display:grid!important;grid-template-columns:1fr 1fr!important;gap:28px 24px!important}.contact-field{position:relative!important;display:flex!important;flex-direction:column!important;gap:10px!important}.contact-field.full{grid-column:1/-1!important}.contact-field label{font:500 11px var(--mono)!important;letter-spacing:.13em!important;color:#dfe3e8!important;text-transform:uppercase!important}.contact-field label::before{content:"// "!important;color:#3da9ff!important}.contact-field input,.contact-field textarea{width:100%!important;box-sizing:border-box!important;border:1px solid #292c31!important;border-radius:0!important;background:#080a0d!important;color:#f4f5f7!important;font:500 15px var(--mono)!important;outline:none!important;padding:19px 18px!important;transition:border-color .25s ease,box-shadow .25s ease,background .25s ease,transform .25s ease!important}.contact-field input{height:62px!important}.contact-field textarea{min-height:190px!important;resize:vertical!important}.contact-field input::placeholder,.contact-field textarea::placeholder{color:#555b63!important}.contact-field input:focus,.contact-field textarea:focus{border-color:#3da9ff!important;background:#090c10!important;box-shadow:0 0 0 1px rgba(61,169,255,.18),0 0 35px rgba(61,169,255,.07)!important;transform:translateY(-1px)!important}.contact-submit{grid-column:1/-1!important;display:flex!important;align-items:center!important;justify-content:space-between!important;width:100%!important;border:1px solid #3da9ff!important;background:#3da9ff!important;color:#050505!important;border-radius:0!important;padding:22px 24px!important;font:700 12px var(--mono)!important;letter-spacing:.12em!important;text-transform:uppercase!important;cursor:pointer!important;transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s ease,background .25s ease!important}.contact-submit span:last-child{font-size:20px!important;line-height:1!important;transition:transform .3s ease!important}.contact-submit:hover{transform:translateY(-3px)!important;box-shadow:0 15px 45px rgba(61,169,255,.18)!important;background:#67baff!important}.contact-submit:hover span:last-child{transform:translate(5px,-4px)!important}.contact-submit:disabled{opacity:.65!important;cursor:wait!important;transform:none!important}.contact-direct{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:20px!important;margin-top:28px!important;padding-top:22px!important;border-top:1px solid #202227!important}.contact-direct span{font:500 10px var(--mono)!important;color:#555b63!important;letter-spacing:.08em!important;text-transform:uppercase!important}.contact-direct a{font:500 13px var(--mono)!important;color:#dfe3e8!important;text-decoration:none!important;transition:color .2s ease!important}.contact-direct a:hover{color:#3da9ff!important}.contact-status{min-height:18px!important;margin:12px 0 0!important;font:500 10px var(--mono)!important;color:#67e8a5!important;letter-spacing:.04em!important}@media(max-width:900px){#contact.contact{padding-top:75px!important}}@media(max-width:650px){.contact-form{grid-template-columns:1fr!important;gap:24px!important}.contact-field.full,.contact-submit{grid-column:auto!important}.contact-form-wrap{margin-top:48px!important}.contact-form-wrap::before{display:none!important}.contact-submit{padding:19px 18px!important}.contact-direct{align-items:flex-start!important;flex-direction:column!important}#contact h2{font-size:54px!important}}`;document.head.appendChild(style);
 const contact=document.querySelector('#contact.contact');
 if(contact){contact.innerHTML=`<div class="contact-intro"><div class="terminal-status"><span class="dot"></span> OPEN TO OPPORTUNITIES</div><h2>Let's build<br><em>something great.</em></h2><p class="contact-sub">Have an internship, software role, AI/ML opportunity, project or collaboration in mind? Send a message and I'll get back to you.</p></div><div class="contact-form-wrap"><form class="contact-form" id="contactForm"><div class="contact-field"><label for="contactName">Your Name</label><input id="contactName" name="name" type="text" autocomplete="name" placeholder="Your name" required></div><div class="contact-field"><label for="contactEmail">Email Address</label><input id="contactEmail" name="email" type="email" autocomplete="email" placeholder="you@company.com" required></div><div class="contact-field full"><label for="contactCompany">Company / Organization</label><input id="contactCompany" name="company" type="text" autocomplete="organization" placeholder="Company, startup, university..."></div><div class="contact-field full"><label for="contactMessage">Message</label><textarea id="contactMessage" name="message" placeholder="Tell me about the role, project or opportunity..." required></textarea></div><button class="contact-submit" type="submit"><span>→ &nbsp; SEND MESSAGE</span><span>↗</span></button><p class="contact-status" id="contactStatus" aria-live="polite"></p></form><div class="contact-direct"><span>DIRECT CHANNEL</span><a href="mailto:sriram223399@gmail.com">sriram223399@gmail.com ↗</a></div></div>`;
 }
})();

/* Premium first-load screen */
(() => {
 const style=document.createElement('style');style.textContent=`#boot-screen{position:fixed;inset:0;background:#05070a;color:#f2f4f7;z-index:9999;display:flex;align-items:center;justify-content:center;overflow:hidden;transition:opacity .65s ease,visibility .65s ease}#boot-screen.is-done{opacity:0;visibility:hidden;pointer-events:none}#boot-screen::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 42%,rgba(61,169,255,.10),transparent 38%),linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:auto,42px 42px,42px 42px;mask-image:linear-gradient(to bottom,transparent,black 18%,black 82%,transparent)}.boot-frame{position:relative;width:min(760px,calc(100% - 44px));padding:34px 34px 30px;border:1px solid rgba(61,169,255,.22);background:rgba(6,9,13,.82);box-shadow:0 0 90px rgba(61,169,255,.08),inset 0 0 50px rgba(255,255,255,.015);backdrop-filter:blur(12px)}.boot-top{display:flex;justify-content:space-between;align-items:center;font:500 11px var(--mono);letter-spacing:.14em;color:#707a86;text-transform:uppercase}.boot-live{display:flex;align-items:center;gap:8px;color:#3da9ff}.boot-live i{width:6px;height:6px;border-radius:50%;background:#3da9ff;box-shadow:0 0 14px #3da9ff}.boot-title{margin:70px 0 10px;font:700 clamp(58px,10vw,112px)/.86 var(--display);letter-spacing:-.07em;text-transform:uppercase}.boot-title span{color:#3da9ff}.boot-sub{margin:0 0 42px;font:500 13px var(--mono);color:#7f8791;letter-spacing:.04em}.boot-console{border-top:1px solid rgba(255,255,255,.10);border-bottom:1px solid rgba(255,255,255,.10);padding:16px 0;font:500 12px var(--mono);color:#a5adb8}.boot-console b{color:#3da9ff;font-weight:500}.boot-console .line{display:flex;gap:10px;margin:6px 0}.boot-console .ok{margin-left:auto;color:#59636f}.boot-progress{height:2px;margin-top:28px;background:rgba(255,255,255,.08);overflow:hidden}.boot-progress span{display:block;width:0;height:100%;background:#3da9ff;box-shadow:0 0 18px rgba(61,169,255,.8);animation:bootFill 1.55s cubic-bezier(.22,1,.36,1) forwards}.boot-footer{display:flex;justify-content:space-between;margin-top:12px;font:500 10px var(--mono);letter-spacing:.08em;color:#505966;text-transform:uppercase}.boot-footer strong{color:#dce2e8;font-weight:500}@keyframes bootFill{to{width:100%}}@media(max-width:650px){.boot-frame{padding:24px 20px}.boot-title{margin-top:52px}.boot-console{font-size:10px}.boot-footer{font-size:8px}}`;document.head.appendChild(style);const boot=document.createElement('div');boot.id='boot-screen';boot.innerHTML=`<div class="boot-frame"><div class="boot-top"><span>BARATAM Sriram // PORTFOLIO</span><span class="boot-live"><i></i> SYSTEM ONLINE</span></div><h1 class="boot-title">BOOT<span>.</span></h1><p class="boot-sub">AI/ML ENGINEERING · SOFTWARE · FULL STACK · DATA</p><div class="boot-console"><div class="line"><b>01</b><span>initializing interface</span><span class="ok">done</span></div><div class="line"><b>02</b><span>loading project systems</span><span class="ok">done</span></div><div class="line"><b>03</b><span>connecting ideas → execution</span><span class="ok">ready</span></div></div><div class="boot-progress"><span></span></div><div class="boot-footer"><span>status <strong>ready to build</strong></span><span>v2026.09</span></div></div>`;document.body.appendChild(boot);const finish=()=>setTimeout(()=>boot.classList.add('is-done'),1750);if(document.readyState==='complete')finish();else window.addEventListener('load',finish,{once:true});
})();

/* REAL FORM DELIVERY — submit directly from the portfolio to Sriram's email inbox. */
(() => {
  const attach = () => {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('contactStatus');
    const button = form?.querySelector('.contact-submit');
    if (!form || form.dataset.mailConnected) return;
    form.dataset.mailConnected = 'true';
    form.addEventListener('submit', async (event) => {
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
        const response = await fetch('https://formsubmit.co/ajax/sriram223399@gmail.com', {method:'POST', body:data, headers:{Accept:'application/json'}});
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
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attach, {once:true}); else attach();
})();

/* FINAL SHOWCASE FIX — swap the label text itself, not its layout. */
(() => {
  const style = document.createElement('style');
  style.textContent = `
    #capabilities .showcase-rows .showcase-row{position:relative!important;display:grid!important;grid-template-columns:110px minmax(0,1fr) 34px!important;align-items:center!important;height:148px!important;min-height:148px!important;box-sizing:border-box!important;overflow:hidden!important;background:transparent!important;cursor:pointer!important;isolation:isolate!important}
    #capabilities .showcase-rows .showcase-row::after{content:""!important;position:absolute!important;inset:0!important;background:#3da9ff!important;transform:scaleX(0)!important;transform-origin:left center!important;z-index:0!important;transition:transform .45s cubic-bezier(.22,1,.36,1)!important}
    #capabilities .showcase-rows .showcase-row > *{position:relative!important;z-index:2!important}
    #capabilities .showcase-rows .showcase-row strong{grid-column:2!important;grid-row:1!important;margin:0!important;white-space:nowrap!important;color:#f4f5f7!important;font-family:var(--display)!important;font-size:clamp(54px,5vw,82px)!important;line-height:.9!important;letter-spacing:-.055em!important;transition:color .2s ease,transform .35s cubic-bezier(.22,1,.36,1)!important}
    #capabilities .showcase-rows .showcase-row small{display:none!important}
    #capabilities .showcase-rows .showcase-row:hover::after,#capabilities .showcase-rows .showcase-row:focus-visible::after{transform:scaleX(1)!important}
    #capabilities .showcase-rows .showcase-row:hover strong,#capabilities .showcase-rows .showcase-row:focus-visible strong{color:#050505!important;transform:translateX(8px)!important}
    #capabilities .showcase-rows .showcase-row-number,#capabilities .showcase-rows .showcase-row i{transition:color .2s ease,transform .3s ease!important}
    #capabilities .showcase-rows .showcase-row:hover .showcase-row-number,#capabilities .showcase-rows .showcase-row:hover i,#capabilities .showcase-rows .showcase-row:focus-visible .showcase-row-number,#capabilities .showcase-rows .showcase-row:focus-visible i{color:#050505!important}
    #capabilities .showcase-rows .showcase-row:hover i,#capabilities .showcase-rows .showcase-row:focus-visible i{transform:translate(4px,-2px)!important}
    @media(max-width:900px){#capabilities .showcase-rows .showcase-row{height:126px!important;min-height:126px!important;grid-template-columns:72px minmax(0,1fr) 22px!important}.showcase-rows .showcase-row strong{font-size:clamp(44px,8vw,66px)!important}}
    @media(max-width:650px){#capabilities .showcase-rows .showcase-row{height:108px!important;min-height:108px!important;grid-template-columns:48px minmax(0,1fr) 18px!important}.showcase-rows .showcase-row strong{font-size:42px!important}}
  `;
  document.head.appendChild(style);

  const rows = document.querySelectorAll('#capabilities .showcase-row');
  rows.forEach(row => {
    const title = row.querySelector('strong');
    const description = row.querySelector('small');
    if (!title || !description) return;
    const original = title.textContent.trim();
    const replacement = description.textContent.trim();
    row.addEventListener('mouseenter', () => { title.textContent = replacement; });
    row.addEventListener('mouseleave', () => { title.textContent = original; });
    row.addEventListener('focus', () => { title.textContent = replacement; });
    row.addEventListener('blur', () => { title.textContent = original; });
  });
})();
