import{S as h,a as u,i as d}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function b({largeImageURL:t,webformatURL:r,tags:s,likes:n,views:e,comments:o,downloads:l}){return`<li class="gallery-item">
   <a class="gallery-link" href="${t}">
   <img class="gallery-image"
   src="${r}" 
   alt="${s}" />
  </a> <div class="info-box">
  <p>Likes:<span> ${n}</span></p>
        <p>Views:<span> ${e}</span></p>
        <p>Comments:<span> ${o}</span></p>
        <p>Downloads:<span> ${l}</span> </p>    
    </div>
  </li>`}let L=new h(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"});function p(t){const r=t.map(b).join("");a.gallery.insertAdjacentHTML("beforeend",r),L.refresh()}const g=15;async function y(){return u.defaults.baseURL="https://pixabay.com/api/",(await u.get("",{params:{key:"42132229-e88b92984f0d2a7001cb07c65",image_type:"photo",orientation:"horizontal",safesearch:"true",q:m,page:i,per_page:g}})).data}let m="",i=1;const a={formEl:document.querySelector(".form"),inputEl:document.querySelector(".query"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".load-more"),galleryItem:document.querySelector(".gallery-item")};a.formEl.addEventListener("submit",F);a.btnLoad.addEventListener("click",q);async function F(t){t.preventDefault(),c();let r=t.target.elements.query.value;if(m=r,r.trim()==="")d.show({message:"Please full the input field",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});else try{a.gallery.innerHTML="",a.btnLoad.style.display="none",i=1;const s=await y();if(s.hits.length>0){p(s.hits),a.btnLoad.style.display="block";const n=a.galleryItem.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}else a.gallery.innerHTML="",a.btnLoad.style.display="none",d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});f(s.totalHits,i)}catch(s){console.error("Error data:",s)}c(),t.target.reset()}async function q(){c();const t=await y();p(t.hits),i+=1,f(t.totalHits,i),c()}function c(){a.loader.classList.toggle("hidden")}function f(t,r){Math.ceil(t/g)===r&&(a.btnLoad.style.display="none",d.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}))}
//# sourceMappingURL=commonHelpers.js.map
