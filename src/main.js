import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



import { renderGalleryItem } from "./js/render-functions";
import { getImages } from "./js/pixabay-api";

export const refs = {
    formEl: document.querySelector('.form'),
    inputEl: document.querySelector('.query'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
}

refs.formEl.addEventListener("submit", onFormSubmit);

function createLoader() {
  refs.loader.classList.toggle('hidden');
}



async function onFormSubmit(e) {
    e.preventDefault();
    createLoader();
    const query = e.target.elements.query.value;
    if (query.trim() === "") {
        createLoader();
      iziToast.show({
        message: 'Please full the input field',
        messageColor: '#FFFFFF',
        backgroundColor: '#B51B1B',
        position: 'topRight',
        });
    }
    else {
        try {
            const data = await getImages(query);
            createLoader();
            if (data.hits.length > 0) {
               renderGalleryItem(data.hits);
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
