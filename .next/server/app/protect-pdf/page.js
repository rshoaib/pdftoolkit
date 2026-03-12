(()=>{var e={};e.id=833,e.ids=[833],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},95297:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>l,pages:()=>c,routeModule:()=>u,tree:()=>d});var o=r(70260),s=r(28203),a=r(25155),i=r.n(a),n=r(67292),p={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(p[e]=()=>n[e]);r.d(t,p);let d=["",{children:["protect-pdf",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,87172)),"C:\\Projects\\pdftoolkit\\src\\app\\protect-pdf\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Projects\\pdftoolkit\\src\\app\\protect-pdf\\page.jsx"],l={require:r,loadChunk:()=>Promise.resolve()},u=new o.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/protect-pdf/page",pathname:"/protect-pdf",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},92359:(e,t,r)=>{Promise.resolve().then(r.bind(r,90494))},74207:(e,t,r)=>{Promise.resolve().then(r.bind(r,43738))},69208:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41680).A)("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]])},21956:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41680).A)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},92557:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41680).A)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},79365:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(41680).A)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},43738:(e,t,r)=>{"use strict";r.d(t,{default:()=>g});var o=r(45512),s=r(58009),a=r(201),i=r(72734),n=r(92557),p=r(79365),d=r(69208),c=r(21956),l=r(19473),u=r(41041),f=r(66790),m=r(13294),h=r(6764),y=r(3456),x=r(83724),w=r(48079);let v=[{q:"How does PDF password protection work?",a:"A user password is required to open the PDF. An owner password controls editing permissions. Both are set during protection."},{q:"Can I remove password protection later?",a:"Yes — open the protected PDF with the owner password in any PDF viewer and save it without protection."},{q:"Are my files uploaded to a server?",a:"No. All encryption happens 100% in your browser. Your files and passwords never leave your device."},{q:"What encryption level is used?",a:"pdf-lib uses AES-256 encryption, which is the industry standard for secure PDF documents."}],g=()=>{let e=(0,u.d)(),[t,r]=(0,s.useState)(null),[g,b]=(0,s.useState)(""),[P,j]=(0,s.useState)(!1),[A,k]=(0,s.useState)(!1),[F,D]=(0,s.useState)(!1),C=(0,s.useCallback)(e=>{let t=e.find(e=>"application/pdf"===e.type);t&&(r(t),D(!1))},[]),N=async()=>{if(t&&g.trim()){k(!0);try{let e=await t.arrayBuffer(),r=await a.PDFDocument.load(e),o=await r.save({userPassword:g,ownerPassword:g}),s=new Blob([o],{type:"application/pdf"}),i=URL.createObjectURL(s),n=document.createElement("a");n.href=i,n.download=t.name.replace(".pdf","-protected.pdf"),n.click(),URL.revokeObjectURL(i),D(!0)}catch(t){e.error("Error protecting PDF: "+t.message)}finally{k(!1)}}},_=t&&g.trim().length>=4;return(0,o.jsxs)("div",{className:"tool-page",children:[(0,o.jsx)(h.A,{title:"Protect PDF — Add Password to PDF Online for Free | Tiny PDF Tools",description:"Add password protection with AES-256 encryption to your PDFs. 100% free, no uploads — encryption runs in your browser.",canonicalUrl:"https://tinypdftools.com/protect-pdf",schemaType:"WebApplication",schemaData:{name:"Protect PDF",url:"https://tinypdftools.com/protect-pdf",applicationCategory:"Utility",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},description:"Add AES-256 password protection to your PDFs. 100% free and private."}}),(0,o.jsxs)("div",{className:"tool-header",children:[(0,o.jsx)("h1",{className:"tool-title",children:"Protect PDF"}),(0,o.jsx)("p",{className:"tool-desc",children:"Add password protection to your PDF files. AES-256 encryption, 100% in your browser."})]}),(0,o.jsx)(w.A,{paragraphs:["Add password protection and AES-256 encryption to your PDF files. This prevents unauthorized users from opening, copying, or printing your sensitive documents. Essential for contracts, financial reports, medical records, and any confidential material shared digitally.","You set the password, and the tool encrypts the entire document in your browser. The encrypted PDF can only be opened by someone who knows the password. Since encryption happens client-side, your unprotected document is never sent to any server."],bestFor:["Contracts and agreements","Financial documents","Medical records","Confidential reports"]}),t?(0,o.jsxs)("div",{className:"protect-workspace",children:[(0,o.jsxs)("div",{className:"protect-file-info",children:[(0,o.jsx)(i.A,{size:24,className:"protect-file-icon"}),(0,o.jsxs)("div",{className:"protect-file-details",children:[(0,o.jsx)("span",{className:"protect-file-name",children:t.name}),(0,o.jsxs)("span",{className:"protect-file-size",children:[(t.size/1024).toFixed(0)," KB"]})]}),(0,o.jsxs)("button",{className:"btn-secondary",onClick:()=>{r(null),b(""),D(!1),j(!1)},style:{marginLeft:"auto"},children:[(0,o.jsx)(n.A,{size:14})," Change File"]})]}),(0,o.jsxs)("div",{className:"protect-password-section",children:[(0,o.jsxs)("label",{className:"protect-label",htmlFor:"pdf-password",children:[(0,o.jsx)(p.A,{size:16})," Set Password"]}),(0,o.jsx)("p",{className:"protect-hint",children:"Minimum 4 characters. Choose a strong, memorable password."}),(0,o.jsxs)("div",{className:"protect-password-wrap",children:[(0,o.jsx)("input",{id:"pdf-password",type:P?"text":"password",className:"protect-password-input",value:g,onChange:e=>{b(e.target.value),D(!1)},placeholder:"Enter password",autoComplete:"off"}),(0,o.jsx)("button",{type:"button",className:"protect-toggle-btn",onClick:()=>j(e=>!e),"aria-label":P?"Hide password":"Show password",children:P?(0,o.jsx)(d.A,{size:18}):(0,o.jsx)(c.A,{size:18})})]}),g.length>0&&g.length<4&&(0,o.jsx)("p",{className:"protect-error",children:"Password must be at least 4 characters"})]}),(0,o.jsx)("div",{className:"protect-actions",children:(0,o.jsxs)("button",{className:"btn-primary",onClick:N,disabled:!_||A,children:[(0,o.jsx)(l.A,{size:18}),A?"Encrypting...":F?"✓ Protected! Download Again":"Protect & Download"]})})]}):(0,o.jsx)(f.A,{onFiles:C,accept:".pdf",multiple:!1,label:"Drop your PDF file here to protect"}),(0,o.jsx)(y.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE||"",className:"tool-inline-ad"}),(0,o.jsx)(m.A,{faqs:v}),(0,o.jsx)(x.A,{currentToolId:"protect-pdf"}),(0,o.jsx)("style",{children:`
        .protect-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }
        .protect-file-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .protect-file-icon {
          color: var(--primary);
          flex-shrink: 0;
        }
        .protect-file-details {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .protect-file-name {
          font-weight: 600;
          font-size: 0.95rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .protect-file-size {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .protect-password-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .protect-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }
        .protect-hint {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .protect-password-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .protect-password-input {
          width: 100%;
          padding: 12px 48px 12px 16px;
          font-size: 1rem;
          font-family: inherit;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          color: var(--text-main);
          transition: var(--transition-fast);
          outline: none;
        }
        .protect-password-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-glow);
        }
        .protect-toggle-btn {
          position: absolute;
          right: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          padding: 4px;
          border-radius: var(--radius-sm);
          transition: var(--transition-fast);
        }
        .protect-toggle-btn:hover {
          color: var(--text-main);
          background: var(--bg-surface);
        }
        .protect-error {
          font-size: 0.85rem;
          color: var(--error);
          font-weight: 500;
        }
        .protect-actions {
          display: flex;
          justify-content: center;
        }
      `})]})}},87172:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>a});var o=r(62740),s=r(90494);let a={title:"Protect PDF — Add Password to PDF Online for Free | Tiny PDF Tools",description:"Add password protection with AES-256 encryption to your PDFs. 100% free, no uploads — encryption runs in your browser.",alternates:{canonical:"https://tinypdftools.com/protect-pdf"}};function i(){return(0,o.jsx)(s.default,{})}},90494:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});let o=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\ProtectPdf.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\ProtectPdf.jsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[406,844,201,508,301],()=>r(95297));module.exports=o})();