(() => {
  const style = document.createElement('style');
  style.textContent = `
    /* SHOWCASE — final in-place hover. Never hide the replacement text. */
    #capabilities .showcase-rows .showcase-row {
      position:relative!important;
      display:grid!important;
      grid-template-columns:110px minmax(0,1fr) 34px!important;
      align-items:center!important;
      height:148px!important;
      min-height:148px!important;
      width:100%!important;
      box-sizing:border-box!important;
      padding:0 22px 0 0!important;
      margin:0!important;
      overflow:hidden!important;
      background:transparent!important;
      border-top:1px solid rgba(255,255,255,.12)!important;
      border-bottom:0!important;
      isolation:isolate!important;
      cursor:pointer!important;
      transition:background .3s ease,transform .3s ease,box-shadow .3s ease!important;
    }
    #capabilities .showcase-rows .showcase-row:last-child{border-bottom:1px solid rgba(255,255,255,.12)!important}
    #capabilities .showcase-rows .showcase-row::after{display:none!important}
    #capabilities .showcase-rows .showcase-row::before{display:none!important}
    #capabilities .showcase-rows .showcase-row:hover,
    #capabilities .showcase-rows .showcase-row:focus-visible{
      background:#3da9ff!important;
      box-shadow:0 0 42px rgba(61,169,255,.13)!important;
      outline:none!important;
    }
    #capabilities .showcase-rows .showcase-row-number{
      position:relative!important;
      z-index:3!important;
      grid-column:1!important;
      grid-row:1!important;
      color:#3da9ff!important;
      font:500 11px var(--mono)!important;
      transition:color .2s ease!important;
    }
    #capabilities .showcase-rows .showcase-row strong{
      position:relative!important;
      z-index:4!important;
      grid-column:2!important;
      grid-row:1!important;
      display:block!important;
      margin:0!important;
      padding:0!important;
      opacity:1!important;
      visibility:visible!important;
      transform:none!important;
      color:#f4f5f7!important;
      font-family:var(--display)!important;
      font-size:clamp(54px,5vw,82px)!important;
      font-weight:700!important;
      line-height:.9!important;
      letter-spacing:-.055em!important;
      white-space:nowrap!important;
      transition:color .22s ease,transform .28s cubic-bezier(.22,1,.36,1)!important;
    }
    #capabilities .showcase-rows .showcase-row small{display:none!important}
    #capabilities .showcase-rows .showcase-row i{
      position:relative!important;
      z-index:3!important;
      grid-column:3!important;
      grid-row:1!important;
      justify-self:end!important;
      color:#3da9ff!important;
      font:500 18px var(--mono)!important;
      font-style:normal!important;
      transition:color .2s ease,transform .25s ease!important;
    }
    #capabilities .showcase-rows .showcase-row:hover strong,
    #capabilities .showcase-rows .showcase-row:focus-visible strong{
      opacity:1!important;
      visibility:visible!important;
      color:#050505!important;
      transform:translateX(8px)!important;
    }
    #capabilities .showcase-rows .showcase-row:hover .showcase-row-number,
    #capabilities .showcase-rows .showcase-row:hover i,
    #capabilities .showcase-rows .showcase-row:focus-visible .showcase-row-number,
    #capabilities .showcase-rows .showcase-row:focus-visible i{color:#050505!important}
    #capabilities .showcase-rows .showcase-row:hover i,
    #capabilities .showcase-rows .showcase-row:focus-visible i{transform:translate(4px,-2px)!important}

    /* LEARNING — subtle premium interaction */
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

    /* CONTACT FORM */
    #contact.contact{position:relative!important;display:block!important;padding-top:95px!important;padding-bottom:120px!important;overflow:hidden!important}
    #contact.contact::before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,#3da9ff,rgba(61,169,255,.12),transparent);box-shadow:0 0 22px rgba(61,169,255,.35);pointer-events:none}
    .contact-intro{max-width:760px!important;position:relative!important;z-index:2!important}
    #contact .terminal-status{margin-bottom:24px!important}
    #contact h2{font-size:clamp(58px,7vw,96px)!important;margin:0 0 24px!important}
    #contact h2 em{display:inline-block!important;transition:transform .45s cubic-bezier(.22,1,.36,1),text-shadow .45s ease!important}
    #contact:hover h2 em{transform:translateX(7px)!important;text-shadow:0 0 40px rgba(61,169,255,.16)!important}
    .contact-sub{max-width:640px!important;color:#8f8f96!important;font-size:15px!important;line-height:1.8!important;margin:0!important}
    .contact-form-wrap{margin-top:68px!important;position:relative!important}
    .contact-form-wrap::before{content:"CONTACT.REQUEST";position:absolute;right:0;top:-35px;color:#34363b;font:500 9px var(--mono);letter-spacing:.14em}
    .contact-form{display:grid!important;grid-template-columns:1fr 1fr!important;gap:28px 24px!important}
    .contact-field{position:relative!important;display:flex!important;flex-direction:column!important;gap:10px!important}
    .contact-field.full{grid-column:1/-1!important}
    .contact-field label{font:500 11px var(--mono)!important;letter-spacing:.13em!important;color:#dfe3e8!important;text-transform:uppercase!important}
    .contact-field label::before{content:"// "!important;color:#3da9ff!important}
    .contact-field input,.contact-field textarea{width:100%!important;border:1px solid #292c31!important;border-radius:0!important;background:#080a0d!important;color:#f4f5f7!important;font:500 15px var(--mono)!important;outline:none!important;padding:19px 18px!important;box-shadow:inset 0 0 0 1px transparent!important;transition:border-color .25s ease,box-shadow .25s ease,background .25s ease,transform .25s ease!important}
    .contact-field input{height:62px!important}.contact-field textarea{min-height:190px!important;resize:vertical!important}
    .contact-field input::placeholder,.contact-field textarea::placeholder{color:#555b63!important}
    .contact-field input:focus,.contact-field textarea:focus{border-color:#3da9ff!important;background:#090c10!important;box-shadow:0 0 0 1px rgba(61,169,255,.18),0 0 35px rgba(61,169,255,.07)!important;transform:translateY(-1px)!important}
    .contact-submit{grid-column:1/-1!important;display:flex!important;align-items:center!important;justify-content:space-between!important;width:100%!important;border:1px solid #3da9ff!important;background:#3da9ff!important;color:#050505!important;border-radius:0!important;padding:22px 24px!important;font:700 12px var(--mono)!important;letter-spacing:.12em!important;text-transform:uppercase!important;cursor:pointer!important;transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s ease,background .25s ease!important}
    .contact-submit span:last-child{font-size:20px!important;line-height:1!important;transition:transform .3s ease!important}
    .contact-submit:hover{transform:translateY(-3px)!important;box-shadow:0 15px 45px rgba(61,169,255,.18)!important;background:#67baff!important}
    .contact-submit:hover span:last-child{transform:translate(5px,-4px)!important}
    .contact-direct{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:20px!important;margin-top:28px!important;padding-top:22px!important;border-top:1px solid #202227!important}
    .contact-direct span{font:500 10px var(--mono)!important;color:#555b63!important;letter-spacing:.08em!important;text-transform:uppercase!important}
    .contact-direct a{font:500 13px var(--mono)!important;color:#dfe3e8!important;text-decoration:none!important;transition:color .2s ease!important}
    .contact-direct a:hover{color:#3da9ff!important}
    .contact-status{min-height:18px!important;margin:12px 0 0!important;font:500 10px var(--mono)!important;color:#67e8a5!important;letter-spacing:.04em!important}
    @media(max-width:900px){
      #capabilities .showcase-rows .showcase-row{height:126px!important;min-height:126px!important;grid-template-columns:72px minmax(0,1fr) 22px!important;padding-right:16px!important}
      #capabilities .showcase-rows .showcase-row strong{font-size:clamp(44px,8vw,66px)!important}
      #contact.contact{padding-top:75px!important}
    }
    @media(max-width:650px){
      #capabilities .showcase-rows .showcase-row{height:108px!important;min-height:108px!important;grid-template-columns:48px minmax(0,1fr) 18px!important;padding-right:8px!important}
      #capabilities .showcase-rows .showcase-row strong{font-size:42px!important}
      #capabilities .showcase-rows .showcase-row i{font-size:15px!important}
      #learning .journey-row:hover{transform:translateX(3px)!important}
      .contact-form{grid-template-columns:1fr!important;gap:24px!important}
      .contact-field.full,.contact-submit{grid-column:auto!important}
      .contact-form-wrap{margin-top:48px!important}
      .contact-form-wrap::before{display:none!important}
      .contact-submit{padding:19px 18px!important}
      .contact-direct{align-items:flex-start!important;flex-direction:column!important}
      #contact h2{font-size:54px!important}
    }
  `;
  document.head.appendChild(style);

  /* Replace the descriptor with the title itself. The <small> element is never shown. */
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
    };
    const leave = () => {
      active = false;
      title.textContent = original;
    };

    row.addEventListener('mouseenter', enter);
    row.addEventListener('mouseleave', leave);
    row.addEventListener('focusin', enter);
    row.addEventListener('focusout', leave);
  });

  /* Contact form — sends through FormSubmit to the portfolio email. */
  const contact = document.querySelector('#contact.contact');
  if (contact && !contact.querySelector('.contact-form')) {
    contact.innerHTML = `
      <div class="contact-intro">
        <div class="terminal-status"><span class="dot"></span> OPEN TO OPPORTUNITIES</div>
        <h2>Let's build<br><em>something great.</em></h2>
        <p class="contact-sub">Have an internship, software role, AI/ML opportunity, project or collaboration in mind? Send a message and I'll get back to you.</p>
      </div>
      <div class="contact-form-wrap">
        <form class="contact-form" id="contactForm">
          <div class="contact-field"><label for="contactName">Your Name</label><input id="contactName" name="name" type="text" autocomplete="name" placeholder="Your name" required></div>
          <div class="contact-field"><label for="contactEmail">Email Address</label><input id="contactEmail" name="email" type="email" autocomplete="email" placeholder="you@company.com" required></div>
          <div class="contact-field full"><label for="contactCompany">Company / Organization</label><input id="contactCompany" name="company" type="text" autocomplete="organization" placeholder="Company, startup, university..."></div>
          <div class="contact-field full"><label for="contactMessage">Message</label><textarea id="contactMessage" name="message" placeholder="Tell me about the role, project or opportunity..." required></textarea></div>
          <button class="contact-submit" type="submit"><span>→ &nbsp; SEND MESSAGE</span><span>↗</span></button>
          <p class="contact-status" id="contactStatus" aria-live="polite"></p>
        </form>
        <div class="contact-direct"><span>DIRECT CHANNEL</span><a href="mailto:sriram223399@gmail.com">sriram223399@gmail.com ↗</a></div>
      </div>
    `;

    const form = document.getElementById('contactForm');
    const status = document.getElementById('contactStatus');
    form?.addEventListener('submit', async event => {
      event.preventDefault();
      if (status) status.textContent = 'SENDING MESSAGE…';
      try {
        const response = await fetch('https://formsubmit.co/ajax/sriram223399@gmail.com', {
          method:'POST',
          headers:{'Accept':'application/json'},
          body:new FormData(form)
        });
        if (!response.ok) throw new Error('send failed');
        form.reset();
        if (status) status.textContent = 'MESSAGE SENT — THANK YOU.';
      } catch (error) {
        if (status) status.textContent = 'COULD NOT SEND — USE THE DIRECT EMAIL BELOW.';
      }
    });
  }
})();
