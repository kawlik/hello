if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),l={module:{uri:o},exports:t,require:c};i[o]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-8a7d9033"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.35673e96.css",revision:null},{url:"assets/index.973dc0be.js",revision:null},{url:"assets/vendor.56f6ffe2.js",revision:null},{url:"index.html",revision:"2ebe4ac8229e7e666ee2352a4e0e1b9a"},{url:"favicon.ico",revision:"7bed1cc6eca51ab7af81382fa6e52db1"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"apple-touch-icon.png",revision:"7c0e1145d8a9475218e826e01b1152b7"},{url:"android-chrome-192x192.png",revision:"0a0e30fee6fd873f09eb40b25c922e18"},{url:"android-chrome-512x512.png",revision:"7cae8c5f75f3d8ae8218a0ea1c62a238"},{url:"manifest.webmanifest",revision:"87b0a36eab13d44e6320f748d3866e98"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
