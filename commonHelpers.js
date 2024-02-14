import{S as p,a as c,i as u}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function m({largeImageURL:o,webformatURL:r,tags:a,likes:n,views:e,comments:t,downloads:s}){return`<li class="gallery-item">
   <a class="gallery-link" href="${o}">
   <img class="gallery-image"
   src="${r}" 
   alt="${a}" />
  </a> <div class="info-box">
  <p>Likes:<span> ${n}</span></p>
        <p>Views:<span> ${e}</span></p>
        <p>Comments:<span> ${t}</span></p>
        <p>Downloads:<span> ${s}</span> </p>    
    </div>
  </li>`}let d=new p(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"});function f(o){const r=o.map(m).join("");i.gallery.innerHTML=r,d.refresh()}async function g(o,r){return c.defaults.baseURL="https://pixabay.com/api/",(await c.get("",{params:{key:"42132229-e88b92984f0d2a7001cb07c65",image_type:"photo",orientation:"horizontal",safesearch:"true",q:o,page:r,per_page:15}})).data}const i={formEl:document.querySelector(".form"),inputEl:document.querySelector(".query"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.formEl.addEventListener("submit",y);function l(){i.loader.classList.toggle("hidden")}async function y(o){o.preventDefault(),l();const r=o.target.elements.query.value;if(r.trim()==="")l(),u.show({message:"Please full the input field",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});else try{const a=await g(r);l(),a.hits.length>0?f(a.hits):(i.gallery.innerHTML="",u.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}))}catch(a){console.error("Error data:",a)}o.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
