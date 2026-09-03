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
