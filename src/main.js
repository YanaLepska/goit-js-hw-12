import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



import { renderGalleryItem } from "./js/render-functions";
import { getImages } from "./js/pixabay-api";


export const refs = {
    formEl: document.querySelector('.form'),
    inputEl: document.querySelector('.query'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    btnLoad: document.querySelector('.load-more'),
}

refs.formEl.addEventListener("submit", onFormSubmit);
refs.btnLoad.addEventListener("click", onLoadMoreClick);

function createLoader() {
    refs.loader.classList.toggle('hidden');
}


export let searchQuery = '';
export let pageOf = 1;

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
            pageOf = 1;
            const data = await getImages();
            createLoader();
            refs.gallery.innerHTML = '';
            if (data.hits.length > 0) {
                renderGalleryItem(data.hits);
                refs.btnLoad.style.display = "block";
            } else {
            refs.gallery.innerHTML = '';
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
  
    e.target.reset();
}

async function onLoadMoreClick() {
     createLoader();
    pageOf += 1;
    const data = await getImages();
    renderGalleryItem(data.hits);
            
}