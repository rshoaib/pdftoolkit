(()=>{var e={};e.id=713,e.ids=[713],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},72897:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>g,tree:()=>d});var a=t(70260),o=t(28203),n=t(25155),i=t.n(n),s=t(67292),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);t.d(r,l);let d=["",{children:["organize-pdf",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,70316)),"C:\\Projects\\pdftoolkit\\src\\app\\organize-pdf\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Projects\\pdftoolkit\\src\\app\\organize-pdf\\page.jsx"],p={require:t,loadChunk:()=>Promise.resolve()},g=new a.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/organize-pdf/page",pathname:"/organize-pdf",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},80739:(e,r,t)=>{Promise.resolve().then(t.bind(t,2840))},94811:(e,r,t)=>{Promise.resolve().then(t.bind(t,7758))},28496:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});let a=(0,t(41680).A)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},7758:(e,r,t)=>{"use strict";t.d(r,{default:()=>b});var a=t(45512),o=t(58009),n=t(201);t(77181);var i=t(31904);let s=(0,t(41680).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var l=t(49656),d=t(28496),c=t(19473),p=t(41041),g=t(66790),u=t(13294),m=t(6764),f=t(3456),h=t(83724),x=t(48079);let v=[{q:"How do I rearrange PDF pages?",a:'Upload your PDF, then drag and drop the page thumbnails into the order you want. Click "Save & Download" when you\'re done.'},{q:"Can I delete specific pages?",a:"Yes! Click the trash icon on any page thumbnail to remove it from the document."},{q:"Can I duplicate a page?",a:"Absolutely. Click the copy icon on a page thumbnail to insert a duplicate right after it."},{q:"Does this affect the original quality?",a:"No. Pages are copied byte-for-byte — no re-encoding, compression, or quality loss occurs."}],b=()=>{let e=(0,p.d)(),[r,b]=(0,o.useState)(null),[y,j]=(0,o.useState)([]),[w,D]=(0,o.useState)(!1),[P,k]=(0,o.useState)(!1),[C,z]=(0,o.useState)(null),N=(0,o.useRef)(null),A=(0,o.useRef)(null),_=(0,o.useCallback)(e=>{let r=e.find(e=>"application/pdf"===e.type);r&&(b(r),j([]))},[]);(0,o.useEffect)(()=>{if(!r)return;let e=!1;return(async()=>{D(!0);let a=await r.arrayBuffer();z(new Uint8Array(a));let o=await Promise.resolve().then(t.bind(t,77181));o.GlobalWorkerOptions.workerSrc="/pdf.worker.min.mjs";let n=await o.getDocument({data:a}).promise,i=[];for(let r=1;r<=n.numPages;r++){let t=await n.getPage(r),a=t.getViewport({scale:.3}),o=document.createElement("canvas");o.width=a.width,o.height=a.height;let s=o.getContext("2d");if(await t.render({canvasContext:s,viewport:a}).promise,i.push({id:`page-${r}-${Date.now()}`,originalIndex:r-1,thumbnail:o.toDataURL("image/jpeg",.7),label:`Page ${r}`}),e)return}j(i),D(!1)})().catch(e=>{console.error(e),D(!1)}),()=>{e=!0}},[r]);let F=e=>{N.current=e},R=e=>{A.current=e},q=()=>{if(null===N.current||null===A.current)return;let e=N.current,r=A.current;if(e===r){N.current=null,A.current=null;return}j(t=>{let a=[...t],[o]=a.splice(e,1);return a.splice(r,0,o),a}),N.current=null,A.current=null},O=e=>{y.length<=1||j(r=>r.filter((r,t)=>t!==e))},E=e=>{j(r=>{let t={...r[e],id:`page-dup-${Date.now()}-${e}`},a=[...r];return a.splice(e+1,0,t),a})},S=async()=>{if(0!==y.length&&C){k(!0);try{let e=await n.PDFDocument.load(C),t=await n.PDFDocument.create(),a=y.map(e=>e.originalIndex);(await t.copyPages(e,a)).forEach(e=>t.addPage(e));let o=await t.save(),i=new Blob([o],{type:"application/pdf"}),s=URL.createObjectURL(i),l=document.createElement("a");l.href=s,l.download=`organized_${r.name}`,l.click(),URL.revokeObjectURL(s)}catch(r){e.error("Error saving PDF: "+r.message)}finally{k(!1)}}};return(0,a.jsxs)("div",{className:"tool-page",children:[(0,a.jsx)(m.A,{title:"Organize PDF — Rearrange, Delete & Duplicate Pages Online | Tiny PDF Tools",description:"Drag and drop to reorder PDF pages, delete unwanted pages, or duplicate them. 100% free, no uploads, runs in your browser.",canonicalUrl:"https://tinypdftools.com/organize-pdf",schemaType:"WebApplication",schemaData:{name:"Organize PDF",url:"https://tinypdftools.com/organize-pdf",applicationCategory:"Utility",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},description:"Drag and drop to reorder PDF pages, delete unwanted pages, or duplicate them. 100% free and private."}}),(0,a.jsxs)("div",{className:"tool-header",children:[(0,a.jsx)("h1",{className:"tool-title",children:"Organize PDF"}),(0,a.jsx)("p",{className:"tool-desc",children:"Drag & drop to rearrange pages, delete or duplicate — then download your reorganized PDF."})]}),(0,a.jsx)(x.A,{paragraphs:["Rearrange, delete, or duplicate pages within a PDF using an intuitive drag-and-drop interface. This gives you complete control over your document's page order without needing to split and merge manually.","Visual page thumbnails make it easy to identify and move pages. Delete unwanted pages, duplicate important ones, or reorder sections to create the exact document structure you need. Changes are applied instantly in your browser."],bestFor:["Report restructuring","Removing blank pages","Reordering sections","Document cleanup"]}),r?w?(0,a.jsxs)("div",{className:"org-loading",children:[(0,a.jsx)("div",{className:"org-spinner"}),(0,a.jsx)("p",{children:"Loading page previews…"})]}):(0,a.jsxs)("div",{className:"org-workspace",children:[(0,a.jsx)("div",{className:"org-controls",children:(0,a.jsxs)("div",{className:"org-info",children:[(0,a.jsx)("span",{className:"org-filename",children:r.name}),(0,a.jsxs)("span",{className:"org-pages",children:[y.length," pages"]})]})}),(0,a.jsx)("div",{className:"org-grid",children:y.map((e,r)=>(0,a.jsxs)("div",{className:"org-card",draggable:!0,onDragStart:()=>F(r),onDragEnter:()=>R(r),onDragEnd:q,onDragOver:e=>e.preventDefault(),children:[(0,a.jsx)("div",{className:"org-card-grip",children:(0,a.jsx)(i.A,{size:16})}),(0,a.jsx)("img",{src:e.thumbnail,alt:e.label,className:"org-card-img"}),(0,a.jsxs)("div",{className:"org-card-footer",children:[(0,a.jsx)("span",{className:"org-card-label",children:e.label}),(0,a.jsxs)("div",{className:"org-card-actions",children:[(0,a.jsx)("button",{title:"Duplicate page",className:"org-action-btn",onClick:()=>E(r),children:(0,a.jsx)(s,{size:14})}),(0,a.jsx)("button",{title:"Delete page",className:"org-action-btn org-action-delete",onClick:()=>O(r),disabled:y.length<=1,children:(0,a.jsx)(l.A,{size:14})})]})]})]},e.id))}),(0,a.jsxs)("div",{className:"org-actions",children:[(0,a.jsxs)("button",{className:"btn-secondary",onClick:()=>{b(null),j([]),z(null),D(!1)},children:[(0,a.jsx)(d.A,{size:16})," Choose Different File"]}),(0,a.jsxs)("button",{className:"btn-primary",onClick:S,disabled:0===y.length||P,children:[(0,a.jsx)(c.A,{size:18}),P?"Saving…":`Save & Download (${y.length} pages)`]})]})]}):(0,a.jsx)(g.A,{onFiles:_,accept:".pdf",multiple:!1,label:"Drop your PDF file here to organize pages"}),(0,a.jsx)(f.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE||"",className:"tool-inline-ad"}),(0,a.jsx)(u.A,{faqs:v}),(0,a.jsx)(h.A,{currentToolId:"organize-pdf"}),(0,a.jsx)("style",{children:`
        .tool-page { display: flex; flex-direction: column; gap: var(--spacing-xl); }
        .tool-header { text-align: center; padding: var(--spacing-lg) 0; }
        .tool-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .tool-desc { color: var(--text-muted); font-size: 1.05rem; }

        /* Loading */
        .org-loading {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          padding: var(--spacing-xxl); color: var(--text-muted);
        }
        .org-spinner {
          width: 40px; height: 40px; border: 3px solid var(--border-light);
          border-top-color: var(--primary); border-radius: 50%;
          animation: org-spin 0.8s linear infinite;
        }
        @keyframes org-spin { to { transform: rotate(360deg); } }

        /* Workspace */
        .org-workspace { display: flex; flex-direction: column; gap: var(--spacing-lg); }
        .org-controls {
          padding: var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
        }
        .org-info { display: flex; justify-content: space-between; align-items: center; }
        .org-filename { font-weight: 700; font-size: 1.05rem; }
        .org-pages { color: var(--text-muted); font-size: 0.9rem; }

        /* Grid */
        .org-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: var(--spacing-md);
        }

        /* Card */
        .org-card {
          position: relative; cursor: grab;
          border: 2px solid var(--border-light); border-radius: var(--radius-md);
          overflow: hidden; transition: var(--transition-fast);
          background: var(--bg-panel);
        }
        .org-card:hover { border-color: var(--border-active); transform: translateY(-2px); box-shadow: var(--shadow-glow); }
        .org-card:active { cursor: grabbing; }

        .org-card-grip {
          position: absolute; top: 6px; left: 6px;
          color: var(--text-dim); opacity: 0.6;
          background: var(--bg-panel); border-radius: 4px; padding: 2px;
        }

        .org-card-img { width: 100%; display: block; pointer-events: none; }

        .org-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding: 6px 8px; font-size: 0.8rem; font-weight: 600; color: var(--text-muted);
        }

        .org-card-actions { display: flex; gap: 4px; }

        .org-action-btn {
          display: flex; align-items: center; justify-content: center;
          width: 26px; height: 26px; border-radius: var(--radius-sm);
          color: var(--text-muted); background: var(--bg-surface);
          border: 1px solid var(--border-light); cursor: pointer;
          transition: var(--transition-fast);
        }
        .org-action-btn:hover { color: var(--primary); border-color: var(--primary); }
        .org-action-delete:hover { color: #ef4444; border-color: #ef4444; }
        .org-action-btn:disabled { opacity: 0.3; pointer-events: none; }

        .org-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .org-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); }
        }
      `})]})}},70316:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i,metadata:()=>n});var a=t(62740),o=t(2840);let n={title:"Organize PDF — Rearrange, Delete & Duplicate Pages Online | Tiny PDF Tools",description:"Drag and drop to reorder PDF pages, delete unwanted pages, or duplicate them. 100% free, no uploads, runs in your browser.",alternates:{canonical:"https://tinypdftools.com/organize-pdf"}};function i(){return(0,a.jsx)(o.default,{})}},2840:(e,r,t)=>{"use strict";t.d(r,{default:()=>a});let a=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\OrganizePdf.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\OrganizePdf.jsx","default")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[406,844,201,181,508,301],()=>t(72897));module.exports=a})();