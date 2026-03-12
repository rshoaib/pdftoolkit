(()=>{var e={};e.id=665,e.ids=[665],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},6369:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>g,tree:()=>d});var a=r(70260),i=r(28203),n=r(25155),s=r.n(n),o=r(67292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["sign-pdf",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,27076)),"C:\\Projects\\pdftoolkit\\src\\app\\sign-pdf\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Projects\\pdftoolkit\\src\\app\\sign-pdf\\page.jsx"],p={require:r,loadChunk:()=>Promise.resolve()},g=new a.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/sign-pdf/page",pathname:"/sign-pdf",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},92467:(e,t,r)=>{Promise.resolve().then(r.bind(r,2352))},3243:(e,t,r)=>{Promise.resolve().then(r.bind(r,9276))},28496:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(41680).A)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},32353:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(41680).A)("type",[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]])},9276:(e,t,r)=>{"use strict";r.d(t,{default:()=>y});var a=r(45512),i=r(58009),n=r(201);r(77181);var s=r(42417),o=r(32353),l=r(49656),d=r(28496),c=r(19473),p=r(41041),g=r(66790),u=r(13294),h=r(6764),m=r(3456),x=r(83724),f=r(48079);let v=[{q:"How do I sign a PDF?",a:"Upload your PDF, draw or type your signature, then click on the page preview to place it. Adjust the position and size, then download."},{q:"Is my signature stored anywhere?",a:"Never. Everything runs 100% in your browser. Your signature and files never leave your device — not even temporarily."},{q:"What kind of signature can I create?",a:"You can draw a freehand signature with your mouse or touchscreen, or type your name and we'll render it in a handwriting-style font."},{q:"Does this create a legally binding signature?",a:"This tool adds a visual signature to your PDF. For legally binding digital signatures with certificates, you would need a dedicated e-signature service."},{q:"Can I sign multiple pages?",a:"Currently, you can place your signature on one page at a time. Select the page you want before placing your signature."}],y=()=>{let e=(0,p.d)(),[t,y]=(0,i.useState)(null),[b,w]=(0,i.useState)([]),[j,P]=(0,i.useState)(!1),[k,C]=(0,i.useState)(!1),[N,S]=(0,i.useState)(null),[D,A]=(0,i.useState)(0),[z,F]=(0,i.useState)("draw"),[T,_]=(0,i.useState)(null),[R,E]=(0,i.useState)(""),[q,U]=(0,i.useState)(!1),[M,L]=(0,i.useState)(null),[I,O]=(0,i.useState)({w:200,h:60}),Y=(0,i.useRef)(null),B=(0,i.useRef)(null),G=(0,i.useCallback)(e=>{let t=e.find(e=>"application/pdf"===e.type);t&&(y(t),w([]),_(null),L(null),A(0))},[]);(0,i.useEffect)(()=>{if(!t)return;let e=!1;return(async()=>{P(!0);let a=await t.arrayBuffer();S(new Uint8Array(a));let i=await Promise.resolve().then(r.bind(r,77181));i.GlobalWorkerOptions.workerSrc="/pdf.worker.min.mjs";let n=await i.getDocument({data:a}).promise,s=[];for(let t=1;t<=n.numPages;t++){let r=await n.getPage(t),a=r.getViewport({scale:1}),i=document.createElement("canvas");i.width=a.width,i.height=a.height;let o=i.getContext("2d");if(await r.render({canvasContext:o,viewport:a}).promise,s.push({index:t-1,thumbnail:i.toDataURL("image/png"),width:a.width,height:a.height,label:`Page ${t}`}),e)return}w(s),P(!1)})().catch(e=>{console.error(e),P(!1)}),()=>{e=!0}},[t]),(0,i.useEffect)(()=>{if("draw"!==z||!Y.current)return;let e=Y.current,t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.lineWidth=2,t.lineCap="round",t.strokeStyle="#1a1a2e"},[z]);let W=e=>{let t=Y.current.getBoundingClientRect(),r=e.touches?e.touches[0].clientX:e.clientX,a=e.touches?e.touches[0].clientY:e.clientY;return{x:r-t.left,y:a-t.top}},X=e=>{e.preventDefault(),U(!0);let t=Y.current.getContext("2d"),r=W(e);t.beginPath(),t.moveTo(r.x,r.y)},$=e=>{if(e.preventDefault(),!q)return;let t=Y.current.getContext("2d"),r=W(e);t.lineTo(r.x,r.y),t.stroke()},H=e=>{e.preventDefault(),U(!1)},V=async()=>{if(T&&M&&N){C(!0);try{let e=await n.PDFDocument.load(N),r=await fetch(T).then(e=>e.arrayBuffer()),a=await e.embedPng(r),i=e.getPage(D),s=b[D],o=B.current?.querySelector("img"),l=o?o.clientWidth:s.width,d=o?o.clientHeight:s.height,c=s.width/l,p=s.height/d,g=M.x*c,u=s.height-(M.y+I.h)*p,h=I.w*c,m=I.h*p;i.drawImage(a,{x:g,y:u,width:h,height:m});let x=await e.save(),f=new Blob([x],{type:"application/pdf"}),v=URL.createObjectURL(f),y=document.createElement("a");y.href=v,y.download=`signed_${t.name}`,y.click(),URL.revokeObjectURL(v)}catch(t){e.error("Error signing PDF: "+t.message)}finally{C(!1)}}};return(0,a.jsxs)("div",{className:"tool-page",children:[(0,a.jsx)(h.A,{title:"Sign PDF — Add Signature to PDF Online for Free | Tiny PDF Tools",description:"Draw or type your signature and place it on any PDF page. 100% free, no uploads — your signature never leaves your browser.",canonicalUrl:"https://tinypdftools.com/sign-pdf",schemaType:"WebApplication",schemaData:{name:"Sign PDF",url:"https://tinypdftools.com/sign-pdf",applicationCategory:"Utility",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},description:"Add your signature to any PDF page. Free and private."}}),(0,a.jsxs)("div",{className:"tool-header",children:[(0,a.jsx)("h1",{className:"tool-title",children:"Sign PDF"}),(0,a.jsx)("p",{className:"tool-desc",children:"Draw or type your signature, place it on any page, then download your signed PDF."})]}),(0,a.jsx)(f.A,{paragraphs:["Draw or type your signature and place it on any page of your PDF document. Position, resize, and adjust the signature until it fits perfectly. Ideal for signing contracts, approvals, letters, and any document that requires a personal signature.","Your signature is embedded directly into the PDF as a visual element. You can use a mouse, trackpad, or touchscreen to draw a freehand signature, or type your name for a clean text-based signature. Everything happens in your browser — your signed documents are never uploaded."],bestFor:["Contract signing","Approval workflows","Letters and memos","Permission forms"]}),t?j?(0,a.jsxs)("div",{className:"sign-loading",children:[(0,a.jsx)("div",{className:"sign-spinner"}),(0,a.jsx)("p",{children:"Loading pages…"})]}):(0,a.jsxs)("div",{className:"sign-workspace",children:[(0,a.jsxs)("div",{className:"sign-section",children:[(0,a.jsx)("h3",{className:"sign-section-title",children:"1. Create Your Signature"}),(0,a.jsxs)("div",{className:"sign-mode-tabs",children:[(0,a.jsxs)("button",{className:`sign-tab ${"draw"===z?"active":""}`,onClick:()=>F("draw"),children:[(0,a.jsx)(s.A,{size:16})," Draw"]}),(0,a.jsxs)("button",{className:`sign-tab ${"type"===z?"active":""}`,onClick:()=>F("type"),children:[(0,a.jsx)(o.A,{size:16})," Type"]})]}),"draw"===z?(0,a.jsxs)("div",{className:"sign-draw-area",children:[(0,a.jsx)("canvas",{ref:Y,width:400,height:120,className:"sign-canvas",onMouseDown:X,onMouseMove:$,onMouseUp:H,onMouseLeave:H,onTouchStart:X,onTouchMove:$,onTouchEnd:H}),(0,a.jsxs)("div",{className:"sign-draw-actions",children:[(0,a.jsxs)("button",{className:"btn-secondary btn-sm",onClick:()=>{let e=Y.current;e.getContext("2d").clearRect(0,0,e.width,e.height),_(null),L(null)},children:[(0,a.jsx)(l.A,{size:14})," Clear"]}),(0,a.jsxs)("button",{className:"btn-primary btn-sm",onClick:()=>{_(Y.current.toDataURL("image/png"))},children:[(0,a.jsx)(s.A,{size:14})," Use Signature"]})]})]}):(0,a.jsxs)("div",{className:"sign-type-area",children:[(0,a.jsx)("input",{type:"text",value:R,onChange:e=>E(e.target.value),placeholder:"Type your name…",className:"sign-type-input"}),(0,a.jsx)("div",{className:"sign-type-preview",style:{fontFamily:'Georgia, "Times New Roman", serif',fontStyle:"italic",fontSize:"2rem"},children:R||"Your Signature"}),(0,a.jsxs)("button",{className:"btn-primary btn-sm",onClick:()=>{if(!R.trim())return;let e=document.createElement("canvas");e.width=400,e.height=100;let t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.font='italic 42px "Georgia", "Times New Roman", serif',t.fillStyle="#1a1a2e",t.textBaseline="middle",t.fillText(R,20,50),_(e.toDataURL("image/png"))},disabled:!R.trim(),children:[(0,a.jsx)(o.A,{size:14})," Use Signature"]})]}),T&&(0,a.jsx)("div",{className:"sign-preview-badge",children:"✅ Signature ready — click on the page below to place it"})]}),(0,a.jsxs)("div",{className:"sign-section",children:[(0,a.jsx)("h3",{className:"sign-section-title",children:"2. Place Signature on Page"}),b.length>1&&(0,a.jsx)("div",{className:"sign-page-selector",children:b.map((e,t)=>(0,a.jsx)("button",{className:`sign-page-btn ${D===t?"active":""}`,onClick:()=>{A(t),L(null)},children:e.label},t))}),(0,a.jsxs)("div",{className:"sign-page-preview",ref:B,onClick:e=>{if(!T||!B.current)return;let t=B.current.getBoundingClientRect(),r=e.clientX-t.left,a=e.clientY-t.top;L({x:r-I.w/2,y:a-I.h/2})},style:{cursor:T?"crosshair":"default"},children:[(0,a.jsx)("img",{src:b[D]?.thumbnail,alt:b[D]?.label,style:{width:"100%",display:"block"}}),M&&T&&(0,a.jsx)("img",{src:T,alt:"Signature",className:"sign-placed",style:{position:"absolute",left:M.x,top:M.y,width:I.w,height:I.h,pointerEvents:"none"}})]}),T&&(0,a.jsxs)("div",{className:"sign-size-control",children:[(0,a.jsx)("label",{className:"sign-size-label",children:"Signature size:"}),(0,a.jsx)("input",{type:"range",min:"80",max:"400",value:I.w,onChange:e=>{let t=Number(e.target.value);O({w:t,h:Math.round(.3*t)})},className:"sign-size-slider"}),(0,a.jsxs)("span",{className:"sign-size-val",children:[I.w,"px"]})]})]}),(0,a.jsxs)("div",{className:"sign-actions",children:[(0,a.jsxs)("button",{className:"btn-secondary",onClick:()=>{y(null),w([]),_(null),L(null),S(null),E("")},children:[(0,a.jsx)(d.A,{size:16})," Start Over"]}),(0,a.jsxs)("button",{className:"btn-primary",onClick:V,disabled:!T||!M||k,children:[(0,a.jsx)(c.A,{size:18}),k?"Saving…":"Download Signed PDF"]})]})]}):(0,a.jsx)(g.A,{onFiles:G,accept:".pdf",multiple:!1,label:"Drop your PDF file here to sign"}),(0,a.jsx)(m.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE||"",className:"tool-inline-ad"}),(0,a.jsx)(u.A,{faqs:v}),(0,a.jsx)(x.A,{currentToolId:"sign-pdf"}),(0,a.jsx)("style",{children:`
        .tool-page { display: flex; flex-direction: column; gap: var(--spacing-xl); }
        .tool-header { text-align: center; padding: var(--spacing-lg) 0; }
        .tool-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
        .tool-desc { color: var(--text-muted); font-size: 1.05rem; }

        .sign-loading {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          padding: var(--spacing-xxl); color: var(--text-muted);
        }
        .sign-spinner {
          width: 40px; height: 40px; border: 3px solid var(--border-light);
          border-top-color: var(--primary); border-radius: 50%;
          animation: sign-spin 0.8s linear infinite;
        }
        @keyframes sign-spin { to { transform: rotate(360deg); } }

        .sign-workspace { display: flex; flex-direction: column; gap: var(--spacing-xl); }

        .sign-section {
          padding: var(--spacing-lg); background: var(--bg-panel);
          border: 1px solid var(--border-light); border-radius: var(--radius-lg);
          display: flex; flex-direction: column; gap: var(--spacing-md);
        }
        .sign-section-title { font-size: 1.1rem; font-weight: 700; }

        .sign-mode-tabs { display: flex; gap: 8px; }
        .sign-tab {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 18px; border-radius: var(--radius-md); font-weight: 600;
          font-size: 0.9rem; cursor: pointer; transition: var(--transition-fast);
          border: 1px solid var(--border-light); background: var(--bg-surface); color: var(--text-muted);
        }
        .sign-tab.active { background: var(--primary); color: #fff; border-color: var(--primary); }

        .sign-canvas {
          width: 100%; max-width: 400px; height: 120px;
          border: 2px dashed var(--border-light); border-radius: var(--radius-md);
          background: #fff; cursor: crosshair; touch-action: none;
        }
        .sign-draw-actions { display: flex; gap: 8px; }
        .btn-sm { padding: 8px 14px; font-size: 0.85rem; }

        .sign-type-area { display: flex; flex-direction: column; gap: 12px; }
        .sign-type-input {
          padding: 12px 16px; border: 1px solid var(--border-light);
          border-radius: var(--radius-md); font-size: 1rem; background: var(--bg-surface);
          color: var(--text-main);
        }
        .sign-type-preview {
          padding: 12px 20px; background: #fff; border-radius: var(--radius-md);
          border: 1px solid var(--border-light); color: #1a1a2e; min-height: 60px;
          display: flex; align-items: center;
        }

        .sign-preview-badge {
          padding: 10px 16px; background: #22c55e15; color: #22c55e;
          border-radius: var(--radius-md); font-weight: 600; font-size: 0.9rem; text-align: center;
        }

        .sign-page-selector { display: flex; gap: 6px; flex-wrap: wrap; }
        .sign-page-btn {
          padding: 6px 14px; border-radius: var(--radius-md); font-size: 0.85rem; font-weight: 600;
          cursor: pointer; border: 1px solid var(--border-light); background: var(--bg-surface);
          color: var(--text-muted); transition: var(--transition-fast);
        }
        .sign-page-btn.active { background: var(--primary); color: #fff; border-color: var(--primary); }

        .sign-page-preview {
          position: relative; border: 2px solid var(--border-light); border-radius: var(--radius-md);
          overflow: hidden; max-height: 600px; overflow-y: auto;
        }

        .sign-placed { opacity: 0.9; }

        .sign-size-control {
          display: flex; align-items: center; gap: 12px;
        }
        .sign-size-label { font-size: 0.9rem; font-weight: 600; color: var(--text-muted); }
        .sign-size-slider { flex: 1; max-width: 300px; }
        .sign-size-val { font-size: 0.85rem; color: var(--text-muted); min-width: 50px; }

        .sign-actions { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .sign-canvas { max-width: 100%; }
        }
      `})]})}},27076:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>n});var a=r(62740),i=r(2352);let n={title:"Sign PDF — Add Signature to PDF Online for Free | Tiny PDF Tools",description:"Draw or type your signature and place it on any PDF page. 100% free, no uploads — your signature never leaves your browser.",alternates:{canonical:"https://tinypdftools.com/sign-pdf"}};function s(){return(0,a.jsx)(i.default,{})}},2352:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});let a=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\SignPdf.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\SignPdf.jsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[406,844,201,181,508,301],()=>r(6369));module.exports=a})();