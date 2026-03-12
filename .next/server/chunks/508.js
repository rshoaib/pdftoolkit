exports.id=508,exports.ids=[508],exports.modules={34292:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,13219,23)),Promise.resolve().then(r.t.bind(r,34863,23)),Promise.resolve().then(r.t.bind(r,25155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,96313,23)),Promise.resolve().then(r.t.bind(r,48530,23)),Promise.resolve().then(r.t.bind(r,88921,23))},52852:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,66959,23)),Promise.resolve().then(r.t.bind(r,33875,23)),Promise.resolve().then(r.t.bind(r,88903,23)),Promise.resolve().then(r.t.bind(r,84178,23)),Promise.resolve().then(r.t.bind(r,86013,23)),Promise.resolve().then(r.t.bind(r,87190,23)),Promise.resolve().then(r.t.bind(r,61365,23))},51047:(e,t,r)=>{Promise.resolve().then(r.bind(r,34285)),Promise.resolve().then(r.bind(r,97565))},90367:(e,t,r)=>{Promise.resolve().then(r.bind(r,76199)),Promise.resolve().then(r.bind(r,41041))},76199:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var s=r(45512),o=r(26008),a=r(61075),n=r(32848),i=r(92411),l=r(56045),c=r(58009);let d=()=>{let[e,t]=(0,c.useState)(()=>"light");return(0,c.useEffect)(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>t(e=>"light"===e?"dark":"light")}};var h=r(3456);let p=()=>{let[e,t]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{localStorage.getItem("cookieCheck")||t(!0)},[]),e)?(0,s.jsxs)("div",{className:"cookie-banner",children:[(0,s.jsxs)("div",{className:"cookie-content",children:[(0,s.jsx)("p",{children:"We use cookies to analyze traffic and improve your experience. Your files are never uploaded — all processing is 100% local."}),(0,s.jsxs)("div",{className:"cookie-buttons",children:[(0,s.jsx)("button",{onClick:()=>{localStorage.setItem("cookieCheck","declined"),t(!1)},className:"btn-decline",children:"Decline"}),(0,s.jsx)("button",{onClick:()=>{localStorage.setItem("cookieCheck","accepted"),t(!1)},className:"btn-accept",children:"Accept"})]})]}),(0,s.jsx)("style",{children:`
        .cookie-banner {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 520px;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          padding: 16px 24px;
          border-radius: var(--radius-md);
          box-shadow: 0 10px 40px rgba(0,0,0,0.25);
          z-index: 1000;
          animation: slideUp 0.35s ease-out;
        }
        .cookie-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .cookie-content p {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.5;
        }
        .cookie-buttons {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        .btn-accept, .btn-decline {
          padding: 8px 18px;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
          white-space: nowrap;
        }
        .btn-accept {
          background: var(--gradient);
          color: #fff;
          border: none;
        }
        .btn-accept:hover { opacity: 0.9; }
        .btn-decline {
          background: transparent;
          border: 1px solid var(--border-active);
          color: var(--text-main);
        }
        .btn-decline:hover {
          background: var(--bg-surface);
        }
        @media (max-width: 600px) {
          .cookie-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .cookie-buttons {
            width: 100%;
            justify-content: flex-end;
          }
        }
        @keyframes slideUp {
          from { transform: translate(-50%, 20px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `})]}):null};function m({children:e}){let{theme:t,toggleTheme:r}=d();return(0,s.jsxs)("div",{className:"layout",children:[(0,s.jsxs)("header",{className:"header",children:[(0,s.jsxs)(o.default,{href:"/",className:"logo-container",children:[(0,s.jsx)("div",{className:"logo-icon",children:(0,s.jsx)(a.A,{size:24})}),(0,s.jsxs)("div",{className:"logo-text",children:["Tiny",(0,s.jsx)("span",{className:"text-gradient",children:"PDFTools"})]})]}),(0,s.jsxs)("nav",{className:"nav",children:[(0,s.jsx)("button",{className:"theme-btn",onClick:r,title:"Toggle Theme","aria-label":"Toggle dark mode",children:"light"===t?(0,s.jsx)(n.A,{size:18}):(0,s.jsx)(i.A,{size:18})}),(0,s.jsx)(o.default,{href:"/",className:"nav-link",children:"Home"}),(0,s.jsx)(o.default,{href:"/about",className:"nav-link",children:"About"}),(0,s.jsx)(o.default,{href:"/contact",className:"nav-link",children:"Contact"}),(0,s.jsx)(o.default,{href:"/blog",className:"nav-link",children:"Blog"})]})]}),(0,s.jsx)("main",{className:"main-content",children:e}),(0,s.jsx)(p,{}),(0,s.jsx)(h.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_FOOTER||"",className:"footer-ad"}),(0,s.jsxs)("footer",{className:"footer",children:[(0,s.jsxs)("p",{className:"footer-text",children:["\xa9 ",new Date().getFullYear()," Tiny PDF Tools. 100% Client-Side Privacy."]}),(0,s.jsxs)("div",{className:"footer-links",children:[(0,s.jsxs)("a",{href:"https://www.buymeacoffee.com/rshoaib",target:"_blank",rel:"noopener noreferrer",className:"footer-link coffee-link",children:[(0,s.jsx)(l.A,{size:16})," ",(0,s.jsx)("span",{children:"Donate"})]}),(0,s.jsx)(o.default,{href:"/privacy",className:"footer-link",children:"Privacy Policy"}),(0,s.jsx)(o.default,{href:"/terms",className:"footer-link",children:"Terms"}),(0,s.jsx)(o.default,{href:"/contact",className:"footer-link",children:"Contact"}),(0,s.jsx)(o.default,{href:"/about",className:"footer-link",children:"About Us"}),(0,s.jsx)(o.default,{href:"/blog",className:"footer-link",children:"Blog"})]})]}),(0,s.jsxs)("div",{className:"quick-links",children:[(0,s.jsx)("span",{children:"PDF Tools:"}),(0,s.jsx)(o.default,{href:"/merge-pdf",children:"Merge PDF"}),(0,s.jsx)(o.default,{href:"/split-pdf",children:"Split PDF"}),(0,s.jsx)(o.default,{href:"/compress-pdf",children:"Compress PDF"}),(0,s.jsx)(o.default,{href:"/pdf-to-image",children:"PDF to Image"}),(0,s.jsx)(o.default,{href:"/image-to-pdf",children:"Image to PDF"}),(0,s.jsx)(o.default,{href:"/rotate-pdf",children:"Rotate PDF"}),(0,s.jsx)(o.default,{href:"/protect-pdf",children:"Protect PDF"}),(0,s.jsx)(o.default,{href:"/unlock-pdf",children:"Unlock PDF"}),(0,s.jsx)(o.default,{href:"/watermark-pdf",children:"Watermark PDF"}),(0,s.jsx)(o.default,{href:"/organize-pdf",children:"Organize PDF"}),(0,s.jsx)(o.default,{href:"/add-page-numbers",children:"Add Page Numbers"}),(0,s.jsx)(o.default,{href:"/delete-pdf-pages",children:"Delete Pages"}),(0,s.jsx)(o.default,{href:"/flatten-pdf",children:"Flatten PDF"}),(0,s.jsx)(o.default,{href:"/sign-pdf",children:"Sign PDF"})]}),(0,s.jsxs)("div",{className:"quick-links",style:{borderTop:"none",paddingTop:"0"},children:[(0,s.jsx)("span",{children:"Our Other Tools:"}),(0,s.jsx)("a",{href:"https://onlineimageshrinker.com",target:"_blank",rel:"noopener noreferrer",children:"Image Shrinker"}),(0,s.jsx)("a",{href:"https://dailysmartcalc.com",target:"_blank",rel:"noopener noreferrer",children:"Smart Calculators"}),(0,s.jsx)("a",{href:"https://mycalcfinance.com",target:"_blank",rel:"noopener noreferrer",children:"Finance Calculators"}),(0,s.jsx)("a",{href:"https://legalpolicygen.com",target:"_blank",rel:"noopener noreferrer",children:"Legal Policy Generator"}),(0,s.jsx)("a",{href:"https://imrizwan.com",target:"_blank",rel:"noopener noreferrer",children:"Developer Blog"})]})]})}},3456:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(45512),o=r(58009);let a="ca-pub-3166995085202346",n={banner:{width:"728px",height:"90px"},rectangle:{width:"300px",height:"250px"},responsive:{width:"100%",height:"auto"}},i=({format:e="banner",slot:t="",className:r=""})=>{let i=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(a&&t&&window.adsbygoogle)try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}},[t]);let l=n[e]||n.banner,c="responsive"===e;return a?(0,s.jsx)("div",{className:`ad-slot ${r}`,style:{margin:"20px auto",textAlign:"center"},"aria-label":"Advertisement",children:(0,s.jsx)("ins",{className:"adsbygoogle",style:{display:c?"block":"inline-block",width:c?"100%":l.width,height:c?void 0:l.height},"data-ad-client":a,"data-ad-slot":t,...c?{"data-ad-format":"auto","data-full-width-responsive":"true"}:{},ref:i})}):(0,s.jsx)("div",{className:`ad-slot-placeholder ${r}`,style:{width:l.width,maxWidth:"100%",height:c?"90px":l.height,margin:"20px auto",display:"flex",alignItems:"center",justifyContent:"center"},"aria-hidden":"true"})}},41041:(e,t,r)=>{"use strict";r.d(t,{ToastProvider:()=>h,d:()=>d});var s=r(45512),o=r(58009),a=r(92056),n=r(67418),i=r(86201),l=r(44269);let c=(0,o.createContext)(null),d=()=>{let e=(0,o.useContext)(c);if(!e)throw Error("useToast must be used within a ToastProvider");return e},h=({children:e})=>{let[t,r]=(0,o.useState)([]),d=(0,o.useCallback)((e,t="info",s=4e3)=>{let o=Date.now().toString();r(r=>[...r,{id:o,message:e,type:t}]),s>0&&setTimeout(()=>{h(o)},s)},[]),h=(0,o.useCallback)(e=>{r(t=>t.filter(t=>t.id!==e))},[]);return(0,s.jsxs)(c.Provider,{value:{success:(e,t)=>d(e,"success",t),error:(e,t)=>d(e,"error",t),info:(e,t)=>d(e,"info",t)},children:[e,(0,s.jsx)("div",{className:"toast-container",children:t.map(e=>(0,s.jsxs)("div",{className:`toast toast-${e.type}`,children:[(0,s.jsxs)("div",{className:"toast-icon",children:["success"===e.type&&(0,s.jsx)(a.A,{size:20}),"error"===e.type&&(0,s.jsx)(n.A,{size:20}),"info"===e.type&&(0,s.jsx)(i.A,{size:20})]}),(0,s.jsx)("div",{className:"toast-message",children:e.message}),(0,s.jsx)("button",{className:"toast-close",onClick:()=>h(e.id),children:(0,s.jsx)(l.A,{size:16})})]},e.id))}),(0,s.jsx)("style",{children:`
        .toast-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 12px;
          pointer-events: none;
        }

        .toast {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--bg-panel);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          pointer-events: auto;
          animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1), fadeOut 0.3s ease-out 3.7s;
          max-width: 400px;
        }

        .toast-success .toast-icon { color: var(--success); }
        .toast-error .toast-icon { color: var(--error); }
        .toast-info .toast-icon { color: var(--primary); }

        .toast-message {
          flex: 1;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-main);
        }

        .toast-close {
          color: var(--text-muted);
          transition: 0.2s;
          display: flex;
        }

        .toast-close:hover {
          color: var(--text-main);
        }

        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @media (max-width: 600px) {
          .toast-container {
            bottom: 16px;
            right: 16px;
            left: 16px;
          }
          .toast {
            max-width: none;
            width: 100%;
          }
        }
      `})]})}},34285:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\app\\\\ClientLayout.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\app\\ClientLayout.jsx","default")},98180:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>n});var s=r(62740);r(61135);var o=r(34285),a=r(97565);let n={title:"Tiny PDF Tools - Free Online PDF Tools | Merge, Split, Compress",description:"Free online PDF tools that run 100% in your browser. Merge, split, compress PDFs, convert PDF to images and images to PDF. No uploads, no accounts — 100% private.",openGraph:{title:"Tiny PDF Tools - Free Online PDF Tools",description:"Merge, split, compress PDFs and convert between PDF and images. 100% client-side, no uploads required.",url:"https://tinypdftools.com",siteName:"Tiny PDF Tools",type:"website"},twitter:{card:"summary_large_image",title:"Tiny PDF Tools - Free Online PDF Tools",description:"Free PDF tools that run entirely in your browser. No uploads, 100% private."}};function i({children:e}){return(0,s.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,s.jsxs)("head",{children:[(0,s.jsx)("meta",{name:"google-site-verification",content:"zIQyJOap2T4-CAKlwe-RWKcDO7VZlh0nh-khv_TTSjA"}),(0,s.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,s.jsx)("meta",{name:"theme-color",content:"#e8432a"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",rel:"stylesheet"}),(0,s.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3166995085202346",crossOrigin:"anonymous"}),(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:`
          (function() {
            var t = localStorage.getItem('theme');
            if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', t);
          })();
        `}})]}),(0,s.jsxs)("body",{children:[(0,s.jsx)(a.ToastProvider,{children:(0,s.jsx)(o.default,{children:e})}),(0,s.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-20YF1S3X16"}),(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-20YF1S3X16');
        `}})]})]})}},97565:(e,t,r)=>{"use strict";r.d(t,{ToastProvider:()=>o});var s=r(46760);(0,s.registerClientReference)(function(){throw Error("Attempted to call useToast() from the server but useToast is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\ToastContext.jsx","useToast");let o=(0,s.registerClientReference)(function(){throw Error("Attempted to call ToastProvider() from the server but ToastProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\ToastContext.jsx","ToastProvider")},61135:()=>{}};