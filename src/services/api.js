import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8c16cd8b4be35c0f06012a6f4ee8f8c7';

export const fetchTrendingFilms = async controller => {
  const url = `trending/movie/day?language=en-US&api_key=${API_KEY}`;
  const response = await axios.get(url, {
    signal: controller.signal,
  });
  return response.data.results;
};

export const fetchFilmById = async (id, controller) => {
  const url = `movie/${id}?language=en-US&api_key=${API_KEY}`;
  const response = await axios.get(url, {
    signal: controller.signal,
  });
  return response.data;
};

export const fetchCast = async (id, controller) => {
  const url = `/movie/${id}/credits?language=en-US&api_key=${API_KEY}`;
  const response = await axios.get(url, {
    signal: controller.signal,
  });
  return response.data;
};
export const fetchReviews = async (id, controller) => {
  const url = `/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`;
  const response = await axios.get(url, {
    signal: controller.signal,
  });
  return response.data;
};
export const fetchMovieByQuery = async (query, controller) => {
  const url = `/search/movie?query=${query}&include_adult=false&language=en-US&api_key=${API_KEY}`;
  const response = await axios.get(url, {
    signal: controller.signal,
  });
  return response.data.results;
};


// export const fetchTrendingFilms = async () => {
//   const url = `trending/movie/day?language=en-US&api_key=${API_KEY}`;
//   const response = await axios.get(url);
//   return response.data.results;
// };

// export const fetchFilmById = async id => {
//   const url = `movie/${id}?language=en-US&api_key=${API_KEY}`;
//   const response = await axios.get(url);
//   return response.data;
// };

// export const fetchCast = async id => {
//   const url = `/movie/${id}/credits?language=en-US&api_key=${API_KEY}`;
//   const response = await axios.get(url);
//   return response.data;
// };
// export const fetchReviews = async id => {
//   const url = `/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`;
//   const response = await axios.get(url);
//   return response.data;
// };
// export const fetchMovieByQuery = async query => {
//   const url = `/search/movie?query=${query}&include_adult=false&language=en-US&api_key=${API_KEY}`;
//   const response = await axios.get(url);
//   return response.data.results;
// };
