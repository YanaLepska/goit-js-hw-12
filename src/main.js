import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { renderGalleryItem } from "./js/render-functions";
import { getImages } from "./js/pixabay-api";
import { Per_Page } from "./js/pixabay-api";

export let searchQuery = '';
export let pageOf = 1;

export const refs = {
    formEl: document.querySelector('.form'),
    inputEl: document.querySelector('.query'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    btnLoad: document.querySelector('.load-more'),
 
}

 const galleryItem = refs.gallery.querySelector('.gallery-item');

refs.formEl.addEventListener("submit", onFormSubmit);
refs.btnLoad.addEventListener("click", onLoadMoreClick);


async function onFormSubmit(e) {
    e.preventDefault();
    createLoader();
    let query = e.target.elements.query.value;
    searchQuery = query;
    if (query.trim() === "") {
      
      iziToast.show({
        message: 'Please full the input field',
        messageColor: '#FFFFFF',
        backgroundColor: '#B51B1B',
        position: 'topRight',
        });
    }
    else {
        try {
            refs.gallery.innerHTML = '';
            refs.btnLoad.style.display = "none";
            pageOf = 1;
            const data = await getImages(pageOf,  searchQuery);
            
            if (data.hits.length > 0) {
                renderGalleryItem(data.hits);
                refs.btnLoad.style.display = "block";

            if (galleryItem) {
                const galleryItemHeight = galleryItem.getBoundingClientRect().height;

                window.scrollBy({
                    top: galleryItemHeight * 2, 
                    behavior: 'smooth',
                });
            }
            } else {
                refs.gallery.innerHTML = '';
                refs.btnLoad.style.display = "none";
            iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: '#FFFFFF',
            backgroundColor: '#B51B1B',
            position: 'topRight',
            });
            }
            checkEndOfSearchResults(data.totalHits, pageOf);
        } catch (error) {
            console.error('Error data:', error);
        } 
    }    
  createLoader();
    e.target.reset();
}

async function onLoadMoreClick() {
    createLoader();
    pageOf += 1;
    const data = await getImages();
    renderGalleryItem(data.hits);
   
    checkEndOfSearchResults(data.totalHits, pageOf);
    createLoader();
            
}

function createLoader() {
    refs.loader.classList.toggle('hidden');
}


function checkEndOfSearchResults(totalHits, pageOf) {
    const maxPage = Math.ceil(totalHits / Per_Page);
    if (maxPage === pageOf) {
        refs.btnLoad.style.display = 'none';
        iziToast.show({
            message: "We're sorry, but you've reached the end of search results.",
            messageColor: '#FFFFFF',
            backgroundColor: '#B51B1B',
            position: 'topRight',
        });
    }
}

