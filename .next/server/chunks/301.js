"use strict";exports.id=301,exports.ids=[301],exports.modules={66790:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(45512),i=r(58009),o=r(72744),n=r(25565);let s=({onFiles:e,accept:t=".pdf",multiple:r=!0,label:s="Drop your PDF files here"})=>{let[l,d]=(0,i.useState)(!1),c=(0,i.useRef)(null),p=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),g=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),d(!0)},[]),m=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),d(!1)},[]),f=(0,i.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),d(!1);let r=[...t.dataTransfer.files];r.length>0&&e(r)},[e]),u=(0,i.useCallback)(t=>{let r=[...t.target.files];r.length>0&&e(r),t.target.value=""},[e]);return(0,a.jsxs)("div",{className:`dropzone ${l?"dropzone-active":""}`,onDragEnter:g,onDragLeave:m,onDragOver:p,onDrop:f,onClick:()=>c.current?.click(),children:[(0,a.jsx)("input",{ref:c,type:"file",accept:t,multiple:r,onChange:u,className:"sr-only","aria-label":"Upload files"}),(0,a.jsxs)("div",{className:"dropzone-content",children:[(0,a.jsx)("div",{className:"dropzone-icon",children:(0,a.jsx)(o.A,{size:36,strokeWidth:1.5})}),(0,a.jsx)("p",{className:"dropzone-label",children:s}),(0,a.jsx)("p",{className:"dropzone-hint",children:"or click to browse"}),(0,a.jsxs)("button",{type:"button",className:"btn-primary dropzone-btn",children:[(0,a.jsx)(n.A,{size:18})," Select Files"]})]}),(0,a.jsx)("style",{children:`
        .dropzone {
          border: 2px dashed var(--border-light);
          border-radius: var(--radius-lg);
          padding: var(--spacing-xxl) var(--spacing-xl);
          cursor: pointer;
          transition: var(--transition-smooth);
          text-align: center;
          background: var(--bg-panel);
          position: relative;
        }
        .dropzone:hover, .dropzone-active {
          border-color: var(--primary);
          background: var(--primary-glow);
        }
        .dropzone-active {
          transform: scale(1.01);
        }
        .dropzone-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-md);
        }
        .dropzone-icon {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-full);
          background: var(--primary-glow);
          color: var(--primary);
        }
        .dropzone-label {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .dropzone-hint {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .dropzone-btn {
          margin-top: var(--spacing-sm);
        }
      `})]})}},13294:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(45512),i=r(58009),o=r(98755);let n=({faqs:e=[]})=>{let[t,r]=(0,i.useState)(null);if(0===e.length)return null;let n={"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.map(e=>({"@type":"Question",name:e.q,acceptedAnswer:{"@type":"Answer",text:e.a}}))};return(0,a.jsxs)("section",{className:"faq-section",children:[(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n)}}),(0,a.jsx)("h2",{className:"faq-title",children:"Frequently Asked Questions"}),(0,a.jsx)("div",{className:"faq-list",children:e.map((e,i)=>(0,a.jsxs)("div",{className:`faq-item ${t===i?"faq-open":""}`,children:[(0,a.jsxs)("button",{className:"faq-question",onClick:()=>r(t===i?null:i),children:[(0,a.jsx)("span",{children:e.q}),(0,a.jsx)(o.A,{size:18,className:`faq-chevron ${t===i?"faq-chevron-open":""}`})]}),t===i&&(0,a.jsx)("div",{className:"faq-answer",children:(0,a.jsx)("p",{children:e.a})})]},i))}),(0,a.jsx)("style",{children:`
        .faq-section {
          max-width: 720px;
          margin: 0 auto;
          padding: var(--spacing-xxl) 0;
        }
        .faq-title {
          text-align: center;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: var(--spacing-xl);
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .faq-item {
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--bg-panel);
          transition: var(--transition-fast);
        }
        .faq-item:hover {
          border-color: var(--border-active);
        }
        .faq-open {
          border-color: var(--primary);
        }
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-md) var(--spacing-lg);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-main);
          text-align: left;
        }
        .faq-chevron {
          flex-shrink: 0;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }
        .faq-chevron-open {
          transform: rotate(180deg);
          color: var(--primary);
        }
        .faq-answer {
          padding: 0 var(--spacing-lg) var(--spacing-md);
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
        }
      `})]})}},83724:(e,t,r)=>{r.d(t,{A:()=>P});var a=r(45512),i=r(26008),o=r(70649),n=r(45954),s=r(42894),l=r(80488),d=r(67127),c=r(96005),p=r(72734),g=r(35167),m=r(47554),f=r(31904),u=r(80425),h=r(46339),x=r(49656),v=r(94667),b=r(42417),y=r(59445),j=r(4269);let w=[{id:"merge-pdf",title:"Merge PDF",description:"Combine multiple PDF files into a single document. Drag to reorder pages.",icon:o.A,color:"#e8432a"},{id:"split-pdf",title:"Split PDF",description:"Extract specific pages or split a PDF into separate files.",icon:n.A,color:"#ff6b35"},{id:"compress-pdf",title:"Compress PDF",description:"Reduce PDF file size by optimizing embedded images. Perfect for email.",icon:s.A,color:"#10b981"},{id:"pdf-to-image",title:"PDF to Image",description:"Convert PDF pages to high-quality JPG or PNG images.",icon:l.A,color:"#8b5cf6"},{id:"image-to-pdf",title:"Image to PDF",description:"Combine JPG, PNG, or WebP images into a single PDF document.",icon:d.A,color:"#0ea5e9"},{id:"rotate-pdf",title:"Rotate PDF",description:"Rotate all pages by 90\xb0, 180\xb0, or 270\xb0. Lossless and instant.",icon:c.A,color:"#14b8a6"},{id:"protect-pdf",title:"Protect PDF",description:"Add password protection with AES-256 encryption to secure your PDFs.",icon:p.A,color:"#f59e0b"},{id:"unlock-pdf",title:"Unlock PDF",description:"Remove password protection from PDFs you own. Enter password, get unlocked copy.",icon:g.A,color:"#22c55e"},{id:"watermark-pdf",title:"Watermark PDF",description:"Add text watermarks with custom size, opacity, rotation, and color.",icon:m.A,color:"#6366f1"},{id:"organize-pdf",title:"Organize PDF",description:"Drag and drop to rearrange pages, delete unwanted pages, or duplicate them.",icon:f.A,color:"#0d9488"},{id:"add-page-numbers",title:"Add Page Numbers",description:"Stamp page numbers on every page. Choose position, format, and style.",icon:u.A,color:"#dc2626"},{id:"crop-pdf",title:"Crop PDF",description:"Visually trim margins or cut specific areas from PDF pages. Drag to crop.",icon:h.A,color:"#7c3aed"},{id:"delete-pdf-pages",title:"Delete Pages",description:"Remove unwanted pages from your PDF. Click to select, download the trimmed file.",icon:x.A,color:"#ef4444"},{id:"flatten-pdf",title:"Flatten PDF",description:"Merge form fields and annotations into a static, non-editable document.",icon:v.A,color:"#64748b"},{id:"sign-pdf",title:"Sign PDF",description:"Draw or type your signature and place it on any page of your PDF.",icon:b.A,color:"#2563eb"},{id:"extract-pdf-pages",title:"Extract Pages",description:"Select and extract specific pages from a PDF into a new file.",icon:y.A,color:"#059669"},{id:"pdf-reader",title:"PDF Reader",description:"Open and read PDFs in your browser. Zoom, navigate, rotate, and search.",icon:j.A,color:"#0891b2"}],P=({currentToolId:e,excludeIds:t=[]})=>{let r=w.filter(r=>r.id!==e&&!t.includes(r.id)&&"pdf-reader"!==r.id),o=w.findIndex(t=>t.id===e),n=o>=0?o:0,s=[];for(let e=1;e<=r.length;e++){let t=r[(n+e)%r.length];if(t&&!s.includes(t)&&s.push(t),3===s.length)break}return 0===s.length?null:(0,a.jsxs)("section",{className:"related-tools-section",children:[(0,a.jsx)("h3",{className:"related-title",children:"You might also like"}),(0,a.jsx)("div",{className:"related-grid",children:s.map(e=>(0,a.jsxs)(i.default,{href:`/${e.id}`,className:"related-card glass-panel",children:[(0,a.jsx)("div",{className:"related-card-icon",style:{background:`${e.color}15`,color:e.color},children:(0,a.jsx)(e.icon,{size:22,strokeWidth:1.8})}),(0,a.jsxs)("div",{className:"related-card-body",children:[(0,a.jsx)("h4",{className:"related-card-title",children:e.title}),(0,a.jsxs)("p",{className:"related-card-desc",children:[e.description.split(".")[0],"."]})]})]},e.id))}),(0,a.jsx)("style",{children:`
        .related-tools-section {
          margin-top: var(--spacing-xxl);
          padding-top: var(--spacing-xl);
          border-top: 1px solid var(--border-light);
        }
        .related-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: var(--spacing-lg);
          text-align: center;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: var(--spacing-md);
        }
        .related-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          text-decoration: none;
          color: inherit;
          transition: var(--transition-smooth);
        }
        .related-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-sm);
          transform: translateY(-2px);
        }
        .related-card-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
        }
        .related-card-body {
          flex: 1;
          min-width: 0;
        }
        .related-card-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .related-card-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `})]})}},6764:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(45512);function i({schemaType:e,schemaData:t}){if(!t)return null;let r={"@context":"https://schema.org","@type":e||"WebApplication",...t};return(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r)}})}},48079:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(45512);let i=({paragraphs:e=[],bestFor:t=[]})=>e.length||t.length?(0,a.jsxs)("div",{className:"tool-intro",children:[e.map((e,t)=>(0,a.jsx)("p",{children:e},t)),t.length>0&&(0,a.jsxs)("div",{className:"tool-best-for",children:[(0,a.jsx)("strong",{children:"Best for:"})," ",t.join(" \xb7 ")]}),(0,a.jsx)("style",{children:`
        .tool-intro {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 var(--spacing-md);
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }
        .tool-intro p {
          margin-bottom: var(--spacing-md);
        }
        .tool-best-for {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          font-size: 0.9rem;
          padding: var(--spacing-sm) var(--spacing-md);
          background: var(--bg-surface);
          border-radius: var(--radius-md);
          border-left: 3px solid var(--primary);
        }
      `})]}):null}};