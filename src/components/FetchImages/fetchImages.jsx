import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;

export const fetchImages = async (inputValue, pageNr) => {
  const response = await axios.get(
    `/?q=${inputValue}&page=${pageNr}&key=39027614-ebffabe42d69b2da9cdf04ec0&image_type=photo&orientation=horizontal&per_page=12`
  );

  return { 
    hits: response.data.hits.map(image => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    })),
    totalHits: response.data.totalHits
  };
};