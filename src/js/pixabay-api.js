import axios from "axios";

export async function getPhotoBySearch(value, currentPage) {
    try {
        const KEY = '41764579-b97d65b31c0abd4efd9d4830e';
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: KEY,
                q: value,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page: currentPage,
                per_page: '15'
            }
        });

        if (response.data.total === 0) {
            throw new Error('No images found');
        }

    return response.data;
    } catch (error) {
        throw error; 
    }
}

