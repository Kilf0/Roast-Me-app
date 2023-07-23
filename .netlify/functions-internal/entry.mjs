import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { e as deserializeManifest } from './chunks/astro.cfcfd1e7.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.17396670.mjs');
const _page1  = () => import('./chunks/ai@_@json.31b5b369.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/api/ai.json.js", _page1]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\"form\");e.addEventListener(\"submit\",function(r){r.preventDefault(),document.querySelector(\".indicator\").classList.add(\"active\");const o={name:e.querySelector(\"#name\").value,age:e.querySelector(\"#age\").value,height:e.querySelector(\"#height\").value,weight:e.querySelector(\"#weight\").value,interests:e.querySelector(\"#interests\").value};fetch(\"/api/ai.json\",{method:\"POST\",body:JSON.stringify(o)}).then(t=>t.json()).then(t=>{document.querySelector(\".indicator\").classList.remove(\"active\"),document.querySelector(\"output\").innerHTML=t.message}).catch(console.error)});\n"}],"styles":[{"type":"external","src":"/_astro/index.b130c394.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/ai.json","type":"endpoint","pattern":"^\\/api\\/ai\\.json$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"ai.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/ai.json.js","pathname":"/api/ai.json","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["C:/Users/11Zan/OneDrive/Documents/GitHub/Roast-Me-app/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/api/ai.json.js":"chunks/pages/ai.json.js.ae486e52.mjs","/src/pages/index.astro":"chunks/pages/index.astro.1149467a.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.17396670.mjs","\u0000@astro-page:src/pages/api/ai@_@json.js":"chunks/ai@_@json.31b5b369.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.53d6b042.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.b130c394.css","/favicon.svg"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
