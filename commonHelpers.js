import{S as m,a as c,i as u}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function y({largeImageURL:r,webformatURL:o,tags:a,likes:i,views:e,comments:t,downloads:n}){return`<li class="gallery-item">
   <a class="gallery-link" href="${r}">
   <img class="gallery-image"
   src="${o}" 
   alt="${a}" />
  </a> <div class="info-box">
  <p>Likes:<span> ${i}</span></p>
        <p>Views:<span> ${e}</span></p>
        <p>Comments:<span> ${t}</span></p>
        <p>Downloads:<span> ${n}</span> </p>    
    </div>
  </li>`}let g=new m(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"});function d(r){const o=r.map(y).join("");s.gallery.insertAdjacentHTML("beforeend",o),g.refresh()}async function p(){return c.defaults.baseURL="https://pixabay.com/api/",(await c.get("",{params:{key:"42132229-e88b92984f0d2a7001cb07c65",image_type:"photo",orientation:"horizontal",safesearch:"true",q:f,page:l,per_page:15}})).data}const s={formEl:document.querySelector(".form"),inputEl:document.querySelector(".query"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".load-more")};s.formEl.addEventListener("submit",b);s.btnLoad.addEventListener("click",L);function h(){s.loader.classList.toggle("hidden")}let f="",l=1;async function b(r){r.preventDefault(),h();let o=r.target.elements.query.value;if(f=o,o.trim()==="")u.show({message:"Please full the input field",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});else try{l=1;const a=await p();s.gallery.innerHTML="",a.hits.length>0?(d(a.hits),s.btnLoad.style.display="block"):(s.gallery.innerHTML="",s.btnLoad.style.display="none",u.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}))}catch(a){console.error("Error data:",a)}r.target.reset()}async function L(){l+=1;const r=await p();d(r.hits)}
//# sourceMappingURL=commonHelpers.js.map