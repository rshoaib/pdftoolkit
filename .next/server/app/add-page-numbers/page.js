(()=>{var e={};e.id=813,e.ids=[813],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},92873:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>m,tree:()=>p});var r=a(70260),n=a(28203),s=a(25155),o=a.n(s),i=a(67292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);a.d(t,l);let p=["",{children:["add-page-numbers",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,24379)),"C:\\Projects\\pdftoolkit\\src\\app\\add-page-numbers\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Projects\\pdftoolkit\\src\\app\\add-page-numbers\\page.jsx"],c={require:a,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/add-page-numbers/page",pathname:"/add-page-numbers",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},10646:(e,t,a)=>{Promise.resolve().then(a.bind(a,16909))},5918:(e,t,a)=>{Promise.resolve().then(a.bind(a,38049))},92557:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41680).A)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},94520:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41680).A)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},38049:(e,t,a)=>{"use strict";a.d(t,{default:()=>w});var r=a(45512),n=a(58009),s=a(201),o=a(80425),i=a(92557),l=a(94520),p=a(19473),d=a(41041),c=a(66790),m=a(13294),u=a(6764),g=a(3456),x=a(83724),f=a(48079);let b=[{q:"What page number formats are available?",a:'You can choose from four formats: plain number (1, 2, 3), "Page 1", "Page 1 of N", or centered dashes (- 1 -). Each format is applied consistently to every page.'},{q:"Can I choose where the page numbers appear?",a:"Yes! You can place numbers in six positions: top-left, top-center, top-right, bottom-left, bottom-center, or bottom-right. Most users prefer bottom-center."},{q:"Can I start numbering from a custom number?",a:'Absolutely. Use the "Start From" option to begin numbering from any number. This is perfect for multi-part documents or appendices.'},{q:"Does this tool upload my PDF to a server?",a:"No. All processing happens 100% in your browser using JavaScript. Your files never leave your device — complete privacy guaranteed."},{q:"Will adding page numbers affect my PDF quality?",a:"Not at all. Page numbers are added as lightweight text overlays. All original content, images, and formatting remain untouched."}],h=[{id:"top-left",label:"Top Left"},{id:"top-center",label:"Top Center"},{id:"top-right",label:"Top Right"},{id:"bottom-left",label:"Bottom Left"},{id:"bottom-center",label:"Bottom Center"},{id:"bottom-right",label:"Bottom Right"}],v=[{id:"plain",label:"1, 2, 3",example:e=>`${e}`},{id:"page",label:"Page 1",example:e=>`Page ${e}`},{id:"page-of",label:"Page 1 of N",example:(e,t)=>`Page ${e} of ${t}`},{id:"dashes",label:"- 1 -",example:e=>`- ${e} -`}],y=e=>({r:parseInt(e.slice(1,3),16)/255,g:parseInt(e.slice(3,5),16)/255,b:parseInt(e.slice(5,7),16)/255}),j=(e,t,a)=>{let r=v.find(t=>t.id===e);return r?r.example(t,a):`${t}`},w=()=>{let e=(0,d.d)(),[t,a]=(0,n.useState)(null),[w,N]=(0,n.useState)("bottom-center"),[P,A]=(0,n.useState)("plain"),[k,C]=(0,n.useState)(12),[F,z]=(0,n.useState)(1),[D,S]=(0,n.useState)("#666666"),[_,T]=(0,n.useState)(36),[q,M]=(0,n.useState)(!1),[L,E]=(0,n.useState)(!1),R=(0,n.useCallback)(e=>{let t=e.find(e=>"application/pdf"===e.type);t&&(a(t),E(!1))},[]),I=async()=>{if(t){M(!0);try{let e=await t.arrayBuffer(),a=await s.PDFDocument.load(e),r=await a.embedFont(s.StandardFonts.Helvetica),n=a.getPages(),o=n.length,{r:i,g:l,b:p}=y(D);n.forEach((e,t)=>{let a,n;let d=j(P,F+t,o+F-1),{width:c,height:m}=e.getSize(),u=r.widthOfTextAtSize(d,k);n=w.startsWith("top")?m-_:_-k,a=w.endsWith("left")?_:w.endsWith("center")?(c-u)/2:c-u-_,e.drawText(d,{x:a,y:n,size:k,font:r,color:(0,s.rgb)(i,l,p)})});let d=await a.save(),c=new Blob([d],{type:"application/pdf"}),m=URL.createObjectURL(c),u=document.createElement("a");u.href=m,u.download=t.name.replace(".pdf","-numbered.pdf"),u.click(),URL.revokeObjectURL(m),E(!0)}catch(t){e.error("Error adding page numbers: "+t.message)}finally{M(!1)}}};return(0,r.jsxs)("div",{className:"tool-page",children:[(0,r.jsx)(u.A,{title:"Add Page Numbers to PDF — Free Online Tool | TinyPDFTools",description:"Add page numbers to your PDF for free. Choose position, format, font size, and color. 100% client-side, no uploads.",canonicalUrl:"https://tinypdftools.com/add-page-numbers",schemaType:"WebApplication",schemaData:{name:"Add Page Numbers to PDF",url:"https://tinypdftools.com/add-page-numbers",applicationCategory:"UtilityApplication",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},description:"Add page numbers to PDF pages with customizable position, format, font size, and color. Free, private, client-side processing."}}),(0,r.jsxs)("div",{className:"tool-header",children:[(0,r.jsx)("h1",{className:"tool-title",children:"Add Page Numbers to PDF"}),(0,r.jsx)("p",{className:"tool-desc",children:"Stamp page numbers on every page of your PDF. Choose position, format, size, and color — 100% in your browser."})]}),(0,r.jsx)(f.A,{paragraphs:["Stamp page numbers on every page of your PDF document. Choose the position (top or bottom, left, center, or right), number format, font size, and starting number. Essential for multi-page reports, manuscripts, and official documents.","Page numbers are embedded as text directly onto the PDF pages. You can preview the placement before downloading. The operation runs entirely in your browser, so your document never touches a remote server."],bestFor:["Reports and manuscripts","Academic papers","Legal filings","Multi-page proposals"]}),t?(0,r.jsxs)("div",{className:"pn-workspace",children:[(0,r.jsxs)("div",{className:"pn-file-info",children:[(0,r.jsx)(o.A,{size:24,className:"pn-file-icon"}),(0,r.jsxs)("div",{className:"pn-file-details",children:[(0,r.jsx)("span",{className:"pn-file-name",children:t.name}),(0,r.jsxs)("span",{className:"pn-file-size",children:[(t.size/1024).toFixed(0)," KB"]})]}),(0,r.jsxs)("button",{className:"btn-secondary",onClick:()=>{a(null),N("bottom-center"),A("plain"),C(12),z(1),S("#666666"),T(36),E(!1)},style:{marginLeft:"auto"},children:[(0,r.jsx)(i.A,{size:14})," Change File"]})]}),(0,r.jsxs)("div",{className:"pn-section",children:[(0,r.jsxs)("label",{className:"pn-label",children:[(0,r.jsx)(l.A,{size:16})," Position"]}),(0,r.jsx)("div",{className:"pn-position-grid",children:h.map(e=>(0,r.jsx)("button",{type:"button",className:`pn-pos-btn ${w===e.id?"pn-pos-active":""}`,onClick:()=>{N(e.id),E(!1)},children:e.label},e.id))})]}),(0,r.jsxs)("div",{className:"pn-section",children:[(0,r.jsx)("label",{className:"pn-label",children:"Format"}),(0,r.jsx)("div",{className:"pn-format-row",children:v.map(e=>(0,r.jsx)("button",{type:"button",className:`pn-preset-chip ${P===e.id?"pn-preset-active":""}`,onClick:()=>{A(e.id),E(!1)},children:e.label},e.id))})]}),(0,r.jsxs)("div",{className:"pn-section",children:[(0,r.jsxs)("label",{className:"pn-label",children:[(0,r.jsx)(l.A,{size:16})," Options"]}),(0,r.jsxs)("div",{className:"pn-options-grid",children:[(0,r.jsxs)("div",{className:"pn-option",children:[(0,r.jsx)("span",{className:"pn-option-label",children:"Font Size"}),(0,r.jsxs)("div",{className:"pn-option-row",children:[(0,r.jsx)("input",{type:"range",min:"8",max:"24",step:"1",value:k,onChange:e=>{C(Number(e.target.value)),E(!1)},className:"pn-slider","aria-label":"Font size"}),(0,r.jsxs)("span",{className:"pn-option-value",children:[k,"pt"]})]})]}),(0,r.jsxs)("div",{className:"pn-option",children:[(0,r.jsx)("span",{className:"pn-option-label",children:"Margin"}),(0,r.jsxs)("div",{className:"pn-option-row",children:[(0,r.jsx)("input",{type:"range",min:"20",max:"80",step:"2",value:_,onChange:e=>{T(Number(e.target.value)),E(!1)},className:"pn-slider","aria-label":"Margin from edge"}),(0,r.jsxs)("span",{className:"pn-option-value",children:[_,"px"]})]})]}),(0,r.jsxs)("div",{className:"pn-option",children:[(0,r.jsx)("span",{className:"pn-option-label",children:"Start From"}),(0,r.jsx)("div",{className:"pn-option-row",children:(0,r.jsx)("input",{type:"number",min:"0",max:"9999",value:F,onChange:e=>{z(Math.max(0,Number(e.target.value))),E(!1)},className:"pn-number-input","aria-label":"Starting page number"})})]}),(0,r.jsxs)("div",{className:"pn-option",children:[(0,r.jsx)("span",{className:"pn-option-label",children:"Color"}),(0,r.jsxs)("div",{className:"pn-option-row pn-color-row",children:[(0,r.jsx)("input",{type:"color",value:D,onChange:e=>{S(e.target.value),E(!1)},className:"pn-color-input","aria-label":"Number color"}),(0,r.jsx)("span",{className:"pn-option-value",children:D.toUpperCase()})]})]})]})]}),(0,r.jsxs)("div",{className:"pn-preview-section",children:[(0,r.jsx)("span",{className:"pn-label",children:"Preview"}),(0,r.jsx)("div",{className:"pn-preview-box",children:(0,r.jsxs)("div",{className:"pn-preview-page",children:[(0,r.jsxs)("div",{className:"pn-preview-lines",children:[(0,r.jsx)("div",{className:"pn-line",style:{width:"80%"}}),(0,r.jsx)("div",{className:"pn-line",style:{width:"90%"}}),(0,r.jsx)("div",{className:"pn-line",style:{width:"60%"}}),(0,r.jsx)("div",{className:"pn-line",style:{width:"75%"}}),(0,r.jsx)("div",{className:"pn-line",style:{width:"85%"}})]}),(0,r.jsx)("span",{className:"pn-preview-number",style:{...(()=>{let e={};return w.startsWith("top")?e.top="10px":e.bottom="10px",w.endsWith("left")?(e.left="10px",e.textAlign="left"):w.endsWith("center")?(e.left="50%",e.transform="translateX(-50%)",e.textAlign="center"):(e.right="10px",e.textAlign="right"),e})(),fontSize:`${Math.max(8,.7*k)}px`,color:D},children:j(P,F,F+4)})]})})]}),(0,r.jsx)("div",{className:"pn-actions",children:(0,r.jsxs)("button",{className:"btn-primary",onClick:I,disabled:q,children:[(0,r.jsx)(p.A,{size:18}),q?"Adding Numbers...":L?"✓ Done! Download Again":"Add Numbers & Download"]})})]}):(0,r.jsx)(c.A,{onFiles:R,accept:".pdf",multiple:!1,label:"Drop your PDF file here to add page numbers"}),(0,r.jsx)(g.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE||"",className:"tool-inline-ad"}),(0,r.jsx)(m.A,{faqs:b}),(0,r.jsx)(x.A,{currentToolId:"add-page-numbers"}),(0,r.jsx)("style",{children:`
        .pn-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 640px;
          margin: 0 auto;
          width: 100%;
        }
        .pn-file-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .pn-file-icon {
          color: #dc2626;
          flex-shrink: 0;
        }
        .pn-file-details {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .pn-file-name {
          font-weight: 600;
          font-size: 0.95rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .pn-file-size {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .pn-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .pn-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }
        .pn-position-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .pn-pos-btn {
          padding: 10px 8px;
          font-size: 0.82rem;
          font-weight: 600;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          color: var(--text-muted);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: var(--transition-fast);
          font-family: inherit;
          text-align: center;
        }
        .pn-pos-btn:hover {
          border-color: #dc2626;
          color: #dc2626;
        }
        .pn-pos-active {
          background: rgba(220, 38, 38, 0.1);
          border-color: #dc2626;
          color: #dc2626;
        }
        .pn-format-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .pn-preset-chip {
          padding: 6px 16px;
          font-size: 0.82rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          background: var(--bg-surface);
          color: var(--text-muted);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: var(--transition-fast);
          font-family: inherit;
        }
        .pn-preset-chip:hover {
          border-color: #dc2626;
          color: #dc2626;
        }
        .pn-preset-active {
          background: rgba(220, 38, 38, 0.1);
          border-color: #dc2626;
          color: #dc2626;
        }
        .pn-options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }
        .pn-option {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .pn-option-label {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .pn-option-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pn-slider {
          flex: 1;
          accent-color: #dc2626;
          height: 6px;
          cursor: pointer;
        }
        .pn-option-value {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main);
          min-width: 48px;
          text-align: right;
          font-variant-numeric: tabular-nums;
        }
        .pn-number-input {
          width: 80px;
          padding: 8px 12px;
          font-size: 0.95rem;
          font-family: inherit;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          color: var(--text-main);
          outline: none;
          transition: var(--transition-fast);
          font-variant-numeric: tabular-nums;
        }
        .pn-number-input:focus {
          border-color: #dc2626;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
        }
        .pn-color-row {
          gap: 12px;
        }
        .pn-color-input {
          width: 36px;
          height: 36px;
          border: 2px solid var(--border-light);
          border-radius: var(--radius-md);
          cursor: pointer;
          padding: 2px;
          background: var(--bg-panel);
        }
        .pn-preview-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .pn-preview-box {
          display: flex;
          justify-content: center;
          padding: var(--spacing-lg);
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .pn-preview-page {
          width: 140px;
          height: 180px;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          position: relative;
          padding: 16px 12px;
        }
        .pn-preview-lines {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
        }
        .pn-line {
          height: 4px;
          background: #e5e7eb;
          border-radius: 2px;
        }
        .pn-preview-number {
          position: absolute;
          font-weight: 600;
          white-space: nowrap;
          user-select: none;
          font-variant-numeric: tabular-nums;
        }
        .pn-actions {
          display: flex;
          justify-content: center;
        }
        @media (max-width: 600px) {
          .pn-options-grid {
            grid-template-columns: 1fr;
          }
          .pn-position-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `})]})}},24379:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o,metadata:()=>s});var r=a(62740),n=a(16909);let s={title:"Add Page Numbers to PDF — Free Online Tool | TinyPDFTools",description:"Add page numbers to your PDF for free. Choose position, format, font size, and color. 100% client-side, no uploads.",alternates:{canonical:"https://tinypdftools.com/add-page-numbers"}};function o(){return(0,r.jsx)(n.default,{})}},16909:(e,t,a)=>{"use strict";a.d(t,{default:()=>r});let r=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\AddPageNumbers.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\AddPageNumbers.jsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[406,844,201,508,301],()=>a(92873));module.exports=r})();