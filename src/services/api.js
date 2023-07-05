import axios from 'axios';

const API_KEY = 'aa449cb2e3d36bb0dfdee969ca615948';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  const response = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export const fetchSearch = async query => {
  const response = await axios.get(
    `/search/movie?&query=${query}&language=en-US&page=1&include_adult=false&api_key=${API_KEY}`
  );
  return response.data;
};
