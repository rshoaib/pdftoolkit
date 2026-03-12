(()=>{var e={};e.id=953,e.ids=[953],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},92881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>d,pages:()=>p,routeModule:()=>g,tree:()=>c});var o=r(70260),a=r(28203),i=r(25155),l=r.n(i),n=r(67292),s={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(s[e]=()=>n[e]);r.d(t,s);let c=["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,15372)),"C:\\Projects\\pdftoolkit\\src\\app\\blog\\[slug]\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\Projects\\pdftoolkit\\src\\app\\blog\\[slug]\\page.jsx"],d={require:r,loadChunk:()=>Promise.resolve()},g=new o.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},14074:(e,t,r)=>{Promise.resolve().then(r.bind(r,55573))},82530:(e,t,r)=>{Promise.resolve().then(r.bind(r,64820))},64820:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var o=r(45512),a=r(58009),i=r(26008),l=r(58686),n=r(41680);let s=(0,n.A)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),c=(0,n.A)("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);var p=r(45723),d=r(4643),g=r(18929),m=r(6764);let u=()=>{let{slug:e}=(0,l.useParams)(),[t,r]=(0,a.useState)(null),[n,u]=(0,a.useState)(!0);return((0,a.useEffect)(()=>{(0,g.N)(e).then(e=>{r(e),u(!1)})},[e]),n)?(0,o.jsx)("div",{style:{textAlign:"center",padding:"80px 0",color:"var(--text-muted)"},children:"Loading…"}):t?(0,o.jsxs)("div",{className:"blog-post-page",children:[(0,o.jsx)(m.A,{title:`${t.title} | Tiny PDF Tools`,description:t.excerpt||t.title,schemaType:"Article",schemaData:{headline:t.title,image:t.image?[window.location.origin+t.image]:[],datePublished:t.date,author:{"@type":"Person",name:"Rizwan"},publisher:{"@type":"Organization",name:"Tiny PDF Tools",logo:{"@type":"ImageObject",url:window.location.origin+"/favicon.svg"}}}}),(0,o.jsxs)("div",{className:"blog-post-nav",children:[(0,o.jsxs)(i.default,{href:"/blog",className:"blog-back-link",children:[(0,o.jsx)(s,{size:16})," All Posts"]}),(0,o.jsxs)("button",{className:"blog-share-btn",onClick:()=>{navigator.share?navigator.share({title:t.title,url:window.location.href}):(navigator.clipboard.writeText(window.location.href),alert("Link copied to clipboard!"))},children:[(0,o.jsx)(c,{size:16})," Share"]})]}),(0,o.jsxs)("article",{className:"blog-post-article",children:[(0,o.jsxs)("header",{className:"blog-post-header",children:[(0,o.jsx)("span",{className:"blog-post-category",children:t.category}),(0,o.jsx)("h1",{className:"blog-post-title",children:t.title}),(0,o.jsxs)("div",{className:"blog-post-meta",children:[(0,o.jsxs)("span",{children:[(0,o.jsx)(p.A,{size:14})," ",t.displayDate]}),(0,o.jsxs)("span",{children:[(0,o.jsx)(d.A,{size:14})," ",t.readTime]})]})]}),t.image&&(0,o.jsx)("div",{className:"blog-post-hero",children:(0,o.jsx)("img",{src:t.image,alt:t.title})}),(0,o.jsx)("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:function(e){if(!e)return"";let t=e.replace(/^### (.*$)/gim,"<h3>$1</h3>").replace(/^## (.*$)/gim,"<h2>$1</h2>").replace(/^# (.*$)/gim,"<h1>$1</h1>").replace(/\*\*(.*?)\*\*/gim,"<strong>$1</strong>").replace(/\*(.*?)\*/gim,"<em>$1</em>").replace(/`(.*?)`/gim,"<code>$1</code>").replace(/^\> (.*$)/gim,"<blockquote>$1</blockquote>").replace(/^\- (.*$)/gim,"<li>$1</li>").replace(/^\d+\. (.*$)/gim,"<li>$1</li>").replace(/\[([^\]]+)\]\(([^)]+)\)/gim,'<a href="$2">$1</a>').replace(/\n{2,}/g,"</p><p>").replace(/<\/li>\s*<li>/gim,"</li><li>");return"<p>"+(t=(t=(t=t.replace(/(<li>[\s\S]*?<\/li>)/gim,e=>e.startsWith("<ul>")?e:"<ul>"+e+"</ul>")).replace(/<\/ul>\s*<ul>/g,"")).replace(/\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)*)/gim,(e,t,r)=>{let o=t.split("|").filter(e=>e.trim()).map(e=>`<th>${e.trim()}</th>`).join(""),a=r.trim().split("\n").map(e=>{let t=e.split("|").filter(e=>e.trim()).map(e=>`<td>${e.trim()}</td>`).join("");return`<tr>${t}</tr>`}).join("");return`<table><thead><tr>${o}</tr></thead><tbody>${a}</tbody></table>`}))+"</p>"}(t.content)}}),t.relatedToolLink&&(0,o.jsx)("div",{className:"blog-post-cta",children:(0,o.jsxs)(i.default,{href:t.relatedToolLink,className:"btn-primary",children:["Try ",t.relatedToolName," →"]})})]}),(0,o.jsx)("style",{children:`
        .blog-post-page {
          max-width: 760px;
          margin: 0 auto;
          width: 100%;
        }
        .blog-post-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xl);
        }
        .blog-back-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }
        .blog-back-link:hover {
          color: var(--primary);
        }
        .blog-share-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          transition: var(--transition-fast);
        }
        .blog-share-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .blog-post-header {
          margin-bottom: var(--spacing-xl);
        }
        .blog-post-category {
          display: inline-block;
          padding: 4px 12px;
          background: var(--primary-glow);
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--spacing-md);
        }
        .blog-post-title {
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.5px;
          margin-bottom: var(--spacing-md);
        }
        .blog-post-meta {
          display: flex;
          gap: var(--spacing-lg);
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .blog-post-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .blog-post-hero {
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: var(--spacing-xl);
        }
        .blog-post-hero img {
          width: 100%;
          height: auto;
          display: block;
        }
        .blog-post-content {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-main);
        }
        .blog-post-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: var(--spacing-xl) 0 var(--spacing-md);
        }
        .blog-post-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: var(--spacing-lg) 0 var(--spacing-sm);
        }
        .blog-post-content p {
          margin-bottom: var(--spacing-md);
        }
        .blog-post-content strong {
          color: var(--text-main);
          font-weight: 700;
        }
        .blog-post-content blockquote {
          border-left: 3px solid var(--primary);
          padding: var(--spacing-sm) var(--spacing-lg);
          margin: var(--spacing-md) 0;
          background: var(--bg-surface);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-style: italic;
          color: var(--text-muted);
        }
        .blog-post-content ul, .blog-post-content ol {
          padding-left: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }
        .blog-post-content li {
          margin-bottom: var(--spacing-xs);
        }
        .blog-post-content code {
          background: var(--bg-surface);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.9em;
          color: var(--primary);
        }
        .blog-post-content a {
          color: var(--primary);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .blog-post-content a:hover {
          text-decoration-thickness: 2px;
        }
        .blog-post-content table {
          width: 100%;
          border-collapse: collapse;
          margin: var(--spacing-md) 0;
          font-size: 0.95rem;
        }
        .blog-post-content th, .blog-post-content td {
          padding: 10px 14px;
          border: 1px solid var(--border-light);
          text-align: left;
        }
        .blog-post-content th {
          background: var(--bg-surface);
          font-weight: 600;
        }
        .blog-post-cta {
          display: flex;
          justify-content: center;
          margin: var(--spacing-xxl) 0;
        }
      `})]}):(0,o.jsxs)("div",{className:"tool-page",style:{textAlign:"center",padding:"80px 0"},children:[(0,o.jsx)("h1",{children:"Post Not Found"}),(0,o.jsx)("p",{style:{color:"var(--text-muted)",margin:"16px 0"},children:"This blog post doesn't exist or has been removed."}),(0,o.jsx)(i.default,{href:"/blog",className:"btn-primary",children:"← Back to Blog"})]})}},6764:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var o=r(45512);function a({schemaType:e,schemaData:t}){if(!t)return null;let r={"@context":"https://schema.org","@type":e||"WebApplication",...t};return(0,o.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(r)}})}},15372:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var o=r(62740),a=r(55573);function i(){return(0,o.jsx)(a.default,{})}},55573:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});let o=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\BlogPost.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\BlogPost.jsx","default")},18929:(e,t,r)=>{"use strict";r.d(t,{z:()=>d,N:()=>g});var o=r(31309);let a="https://vovcdsutmcjkdlracgtv.supabase.co",i="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMjA3ODcsImV4cCI6MjA4NzY5Njc4N30.fdO4kVNne-3cH72mbq7gO-EeUBoPfmCTlerACARfVL0",l=a&&i?(0,o.UU)(a,i):null,n=[],s=null,c=0;function p(e){return{id:String(e.id),slug:e.slug,title:e.title,excerpt:e.excerpt,content:e.content,date:e.date,displayDate:e.display_date,readTime:e.read_time,category:e.category,relatedToolLink:e.related_tool_link,relatedToolName:e.related_tool_name,image:e.image||null}}async function d(){if(s&&Date.now()-c<3e5)return s;if(!l)return n;try{let{data:e,error:t}=await l.from("blog_posts").select("*").order("date",{ascending:!1});if(t||!e||0===e.length)return console.warn("[blogService] Supabase fetch failed, using local fallback",t),n;return s=e.map(p),c=Date.now(),s}catch(e){return console.warn("[blogService] Network error, using local fallback",e),n}}async function g(e){return(await d()).find(t=>t.slug===e)}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[406,121,508],()=>r(92881));module.exports=o})();