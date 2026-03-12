(()=>{var e={};e.id=364,e.ids=[364],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},42347:(e,o,r)=>{"use strict";r.r(o),r.d(o,{GlobalError:()=>a.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>c});var t=r(70260),s=r(28203),n=r(25155),a=r.n(n),i=r(67292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(o,l);let c=["",{children:["unlock-pdf",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,45981)),"C:\\Projects\\pdftoolkit\\src\\app\\unlock-pdf\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Projects\\pdftoolkit\\src\\app\\unlock-pdf\\page.jsx"],p={require:r,loadChunk:()=>Promise.resolve()},u=new t.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/unlock-pdf/page",pathname:"/unlock-pdf",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},52300:(e,o,r)=>{Promise.resolve().then(r.bind(r,43653))},58380:(e,o,r)=>{Promise.resolve().then(r.bind(r,25271))},69208:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41680).A)("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]])},21956:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41680).A)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},92557:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});let t=(0,r(41680).A)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},25271:(e,o,r)=>{"use strict";r.d(o,{default:()=>v});var t=r(45512),s=r(58009),n=r(201),a=r(35167),i=r(92557);let l=(0,r(41680).A)("key-round",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);var c=r(69208),d=r(21956),p=r(19473),u=r(41041),f=r(66790),m=r(13294),h=r(6764),y=r(3456),k=r(83724),w=r(48079);let x=[{q:"How does PDF unlocking work?",a:"You provide the password for the protected PDF. The tool decrypts it in your browser and saves a new copy without any password protection."},{q:"Can I unlock a PDF without the password?",a:"No. You must know the correct password. This tool is designed for removing protection from PDFs you own — not for bypassing security."},{q:"Are my files uploaded to a server?",a:"No. All decryption happens 100% in your browser. Your files and passwords never leave your device."},{q:"Will unlocking change the PDF content?",a:"No. The content, formatting, images, and text remain exactly the same. Only the password protection is removed."},{q:"What if I enter the wrong password?",a:"The tool will show an error message. Simply re-enter the correct password and try again."}],v=()=>{(0,u.d)();let[e,o]=(0,s.useState)(null),[r,v]=(0,s.useState)(""),[g,b]=(0,s.useState)(!1),[j,P]=(0,s.useState)(!1),[A,D]=(0,s.useState)(!1),[F,N]=(0,s.useState)(""),C=(0,s.useCallback)(e=>{let r=e.find(e=>"application/pdf"===e.type);r&&(o(r),D(!1),N(""))},[]),_=async()=>{if(e&&r.trim()){P(!0),N("");try{let o=await e.arrayBuffer(),t=await n.PDFDocument.load(o,{password:r,ignoreEncryption:!1}),s=await t.save(),a=new Blob([s],{type:"application/pdf"}),i=URL.createObjectURL(a),l=document.createElement("a");l.href=i,l.download=e.name.replace(".pdf","-unlocked.pdf"),l.click(),URL.revokeObjectURL(i),D(!0)}catch(e){e.message&&(e.message.includes("password")||e.message.includes("decrypt")||e.message.includes("encrypted"))?N("Incorrect password. Please check and try again."):N("Error unlocking PDF: "+e.message)}finally{P(!1)}}},E=e&&r.trim().length>0;return(0,t.jsxs)("div",{className:"tool-page",children:[(0,t.jsx)(h.A,{title:"Unlock PDF — Remove Password Protection Online for Free | Tiny PDF Tools",description:"Remove password protection from your PDF files. Enter the password you know, get an unlocked copy. 100% free, no uploads, runs in your browser.",canonicalUrl:"https://tinypdftools.com/unlock-pdf",schemaType:"WebApplication",schemaData:{name:"Unlock PDF",url:"https://tinypdftools.com/unlock-pdf",applicationCategory:"Utility",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},description:"Remove PDF password protection securely in your browser. 100% free and private."}}),(0,t.jsxs)("div",{className:"tool-header",children:[(0,t.jsx)("h1",{className:"tool-title",children:"Unlock PDF"}),(0,t.jsx)("p",{className:"tool-desc",children:"Remove password protection from your PDF files. Enter the password you know, get an unlocked copy — 100% in your browser."})]}),(0,t.jsx)(w.A,{paragraphs:["Remove password protection from PDF files that you own. If you have the correct password but want to create an unlocked copy for easier access, this tool decrypts the document and saves a new, password-free version.","Enter the existing password, and the tool creates an unprotected copy. This is useful when you frequently reference a password-protected document. The decryption runs entirely in your browser — your password and document never leave your device."],bestFor:["Frequently accessed documents","Document archiving","Removing own passwords","Team sharing"]}),e?(0,t.jsxs)("div",{className:"unlock-workspace",children:[(0,t.jsxs)("div",{className:"unlock-file-info",children:[(0,t.jsx)(a.A,{size:24,className:"unlock-file-icon"}),(0,t.jsxs)("div",{className:"unlock-file-details",children:[(0,t.jsx)("span",{className:"unlock-file-name",children:e.name}),(0,t.jsxs)("span",{className:"unlock-file-size",children:[(e.size/1024).toFixed(0)," KB"]})]}),(0,t.jsxs)("button",{className:"btn-secondary",onClick:()=>{o(null),v(""),D(!1),N(""),b(!1)},style:{marginLeft:"auto"},children:[(0,t.jsx)(i.A,{size:14})," Change File"]})]}),(0,t.jsxs)("div",{className:"unlock-password-section",children:[(0,t.jsxs)("label",{className:"unlock-label",htmlFor:"unlock-password",children:[(0,t.jsx)(l,{size:16})," Enter PDF Password"]}),(0,t.jsx)("p",{className:"unlock-hint",children:"Enter the password used to protect this PDF."}),(0,t.jsxs)("div",{className:"unlock-password-wrap",children:[(0,t.jsx)("input",{id:"unlock-password",type:g?"text":"password",className:"unlock-password-input",value:r,onChange:e=>{v(e.target.value),D(!1),N("")},placeholder:"Enter password",autoComplete:"off",onKeyDown:e=>{"Enter"===e.key&&E&&_()}}),(0,t.jsx)("button",{type:"button",className:"unlock-toggle-btn",onClick:()=>b(e=>!e),"aria-label":g?"Hide password":"Show password",children:g?(0,t.jsx)(c.A,{size:18}):(0,t.jsx)(d.A,{size:18})})]}),F&&(0,t.jsx)("p",{className:"unlock-error",children:F})]}),(0,t.jsx)("div",{className:"unlock-actions",children:(0,t.jsxs)("button",{className:"btn-primary",onClick:_,disabled:!E||j,children:[(0,t.jsx)(p.A,{size:18}),j?"Unlocking...":A?"✓ Unlocked! Download Again":"Unlock & Download"]})})]}):(0,t.jsx)(f.A,{onFiles:C,accept:".pdf",multiple:!1,label:"Drop your password-protected PDF here"}),(0,t.jsx)(y.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE||"",className:"tool-inline-ad"}),(0,t.jsx)(m.A,{faqs:x}),(0,t.jsx)(k.A,{currentToolId:"unlock-pdf"}),(0,t.jsx)("style",{children:`
        .unlock-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }
        .unlock-file-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .unlock-file-icon {
          color: #22c55e;
          flex-shrink: 0;
        }
        .unlock-file-details {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .unlock-file-name {
          font-weight: 600;
          font-size: 0.95rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .unlock-file-size {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .unlock-password-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .unlock-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }
        .unlock-hint {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .unlock-password-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .unlock-password-input {
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
        .unlock-password-input:focus {
          border-color: #22c55e;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
        }
        .unlock-toggle-btn {
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
        .unlock-toggle-btn:hover {
          color: var(--text-main);
          background: var(--bg-surface);
        }
        .unlock-error {
          font-size: 0.85rem;
          color: var(--error);
          font-weight: 500;
        }
        .unlock-actions {
          display: flex;
          justify-content: center;
        }
      `})]})}},45981:(e,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>a,metadata:()=>n});var t=r(62740),s=r(43653);let n={title:"Unlock PDF — Remove Password Protection Online for Free | Tiny PDF Tools",description:"Remove password protection from your PDF files. Enter the password you know, get an unlocked copy. 100% free, no uploads, runs in your browser.",alternates:{canonical:"https://tinypdftools.com/unlock-pdf"}};function a(){return(0,t.jsx)(s.default,{})}},43653:(e,o,r)=>{"use strict";r.d(o,{default:()=>t});let t=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\UnlockPdf.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\UnlockPdf.jsx","default")}};var o=require("../../webpack-runtime.js");o.C(e);var r=e=>o(o.s=e),t=o.X(0,[406,844,201,508,301],()=>r(42347));module.exports=t})();