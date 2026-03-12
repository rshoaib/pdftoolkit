(()=>{var e={};e.id=538,e.ids=[538],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},69703:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d});var i=t(70260),a=t(28203),s=t(25155),o=t.n(s),n=t(67292),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let d=["",{children:["merge-pdf",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,20187)),"C:\\Projects\\pdftoolkit\\src\\app\\merge-pdf\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Projects\\pdftoolkit\\src\\app\\merge-pdf\\page.jsx"],p={require:t,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/merge-pdf/page",pathname:"/merge-pdf",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1982:(e,r,t)=>{Promise.resolve().then(t.bind(t,86625))},93734:(e,r,t)=>{Promise.resolve().then(t.bind(t,24581))},18741:(e,r,t)=>{"use strict";t.d(r,{A:()=>i});let i=(0,t(41680).A)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},11070:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var i=t(45512);let a=({steps:e=[],schemaTitle:r="How to use this tool"})=>e&&0!==e.length?(0,i.jsxs)("section",{className:"how-it-works-section",children:[(0,i.jsx)("h2",{className:"section-title",children:"How It Works"}),(0,i.jsx)("div",{className:"how-steps-container",children:e.map((e,r)=>(0,i.jsxs)("div",{className:"how-step-card glass-panel",children:[(0,i.jsx)("div",{className:"step-badge",children:r+1}),(0,i.jsxs)("div",{className:"step-content",children:[(0,i.jsx)("h3",{className:"step-title",children:e.title}),(0,i.jsx)("p",{className:"step-desc",children:e.description})]})]},r))}),(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"HowTo",name:r,step:e.map((e,r)=>({"@type":"HowToStep",position:r+1,name:e.title,text:e.description}))})}}),(0,i.jsx)("style",{children:`
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
      `})]}):null},24581:(e,r,t)=>{"use strict";t.d(r,{default:()=>b});var i=t(45512),a=t(58009),s=t(201),o=t(31904),n=t(61075),l=t(49656),d=t(18741),c=t(19473),p=t(41041),m=t(66790),g=t(13294),f=t(6764),u=t(3456),h=t(83724),x=t(48079),v=t(11070);let y=[{q:"How do I merge PDF files?",a:'Upload two or more PDF files, drag them to set the order, then click "Merge PDFs". Your merged file will download instantly.'},{q:"Is there a file size limit?",a:"No strict limit — everything runs in your browser. Very large files (100MB+) may be slow depending on your device."},{q:"Are my files uploaded to a server?",a:"No. All processing happens 100% in your browser. Your files never leave your device."},{q:"Can I reorder pages before merging?",a:"Yes! Drag the file cards to rearrange the order before merging."}],b=()=>{let e=(0,p.d)(),[r,t]=(0,a.useState)([]),[b,w]=(0,a.useState)(!1),[j,P]=(0,a.useState)(!1),D=(0,a.useCallback)(e=>{let r=e.filter(e=>"application/pdf"===e.type);t(e=>[...e,...r]),P(!1)},[]),k=e=>{t(r=>r.filter((r,t)=>t!==e)),P(!1)},F=(e,r)=>{t(t=>{let i=[...t],[a]=i.splice(e,1);return i.splice(r,0,a),i})},N=async()=>{if(!(r.length<2)){w(!0);try{let e=await s.PDFDocument.create();for(let t of r){let r=await t.arrayBuffer(),i=await s.PDFDocument.load(r);(await e.copyPages(i,i.getPageIndices())).forEach(r=>e.addPage(r))}let t=await e.save(),i=new Blob([t],{type:"application/pdf"}),a=URL.createObjectURL(i),o=document.createElement("a");o.href=a,o.download="merged.pdf",o.click(),URL.revokeObjectURL(a),P(!0)}catch(r){e.error("Error merging PDFs: "+r.message)}finally{w(!1)}}};return(0,i.jsxs)("div",{className:"tool-page",children:[(0,i.jsx)(f.A,{title:"Merge PDF — Combine PDF Files Online for Free | Tiny PDF Tools",description:"Merge multiple PDF files into one document. Drag to reorder, then download instantly. 100% free, no uploads, runs in your browser.",canonicalUrl:"https://tinypdftools.com/merge-pdf",schemaType:"WebApplication",schemaData:{name:"Merge PDF",url:"https://tinypdftools.com/merge-pdf",applicationCategory:"Utility",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},description:"Merge multiple PDF files into one document. Drag to reorder, then download instantly. 100% free and private."}}),(0,i.jsxs)("div",{className:"tool-header",children:[(0,i.jsx)("h1",{className:"tool-title",children:"Merge PDF"}),(0,i.jsx)("p",{className:"tool-desc",children:"Combine multiple PDF files into a single document. Drag to reorder."})]}),(0,i.jsx)(x.A,{paragraphs:["Looking for a tiny pdf merge tool? Need to combine multiple PDF files into a single document? Whether you are assembling a job application package, compiling reports, or merging scanned pages, this lightweight tool lets you join any number of PDFs into one cohesive file.","Simply drag and drop your PDFs, rearrange them in any order, and click merge. The combined document preserves all formatting, fonts, images, and hyperlinks from the original files. Processing happens entirely in your browser — your files are never uploaded to any server."],bestFor:["Job applications","Report compilation","Scanned documents","Document packages"]}),0===r.length?(0,i.jsx)(m.A,{onFiles:D,accept:".pdf",label:"Drop your PDF files here to merge"}):(0,i.jsxs)("div",{className:"merge-workspace",children:[(0,i.jsx)("div",{className:"file-list",children:r.map((e,t)=>(0,i.jsxs)("div",{className:"file-card",children:[(0,i.jsx)("div",{className:"file-card-grip",children:(0,i.jsx)(o.A,{size:16})}),(0,i.jsx)("div",{className:"file-card-icon",children:(0,i.jsx)(n.A,{size:20})}),(0,i.jsxs)("div",{className:"file-card-info",children:[(0,i.jsx)("span",{className:"file-card-name",children:e.name}),(0,i.jsxs)("span",{className:"file-card-size",children:[(e.size/1024).toFixed(0)," KB"]})]}),(0,i.jsxs)("div",{className:"file-card-actions",children:[t>0&&(0,i.jsx)("button",{className:"file-card-btn",onClick:()=>F(t,t-1),title:"Move up",children:"↑"}),t<r.length-1&&(0,i.jsx)("button",{className:"file-card-btn",onClick:()=>F(t,t+1),title:"Move down",children:"↓"}),(0,i.jsx)("button",{className:"file-card-btn file-card-delete",onClick:()=>k(t),title:"Remove",children:(0,i.jsx)(l.A,{size:16})})]})]},`${e.name}-${t}`))}),(0,i.jsxs)("div",{className:"merge-actions",children:[(0,i.jsxs)("button",{className:"btn-secondary",onClick:()=>document.querySelector(".add-more-input").click(),children:[(0,i.jsx)(d.A,{size:16})," Add More"]}),(0,i.jsx)("input",{type:"file",accept:".pdf",multiple:!0,className:"sr-only add-more-input",onChange:e=>{D([...e.target.files]),e.target.value=""}}),(0,i.jsxs)("button",{className:"btn-primary",onClick:N,disabled:r.length<2||b,children:[(0,i.jsx)(c.A,{size:18}),b?"Merging...":j?"✓ Merged! Download Again":`Merge ${r.length} PDFs`]})]})]}),(0,i.jsx)(u.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE||"",className:"tool-inline-ad"}),(0,i.jsx)(v.A,{schemaTitle:"How to merge PDF files",steps:[{title:"Upload PDFs",description:"Select or drag and drop two or more PDF files into the drop zone above."},{title:"Rearrange Files",description:"Click and drag the files in the workspace to reorder them exactly how you want them to appear in the final merged document."},{title:"Merge and Download",description:"Click the 'Merge PDFs' button. Your browser will instantly combine the files into a single PDF and download it securely."}]}),(0,i.jsx)(g.A,{faqs:y}),(0,i.jsx)(h.A,{currentToolId:"merge-pdf"}),(0,i.jsx)("style",{children:`
        .tool-page {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }
        .tool-header {
          text-align: center;
          padding: var(--spacing-lg) 0;
        }
        .tool-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .tool-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
        }
        .merge-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        .file-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .file-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          transition: var(--transition-fast);
        }
        .file-card:hover {
          border-color: var(--border-active);
          box-shadow: var(--shadow-sm);
        }
        .file-card-grip {
          color: var(--text-dim);
          cursor: grab;
        }
        .file-card-icon {
          color: var(--primary);
        }
        .file-card-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .file-card-name {
          font-weight: 600;
          font-size: 0.95rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .file-card-size {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .file-card-actions {
          display: flex;
          gap: 4px;
        }
        .file-card-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }
        .file-card-btn:hover {
          background: var(--bg-surface);
          color: var(--text-main);
        }
        .file-card-delete:hover {
          background: rgba(239,68,68,0.1);
          color: var(--error);
        }
        .merge-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }
      `})]})}},20187:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o,metadata:()=>s});var i=t(62740),a=t(86625);let s={title:"Merge PDF — Combine PDF Files Online for Free | Tiny PDF Tools",description:"Merge multiple PDF files into one document. Drag to reorder, then download instantly. 100% free, no uploads, runs in your browser.",alternates:{canonical:"https://tinypdftools.com/merge-pdf"}};function o(){return(0,i.jsx)(a.default,{})}},86625:(e,r,t)=>{"use strict";t.d(r,{default:()=>i});let i=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\MergePdf.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\MergePdf.jsx","default")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[406,844,201,508,301],()=>t(69703));module.exports=i})();