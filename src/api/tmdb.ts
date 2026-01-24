
import axios from "axios";

const API_KEY = "8331807bc1e6dc677e347de51d2bc518";
const BASE = "https://api.themoviedb.org/3";

export const getCategory = (type: string) =>
  axios.get(`${BASE}/movie/${type}?api_key=${API_KEY}`);

export const searchMovies = (q: string) =>
  axios.get(`${BASE}/search/movie?api_key=${API_KEY}&query=${q}`);

export const getMovie = (id: string) =>
  axios.get(`${BASE}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`);
