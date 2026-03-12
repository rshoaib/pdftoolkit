(()=>{var e={};e.id=330,e.ids=[330],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},2239:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>d,pages:()=>c,routeModule:()=>h,tree:()=>p});var a=t(70260),o=t(28203),s=t(25155),i=t.n(s),n=t(67292),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let p=["",{children:["crop-pdf",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,26971)),"C:\\Projects\\pdftoolkit\\src\\app\\crop-pdf\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Projects\\pdftoolkit\\src\\app\\crop-pdf\\page.jsx"],d={require:t,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/crop-pdf/page",pathname:"/crop-pdf",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},1358:(e,r,t)=>{Promise.resolve().then(t.bind(t,90303))},41110:(e,r,t)=>{Promise.resolve().then(t.bind(t,86139))},92557:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});let a=(0,t(41680).A)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},86139:(e,r,t)=>{"use strict";t.d(r,{default:()=>v});var a=t(45512),o=t(58009),s=t(201);t(77181);var i=t(46339),n=t(92557),l=t(19473),p=t(41041),c=t(66790),d=t(13294),h=t(6764),u=t(3456),m=t(83724),x=t(48079);let f=[{q:"How do I crop a PDF?",a:'Upload your PDF, drag the crop handles to define the area you want to keep, then click "Crop & Download". The cropped PDF downloads instantly.'},{q:"Are my files uploaded to a server?",a:"No. All processing happens 100% in your browser using pdf-lib. Your files never leave your device."},{q:"Does cropping affect PDF quality?",a:"No. Cropping sets the visible area (CropBox) without re-encoding. Text, images, and vectors remain perfectly intact."},{q:"Can I crop all pages at once?",a:'Yes! Toggle "Apply to all pages" to crop every page with the same dimensions. You can also crop just the current page.'}],g=[{id:"custom",label:"Custom"},{id:"trim-10",label:"Trim 10% Margins"},{id:"trim-20",label:"Trim 20% Margins"},{id:"a4",label:"A4 (595\xd7842)"},{id:"letter",label:"Letter (612\xd7792)"}],v=()=>{let e=(0,p.d)(),[r,v]=(0,o.useState)(null),[w,b]=(0,o.useState)(null),[y,j]=(0,o.useState)(0),[k,N]=(0,o.useState)(0),[M,P]=(0,o.useState)({width:0,height:0}),[C,D]=(0,o.useState)(!1),[A,F]=(0,o.useState)(!1),[z,T]=(0,o.useState)(!0),[_,R]=(0,o.useState)("custom"),[S,q]=(0,o.useState)({x:0,y:0,w:0,h:0}),E=(0,o.useRef)(null),L=(0,o.useRef)(null),U=(0,o.useRef)(null),Y=(0,o.useRef)(null),[X,B]=(0,o.useState)(1),O=(0,o.useCallback)(e=>{let r=e.find(e=>"application/pdf"===e.type);r&&(v(r),F(!1),r.arrayBuffer().then(e=>{b(new Uint8Array(e))}))},[]);(0,o.useEffect)(()=>{if(!w)return;let e=!1;return(async()=>{try{let r=await Promise.resolve().then(t.bind(t,77181));r.GlobalWorkerOptions.workerSrc="/pdf.worker.min.mjs";let a=await r.getDocument({data:w.slice()}).promise;j(a.numPages);let o=await a.getPage(k+1),s=o.getViewport({scale:1}),i=s.width,n=s.height;P({width:i,height:n});let l=U.current,p=l?l.clientWidth-32:560,c=Math.min(p/i,600/n,1.5);B(c);let d=E.current;if(!d||e)return;d.width=i*c,d.height=n*c;let h=d.getContext("2d");await o.render({canvasContext:h,viewport:o.getViewport({scale:c})}).promise,0===S.w&&0===S.h&&q({x:0,y:0,w:i,h:n})}catch(e){console.error("Render error:",e)}})(),()=>{e=!0}},[w,k]),(0,o.useEffect)(()=>{if(!M.width||!M.height)return;let{width:e,height:r}=M;switch(_){case"trim-10":{let t=.1*e,a=.1*r;q({x:t,y:a,w:e-2*t,h:r-2*a});break}case"trim-20":{let t=.2*e,a=.2*r;q({x:t,y:a,w:e-2*t,h:r-2*a});break}case"a4":q({x:0,y:0,w:595,h:842});break;case"letter":q({x:0,y:0,w:612,h:792})}},[_,M]);let I=()=>{let e=E.current?.width||0,r=E.current?.height||0;return e&&r?{left:S.x*X,top:(M.height-S.y-S.h)*X,width:S.w*X,height:S.h*X}:{left:0,top:0,width:0,height:0}},G=(e,r)=>{let t=I(),a=e>=t.left-10&&e<=t.left+t.width+10,o=r>=t.top-10&&r<=t.top+t.height+10;if(!a||!o)return"outside";let s=10>Math.abs(e-t.left),i=10>Math.abs(e-(t.left+t.width)),n=10>Math.abs(r-t.top),l=10>Math.abs(r-(t.top+t.height));return n&&s?"nw":n&&i?"ne":l&&s?"sw":l&&i?"se":s?"w":i?"e":n?"n":l?"s":e>t.left&&e<t.left+t.width&&r>t.top&&r<t.top+t.height?"move":"outside"},V=e=>{let r=L.current.getBoundingClientRect(),t=e.touches?e.touches[0].clientX:e.clientX,a=e.touches?e.touches[0].clientY:e.clientY;return{x:t-r.left,y:a-r.top}},W=e=>{e.preventDefault();let r=V(e),t=G(r.x,r.y);"outside"!==t&&(Y.current={handle:t,startX:r.x,startY:r.y,startRect:{...S}})},H=e=>{if(!Y.current){let r=V(e),t=G(r.x,r.y);L.current.style.cursor=({nw:"nwse-resize",ne:"nesw-resize",sw:"nesw-resize",se:"nwse-resize",n:"ns-resize",s:"ns-resize",e:"ew-resize",w:"ew-resize",move:"move",outside:"crosshair"})[t]||"default";return}e.preventDefault();let r=V(e),t=(r.x-Y.current.startX)/X,a=-(r.y-Y.current.startY)/X,o=Y.current.startRect,s=M.width,i=M.height,{x:n,y:l,w:p,h:c}=o;switch(Y.current.handle){case"move":n=Math.max(0,Math.min(s-p,o.x+t)),l=Math.max(0,Math.min(i-c,o.y+a));break;case"se":p=Math.max(20,o.w+t),c=Math.max(20,o.h-a),l=o.y+a+(o.h-c+(20===c?o.h-20:0)),l=o.y+(o.h-c);break;case"sw":n=o.x+t,20===(p=Math.max(20,o.w-t))&&(n=o.x+o.w-20),c=Math.max(20,o.h-a),l=o.y+(o.h-c);break;case"ne":p=Math.max(20,o.w+t),l=o.y+a,20===(c=Math.max(20,o.h+a))&&(l=o.y+o.h-20);break;case"nw":n=o.x+t,20===(p=Math.max(20,o.w-t))&&(n=o.x+o.w-20),l=o.y+a,20===(c=Math.max(20,o.h+a))&&(l=o.y+o.h-20);break;case"n":l=o.y+a,20===(c=Math.max(20,o.h+a))&&(l=o.y+o.h-20);break;case"s":c=Math.max(20,o.h-a),l=o.y+(o.h-c);break;case"e":p=Math.max(20,o.w+t);break;case"w":n=o.x+t,20===(p=Math.max(20,o.w-t))&&(n=o.x+o.w-20)}n=Math.max(0,n),l=Math.max(0,l),p=Math.min(p,s-n),c=Math.min(c,i-l),q({x:n,y:l,w:p,h:c}),R("custom")},$=()=>{Y.current=null},K=async()=>{if(w){D(!0);try{let e=await s.PDFDocument.load(w),t=e.getPages();z?t.forEach(e=>{e.setCropBox(S.x,S.y,S.w,S.h)}):t[k].setCropBox(S.x,S.y,S.w,S.h);let a=await e.save(),o=new Blob([a],{type:"application/pdf"}),i=URL.createObjectURL(o),n=document.createElement("a");n.href=i,n.download=r.name.replace(".pdf","-cropped.pdf"),n.click(),URL.revokeObjectURL(i),F(!0)}catch(r){e.error("Error cropping PDF: "+r.message)}finally{D(!1)}}},J=I();return(0,a.jsxs)("div",{className:"tool-page",children:[(0,a.jsx)(h.A,{title:"Crop PDF — Trim PDF Margins & Pages Online for Free | Tiny PDF Tools",description:"Crop and trim PDF pages visually. Drag to select the area to keep, then download instantly. 100% free, no uploads — runs in your browser.",canonicalUrl:"https://tinypdftools.com/crop-pdf",schemaType:"WebApplication",schemaData:{name:"Crop PDF",url:"https://tinypdftools.com/crop-pdf",applicationCategory:"UtilityApplication",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}}),(0,a.jsxs)("div",{className:"tool-header",children:[(0,a.jsx)("h1",{className:"tool-title",children:"Crop PDF"}),(0,a.jsx)("p",{className:"tool-desc",children:"Visually trim margins or cut specific areas from your PDF pages. Drag the handles to define the crop area."})]}),(0,a.jsx)(x.A,{paragraphs:["Visually trim margins or cut specific areas from PDF pages. Draw a crop rectangle directly on the page preview to define exactly which area to keep. This is useful for removing headers, footers, whitespace, or focusing on specific content areas.","The crop tool modifies the visible area of the page without destroying the underlying content. You can apply the same crop to all pages or set different crops per page. Everything runs in your browser for instant, private processing."],bestFor:["Removing margins","Trimming headers/footers","Focusing on content areas","Print preparation"]}),r?(0,a.jsxs)("div",{className:"crop-workspace",children:[(0,a.jsxs)("div",{className:"crop-file-info",children:[(0,a.jsx)(i.A,{size:24,className:"crop-file-icon"}),(0,a.jsxs)("div",{className:"crop-file-details",children:[(0,a.jsx)("span",{className:"crop-file-name",children:r.name}),(0,a.jsxs)("span",{className:"crop-file-size",children:[(r.size/1024).toFixed(0)," KB \xb7 ",y," page",y>1?"s":""]})]}),(0,a.jsxs)("button",{className:"btn-secondary",onClick:()=>{v(null),b(null),j(0),N(0),P({width:0,height:0}),q({x:0,y:0,w:0,h:0}),F(!1),R("custom")},style:{marginLeft:"auto"},children:[(0,a.jsx)(n.A,{size:14})," Change File"]})]}),(0,a.jsxs)("div",{className:"crop-presets",children:[(0,a.jsx)("label",{className:"crop-label",children:"Crop Mode"}),(0,a.jsx)("div",{className:"crop-preset-btns",children:g.map(e=>(0,a.jsx)("button",{className:`crop-preset-btn ${_===e.id?"crop-preset-active":""}`,onClick:()=>R(e.id),children:e.label},e.id))})]}),(0,a.jsx)("div",{className:"crop-canvas-area",ref:U,children:(0,a.jsxs)("div",{className:"crop-canvas-wrapper",style:{width:J.left+J.width>0&&E.current?.width||"auto"},children:[(0,a.jsx)("canvas",{ref:E,className:"crop-canvas"}),(0,a.jsxs)("div",{ref:L,className:"crop-overlay",style:{width:E.current?.width,height:E.current?.height},onMouseDown:W,onMouseMove:H,onMouseUp:$,onMouseLeave:$,onTouchStart:W,onTouchMove:H,onTouchEnd:$,children:[(0,a.jsx)("div",{className:"crop-dim crop-dim-top",style:{height:J.top}}),(0,a.jsx)("div",{className:"crop-dim crop-dim-bottom",style:{top:J.top+J.height,height:`calc(100% - ${J.top+J.height}px)`}}),(0,a.jsx)("div",{className:"crop-dim crop-dim-left",style:{top:J.top,height:J.height,width:J.left}}),(0,a.jsx)("div",{className:"crop-dim crop-dim-right",style:{top:J.top,height:J.height,left:J.left+J.width,width:`calc(100% - ${J.left+J.width}px)`}}),(0,a.jsxs)("div",{className:"crop-rect",style:{left:J.left,top:J.top,width:J.width,height:J.height},children:[(0,a.jsx)("div",{className:"crop-handle crop-handle-nw"}),(0,a.jsx)("div",{className:"crop-handle crop-handle-ne"}),(0,a.jsx)("div",{className:"crop-handle crop-handle-sw"}),(0,a.jsx)("div",{className:"crop-handle crop-handle-se"}),(0,a.jsx)("div",{className:"crop-handle crop-handle-n"}),(0,a.jsx)("div",{className:"crop-handle crop-handle-s"}),(0,a.jsx)("div",{className:"crop-handle crop-handle-e"}),(0,a.jsx)("div",{className:"crop-handle crop-handle-w"}),(0,a.jsxs)("div",{className:"crop-dims-label",children:[Math.round(S.w)," \xd7 ",Math.round(S.h)," pt"]})]})]})]})}),y>1&&(0,a.jsxs)("div",{className:"crop-page-nav",children:[(0,a.jsx)("button",{className:"btn-secondary",onClick:()=>N(Math.max(0,k-1)),disabled:0===k,children:"← Prev"}),(0,a.jsxs)("span",{className:"crop-page-label",children:["Page ",k+1," of ",y]}),(0,a.jsx)("button",{className:"btn-secondary",onClick:()=>N(Math.min(y-1,k+1)),disabled:k>=y-1,children:"Next →"})]}),(0,a.jsx)("div",{className:"crop-options",children:(0,a.jsxs)("label",{className:"crop-toggle",children:[(0,a.jsx)("input",{type:"checkbox",checked:z,onChange:e=>T(e.target.checked)}),(0,a.jsx)("span",{children:"Apply crop to all pages"})]})}),(0,a.jsxs)("div",{className:"crop-inputs-row",children:[(0,a.jsxs)("div",{className:"crop-input-group",children:[(0,a.jsx)("label",{children:"X"}),(0,a.jsx)("input",{type:"number",value:Math.round(S.x),onChange:e=>{q(r=>({...r,x:+e.target.value})),R("custom")},min:0,max:M.width})]}),(0,a.jsxs)("div",{className:"crop-input-group",children:[(0,a.jsx)("label",{children:"Y"}),(0,a.jsx)("input",{type:"number",value:Math.round(S.y),onChange:e=>{q(r=>({...r,y:+e.target.value})),R("custom")},min:0,max:M.height})]}),(0,a.jsxs)("div",{className:"crop-input-group",children:[(0,a.jsx)("label",{children:"W"}),(0,a.jsx)("input",{type:"number",value:Math.round(S.w),onChange:e=>{q(r=>({...r,w:+e.target.value})),R("custom")},min:20,max:M.width})]}),(0,a.jsxs)("div",{className:"crop-input-group",children:[(0,a.jsx)("label",{children:"H"}),(0,a.jsx)("input",{type:"number",value:Math.round(S.h),onChange:e=>{q(r=>({...r,h:+e.target.value})),R("custom")},min:20,max:M.height})]})]}),(0,a.jsx)("div",{className:"crop-actions",children:(0,a.jsxs)("button",{className:"btn-primary",onClick:K,disabled:C,children:[(0,a.jsx)(l.A,{size:18}),C?"Cropping...":A?"✓ Done! Download Again":"Crop & Download"]})})]}):(0,a.jsx)(c.A,{onFiles:O,accept:".pdf",multiple:!1,label:"Drop your PDF file here to crop"}),(0,a.jsx)(u.A,{format:"responsive",slot:process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE||"",className:"tool-inline-ad"}),(0,a.jsx)(d.A,{faqs:f}),(0,a.jsx)(m.A,{currentToolId:"crop-pdf"}),(0,a.jsx)("style",{children:`
        .crop-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
        }
        .crop-file-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }
        .crop-file-icon { color: var(--primary); flex-shrink: 0; }
        .crop-file-details { display: flex; flex-direction: column; min-width: 0; }
        .crop-file-name { font-weight: 600; font-size: 0.95rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .crop-file-size { font-size: 0.8rem; color: var(--text-muted); }

        .crop-presets { display: flex; flex-direction: column; gap: var(--spacing-sm); }
        .crop-label { font-weight: 600; font-size: 0.95rem; color: var(--text-main); }
        .crop-preset-btns { display: flex; gap: var(--spacing-sm); flex-wrap: wrap; }
        .crop-preset-btn {
          padding: 8px 16px;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.85rem;
          transition: var(--transition-fast);
          cursor: pointer;
        }
        .crop-preset-btn:hover { border-color: var(--border-active); color: var(--text-main); }
        .crop-preset-active { border-color: var(--primary); color: var(--primary); background: var(--primary-glow); }

        .crop-canvas-area {
          display: flex;
          justify-content: center;
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: var(--spacing-md);
          overflow: hidden;
        }
        .crop-canvas-wrapper {
          position: relative;
          display: inline-block;
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .crop-canvas {
          display: block;
        }
        .crop-overlay {
          position: absolute;
          top: 0;
          left: 0;
          cursor: crosshair;
          touch-action: none;
        }

        .crop-dim {
          position: absolute;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.45);
          pointer-events: none;
          transition: none;
        }
        .crop-dim-top { top: 0; }
        .crop-dim-bottom { }
        .crop-dim-left { left: 0; }
        .crop-dim-right { }

        .crop-rect {
          position: absolute;
          border: 2px solid var(--primary);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.3);
          pointer-events: none;
        }
        .crop-handle {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #fff;
          border: 2px solid var(--primary);
          border-radius: 2px;
          pointer-events: none;
        }
        .crop-handle-nw { top: -6px; left: -6px; }
        .crop-handle-ne { top: -6px; right: -6px; }
        .crop-handle-sw { bottom: -6px; left: -6px; }
        .crop-handle-se { bottom: -6px; right: -6px; }
        .crop-handle-n { top: -6px; left: 50%; transform: translateX(-50%); }
        .crop-handle-s { bottom: -6px; left: 50%; transform: translateX(-50%); }
        .crop-handle-e { top: 50%; right: -6px; transform: translateY(-50%); }
        .crop-handle-w { top: 50%; left: -6px; transform: translateY(-50%); }

        .crop-dims-label {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.7);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: var(--radius-sm);
          white-space: nowrap;
          pointer-events: none;
        }

        .crop-page-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-md);
        }
        .crop-page-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .crop-options {
          display: flex;
          justify-content: center;
        }
        .crop-toggle {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: 10px 20px;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-main);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .crop-toggle:hover { border-color: var(--primary); }
        .crop-toggle input[type="checkbox"] {
          accent-color: var(--primary);
          width: 18px;
          height: 18px;
        }

        .crop-inputs-row {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }
        .crop-input-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .crop-input-group label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .crop-input-group input {
          width: 80px;
          padding: 8px 10px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          background: var(--bg-panel);
          color: var(--text-main);
          font-size: 0.9rem;
          font-weight: 500;
          text-align: center;
          font-family: var(--font-sans);
          transition: var(--transition-fast);
        }
        .crop-input-group input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-glow);
        }

        .crop-actions {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 600px) {
          .crop-preset-btns { flex-direction: column; }
          .crop-inputs-row { gap: var(--spacing-sm); }
          .crop-input-group input { width: 65px; }
        }
      `})]})}},26971:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i,metadata:()=>s});var a=t(62740),o=t(90303);let s={title:"Crop PDF — Trim PDF Margins & Pages Online for Free | Tiny PDF Tools",description:"Crop and trim PDF pages visually. Drag to select the area to keep, then download instantly. 100% free, no uploads — runs in your browser.",alternates:{canonical:"https://tinypdftools.com/crop-pdf"}};function i(){return(0,a.jsx)(o.default,{})}},90303:(e,r,t)=>{"use strict";t.d(r,{default:()=>a});let a=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\CropPdf.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\CropPdf.jsx","default")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[406,844,201,181,508,301],()=>t(2239));module.exports=a})();