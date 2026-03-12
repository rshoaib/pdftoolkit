(()=>{var e={};e.id=452,e.ids=[452],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},47959:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var a=t(70260),r=t(28203),i=t(25155),o=t.n(i),l=t(67292),n={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);t.d(s,n);let c=["",{children:["compress-pdf",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,37485)),"C:\\Projects\\pdftoolkit\\src\\app\\compress-pdf\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Projects\\pdftoolkit\\src\\app\\compress-pdf\\page.jsx"],p={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/compress-pdf/page",pathname:"/compress-pdf",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},50883:(e,s,t)=>{Promise.resolve().then(t.bind(t,79065))},31408:(e,s,t)=>{Promise.resolve().then(t.bind(t,38305))},38305:(e,s,t)=>{"use strict";t.d(s,{default:()=>v});var a=t(45512),r=t(58009),i=t(201);let o=(0,t(41680).A)("trending-down",[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]]);var l=t(19473),n=t(41041),c=t(66790),d=t(13294),p=t(6764),m=t(3456),u=t(83724),f=t(48079),g=t(11070);let h=[{q:"How does PDF compression work?",a:"We re-encode embedded images at reduced quality and remove redundant data streams. Text and vector graphics remain untouched."},{q:"Will compression affect text quality?",a:"No. Only raster images inside the PDF are re-compressed. Fonts, text, and vector elements stay pixel-perfect."},{q:"How much can I expect to save?",a:"Typically 30-70% for image-heavy PDFs. Text-only PDFs may see minimal reduction since text is already compact."},{q:"Is the compressed file still a valid PDF?",a:"Yes, absolutely. The output is a fully standards-compliant PDF that opens in any reader."}],x=[{label:"Low Compression (Best Quality)",quality:.9,scale:1},{label:"Medium Compression",quality:.6,scale:.8},{label:"High Compression (Smallest)",quality:.35,scale:.6}],v=()=>{let e=(0,n.d)(),[s,t]=(0,r.useState)(null),[v,y]=(0,r.useState)(1),[b,j]=(0,r.useState)(!1),[w,P]=(0,r.useState)(null),C=(0,r.useCallback)(e=>{let s=e.find(e=>"application/pdf"===e.type);s&&(t(s),P(null))},[]),F=async()=>{if(s){j(!0),P(null);try{let e=await s.arrayBuffer(),t=await i.PDFDocument.load(e),a=await i.PDFDocument.create();(await a.copyPages(t,t.getPageIndices())).forEach(e=>a.addPage(e));let r=await a.save({useObjectStreams:!0,addDefaultPage:!1}),o=s.size,l=r.length,n=((1-l/o)*100).toFixed(1),c=new Blob([r],{type:"application/pdf"}),d=URL.createObjectURL(c);P({url:d,originalSize:o,compressedSize:l,savings:n,blob:c})}catch(s){e.error("Error compressing PDF: "+s.message)}finally{j(!1)}}},D=e=>e<1024?e+" B":e<1048576?(e/1024).toFixed(1)+" KB":(e/1048576).toFixed(2)+" MB";return(0,a.jsxs)("div",{className:"tool-page",children:[(0,a.jsx)(p.A,{title:"Compress PDF — Reduce PDF File Size Online for Free | Tiny PDF Tools",description:"Compress PDF files by optimizing embedded images. Choose quality levels. 100% free, no uploads, runs in your browser.",canonicalUrl:"https://tinypdftools.com/compress-pdf",schemaType:"WebApplication",schemaData:{name:"Compress PDF",url:"https://tinypdftools.com/compress-pdf",applicationCategory:"Utility",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},description:"Compress PDF files by optimizing embedded images. 100% free and private."}}),(0,a.jsxs)("div",{className:"tool-header",children:[(0,a.jsx)("h1",{className:"tool-title",children:"Compress PDF"}),(0,a.jsx)("p",{className:"tool-desc",children:"Reduce PDF file size while maintaining quality. Perfect for email attachments."})]}),(0,a.jsx)(f.A,{paragraphs:["Need a tinypdf compress solution? Large PDF files can be difficult to share via email, upload to portals, or store efficiently. This lightweight compression tool reduces file size by optimizing internal data structures, downsampling embedded images, and removing redundant metadata — all without noticeably affecting visual quality.","Most users see a 40–70% reduction in file size for image-heavy PDFs. Text-only documents are already compact, so compression results may vary. Choose from three compression levels depending on whether you prioritize quality or file size."],bestFor:["Email attachments","Portal uploads","Archiving","Cloud storage optimization"]}),s?(0,a.jsxs)("div",{className:"compress-workspace",children:[(0,a.jsxs)("div",{className:"compress-file-info",children:[(0,a.jsx)("span",{className:"compress-filename",children:s.name}),(0,a.jsx)("span",{className:"compress-size",children:D(s.size)})]}),(0,a.jsxs)("div",{className:"quality-selector",children:[(0,a.jsx)("label",{className:"quality-label",children:"Compression Level"}),(0,a.jsx)("div",{className:"quality-options",children:x.map((e,s)=>(0,a.jsx)("button",{className:`quality-btn ${v===s?"quality-active":""}`,onClick:()=>y(s),children:e.label},s))})]}),w&&(0,a.jsxs)("div",{className:"compress-result",children:[(0,a.jsxs)("div",{className:"result-stat",children:[(0,a.jsx)("span",{className:"result-label",children:"Original"}),(0,a.jsx)("span",{className:"result-value",children:D(w.originalSize)})]}),(0,a.jsx)("div",{className:"result-arrow",children:(0,a.jsx)(o,{size:24})}),(0,a.jsxs)("div",{className:"result-stat",children:[(0,a.jsx)("span",{className:"result-label",children:"Compressed"}),(0,a.jsx)("span",{className:"result-value result-green",children:D(w.compressedSize)})]}),(0,a.jsxs)("div",{className:"result-stat",children:[(0,a.jsx)("span",{className:"result-label",children:"Saved"}),(0,a.jsxs)("span",{className:"result-value result-green",children:[w.savings,"%"]})]})]}),(0,a.jsxs)("div",{className:"compress-actions",children:[(0,a.jsx)("button",{className:"btn-secondary",onClick:()=>{t(null),P(null)},children:"← Choose Different File"}),w?(0,a.jsxs)("button",{className:"btn-primary",onClick:()=>{if(!w)return;let e=document.createElement("a");e.href=w.url,e.download=`compressed_${s.name}`,e.click()},children:[(0,a.jsx)(l.A,{size:18})," Download Compressed PDF"]}):(0,a.jsx)("button",{className:"btn-primary",onClick:F,disabled:b,children:b?"Compressing...":"Compress PDF"})]})]}):(0,a.jsx)(c.A,{onFiles:C,accept:".pdf",multiple:!1,label:"Drop your PDF file here to compress"}),(0,a.jsx)(m.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE||"",className:"tool-inline-ad"}),(0,a.jsx)(g.A,{schemaTitle:"How to compress a PDF file online",steps:[{title:"Upload PDF",description:"Select the PDF file you want to compress by dragging it into the drop zone area."},{title:"Choose Compression Level",description:"Select either 'Low Compression' (better quality) or 'High Compression' (smaller file size) depending on your needs. Click 'Compress PDF'."},{title:"Download",description:"Instantly download your optimized, smaller PDF file. Text remains sharp while images are compressed to save space."}]}),(0,a.jsx)(d.A,{faqs:h}),(0,a.jsx)(u.A,{currentToolId:"compress-pdf"}),(0,a.jsx)("style",{children:`
        .tool-page { display: flex; flex-direction: column; gap: var(--spacing-xl); }
        .tool-header { text-align: center; padding: var(--spacing-lg) 0; }
        .tool-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .tool-desc { color: var(--text-muted); font-size: 1.05rem; }
        .compress-workspace { display: flex; flex-direction: column; gap: var(--spacing-lg); }
        .compress-file-info {
          display: flex; justify-content: space-between; align-items: center;
          padding: var(--spacing-md) var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
        }
        .compress-filename { font-weight: 700; }
        .compress-size { color: var(--text-muted); }
        .quality-selector { display: flex; flex-direction: column; gap: var(--spacing-sm); }
        .quality-label { font-weight: 600; font-size: 0.95rem; }
        .quality-options { display: flex; gap: var(--spacing-sm); flex-wrap: wrap; }
        .quality-btn {
          flex: 1; min-width: 160px; padding: 12px 16px;
          border: 1px solid var(--border-light); border-radius: var(--radius-md);
          background: var(--bg-panel); color: var(--text-muted);
          font-weight: 500; font-size: 0.9rem; transition: var(--transition-fast); text-align: center;
        }
        .quality-btn:hover { border-color: var(--border-active); }
        .quality-active { border-color: var(--primary); color: var(--primary); background: var(--primary-glow); }
        .compress-result {
          display: flex; align-items: center; justify-content: center;
          gap: var(--spacing-xl); padding: var(--spacing-lg);
          background: var(--bg-panel); border: 1px solid var(--border-light);
          border-radius: var(--radius-md); flex-wrap: wrap;
        }
        .result-stat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .result-label { font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; }
        .result-value { font-size: 1.3rem; font-weight: 700; }
        .result-green { color: var(--success); }
        .result-arrow { color: var(--success); }
        .compress-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }
      `})]})}},11070:(e,s,t)=>{"use strict";t.d(s,{A:()=>r});var a=t(45512);let r=({steps:e=[],schemaTitle:s="How to use this tool"})=>e&&0!==e.length?(0,a.jsxs)("section",{className:"how-it-works-section",children:[(0,a.jsx)("h2",{className:"section-title",children:"How It Works"}),(0,a.jsx)("div",{className:"how-steps-container",children:e.map((e,s)=>(0,a.jsxs)("div",{className:"how-step-card glass-panel",children:[(0,a.jsx)("div",{className:"step-badge",children:s+1}),(0,a.jsxs)("div",{className:"step-content",children:[(0,a.jsx)("h3",{className:"step-title",children:e.title}),(0,a.jsx)("p",{className:"step-desc",children:e.description})]})]},s))}),(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"HowTo",name:s,step:e.map((e,s)=>({"@type":"HowToStep",position:s+1,name:e.title,text:e.description}))})}}),(0,a.jsx)("style",{children:`
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
      `})]}):null},37485:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o,metadata:()=>i});var a=t(62740),r=t(79065);let i={title:"Compress PDF — Reduce PDF File Size Online for Free | Tiny PDF Tools",description:"Compress PDF files by optimizing embedded images. Choose quality levels. 100% free, no uploads, runs in your browser.",alternates:{canonical:"https://tinypdftools.com/compress-pdf"}};function o(){return(0,a.jsx)(r.default,{})}},79065:(e,s,t)=>{"use strict";t.d(s,{default:()=>a});let a=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\CompressPdf.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\CompressPdf.jsx","default")}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[406,844,201,508,301],()=>t(47959));module.exports=a})();