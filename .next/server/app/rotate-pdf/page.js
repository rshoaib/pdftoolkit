(()=>{var e={};e.id=283,e.ids=[283],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},34225:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>p,routeModule:()=>u,tree:()=>d});var o=a(70260),r=a(28203),s=a(25155),i=a.n(s),n=a(67292),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);a.d(t,l);let d=["",{children:["rotate-pdf",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,27622)),"C:\\Projects\\pdftoolkit\\src\\app\\rotate-pdf\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\Projects\\pdftoolkit\\src\\app\\rotate-pdf\\page.jsx"],c={require:a,loadChunk:()=>Promise.resolve()},u=new o.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/rotate-pdf/page",pathname:"/rotate-pdf",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2137:(e,t,a)=>{Promise.resolve().then(a.bind(a,69310))},38585:(e,t,a)=>{Promise.resolve().then(a.bind(a,19570))},92557:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});let o=(0,a(41680).A)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},19570:(e,t,a)=>{"use strict";a.d(t,{default:()=>g});var o=a(45512),r=a(58009),s=a(201),i=a(96005),n=a(92557),l=a(19473),d=a(41041),p=a(66790),c=a(13294),u=a(6764),f=a(3456),m=a(83724),h=a(48079);let x=[{q:"How do I rotate a PDF?",a:'Upload your PDF, choose the rotation angle (90\xb0, 180\xb0, or 270\xb0), then click "Rotate & Download". The rotated PDF downloads instantly.'},{q:"Can I rotate individual pages?",a:"Currently all pages are rotated by the same angle. Upload, rotate, and download — it takes seconds."},{q:"Are my files uploaded to a server?",a:"No. All processing happens 100% in your browser. Your files never leave your device."},{q:"Does rotation affect PDF quality?",a:"No. Rotation is a lossless operation — text, images, and vectors remain perfectly intact."}],v=[{label:"90\xb0 Clockwise",value:90},{label:"180\xb0",value:180},{label:"90\xb0 Counter-clockwise",value:270}],g=()=>{let e=(0,d.d)(),[t,a]=(0,r.useState)(null),[g,y]=(0,r.useState)(90),[b,j]=(0,r.useState)(!1),[P,w]=(0,r.useState)(!1),k=(0,r.useCallback)(e=>{let t=e.find(e=>"application/pdf"===e.type);t&&(a(t),w(!1))},[]),D=async()=>{if(t){j(!0);try{let e=await t.arrayBuffer(),a=await s.PDFDocument.load(e);a.getPages().forEach(e=>{let t=e.getRotation().angle;e.setRotation((0,s.degrees)(t+g))});let o=await a.save(),r=new Blob([o],{type:"application/pdf"}),i=URL.createObjectURL(r),n=document.createElement("a");n.href=i,n.download=t.name.replace(".pdf","-rotated.pdf"),n.click(),URL.revokeObjectURL(i),w(!0)}catch(t){e.error("Error rotating PDF: "+t.message)}finally{j(!1)}}};return(0,o.jsxs)("div",{className:"tool-page",children:[(0,o.jsx)(u.A,{title:"Rotate PDF — Rotate PDF Pages Online for Free | Tiny PDF Tools",description:"Rotate all pages in your PDF by 90\xb0, 180\xb0, or 270\xb0. Lossless rotation, instant download. 100% free, no uploads.",canonicalUrl:"https://tinypdftools.com/rotate-pdf",schemaType:"WebApplication",schemaData:{name:"Rotate PDF",url:"https://tinypdftools.com/rotate-pdf",applicationCategory:"Utility",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},description:"Rotate all PDF pages by 90\xb0, 180\xb0, or 270\xb0. Lossless, instant. 100% free and private."}}),(0,o.jsxs)("div",{className:"tool-header",children:[(0,o.jsx)("h1",{className:"tool-title",children:"Rotate PDF"}),(0,o.jsx)("p",{className:"tool-desc",children:"Rotate all pages in your PDF by 90\xb0, 180\xb0, or 270\xb0. Lossless and instant."})]}),(0,o.jsx)(h.A,{paragraphs:["Fix wrongly oriented PDF pages by rotating them 90\xb0, 180\xb0, or 270\xb0 clockwise. This commonly happens with scanned documents, mobile photos converted to PDF, or documents saved in landscape format that should be portrait.","The rotation is lossless — it modifies only the page orientation metadata without re-encoding the content. Your text, images, and formatting remain pixel-perfect. The operation is instant and runs entirely in your browser."],bestFor:["Scanned documents","Mobile captures","Landscape-to-portrait fixes","Presentation formatting"]}),t?(0,o.jsxs)("div",{className:"rotate-workspace",children:[(0,o.jsxs)("div",{className:"rotate-file-info",children:[(0,o.jsx)(i.A,{size:24,className:"rotate-file-icon"}),(0,o.jsxs)("div",{className:"rotate-file-details",children:[(0,o.jsx)("span",{className:"rotate-file-name",children:t.name}),(0,o.jsxs)("span",{className:"rotate-file-size",children:[(t.size/1024).toFixed(0)," KB"]})]}),(0,o.jsxs)("button",{className:"btn-secondary",onClick:()=>{a(null),w(!1)},style:{marginLeft:"auto"},children:[(0,o.jsx)(n.A,{size:14})," Change File"]})]}),(0,o.jsxs)("div",{className:"rotate-options",children:[(0,o.jsx)("label",{className:"rotate-label",children:"Rotation Angle"}),(0,o.jsx)("div",{className:"rotate-buttons",children:v.map(e=>(0,o.jsxs)("button",{className:`rotate-option ${g===e.value?"rotate-option-active":""}`,onClick:()=>y(e.value),children:[(0,o.jsx)(i.A,{size:16,style:{transform:`rotate(${e.value}deg)`}}),e.label]},e.value))})]}),(0,o.jsx)("div",{className:"rotate-actions",children:(0,o.jsxs)("button",{className:"btn-primary",onClick:D,disabled:b,children:[(0,o.jsx)(l.A,{size:18}),b?"Rotating...":P?"✓ Done! Download Again":"Rotate & Download"]})})]}):(0,o.jsx)(p.A,{onFiles:k,accept:".pdf",multiple:!1,label:"Drop your PDF file here to rotate"}),(0,o.jsx)(f.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE||"",className:"tool-inline-ad"}),(0,o.jsx)(c.A,{faqs:x}),(0,o.jsx)(m.A,{currentToolId:"rotate-pdf"}),(0,o.jsx)("style",{children:`
        .rotate-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
        }
        .rotate-file-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .rotate-file-icon {
          color: var(--primary);
          flex-shrink: 0;
        }
        .rotate-file-details {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .rotate-file-name {
          font-weight: 600;
          font-size: 0.95rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .rotate-file-size {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .rotate-options {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .rotate-label {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }
        .rotate-buttons {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
        }
        .rotate-option {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
          transition: var(--transition-fast);
          cursor: pointer;
        }
        .rotate-option:hover {
          border-color: var(--border-active);
          color: var(--text-main);
        }
        .rotate-option-active {
          border-color: var(--primary);
          color: var(--primary);
          background: var(--primary-glow);
        }
        .rotate-actions {
          display: flex;
          justify-content: center;
        }
        @media (max-width: 520px) {
          .rotate-buttons {
            flex-direction: column;
          }
        }
      `})]})}},27622:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i,metadata:()=>s});var o=a(62740),r=a(69310);let s={title:"Rotate PDF — Rotate PDF Pages Online for Free | Tiny PDF Tools",description:"Rotate all pages in your PDF by 90\xb0, 180\xb0, or 270\xb0. Lossless rotation, instant download. 100% free, no uploads.",alternates:{canonical:"https://tinypdftools.com/rotate-pdf"}};function i(){return(0,o.jsx)(r.default,{})}},69310:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});let o=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\RotatePdf.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\RotatePdf.jsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),o=t.X(0,[406,844,201,508,301],()=>a(34225));module.exports=o})();