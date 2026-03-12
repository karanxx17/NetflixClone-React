import axios from "axios";

const API_KEY = "947df7bb36045a8b11702bbce71ed93c";
const BASE_URL = "https://api.themoviedb.org/3";


export const fetchTrending = () =>
  axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);

export const fetchPopular = () =>
  axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

export const fetchTopRated = () =>
  axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);

export const fetchUpcoming = () =>
  axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);

export const fetchMovieVideos = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);

export const searchMovies = (query) =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);