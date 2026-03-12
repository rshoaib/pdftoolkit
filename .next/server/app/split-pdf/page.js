(()=>{var e={};e.id=734,e.ids=[734],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},19895:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>d,pages:()=>c,routeModule:()=>m,tree:()=>p});var s=a(70260),r=a(28203),i=a(25155),o=a.n(i),l=a(67292),n={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);a.d(t,n);let p=["",{children:["split-pdf",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,13127)),"C:\\Projects\\pdftoolkit\\src\\app\\split-pdf\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Projects\\pdftoolkit\\src\\app\\split-pdf\\page.jsx"],d={require:a,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/split-pdf/page",pathname:"/split-pdf",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},99638:(e,t,a)=>{Promise.resolve().then(a.bind(a,30729))},62846:(e,t,a)=>{Promise.resolve().then(a.bind(a,34975))},11070:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var s=a(45512);let r=({steps:e=[],schemaTitle:t="How to use this tool"})=>e&&0!==e.length?(0,s.jsxs)("section",{className:"how-it-works-section",children:[(0,s.jsx)("h2",{className:"section-title",children:"How It Works"}),(0,s.jsx)("div",{className:"how-steps-container",children:e.map((e,t)=>(0,s.jsxs)("div",{className:"how-step-card glass-panel",children:[(0,s.jsx)("div",{className:"step-badge",children:t+1}),(0,s.jsxs)("div",{className:"step-content",children:[(0,s.jsx)("h3",{className:"step-title",children:e.title}),(0,s.jsx)("p",{className:"step-desc",children:e.description})]})]},t))}),(0,s.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"HowTo",name:t,step:e.map((e,t)=>({"@type":"HowToStep",position:t+1,name:e.title,text:e.description}))})}}),(0,s.jsx)("style",{children:`
        .how-it-works-section {
          margin-top: var(--spacing-xxl);
          max-width: 800px;
          margin-inline: auto;
        }
        .how-steps-container {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }
        .how-step-card {
          display: flex;
          gap: var(--spacing-lg);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          align-items: flex-start;
        }
        .step-badge {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-full);
          background: var(--gradient);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
        }
        .step-content {
          flex: 1;
        }
        .step-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .step-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 600px) {
          .how-step-card {
            flex-direction: column;
            gap: var(--spacing-md);
            padding: var(--spacing-md);
          }
        }
      `})]}):null},34975:(e,t,a)=>{"use strict";a.d(t,{default:()=>x});var s=a(45512),r=a(58009),i=a(201);a(77181);let o=(0,a(41680).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);var l=a(19473),n=a(41041),p=a(66790),c=a(13294),d=a(6764),m=a(3456),u=a(83724),g=a(11070),f=a(48079);let h=[{q:"How do I split a PDF?",a:'Upload your PDF, select the pages you want to extract using the visual previews, then click "Split & Download". A new PDF with only your selected pages will be created.'},{q:"Can I extract a single page?",a:"Yes! Just click on one page thumbnail to select it and split. You can also select multiple individual pages."},{q:"Will splitting reduce quality?",a:"No. Pages are copied exactly as-is — no re-encoding or quality loss occurs."},{q:"What is the page range format?",a:'You can enter ranges like "1-3, 5, 7-10" to select specific pages.'}],x=()=>{let e=(0,n.d)(),[t,x]=(0,r.useState)(null),[v,y]=(0,r.useState)(0),[b,w]=(0,r.useState)([]),[j,P]=(0,r.useState)(new Set),[k,S]=(0,r.useState)(!1),[D,N]=(0,r.useState)(""),F=(0,r.useCallback)(e=>{let t=e.find(e=>"application/pdf"===e.type);t&&(x(t),P(new Set),N(""))},[]);(0,r.useEffect)(()=>{if(!t)return;let e=!1;return(async()=>{let s=await t.arrayBuffer(),r=await Promise.resolve().then(a.bind(a,77181));r.GlobalWorkerOptions.workerSrc="/pdf.worker.min.mjs";let i=await r.getDocument({data:s}).promise;y(i.numPages);let o=[];for(let t=1;t<=i.numPages;t++){let a=await i.getPage(t),s=a.getViewport({scale:.3}),r=document.createElement("canvas");r.width=s.width,r.height=s.height;let l=r.getContext("2d");if(await a.render({canvasContext:l,viewport:s}).promise,o.push(r.toDataURL("image/jpeg",.7)),e)return}w(o)})().catch(console.error),()=>{e=!0}},[t]);let C=e=>{P(t=>{let a=new Set(t);return a.has(e)?a.delete(e):a.add(e),a})},A=async()=>{if(0!==j.size&&t){S(!0);try{let e=await t.arrayBuffer(),a=await i.PDFDocument.load(e),s=await i.PDFDocument.create(),r=[...j].sort((e,t)=>e-t);(await s.copyPages(a,r)).forEach(e=>s.addPage(e));let o=await s.save(),l=new Blob([o],{type:"application/pdf"}),n=URL.createObjectURL(l),p=document.createElement("a");p.href=n,p.download=`split_${t.name}`,p.click(),URL.revokeObjectURL(n)}catch(t){e.error("Error splitting PDF: "+t.message)}finally{S(!1)}}};return(0,s.jsxs)("div",{className:"tool-page",children:[(0,s.jsx)(d.A,{title:"Split PDF — Extract Pages from PDF Online for Free | Tiny PDF Tools",description:"Split a PDF into separate files or extract specific pages. 100% free, no uploads, runs entirely in your browser.",canonicalUrl:"https://tinypdftools.com/split-pdf",schemaType:"WebApplication",schemaData:{name:"Split PDF",url:"https://tinypdftools.com/split-pdf",applicationCategory:"Utility",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},description:"Split a PDF into separate files or extract specific pages. 100% free and private."}}),(0,s.jsxs)("div",{className:"tool-header",children:[(0,s.jsx)("h1",{className:"tool-title",children:"Split PDF"}),(0,s.jsx)("p",{className:"tool-desc",children:"Select pages to extract from your PDF document."})]}),(0,s.jsx)(f.A,{paragraphs:["Extract specific pages from a PDF or break a large document into smaller, more manageable files. This is essential when you need to send only certain pages from a report, separate chapters from a textbook, or pull out a single form from a multi-page document.","Select exactly which pages to extract by specifying page ranges. The original document remains untouched — you get a new PDF containing only the pages you selected. All processing runs locally in your browser for complete privacy."],bestFor:["Extracting chapters","Sending partial documents","Separating forms","Academic papers"]}),t?(0,s.jsxs)("div",{className:"split-workspace",children:[(0,s.jsxs)("div",{className:"split-controls",children:[(0,s.jsxs)("div",{className:"split-info",children:[(0,s.jsx)("span",{className:"split-filename",children:t.name}),(0,s.jsxs)("span",{className:"split-pages",children:[v," pages • ",j.size," selected"]})]}),(0,s.jsxs)("div",{className:"split-range",children:[(0,s.jsx)("input",{type:"text",placeholder:"e.g. 1-3, 5, 7-10",value:D,onChange:e=>N(e.target.value),className:"range-input"}),(0,s.jsx)("button",{className:"btn-secondary",onClick:()=>{if(!D.trim())return;let e=new Set;for(let t of D.split(",")){let a=t.trim();if(a.includes("-")){let[t,s]=a.split("-").map(Number);for(let a=t;a<=s&&a<=v;a++)a>=1&&e.add(a-1)}else{let t=Number(a);t>=1&&t<=v&&e.add(t-1)}}P(e)},children:"Apply Range"}),(0,s.jsx)("button",{className:"btn-secondary",onClick:()=>{let e=new Set;for(let t=0;t<v;t++)e.add(t);P(e)},children:"Select All"}),(0,s.jsx)("button",{className:"btn-secondary",onClick:()=>P(new Set),children:"Clear"})]})]}),(0,s.jsxs)("div",{className:"thumb-grid",children:[b.map((e,t)=>(0,s.jsxs)("div",{className:`thumb-card ${j.has(t)?"thumb-selected":""}`,onClick:()=>C(t),children:[(0,s.jsx)("img",{src:e,alt:`Page ${t+1}`,className:"thumb-img"}),(0,s.jsxs)("div",{className:"thumb-label",children:[j.has(t)&&(0,s.jsx)(o,{size:14}),"Page ",t+1]})]},t)),0===b.length&&v>0&&(0,s.jsx)("p",{className:"loading-text",children:"Loading page previews…"})]}),(0,s.jsxs)("div",{className:"split-actions",children:[(0,s.jsx)("button",{className:"btn-secondary",onClick:()=>{x(null),y(0),w([]),P(new Set),N("")},children:"← Choose Different File"}),(0,s.jsxs)("button",{className:"btn-primary",onClick:A,disabled:0===j.size||k,children:[(0,s.jsx)(l.A,{size:18}),k?"Splitting...":`Split & Download (${j.size} pages)`]})]})]}):(0,s.jsx)(p.A,{onFiles:F,accept:".pdf",multiple:!1,label:"Drop your PDF file here to split"}),(0,s.jsx)(m.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE||"",className:"tool-inline-ad"}),(0,s.jsx)(g.A,{schemaTitle:"How to split or extract pages from a PDF",steps:[{title:"Upload PDF",description:"Select or drag and drop your multi-page PDF document into the designated drop zone."},{title:"Select Pages",description:"Use the visual thumbnails to click on the specific pages you want to extract, or type a page range (e.g., 1-5, 8)."},{title:"Split & Download",description:"Click the 'Split & Download' button. Your browser will instantly generate a new PDF containing only your selected pages."}]}),(0,s.jsx)(c.A,{faqs:h}),(0,s.jsx)(u.A,{currentToolId:"split-pdf"}),(0,s.jsx)("style",{children:`
        .tool-page { display: flex; flex-direction: column; gap: var(--spacing-xl); }
        .tool-header { text-align: center; padding: var(--spacing-lg) 0; }
        .tool-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .tool-desc { color: var(--text-muted); font-size: 1.05rem; }
        .split-workspace { display: flex; flex-direction: column; gap: var(--spacing-lg); }
        .split-controls {
          display: flex; flex-direction: column; gap: var(--spacing-md);
          padding: var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
        }
        .split-info { display: flex; justify-content: space-between; align-items: center; }
        .split-filename { font-weight: 700; font-size: 1.05rem; }
        .split-pages { color: var(--text-muted); font-size: 0.9rem; }
        .split-range { display: flex; gap: var(--spacing-sm); flex-wrap: wrap; }
        .range-input {
          flex: 1; min-width: 160px; padding: 8px 14px;
          border: 1px solid var(--border-light); border-radius: var(--radius-sm);
          background: var(--bg-surface); color: var(--text-main);
          font-family: inherit; font-size: 0.95rem;
        }
        .range-input:focus { outline: none; border-color: var(--primary); }
        .thumb-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: var(--spacing-md);
        }
        .thumb-card {
          cursor: pointer; border: 2px solid var(--border-light);
          border-radius: var(--radius-md); overflow: hidden;
          transition: var(--transition-fast); background: var(--bg-panel);
        }
        .thumb-card:hover { border-color: var(--border-active); transform: translateY(-2px); }
        .thumb-selected { border-color: var(--primary); box-shadow: var(--shadow-glow); }
        .thumb-img { width: 100%; display: block; }
        .thumb-label {
          display: flex; align-items: center; gap: 4px; justify-content: center;
          padding: 6px; font-size: 0.8rem; font-weight: 600;
          color: var(--text-muted);
        }
        .thumb-selected .thumb-label { color: var(--primary); }
        .split-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }
        .loading-text { grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: var(--spacing-xl); }
      `})]})}},13127:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o,metadata:()=>i});var s=a(62740),r=a(30729);let i={title:"Split PDF — Extract Pages from PDF Online for Free | Tiny PDF Tools",description:"Split a PDF into separate files or extract specific pages. 100% free, no uploads, runs entirely in your browser.",alternates:{canonical:"https://tinypdftools.com/split-pdf"}};function o(){return(0,s.jsx)(r.default,{})}},30729:(e,t,a)=>{"use strict";a.d(t,{default:()=>s});let s=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\SplitPdf.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\SplitPdf.jsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[406,844,201,181,508,301],()=>a(19895));module.exports=s})();