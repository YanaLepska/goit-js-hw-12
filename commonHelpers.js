import{S as f,a as g,i as c}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function y({largeImageURL:r,webformatURL:o,tags:a,likes:i,views:e,comments:t,downloads:s}){return`<li class="gallery-item">
   <a class="gallery-link" href="${r}">
   <img class="gallery-image"
   src="${o}" 
   alt="${a}" />
  </a> <div class="info-box">
  <p>Likes:<span> ${i}</span></p>
        <p>Views:<span> ${e}</span></p>
        <p>Comments:<span> ${t}</span></p>
        <p>Downloads:<span> ${s}</span> </p>    
    </div>
  </li>`}let h=new f(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"});function p(r){const o=r.map(y).join("");n.gallery.insertAdjacentHTML("beforeend",o),h.refresh()}async function d(){return(await g.get("https://pixabay.com/api/",{params:{key:"42132229-e88b92984f0d2a7001cb07c65",image_type:"photo",orientation:"horizontal",safesearch:"true",q:m,page:l,per_page:15}})).data}const n={formEl:document.querySelector(".form"),inputEl:document.querySelector(".query"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".load-more")};n.formEl.addEventListener("submit",b);n.btnLoad.addEventListener("click",L);function u(){n.loader.classList.toggle("hidden")}let m="",l=1;async function b(r){r.preventDefault(),u();let o=r.target.elements.query.value;if(m=o,o.trim()==="")c.show({message:"Please full the input field",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});else try{l=1;const a=await d();u(),a.hits.length>0?p(a.hits):(n.gallery.innerHTML="",c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}))}catch(a){console.error("Error data:",a)}r.target.reset()}async function L(){l+=1;const r=await d();p(r.hits)}
//# sourceMappingURL=commonHelpers.js.map
