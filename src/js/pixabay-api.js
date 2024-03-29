import axios from 'axios';

import { searchQuery } from '../main';
import { pageOf } from '../main';

export const Per_Page = 15;
export async function getImages() {
    
    axios.defaults.baseURL = 'https://pixabay.com/api/';
    const response = await axios.get('', {
    params: {
    key: '42132229-e88b92984f0d2a7001cb07c65',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    q: searchQuery,
    page: pageOf,
    per_page: Per_Page,
    }
    });
    return response.data;
}