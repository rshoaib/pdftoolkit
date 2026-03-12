(()=>{var e={};e.id=802,e.ids=[802],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},57959:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>c});var r=a(70260),s=a(28203),i=a(25155),n=a.n(i),o=a(67292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);a.d(t,l);let c=["",{children:["extract-pdf-pages",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,36955)),"C:\\Projects\\pdftoolkit\\src\\app\\extract-pdf-pages\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Projects\\pdftoolkit\\src\\app\\extract-pdf-pages\\page.jsx"],p={require:a,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/extract-pdf-pages/page",pathname:"/extract-pdf-pages",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},93053:(e,t,a)=>{Promise.resolve().then(a.bind(a,4418))},63197:(e,t,a)=>{Promise.resolve().then(a.bind(a,57070))},28496:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41680).A)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},26188:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41680).A)("square-check-big",[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},29650:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41680).A)("square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]])},57070:(e,t,a)=>{"use strict";a.d(t,{default:()=>v});var r=a(45512),s=a(58009),i=a(201);a(77181);var n=a(29650),o=a(26188),l=a(59445),c=a(28496),d=a(19473),p=a(41041),x=a(66790),g=a(13294),u=a(6764),m=a(3456),f=a(83724),h=a(48079);let y=[{q:"How do I extract pages from a PDF?",a:'Upload your PDF, click the pages you want to keep (they\'ll be highlighted in green), then click "Extract & Download".'},{q:"What's the difference between Extract and Split?",a:"Extract copies only the pages you select into a single new PDF. Split divides a PDF by page ranges into multiple files."},{q:"Will this reduce the quality of my PDF?",a:"No. Pages are copied byte-for-byte — zero re-encoding, zero quality loss."},{q:"Is there a page limit?",a:"No hard limits. Since everything runs in your browser, performance depends on your device."},{q:"Do my files get uploaded?",a:"Never. All processing happens 100% in your browser — your files never leave your device."}],v=()=>{let e=(0,p.d)(),[t,v]=(0,s.useState)(null),[b,w]=(0,s.useState)([]),[j,P]=(0,s.useState)(new Set),[k,D]=(0,s.useState)(!1),[F,A]=(0,s.useState)(!1),[N,S]=(0,s.useState)(null),z=(0,s.useCallback)(e=>{let t=e.find(e=>"application/pdf"===e.type);t&&(v(t),w([]),P(new Set))},[]);(0,s.useEffect)(()=>{if(!t)return;let e=!1;return(async()=>{D(!0);let r=await t.arrayBuffer();S(new Uint8Array(r));let s=await Promise.resolve().then(a.bind(a,77181));s.GlobalWorkerOptions.workerSrc="/pdf.worker.min.mjs";let i=await s.getDocument({data:r}).promise,n=[];for(let t=1;t<=i.numPages;t++){let a=await i.getPage(t),r=a.getViewport({scale:.3}),s=document.createElement("canvas");s.width=r.width,s.height=r.height;let o=s.getContext("2d");if(await a.render({canvasContext:o,viewport:r}).promise,n.push({index:t-1,thumbnail:s.toDataURL("image/jpeg",.7),label:`Page ${t}`}),e)return}w(n),D(!1)})().catch(e=>{console.error(e),D(!1)}),()=>{e=!0}},[t]);let C=e=>{P(t=>{let a=new Set(t);return a.has(e)?a.delete(e):a.add(e),a})},E=async()=>{if(0!==j.size&&N){A(!0);try{let e=await i.PDFDocument.load(N),a=await i.PDFDocument.create(),r=[...j].sort((e,t)=>e-t);(await a.copyPages(e,r)).forEach(e=>a.addPage(e));let s=await a.save(),n=new Blob([s],{type:"application/pdf"}),o=URL.createObjectURL(n),l=document.createElement("a");l.href=o,l.download=`extracted_${t.name}`,l.click(),URL.revokeObjectURL(o)}catch(t){e.error("Error: "+t.message)}finally{A(!1)}}};return(0,r.jsxs)("div",{className:"tool-page",children:[(0,r.jsx)(u.A,{title:"Extract PDF Pages — Pull Specific Pages from a PDF Online Free | Tiny PDF Tools",description:"Select and extract specific pages from any PDF into a new file. 100% free, no uploads — runs entirely in your browser.",canonicalUrl:"https://tinypdftools.com/extract-pdf-pages",schemaType:"WebApplication",schemaData:{name:"Extract PDF Pages",url:"https://tinypdftools.com/extract-pdf-pages",applicationCategory:"Utility",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},description:"Extract specific pages from a PDF. 100% free and private."}}),(0,r.jsxs)("div",{className:"tool-header",children:[(0,r.jsx)("h1",{className:"tool-title",children:"Extract PDF Pages"}),(0,r.jsx)("p",{className:"tool-desc",children:"Select the pages you want to keep, then download your new PDF."})]}),(0,r.jsx)(h.A,{paragraphs:["Select and extract specific pages from a PDF into a new, standalone file. Unlike splitting, extraction lets you pick individual pages by number or range — even non-consecutive pages — and combine them into a single output document.","This is perfect when you need specific pages from a large document without downloading the entire file. Browse page thumbnails, select the pages you need, and download a clean PDF containing only your selections."],bestFor:["Pulling specific pages","Creating document excerpts","Selective sharing","Reference compilation"]}),t?k?(0,r.jsxs)("div",{className:"ext-loading",children:[(0,r.jsx)("div",{className:"ext-spinner"}),(0,r.jsx)("p",{children:"Loading page previews…"})]}):(0,r.jsxs)("div",{className:"ext-workspace",children:[(0,r.jsxs)("div",{className:"ext-controls",children:[(0,r.jsxs)("div",{className:"ext-info",children:[(0,r.jsx)("span",{className:"ext-filename",children:t.name}),(0,r.jsx)("span",{className:"ext-stats",children:j.size>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("strong",{style:{color:"#059669"},children:[j.size," selected"]})," \xb7 ",b.length-j.size," excluded"]}):(0,r.jsxs)(r.Fragment,{children:[b.length," pages — click pages to select for extraction"]})})]}),(0,r.jsx)("button",{className:"btn-secondary btn-sm",onClick:()=>{j.size===b.length?P(new Set):P(new Set(b.map(e=>e.index)))},children:j.size===b.length?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{size:14})," Deselect All"]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{size:14})," Select All"]})})]}),(0,r.jsx)("div",{className:"ext-grid",children:b.map(e=>(0,r.jsxs)("div",{className:`ext-card ${j.has(e.index)?"ext-card-selected":""}`,onClick:()=>C(e.index),children:[(0,r.jsx)("img",{src:e.thumbnail,alt:e.label,className:"ext-card-img"}),(0,r.jsxs)("div",{className:"ext-card-footer",children:[(0,r.jsx)("span",{className:"ext-card-label",children:e.label}),j.has(e.index)?(0,r.jsx)(l.A,{size:14,style:{color:"#059669"}}):null]}),j.has(e.index)&&(0,r.jsx)("div",{className:"ext-card-overlay",children:"✓"})]},e.index))}),(0,r.jsxs)("div",{className:"ext-actions",children:[(0,r.jsxs)("button",{className:"btn-secondary",onClick:()=>{v(null),w([]),P(new Set),S(null)},children:[(0,r.jsx)(c.A,{size:16})," Choose Different File"]}),(0,r.jsxs)("button",{className:"btn-primary",onClick:E,disabled:0===j.size||F,children:[(0,r.jsx)(d.A,{size:18}),F?"Processing…":`Extract ${j.size} Page${1!==j.size?"s":""} & Download`]})]})]}):(0,r.jsx)(x.A,{onFiles:z,accept:".pdf",multiple:!1,label:"Drop your PDF file here to extract pages"}),(0,r.jsx)(m.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE||"",className:"tool-inline-ad"}),(0,r.jsx)(g.A,{faqs:y}),(0,r.jsx)(f.A,{currentToolId:"extract-pdf-pages"}),(0,r.jsx)("style",{children:`
        .tool-page { display: flex; flex-direction: column; gap: var(--spacing-xl); }
        .tool-header { text-align: center; padding: var(--spacing-lg) 0; }
        .tool-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .tool-desc { color: var(--text-muted); font-size: 1.05rem; }

        .ext-loading {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          padding: var(--spacing-xxl); color: var(--text-muted);
        }
        .ext-spinner {
          width: 40px; height: 40px; border: 3px solid var(--border-light);
          border-top-color: var(--primary); border-radius: 50%;
          animation: ext-spin 0.8s linear infinite;
        }
        @keyframes ext-spin { to { transform: rotate(360deg); } }

        .ext-workspace { display: flex; flex-direction: column; gap: var(--spacing-lg); }
        .ext-controls {
          padding: var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
        }
        .ext-info { display: flex; flex-direction: column; gap: 4px; }
        .ext-filename { font-weight: 700; font-size: 1.05rem; }
        .ext-stats { color: var(--text-muted); font-size: 0.9rem; }
        .btn-sm { padding: 8px 14px; font-size: 0.85rem; }

        .ext-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: var(--spacing-md);
        }

        .ext-card {
          position: relative; cursor: pointer;
          border: 2px solid var(--border-light); border-radius: var(--radius-md);
          overflow: hidden; transition: var(--transition-fast);
          background: var(--bg-panel); user-select: none;
        }
        .ext-card:hover { border-color: var(--border-active); transform: translateY(-2px); box-shadow: var(--shadow-glow); }
        .ext-card-selected { border-color: #059669 !important; }
        .ext-card-selected:hover { border-color: #047857 !important; }

        .ext-card-img { width: 100%; display: block; pointer-events: none; }

        .ext-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding: 6px 8px; font-size: 0.8rem; font-weight: 600; color: var(--text-muted);
        }

        .ext-card-overlay {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem; font-weight: 900; color: #059669;
          background: rgba(5, 150, 105, 0.08); pointer-events: none;
        }

        .ext-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .ext-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }
        }
      `})]})}},36955:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n,metadata:()=>i});var r=a(62740),s=a(4418);let i={title:"Extract PDF Pages — Pull Specific Pages from a PDF Online Free | Tiny PDF Tools",description:"Select and extract specific pages from any PDF into a new file. 100% free, no uploads — runs entirely in your browser.",alternates:{canonical:"https://tinypdftools.com/extract-pdf-pages"}};function n(){return(0,r.jsx)(s.default,{})}},4418:(e,t,a)=>{"use strict";a.d(t,{default:()=>r});let r=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\ExtractPdfPages.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\ExtractPdfPages.jsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[406,844,201,181,508,301],()=>a(57959));module.exports=r})();