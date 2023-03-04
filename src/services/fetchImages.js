import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32970845-e4fc8afb31274d73d690834b7';
const searchParams = 'per_page=12&image_type=photo&orientation=horizontal';

export const fetchImages = async (searchQuery, page = 1) => {
  const { data } = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${page}&${searchParams}`
  );

  return data;
};
