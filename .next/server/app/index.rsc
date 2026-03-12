2:"$Sreact.fragment"
3:I[4831,["839","static/chunks/839-6479fc9fbb925877.js","177","static/chunks/app/layout-11609ba2f22f0e83.js"],"ToastProvider"]
4:I[7676,["839","static/chunks/839-6479fc9fbb925877.js","177","static/chunks/app/layout-11609ba2f22f0e83.js"],"default"]
5:I[5244,[],""]
6:I[3866,[],""]
8:I[4839,["839","static/chunks/839-6479fc9fbb925877.js","974","static/chunks/app/page-e4c74aa81391a714.js"],""]
a:I[6213,[],"OutletBoundary"]
c:I[6213,[],"MetadataBoundary"]
e:I[6213,[],"ViewportBoundary"]
10:I[4835,[],""]
1:HL["/_next/static/css/cb9f380176738de0.css","style"]
7:T98e,{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are all 16 PDF tools really free?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every tool on Tiny PDF Tools is completely free with no usage limits, no daily caps, and no premium tiers. There is no account to create and nothing to install. We generate revenue through non-intrusive display ads, which allows us to keep every tool free for everyone."}},{"@type":"Question","name":"Do my PDF files get uploaded to a server?","acceptedAnswer":{"@type":"Answer","text":"No. Every tool processes files 100% in your browser using JavaScript and the pdf-lib library. Your files never leave your device. You can verify this yourself by opening Developer Tools (F12), going to the Network tab, and processing any PDF — you will see zero file uploads."}},{"@type":"Question","name":"What browsers and devices are supported?","acceptedAnswer":{"@type":"Answer","text":"Tiny PDF Tools works on all modern browsers including Chrome, Firefox, Edge, Safari, and Brave. The tools work on desktop computers, laptops, tablets, and mobile phones. No software installation or browser extension is required."}},{"@type":"Question","name":"Is there a file size limit for PDFs?","acceptedAnswer":{"@type":"Answer","text":"There is no hard file size limit. Since all processing happens in your browser's memory, very large PDFs (over 100 MB) may take longer to process depending on your device's available RAM. For most documents under 50 MB, processing is near-instant."}},{"@type":"Question","name":"How is this different from Adobe Acrobat or Smallpdf?","acceptedAnswer":{"@type":"Answer","text":"The key difference is privacy and cost. Adobe Acrobat costs $22.99/month and requires account creation. Smallpdf limits free users to 2 tasks per day and uploads files to their servers. Tiny PDF Tools is completely free, requires no account, and processes everything in your browser — your files never touch a remote server."}},{"@type":"Question","name":"Can I use these tools for business and commercial documents?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Many professionals use Tiny PDF Tools for contracts, invoices, proposals, and financial reports. Since files are processed entirely in your browser, there is no risk of data exposure through third-party servers. This makes our tools particularly well-suited for sensitive business documents."}}]}9:T20b7,
        .tool-selector {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xxl);
        }

        .hero {
          text-align: center;
          padding: var(--spacing-xxl) 0 var(--spacing-lg);
        }

        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: var(--primary-glow);
          color: var(--primary);
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          margin-bottom: var(--spacing-lg);
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1px;
          margin-bottom: var(--spacing-md);
        }

        .gradient-text {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--spacing-lg);
        }

        .tool-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          transition: var(--transition-smooth);
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
        .tool-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-glow);
          transform: translateY(-4px);
        }

        .tool-card-icon {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }

        .tool-card-body {
          flex: 1;
          min-width: 0;
        }

        .tool-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .tool-card-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .tool-card-arrow {
          flex-shrink: 0;
          color: var(--text-dim);
          transition: var(--transition-fast);
        }
        .tool-card:hover .tool-card-arrow {
          color: var(--primary);
          transform: translateX(4px);
        }

        .trust-section {
          display: flex;
          justify-content: center;
          gap: var(--spacing-lg);
          flex-wrap: wrap;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }


        .content-section {
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }
        .section-title {
          font-size: 1.8rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: var(--spacing-sm);
        }
        .section-intro {
          text-align: center;
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto var(--spacing-xl);
        }
        .section-note {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-top: var(--spacing-lg);
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-surface);
          border-radius: var(--radius-md);
          border-left: 3px solid var(--primary);
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-lg);
        }
        .step-card {
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          transition: var(--transition-smooth);
        }
        .step-card:hover {
          box-shadow: var(--shadow-glow);
          transform: translateY(-4px);
        }
        .step-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: var(--spacing-sm);
        }
        .step-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .step-number {
          width: 48px;
          height: 48px;
          margin: 0 auto var(--spacing-md);
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient);
          color: #fff;
          font-weight: 800;
          font-size: 1.3rem;
          border-radius: var(--radius-full);
        }

        .comparison-table-wrap {
          overflow-x: auto;
          margin-bottom: var(--spacing-md);
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.92rem;
        }
        .comparison-table th,
        .comparison-table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid var(--border-light);
        }
        .comparison-table th {
          background: var(--bg-surface);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-muted);
        }
        .comparison-table td:last-child {
          color: var(--primary);
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-lg);
        }
        .stat-card {
          text-align: center;
          padding: var(--spacing-xl);
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .faq-item {
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition-smooth);
        }
        .faq-item[open] {
          border-color: var(--primary);
        }
        .faq-question {
          padding: var(--spacing-lg);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .faq-question::-webkit-details-marker { display: none; }
        .faq-question::after {
          content: '+';
          font-size: 1.3rem;
          font-weight: 300;
          color: var(--text-muted);
          transition: transform 0.2s;
        }
        .faq-item[open] .faq-question::after {
          content: '−';
          color: var(--primary);
        }
        .faq-answer {
          padding: 0 var(--spacing-lg) var(--spacing-lg);
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .tools-grid {
            grid-template-columns: 1fr;
          }
          .trust-section {
            gap: var(--spacing-sm);
          }
          .trust-badge {
            font-size: 0.8rem;
            padding: 8px 14px;
          }
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .stats-section {
            grid-template-columns: repeat(2, 1fr);
          }
          .section-title {
            font-size: 1.4rem;
          }
        }
      0:{"P":null,"b":"XRQeLFrRVAB26xP7XyemP","p":"","c":["",""],"i":false,"f":[[["",{"children":["__PAGE__",{}]},"$undefined","$undefined",true],["",["$","$2","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/cb9f380176738de0.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[["$","meta",null,{"name":"google-site-verification","content":"zIQyJOap2T4-CAKlwe-RWKcDO7VZlh0nh-khv_TTSjA"}],["$","link",null,{"rel":"manifest","href":"/manifest.json"}],["$","meta",null,{"name":"theme-color","content":"#e8432a"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap","rel":"stylesheet"}],["$","script",null,{"async":true,"src":"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3166995085202346","crossOrigin":"anonymous"}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"\n          (function() {\n            var t = localStorage.getItem('theme');\n            if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';\n            document.documentElement.setAttribute('data-theme', t);\n          })();\n        "}}]]}],["$","body",null,{"children":[["$","$L3",null,{"children":["$","$L4",null,{"children":["$","$L5",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[]}]}]}],["$","script",null,{"async":true,"src":"https://www.googletagmanager.com/gtag/js?id=G-20YF1S3X16"}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'G-20YF1S3X16');\n        "}}]]}]]}]]}],{"children":["__PAGE__",["$","$2","c",{"children":[[["$","div",null,{"className":"hero","children":[["$","h1",null,{"className":"hero-title","children":["Tiny ",["$","span",null,{"className":"text-gradient","children":"PDF Tools"}]]}],["$","p",null,{"className":"hero-desc","children":"Free, private, client-side PDF utilities. No uploads required."}]]}],["$","div",null,{"className":"tool-selector","children":[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$7"}}],["$","section",null,{"className":"hero","children":[["$","div",null,{"className":"hero-badge","children":"✨ 100% Free & Private — No Uploads"}],["$","h1",null,{"className":"hero-title","children":["Lightweight & Free ",["$","span",null,{"className":"text-gradient","children":"PDF Tools"}]]}],["$","p",null,{"className":"hero-subtitle","children":"Looking for lightweight PDF tools? Tiny PDF Tools lets you merge, split, compress, sign, and convert PDFs entirely in your browser. Whether you need a tiny pdf merge or to compress files for email, everything is 100% free with no server uploads."}]]}],["$","section",null,{"className":"tools-grid","children":[["$","$L8","merge-pdf",{"href":"/merge-pdf","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#e8432a15","color":"#e8432a"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-merge","aria-hidden":"true","children":[["$","path","ybng9g",{"d":"m8 6 4-4 4 4"}],["$","path","1hyw0i",{"d":"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["$","path","1m27yz",{"d":"m20 22-5-5"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Merge PDF"}],["$","p",null,{"className":"tool-card-desc","children":"Combine multiple PDF files into a single document. Drag to reorder pages."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","split-pdf",{"href":"/split-pdf","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#ff6b3515","color":"#ff6b35"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-scissors","aria-hidden":"true","children":[["$","circle","1lh9wr",{"cx":"6","cy":"6","r":"3"}],["$","path","1alkpv",{"d":"M8.12 8.12 12 12"}],["$","path","xgtan2",{"d":"M20 4 8.12 15.88"}],["$","circle","fqmcym",{"cx":"6","cy":"18","r":"3"}],["$","path","ptml3r",{"d":"M14.8 14.8 20 20"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Split PDF"}],["$","p",null,{"className":"tool-card-desc","children":"Extract specific pages or split a PDF into separate files."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","compress-pdf",{"href":"/compress-pdf","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#10b98115","color":"#10b981"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-minimize2 lucide-minimize-2","aria-hidden":"true","children":[["$","path","oa77jy",{"d":"m14 10 7-7"}],["$","path","mjg0md",{"d":"M20 10h-6V4"}],["$","path","tjx5ai",{"d":"m3 21 7-7"}],["$","path","rmj7iw",{"d":"M4 14h6v6"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Compress PDF"}],["$","p",null,{"className":"tool-card-desc","children":"Reduce PDF file size by optimizing embedded images. Perfect for email."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","pdf-to-image",{"href":"/pdf-to-image","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#8b5cf615","color":"#8b5cf6"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-image","aria-hidden":"true","children":[["$","rect","1m3agn",{"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}],["$","circle","af1f0g",{"cx":"9","cy":"9","r":"2"}],["$","path","1xmnt7",{"d":"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"PDF to Image"}],["$","p",null,{"className":"tool-card-desc","children":"Convert PDF pages to high-quality JPG or PNG images."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","image-to-pdf",{"href":"/image-to-pdf","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#0ea5e915","color":"#0ea5e9"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-file-image","aria-hidden":"true","children":[["$","path","1oefj6",{"d":"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["$","path","wfsgrz",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["$","circle","737tya",{"cx":"10","cy":"12","r":"2"}],["$","path","wt3hpn",{"d":"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Image to PDF"}],["$","p",null,{"className":"tool-card-desc","children":"Combine JPG, PNG, or WebP images into a single PDF document."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","rotate-pdf",{"href":"/rotate-pdf","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#14b8a615","color":"#14b8a6"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-rotate-cw","aria-hidden":"true","children":[["$","path","1p45f6",{"d":"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["$","path","1q7to0",{"d":"M21 3v5h-5"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Rotate PDF"}],["$","p",null,{"className":"tool-card-desc","children":"Rotate all pages by 90°, 180°, or 270°. Lossless and instant."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","protect-pdf",{"href":"/protect-pdf","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#f59e0b15","color":"#f59e0b"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-lock","aria-hidden":"true","children":[["$","rect","1w4ew1",{"width":"18","height":"11","x":"3","y":"11","rx":"2","ry":"2"}],["$","path","fwvmzm",{"d":"M7 11V7a5 5 0 0 1 10 0v4"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Protect PDF"}],["$","p",null,{"className":"tool-card-desc","children":"Add password protection with AES-256 encryption to secure your PDFs."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","unlock-pdf",{"href":"/unlock-pdf","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#22c55e15","color":"#22c55e"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-lock-open","aria-hidden":"true","children":[["$","rect","1w4ew1",{"width":"18","height":"11","x":"3","y":"11","rx":"2","ry":"2"}],["$","path","1mm8w8",{"d":"M7 11V7a5 5 0 0 1 9.9-1"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Unlock PDF"}],["$","p",null,{"className":"tool-card-desc","children":"Remove password protection from PDFs you own. Enter password, get unlocked copy."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","watermark-pdf",{"href":"/watermark-pdf","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#6366f115","color":"#6366f1"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-droplets","aria-hidden":"true","children":[["$","path","1ptgy4",{"d":"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["$","path","1sl1rz",{"d":"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Watermark PDF"}],["$","p",null,{"className":"tool-card-desc","children":"Add text watermarks with custom size, opacity, rotation, and color."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","organize-pdf",{"href":"/organize-pdf","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#0d948815","color":"#0d9488"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-grip-vertical","aria-hidden":"true","children":[["$","circle","1vctgf",{"cx":"9","cy":"12","r":"1"}],["$","circle","hp0tcf",{"cx":"9","cy":"5","r":"1"}],["$","circle","fkjjf6",{"cx":"9","cy":"19","r":"1"}],["$","circle","1tmaij",{"cx":"15","cy":"12","r":"1"}],["$","circle","19l28e",{"cx":"15","cy":"5","r":"1"}],["$","circle","f4zoj3",{"cx":"15","cy":"19","r":"1"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Organize PDF"}],["$","p",null,{"className":"tool-card-desc","children":"Drag and drop to rearrange pages, delete unwanted pages, or duplicate them."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","add-page-numbers",{"href":"/add-page-numbers","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#dc262615","color":"#dc2626"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-list-ordered","aria-hidden":"true","children":[["$","path","1cz7ny",{"d":"M11 5h10"}],["$","path","1438ji",{"d":"M11 12h10"}],["$","path","11t30w",{"d":"M11 19h10"}],["$","path","10yrso",{"d":"M4 4h1v5"}],["$","path","r1h2o0",{"d":"M4 9h2"}],["$","path","xtkcd5",{"d":"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Add Page Numbers"}],["$","p",null,{"className":"tool-card-desc","children":"Stamp page numbers on every page. Choose position, format, and style."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","crop-pdf",{"href":"/crop-pdf","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#7c3aed15","color":"#7c3aed"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-crop","aria-hidden":"true","children":[["$","path","ron5a4",{"d":"M6 2v14a2 2 0 0 0 2 2h14"}],["$","path","7s9ehn",{"d":"M18 22V8a2 2 0 0 0-2-2H2"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Crop PDF"}],["$","p",null,{"className":"tool-card-desc","children":"Visually trim margins or cut specific areas from PDF pages. Drag to crop."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","delete-pdf-pages",{"href":"/delete-pdf-pages","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#ef444415","color":"#ef4444"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-trash2 lucide-trash-2","aria-hidden":"true","children":[["$","path","nco0om",{"d":"M10 11v6"}],["$","path","outv1u",{"d":"M14 11v6"}],["$","path","miytrc",{"d":"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["$","path","d0wm0j",{"d":"M3 6h18"}],["$","path","e791ji",{"d":"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Delete Pages"}],["$","p",null,{"className":"tool-card-desc","children":"Remove unwanted pages from your PDF. Click to select, download the trimmed file."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","flatten-pdf",{"href":"/flatten-pdf","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#64748b15","color":"#64748b"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-layers","aria-hidden":"true","children":[["$","path","zw3jo",{"d":"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["$","path","1wduqc",{"d":"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["$","path","kqbvx6",{"d":"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Flatten PDF"}],["$","p",null,{"className":"tool-card-desc","children":"Merge form fields and annotations into a static, non-editable document."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","sign-pdf",{"href":"/sign-pdf","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#2563eb15","color":"#2563eb"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-pen-tool","aria-hidden":"true","children":[["$","path","nt11vn",{"d":"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"}],["$","path","15qc1e",{"d":"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"}],["$","path","1wuzzi",{"d":"m2.3 2.3 7.286 7.286"}],["$","circle","xmgehs",{"cx":"11","cy":"11","r":"2"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Sign PDF"}],["$","p",null,{"className":"tool-card-desc","children":"Draw or type your signature and place it on any page of your PDF."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","extract-pdf-pages",{"href":"/extract-pdf-pages","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#05966915","color":"#059669"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-file-output","aria-hidden":"true","children":[["$","path","wfxp4w",{"d":"M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127"}],["$","path","wfsgrz",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["$","path","1dgrs4",{"d":"m5 11-3 3"}],["$","path","1mvvaf",{"d":"m5 17-3-3h10"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"Extract Pages"}],["$","p",null,{"className":"tool-card-desc","children":"Select and extract specific pages from a PDF into a new file."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}],["$","$L8","pdf-reader",{"href":"/pdf-reader","className":"tool-card glass-panel","children":[["$","div",null,{"className":"tool-card-icon","style":{"background":"#0891b215","color":"#0891b2"},"children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":28,"height":28,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":1.8,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-book-open","aria-hidden":"true","children":[["$","path","1akyts",{"d":"M12 7v14"}],["$","path","ruj8y",{"d":"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}],"$undefined"]}]}],["$","div",null,{"className":"tool-card-body","children":[["$","h3",null,{"className":"tool-card-title","children":"PDF Reader"}],["$","p",null,{"className":"tool-card-desc","children":"Open and read PDFs in your browser. Zoom, navigate, rotate, and search."}]]}],["$","div",null,{"className":"tool-card-arrow","children":["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":18,"height":18,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-right","aria-hidden":"true","children":[["$","path","1ays0h",{"d":"M5 12h14"}],["$","path","xquz4c",{"d":"m12 5 7 7-7 7"}],"$undefined"]}]}]]}]]}],["$","section",null,{"className":"trust-section","children":[["$","div",null,{"className":"trust-badge","children":[["$","strong",null,{"children":"🔒"}]," No file uploads"]}],["$","div",null,{"className":"trust-badge","children":[["$","strong",null,{"children":"⚡"}]," Instant processing"]}],["$","div",null,{"className":"trust-badge","children":[["$","strong",null,{"children":"♾️"}]," Unlimited usage"]}],["$","div",null,{"className":"trust-badge","children":[["$","strong",null,{"children":"🆓"}]," 100% free"]}]]}],["$","section",null,{"className":"content-section","children":[["$","h2",null,{"className":"section-title","children":"How It Works"}],["$","p",null,{"className":"section-intro","children":"Every tool follows the same simple, three-step process. No accounts, no installations, no waiting."}],["$","div",null,{"className":"steps-grid","children":[["$","div",null,{"className":"step-card glass-panel","children":[["$","div",null,{"className":"step-number","children":"1"}],["$","h3",null,{"children":"Choose Your Tool"}],["$","p",null,{"children":"Select any of the 16 PDF tools above. Each tool is purpose-built for a specific task — from merging and splitting to signing and encrypting. Click the tool card to get started instantly."}]]}],["$","div",null,{"className":"step-card glass-panel","children":[["$","div",null,{"className":"step-number","children":"2"}],["$","h3",null,{"children":"Upload Your PDF"}],["$","p",null,{"children":"Drag and drop your PDF file onto the upload area, or click to browse your device. The file loads directly into your browser's memory — it is never sent to any external server or cloud storage."}]]}],["$","div",null,{"className":"step-card glass-panel","children":[["$","div",null,{"className":"step-number","children":"3"}],["$","h3",null,{"children":"Download the Result"}],["$","p",null,{"children":"Make your changes and click the action button. The processed PDF downloads directly to your device in seconds. The original file is never modified, preserved, or stored anywhere — once you close the tab, it is gone."}]]}]]}]]}],["$","section",null,{"className":"content-section","children":[["$","h2",null,{"className":"section-title","children":"Why Client-Side Processing Matters"}],["$","p",null,{"className":"section-intro","children":"Most PDF tools upload your files to remote servers for processing. That means your contracts, financial statements, medical records, and personal documents pass through third-party infrastructure you cannot audit or control. Tiny PDF Tools takes a fundamentally different approach."}],["$","div",null,{"className":"comparison-table-wrap","children":["$","table",null,{"className":"comparison-table","children":[["$","thead",null,{"children":["$","tr",null,{"children":[["$","th",null,{"children":"Feature"}],["$","th",null,{"children":"Server-Based Tools"}],["$","th",null,{"children":"Tiny PDF Tools"}]]}]}],["$","tbody",null,{"children":[["$","tr",null,{"children":[["$","td",null,{"children":"File handling"}],["$","td",null,{"children":"Uploaded to remote servers"}],["$","td",null,{"children":["$","strong",null,{"children":"Never leaves your device"}]}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Account required"}],["$","td",null,{"children":"Yes — email + password"}],["$","td",null,{"children":["$","strong",null,{"children":"No account needed"}]}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Data retention"}],["$","td",null,{"children":"Files may be stored"}],["$","td",null,{"children":["$","strong",null,{"children":"Zero data retention"}]}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Usage limits"}],["$","td",null,{"children":"2–5 tasks/day (free tier)"}],["$","td",null,{"children":["$","strong",null,{"children":"Unlimited, always"}]}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Cost"}],["$","td",null,{"children":"$$12–$23/month"}],["$","td",null,{"children":["$","strong",null,{"children":"$$0 — forever free"}]}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Privacy verification"}],["$","td",null,{"children":"Trust the provider"}],["$","td",null,{"children":["$","strong",null,{"children":"Check Network tab (F12)"}]}]]}]]}]]}]}],["$","p",null,{"className":"section-note","children":[["$","strong",null,{"children":"How to verify:"}]," Open Developer Tools (F12 → Network tab), process any PDF, and inspect the network log. You will see zero outgoing file transfers. This is not a marketing promise — it is a verifiable technical fact."]}]]}],["$","section",null,{"className":"stats-section","children":[["$","div",null,{"className":"stat-card","children":[["$","div",null,{"className":"stat-number","children":"16"}],["$","div",null,{"className":"stat-label","children":"Free PDF Tools"}]]}],["$","div",null,{"className":"stat-card","children":[["$","div",null,{"className":"stat-number","children":"0"}],["$","div",null,{"className":"stat-label","children":"Files Uploaded"}]]}],["$","div",null,{"className":"stat-card","children":[["$","div",null,{"className":"stat-number","children":"0"}],["$","div",null,{"className":"stat-label","children":"Accounts Required"}]]}],["$","div",null,{"className":"stat-card","children":[["$","div",null,{"className":"stat-number","children":"∞"}],["$","div",null,{"className":"stat-label","children":"Usage Limit"}]]}]]}],["$","section",null,{"className":"content-section","children":[["$","h2",null,{"className":"section-title","children":"Frequently Asked Questions"}],["$","div",null,{"className":"faq-list","children":[["$","details","0",{"className":"faq-item","children":[["$","summary",null,{"className":"faq-question","children":"Are all 16 PDF tools really free?"}],["$","p",null,{"className":"faq-answer","children":"Yes. Every tool on Tiny PDF Tools is completely free with no usage limits, no daily caps, and no premium tiers. There is no account to create and nothing to install. We generate revenue through non-intrusive display ads, which allows us to keep every tool free for everyone."}]]}],["$","details","1",{"className":"faq-item","children":[["$","summary",null,{"className":"faq-question","children":"Do my PDF files get uploaded to a server?"}],["$","p",null,{"className":"faq-answer","children":"No. Every tool processes files 100% in your browser using JavaScript and the pdf-lib library. Your files never leave your device. You can verify this yourself by opening Developer Tools (F12), going to the Network tab, and processing any PDF — you will see zero file uploads."}]]}],["$","details","2",{"className":"faq-item","children":[["$","summary",null,{"className":"faq-question","children":"What browsers and devices are supported?"}],["$","p",null,{"className":"faq-answer","children":"Tiny PDF Tools works on all modern browsers including Chrome, Firefox, Edge, Safari, and Brave. The tools work on desktop computers, laptops, tablets, and mobile phones. No software installation or browser extension is required."}]]}],["$","details","3",{"className":"faq-item","children":[["$","summary",null,{"className":"faq-question","children":"Is there a file size limit for PDFs?"}],["$","p",null,{"className":"faq-answer","children":"There is no hard file size limit. Since all processing happens in your browser's memory, very large PDFs (over 100 MB) may take longer to process depending on your device's available RAM. For most documents under 50 MB, processing is near-instant."}]]}],["$","details","4",{"className":"faq-item","children":[["$","summary",null,{"className":"faq-question","children":"How is this different from Adobe Acrobat or Smallpdf?"}],["$","p",null,{"className":"faq-answer","children":"The key difference is privacy and cost. Adobe Acrobat costs $22.99/month and requires account creation. Smallpdf limits free users to 2 tasks per day and uploads files to their servers. Tiny PDF Tools is completely free, requires no account, and processes everything in your browser — your files never touch a remote server."}]]}],["$","details","5",{"className":"faq-item","children":[["$","summary",null,{"className":"faq-question","children":"Can I use these tools for business and commercial documents?"}],["$","p",null,{"className":"faq-answer","children":"Absolutely. Many professionals use Tiny PDF Tools for contracts, invoices, proposals, and financial reports. Since files are processed entirely in your browser, there is no risk of data exposure through third-party servers. This makes our tools particularly well-suited for sensitive business documents."}]]}]]}]]}],["$","style",null,{"children":"$9"}]]}],["$","style",null,{"children":"\n        .hero { text-align: center; padding: var(--spacing-xxl) 0; }\n        .hero-title { font-size: 3rem; font-weight: 800; letter-spacing: -1px; margin-bottom: 12px; }\n        .hero-desc { font-size: 1.2rem; color: var(--text-muted); max-width: 600px; margin: 0 auto; line-height: 1.6; }\n        \n        @media (max-width: 768px) {\n          .hero { padding: var(--spacing-xl) 0; }\n          .hero-title { font-size: 2.2rem; }\n          .hero-desc { font-size: 1.05rem; }\n        }\n      "}]],null,["$","$La",null,{"children":"$Lb"}]]}],{},null]},null],["$","$2","h",{"children":[null,["$","$2","79CHVOzpWOMDLzirzPb1U",{"children":[["$","$Lc",null,{"children":"$Ld"}],["$","$Le",null,{"children":"$Lf"}],null]}]]}]]],"m":"$undefined","G":["$10","$undefined"],"s":false,"S":true}
f:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
d:[["$","meta","0",{"charSet":"utf-8"}],["$","title","1",{"children":"Tiny PDF Tools - Free Online PDF Tools | Merge, Split, Compress"}],["$","meta","2",{"name":"description","content":"Free online PDF tools that run 100% in your browser. Merge, split, compress PDFs, convert PDF to images and images to PDF. No uploads, no accounts — 100% private."}],["$","meta","3",{"property":"og:title","content":"Tiny PDF Tools - Free Online PDF Tools"}],["$","meta","4",{"property":"og:description","content":"Merge, split, compress PDFs and convert between PDF and images. 100% client-side, no uploads required."}],["$","meta","5",{"property":"og:url","content":"https://tinypdftools.com"}],["$","meta","6",{"property":"og:site_name","content":"Tiny PDF Tools"}],["$","meta","7",{"property":"og:type","content":"website"}],["$","meta","8",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","9",{"name":"twitter:title","content":"Tiny PDF Tools - Free Online PDF Tools"}],["$","meta","10",{"name":"twitter:description","content":"Free PDF tools that run entirely in your browser. No uploads, 100% private."}]]
b:null
