(()=>{var e={};e.id=831,e.ids=[831],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},5377:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>g,tree:()=>d});var a=t(70260),o=t(28203),s=t(25155),i=t.n(s),l=t(67292),n={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);t.d(r,n);let d=["",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,74842)),"C:\\Projects\\pdftoolkit\\src\\app\\blog\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,98180)),"C:\\Projects\\pdftoolkit\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Projects\\pdftoolkit\\src\\app\\blog\\page.jsx"],p={require:t,loadChunk:()=>Promise.resolve()},g=new a.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},61116:(e,r,t)=>{Promise.resolve().then(t.bind(t,2627))},70844:(e,r,t)=>{Promise.resolve().then(t.bind(t,56071))},56071:(e,r,t)=>{"use strict";t.d(r,{default:()=>c});var a=t(45512),o=t(58009),s=t(26008),i=t(45723),l=t(4643);let n=(0,t(41680).A)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var d=t(18929);let c=()=>{let[e,r]=(0,o.useState)([]),[t,c]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{(0,d.z)().then(e=>{r(e),c(!1)})},[]),(0,a.jsxs)("div",{className:"tool-page",children:[(0,a.jsxs)("div",{className:"tool-header",children:[(0,a.jsx)("h1",{className:"tool-title",children:"Blog"}),(0,a.jsx)("p",{className:"tool-desc",children:"Tips, tutorials, and guides for working with PDFs."})]}),t?(0,a.jsx)("div",{style:{textAlign:"center",padding:"60px 0",color:"var(--text-muted)"},children:"Loading posts…"}):0===e.length?(0,a.jsx)("div",{style:{textAlign:"center",padding:"60px 0",color:"var(--text-muted)"},children:"No posts yet. Check back soon!"}):(0,a.jsx)("div",{className:"blog-grid",children:e.map(e=>(0,a.jsxs)(s.default,{href:`/blog/${e.slug}`,className:"blog-card",children:[e.image&&(0,a.jsx)("div",{className:"blog-card-image",children:(0,a.jsx)("img",{src:e.image,alt:e.title,loading:"lazy"})}),(0,a.jsxs)("div",{className:"blog-card-body",children:[(0,a.jsx)("span",{className:"blog-card-category",children:e.category}),(0,a.jsx)("h2",{className:"blog-card-title",children:e.title}),(0,a.jsx)("p",{className:"blog-card-excerpt",children:e.excerpt}),(0,a.jsxs)("div",{className:"blog-card-meta",children:[(0,a.jsxs)("span",{children:[(0,a.jsx)(i.A,{size:14})," ",e.displayDate]}),(0,a.jsxs)("span",{children:[(0,a.jsx)(l.A,{size:14})," ",e.readTime]})]}),(0,a.jsxs)("div",{className:"blog-card-cta",children:["Read More ",(0,a.jsx)(n,{size:14})]})]})]},e.slug))}),(0,a.jsx)("style",{children:`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: var(--spacing-lg);
        }
        .blog-card {
          display: flex;
          flex-direction: column;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: var(--transition-smooth);
          text-decoration: none;
          color: inherit;
        }
        .blog-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-glow);
          transform: translateY(-3px);
        }
        .blog-card-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .blog-card:hover .blog-card-image img {
          transform: scale(1.05);
        }
        .blog-card-body {
          padding: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          flex: 1;
        }
        .blog-card-category {
          display: inline-block;
          align-self: flex-start;
          padding: 3px 10px;
          background: var(--primary-glow);
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .blog-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.4;
        }
        .blog-card-excerpt {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          flex: 1;
        }
        .blog-card-meta {
          display: flex;
          gap: var(--spacing-md);
          font-size: 0.8rem;
          color: var(--text-dim);
        }
        .blog-card-meta span {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .blog-card-cta {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: var(--spacing-sm);
          transition: var(--transition-fast);
        }
        .blog-card:hover .blog-card-cta {
          gap: 10px;
        }
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}},74842:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i,metadata:()=>s});var a=t(62740),o=t(2627);let s={title:"",description:"",alternates:{canonical:""}};function i(){return(0,a.jsx)(o.default,{})}},2627:(e,r,t)=>{"use strict";t.d(r,{default:()=>a});let a=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Projects\\\\pdftoolkit\\\\src\\\\components\\\\BlogList.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Projects\\pdftoolkit\\src\\components\\BlogList.jsx","default")},18929:(e,r,t)=>{"use strict";t.d(r,{z:()=>p,N:()=>g});var a=t(31309);let o="https://vovcdsutmcjkdlracgtv.supabase.co",s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdmNkc3V0bWNqa2RscmFjZ3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMjA3ODcsImV4cCI6MjA4NzY5Njc4N30.fdO4kVNne-3cH72mbq7gO-EeUBoPfmCTlerACARfVL0",i=o&&s?(0,a.UU)(o,s):null,l=[],n=null,d=0;function c(e){return{id:String(e.id),slug:e.slug,title:e.title,excerpt:e.excerpt,content:e.content,date:e.date,displayDate:e.display_date,readTime:e.read_time,category:e.category,relatedToolLink:e.related_tool_link,relatedToolName:e.related_tool_name,image:e.image||null}}async function p(){if(n&&Date.now()-d<3e5)return n;if(!i)return l;try{let{data:e,error:r}=await i.from("blog_posts").select("*").order("date",{ascending:!1});if(r||!e||0===e.length)return console.warn("[blogService] Supabase fetch failed, using local fallback",r),l;return n=e.map(c),d=Date.now(),n}catch(e){return console.warn("[blogService] Network error, using local fallback",e),l}}async function g(e){return(await p()).find(r=>r.slug===e)}}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[406,121,508],()=>t(5377));module.exports=a})();