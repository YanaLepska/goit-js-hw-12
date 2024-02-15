import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



import { renderGalleryItem } from "./js/render-functions";
import { getImages } from "./js/pixabay-api";
import { Per_Page } from "./js/pixabay-api";


export const refs = {
    formEl: document.querySelector('.form'),
    inputEl: document.querySelector('.query'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    btnLoad: document.querySelector('.load-more'),
}

export let searchQuery = '';
export let pageOf = 1;
 let totalResult = 0;

refs.formEl.addEventListener("submit", onFormSubmit);
refs.btnLoad.addEventListener("click", onLoadMoreClick);

function createLoader() {
    refs.loader.classList.toggle('hidden');
}

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
            const data = await getImages();
            statusBtn();
            if (data.hits.length > 0) {
                renderGalleryItem(data.hits);
                refs.btnLoad.style.display = "block";
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
        } catch (error) {
            console.error('Error data:', error);
        } 
    }    
  createLoader();
    e.target.reset();
}

async function onLoadMoreClick() {
    createLoader();
    statusBtn();
    pageOf += 1;
    const data = await getImages();
    renderGalleryItem(data.hits);
    createLoader();
            
}

async function statusBtn() {
    const data = await getImages();
    totalResult = data.totalHits;
    const maxPage = Math.ceil(totalResult / Per_Page);
    if (totalResult !== undefined && totalResult <= pageOf * Per_Page) {
        
    refs.btnLoad.style.display = 'none';
        
        // Виводимо повідомлення про досягнення кінця результатів пошуку
        iziToast.show({
            message: "We're sorry, but you've reached the end of search results.",
            messageColor: '#FFFFFF',
            backgroundColor: '#B51B1B',
            position: 'topRight',
        });
    } 
}
