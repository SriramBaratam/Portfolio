(() => {
  const style = document.createElement('style');
  style.textContent = `
    /* FINAL SHOWCASE — descriptor replaces the title in the exact same position */
    #capabilities .showcase-rows .showcase-row{
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
    }
    #capabilities .showcase-rows .showcase-row:last-child{border-bottom:1px solid rgba(255,255,255,.12)!important}
    #capabilities .showcase-rows .showcase-row::after{
      content:""!important;
      position:absolute!important;
      inset:0!important;
      background:#3da9ff!important;
      transform:scaleX(0)!important;
      transform-origin:left center!important;
      z-index:1!important;
      transition:transform .5s cubic-bezier(.22,1,.36,1)!important;
    }
    #capabilities .showcase-rows .showcase-row-number{
      position:relative!important;z-index:8!important;grid-column:1!important;grid-row:1!important;
      color:#3da9ff!important;font:500 11px var(--mono)!important;transition:color .2s ease!important;
    }
    #capabilities .showcase-rows .showcase-row strong{
      position:relative!important;z-index:5!important;grid-column:2!important;grid-row:1!important;
      display:block!important;margin:0!important;padding:0!important;
      color:#f4f5f7!important;font-family:var(--display)!important;font-size:clamp(54px,5vw,82px)!important;
      font-weight:700!important;line-height:.9!important;letter-spacing:-.055em!important;white-space:nowrap!important;
      opacity:1!important;transform:translateX(0)!important;
      transition:opacity .16s ease,transform .42s cubic-bezier(.22,1,.36,1)!important;
    }
    #capabilities .showcase-rows .showcase-row small{
      position:relative!important;z-index:7!important;grid-column:2!important;grid-row:1!important;
      justify-self:start!important;align-self:center!important;width:auto!important;max-width:calc(100% - 8px)!important;
      margin:0!important;padding:0!important;text-align:left!important;
      color:#050505!important;font:600 clamp(21px,2.2vw,34px)/1 var(--mono)!important;
      letter-spacing:-.035em!important;white-space:nowrap!important;
      opacity:0!important;transform:translateX(-28px)!important;
      transition:opacity .16s ease,transform .42s cubic-bezier(.22,1,.36,1)!important;
    }
    #capabilities .showcase-rows .showcase-row i{
      position:relative!important;z-index:8!important;grid-column:3!important;grid-row:1!important;
      justify-self:end!important;color:#3da9ff!important;font:500 18px var(--mono)!important;font-style:normal!important;
      transition:color .2s ease,transform .3s ease!important;
    }
    #capabilities .showcase-rows .showcase-row:hover::after,
    #capabilities .showcase-rows .showcase-row:focus-visible::after{transform:scaleX(1)!important}
    #capabilities .showcase-rows .showcase-row:hover strong,
    #capabilities .showcase-rows .showcase-row:focus-visible strong{opacity:0!important;transform:translateX(28px)!important}
    #capabilities .showcase-rows .showcase-row:hover small,
    #capabilities .showcase-rows .showcase-row:focus-visible small{opacity:1!important;transform:translateX(0)!important}
    #capabilities .showcase-rows .showcase-row:hover .showcase-row-number,
    #capabilities .showcase-rows .showcase-row:hover i,
    #capabilities .showcase-rows .showcase-row:focus-visible .showcase-row-number,
    #capabilities .showcase-rows .showcase-row:focus-visible i{color:#050505!important}
    #capabilities .showcase-rows .showcase-row:hover i,
    #capabilities .showcase-rows .showcase-row:focus-visible i{transform:translate(4px,-2px)!important}

    /* tiny premium details: moving highlight and active-row glow */
    #capabilities .showcase-rows .showcase-row::before{
      content:""!important;position:absolute!important;top:0;bottom:0;left:0;width:2px;
      background:#3da9ff;box-shadow:0 0 20px rgba(61,169,255,.8);transform:scaleY(0);transform-origin:bottom;
      z-index:9;transition:transform .4s cubic-bezier(.22,1,.36,1)!important;pointer-events:none;
    }
    #capabilities .showcase-rows .showcase-row:hover::before,
    #capabilities .showcase-rows .showcase-row:focus-visible::before{transform:scaleY(1)!important}

    /* LEARNING — make the timeline feel alive without distracting from the content */
    #learning .section-title-row h2{transition:transform .45s cubic-bezier(.22,1,.36,1),text-shadow .45s ease!important}
    #learning:hover .section-title-row h2{transform:translateX(5px)!important;text-shadow:0 0 36px rgba(61,169,255,.12)!important}
    #learning .section-title-row h2 em{transition:color .3s ease!important}
    #learning:hover .section-title-row h2 em{color:#3da9ff!important}
    #learning .journey-table{position:relative!important}
    #learning .journey-table::before{
      content:"";position:absolute;left:0;top:0;width:1px;height:0;background:#3da9ff;
      box-shadow:0 0 18px rgba(61,169,255,.8);z-index:10;transition:height 1.1s cubic-bezier(.22,1,.36,1);pointer-events:none;
    }
    #learning.visible .journey-table::before{height:100%}
    #learning .journey-row{
      position:relative!important;overflow:hidden!important;transform:translateX(0)!important;
      transition:transform .4s cubic-bezier(.22,1,.36,1),background .35s ease,box-shadow .35s ease!important;
    }
    #learning .journey-row::after{
      content:"";position:absolute;left:0;top:0;bottom:0;width:2px;background:#3da9ff;
      transform:scaleY(0);transform-origin:bottom;box-shadow:0 0 18px rgba(61,169,255,.75);
      transition:transform .4s cubic-bezier(.22,1,.36,1);pointer-events:none;
    }
    #learning .journey-row:hover{
      transform:translateX(8px)!important;
      background:linear-gradient(90deg,rgba(61,169,255,.075),transparent 58%)!important;
      box-shadow:inset 0 0 44px rgba(61,169,255,.025)!important;
    }
    #learning .journey-row:hover::after{transform:scaleY(1);transform-origin:top}
    #learning .journey-row h3,#learning .journey-row p,#learning .journey-row>b{
      transition:color .25s ease,transform .35s cubic-bezier(.22,1,.36,1)!important;
    }
    #learning .journey-row:hover h3{color:#fff!important;transform:translateX(5px)!important}
    #learning .journey-row:hover p{color:#b8c0ca!important;transform:translateX(5px)!important}
    #learning .journey-row:hover>b{color:#3da9ff!important;transform:translateX(-4px)!important}

    @media(max-width:900px){
      #capabilities .showcase-rows .showcase-row{height:126px!important;min-height:126px!important;grid-template-columns:72px minmax(0,1fr) 22px!important;padding-right:16px!important}
      #capabilities .showcase-rows .showcase-row strong{font-size:clamp(44px,8vw,66px)!important}
      #capabilities .showcase-rows .showcase-row small{font-size:clamp(17px,2.8vw,27px)!important}
    }
    @media(max-width:650px){
      #capabilities .showcase-rows .showcase-row{height:108px!important;min-height:108px!important;grid-template-columns:48px minmax(0,1fr) 18px!important;padding-right:8px!important}
      #capabilities .showcase-rows .showcase-row strong{font-size:42px!important}
      #capabilities .showcase-rows .showcase-row small{font-size:16px!important;white-space:normal!important;line-height:1.15!important}
      #capabilities .showcase-rows .showcase-row i{font-size:15px!important}
      #learning .journey-row:hover{transform:translateX(3px)!important}
    }
  `;
  document.head.appendChild(style);

  // Keep the showcase interaction keyboard-accessible as well as hover-driven.
  document.querySelectorAll('#capabilities .showcase-row').forEach(row => {
    row.addEventListener('pointerenter', () => row.classList.add('is-hovered'));
    row.addEventListener('pointerleave', () => row.classList.remove('is-hovered'));
  });
})();
