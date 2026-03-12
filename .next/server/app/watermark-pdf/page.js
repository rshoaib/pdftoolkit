(()=>{var e={};e.id=336,e.ids=[336],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},7247:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>p,routeModule:()=>m,tree:()=>d});var r=t(70260),o=t(28203),s=t(25155),i=t.n(s),n=t(67292),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(a,l);let d=["",{children:["watermark-pdf",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,46817)),"C:\\Projects\\pdftoolkit\\src\\app\\watermark-pdf\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\Projects\\pdftoolkit\\src\\app\\watermark-pdf\\page.jsx"],c={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/watermark-pdf/page",pathname:"/watermark-pdf",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},78764:(e,a,t)=>{Promise.resolve().then(t.bind(t,6587))},42316:(e,a,t)=>{Promise.resolve().then(t.bind(t,38567))},92557:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});let r=(0,t(41680).A)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},94520:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});let r=(0,t(41680).A)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},32353:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});let r=(0,t(41680).A)("type",[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]])},38567:(e,a,t)=>{"use strict";t.d(a,{default:()=>b});var r=t(45512),o=t(58009),s=t(201),i=t(47554),n=t(92557),l=t(32353),d=t(94520),p=t(19473),c=t(41041),m=t(66790),u=t(13294),x=t(6764),f=t(3456),w=t(83724),h=t(48079);let g=[{q:"What types of watermarks can I add?",a:"You can add custom text watermarks with full control over font size, opacity, rotation angle, and color. The watermark is applied to every page of your PDF."},{q:"Will the watermark affect the quality of my PDF?",a:"No. The watermark is added as a text overlay on top of your existing content. All original text, images, and formatting remain untouched."},{q:"Are my files uploaded to a server?",a:"No. All watermarking happens 100% in your browser. Your files never leave your device — complete privacy guaranteed."},{q:"Can I remove the watermark later?",a:"The watermark is permanently embedded into the PDF. If you need the original, keep a copy of your file before watermarking."},{q:"What is the best use case for PDF watermarks?",a:"Common uses include marking documents as DRAFT, CONFIDENTIAL, or SAMPLE, branding with your company name, and protecting shared documents from unauthorized redistribution."}],v=["DRAFT","CONFIDENTIAL","SAMPLE","DO NOT COPY","APPROVED"],y=e=>({r:parseInt(e.slice(1,3),16)/255,g:parseInt(e.slice(3,5),16)/255,b:parseInt(e.slice(5,7),16)/255}),b=()=>{let e=(0,c.d)(),[a,t]=(0,o.useState)(null),[b,k]=(0,o.useState)("DRAFT"),[j,N]=(0,o.useState)(60),[A,P]=(0,o.useState)(.15),[C,D]=(0,o.useState)(45),[F,z]=(0,o.useState)("#888888"),[T,_]=(0,o.useState)(!1),[S,E]=(0,o.useState)(!1),L=(0,o.useCallback)(e=>{let a=e.find(e=>"application/pdf"===e.type);a&&(t(a),E(!1))},[]),O=async()=>{if(a&&b.trim()){_(!0);try{let e=await a.arrayBuffer(),t=await s.PDFDocument.load(e),r=await t.embedFont(s.StandardFonts.Helvetica),o=t.getPages(),{r:i,g:n,b:l}=y(F);for(let e of o){let{width:a,height:t}=e.getSize(),o=r.widthOfTextAtSize(b,j),d=(a-o)/2,p=(t-j)/2;e.drawText(b,{x:d,y:p,size:j,font:r,color:(0,s.rgb)(i,n,l),rotate:(0,s.degrees)(C),opacity:A})}let d=await t.save(),p=new Blob([d],{type:"application/pdf"}),c=URL.createObjectURL(p),m=document.createElement("a");m.href=c,m.download=a.name.replace(".pdf","-watermarked.pdf"),m.click(),URL.revokeObjectURL(c),E(!0)}catch(a){e.error("Error watermarking PDF: "+a.message)}finally{_(!1)}}},R=a&&b.trim().length>0;return(0,r.jsxs)("div",{className:"tool-page",children:[(0,r.jsx)(x.A,{title:"Watermark PDF — Add Text Watermarks Online for Free | Tiny PDF Tools",description:"Add custom text watermarks to your PDF pages. Choose font size, opacity, rotation, and color. 100% free, no uploads, 100% in your browser.",canonicalUrl:"https://tinypdftools.com/watermark-pdf",schemaType:"WebApplication",schemaData:{name:"Watermark PDF",url:"https://tinypdftools.com/watermark-pdf",applicationCategory:"Utility",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},description:"Add custom text watermarks to PDFs with full control over style. 100% free and private."}}),(0,r.jsxs)("div",{className:"tool-header",children:[(0,r.jsx)("h1",{className:"tool-title",children:"Watermark PDF"}),(0,r.jsx)("p",{className:"tool-desc",children:"Add custom text watermarks to your PDF pages. Choose font size, opacity, rotation, and color — 100% in your browser."})]}),(0,r.jsx)(h.A,{paragraphs:['Add text watermarks to every page of your PDF. Commonly used to mark documents as "DRAFT", "CONFIDENTIAL", "SAMPLE", or with your company name to protect intellectual property and establish ownership.',"Customize the watermark text, font size, opacity, rotation angle, and color. The watermark is embedded directly into the PDF pages. You can preview the result before downloading. Processing happens locally in your browser for complete privacy."],bestFor:["Draft documents","Confidential markings","Brand protection","Legal documents"]}),a?(0,r.jsxs)("div",{className:"wm-workspace",children:[(0,r.jsxs)("div",{className:"wm-file-info",children:[(0,r.jsx)(i.A,{size:24,className:"wm-file-icon"}),(0,r.jsxs)("div",{className:"wm-file-details",children:[(0,r.jsx)("span",{className:"wm-file-name",children:a.name}),(0,r.jsxs)("span",{className:"wm-file-size",children:[(a.size/1024).toFixed(0)," KB"]})]}),(0,r.jsxs)("button",{className:"btn-secondary",onClick:()=>{t(null),k("DRAFT"),N(60),P(.15),D(45),z("#888888"),E(!1)},style:{marginLeft:"auto"},children:[(0,r.jsx)(n.A,{size:14})," Change File"]})]}),(0,r.jsxs)("div",{className:"wm-section",children:[(0,r.jsxs)("label",{className:"wm-label",htmlFor:"wm-text",children:[(0,r.jsx)(l.A,{size:16})," Watermark Text"]}),(0,r.jsx)("input",{id:"wm-text",type:"text",className:"wm-text-input",value:b,onChange:e=>{k(e.target.value),E(!1)},placeholder:"Enter watermark text",maxLength:50,autoComplete:"off"}),(0,r.jsx)("div",{className:"wm-presets",children:v.map(e=>(0,r.jsx)("button",{type:"button",className:`wm-preset-chip ${b===e?"wm-preset-active":""}`,onClick:()=>{k(e),E(!1)},children:e},e))})]}),(0,r.jsxs)("div",{className:"wm-section",children:[(0,r.jsxs)("label",{className:"wm-label",children:[(0,r.jsx)(d.A,{size:16})," Options"]}),(0,r.jsxs)("div",{className:"wm-options-grid",children:[(0,r.jsxs)("div",{className:"wm-option",children:[(0,r.jsx)("span",{className:"wm-option-label",children:"Font Size"}),(0,r.jsxs)("div",{className:"wm-option-row",children:[(0,r.jsx)("input",{type:"range",min:"24",max:"120",step:"2",value:j,onChange:e=>{N(Number(e.target.value)),E(!1)},className:"wm-slider","aria-label":"Font size"}),(0,r.jsxs)("span",{className:"wm-option-value",children:[j,"px"]})]})]}),(0,r.jsxs)("div",{className:"wm-option",children:[(0,r.jsx)("span",{className:"wm-option-label",children:"Opacity"}),(0,r.jsxs)("div",{className:"wm-option-row",children:[(0,r.jsx)("input",{type:"range",min:"0.05",max:"0.5",step:"0.01",value:A,onChange:e=>{P(Number(e.target.value)),E(!1)},className:"wm-slider","aria-label":"Opacity"}),(0,r.jsxs)("span",{className:"wm-option-value",children:[Math.round(100*A),"%"]})]})]}),(0,r.jsxs)("div",{className:"wm-option",children:[(0,r.jsx)("span",{className:"wm-option-label",children:"Rotation"}),(0,r.jsxs)("div",{className:"wm-option-row",children:[(0,r.jsx)("input",{type:"range",min:"0",max:"90",step:"5",value:C,onChange:e=>{D(Number(e.target.value)),E(!1)},className:"wm-slider","aria-label":"Rotation"}),(0,r.jsxs)("span",{className:"wm-option-value",children:[C,"\xb0"]})]})]}),(0,r.jsxs)("div",{className:"wm-option",children:[(0,r.jsx)("span",{className:"wm-option-label",children:"Color"}),(0,r.jsxs)("div",{className:"wm-option-row wm-color-row",children:[(0,r.jsx)("input",{type:"color",value:F,onChange:e=>{z(e.target.value),E(!1)},className:"wm-color-input","aria-label":"Watermark color"}),(0,r.jsx)("span",{className:"wm-option-value",children:F.toUpperCase()})]})]})]})]}),(0,r.jsxs)("div",{className:"wm-preview-section",children:[(0,r.jsx)("span",{className:"wm-label",children:"Preview"}),(0,r.jsx)("div",{className:"wm-preview-box",children:(0,r.jsx)("div",{className:"wm-preview-page",children:(0,r.jsx)("span",{className:"wm-preview-text",style:{fontSize:`${Math.max(10,.22*j)}px`,opacity:A,transform:`rotate(-${C}deg)`,color:F},children:b||"WATERMARK"})})})]}),(0,r.jsx)("div",{className:"wm-actions",children:(0,r.jsxs)("button",{className:"btn-primary",onClick:O,disabled:!R||T,children:[(0,r.jsx)(p.A,{size:18}),T?"Watermarking...":S?"✓ Done! Download Again":"Watermark & Download"]})})]}):(0,r.jsx)(m.A,{onFiles:L,accept:".pdf",multiple:!1,label:"Drop your PDF file here to watermark"}),(0,r.jsx)(f.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE||"",className:"tool-inline-ad"}),(0,r.jsx)(u.A,{faqs:g}),(0,r.jsx)(w.A,{currentToolId:"watermark-pdf"}),(0,r.jsx)("style",{children:`
        .wm-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 640px;
          margin: 0 auto;
          width: 100%;
        }
        .wm-file-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .wm-file-icon {
          color: #6366f1;
          flex-shrink: 0;
        }
        .wm-file-details {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .wm-file-name {
          font-weight: 600;
          font-size: 0.95rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .wm-file-size {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .wm-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .wm-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }
        .wm-text-input {
          width: 100%;
          padding: 12px 16px;
          font-size: 1rem;
          font-family: inherit;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          color: var(--text-main);
          transition: var(--transition-fast);
          outline: none;
        }
        .wm-text-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
        }
        .wm-presets {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .wm-preset-chip {
          padding: 5px 14px;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          background: var(--bg-surface);
          color: var(--text-muted);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: var(--transition-fast);
          font-family: inherit;
        }
        .wm-preset-chip:hover {
          border-color: #6366f1;
          color: #6366f1;
        }
        .wm-preset-active {
          background: rgba(99, 102, 241, 0.12);
          border-color: #6366f1;
          color: #6366f1;
        }
        .wm-options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }
        .wm-option {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .wm-option-label {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .wm-option-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .wm-slider {
          flex: 1;
          accent-color: #6366f1;
          height: 6px;
          cursor: pointer;
        }
        .wm-option-value {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main);
          min-width: 48px;
          text-align: right;
          font-variant-numeric: tabular-nums;
        }
        .wm-color-row {
          gap: 12px;
        }
        .wm-color-input {
          width: 36px;
          height: 36px;
          border: 2px solid var(--border-light);
          border-radius: var(--radius-md);
          cursor: pointer;
          padding: 2px;
          background: var(--bg-panel);
        }
        .wm-preview-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .wm-preview-box {
          display: flex;
          justify-content: center;
          padding: var(--spacing-lg);
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .wm-preview-page {
          width: 140px;
          height: 180px;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          position: relative;
        }
        .wm-preview-text {
          font-weight: 700;
          letter-spacing: 2px;
          white-space: nowrap;
          user-select: none;
          text-align: center;
        }
        .wm-actions {
          display: flex;
          justify-content: center;
        }
        @media (max-width: 600px) {
          .wm-options-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}},46817:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>i,metadata:()=>s});var r=t(62740),o=t(6587);let s={title:"Watermark PDF — Add Text Watermarks Online for Free | Tiny PDF Tools",description:"Add custom text watermarks to your PDF pages. Choose font size, opacity, rotation, and color. 100% free, no uploads, 100% in your browser.",alternates:{canonical:"https://tinypdftools.com/watermark-pdf"}};function i(){return(0,r.jsx)(o.default,{})}},6587:(e,a,t)=>{"use strict";t.d(a,{default:()=>r});let r=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\WatermarkPdf.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\WatermarkPdf.jsx","default")}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[406,844,201,508,301],()=>t(7247));module.exports=r})();