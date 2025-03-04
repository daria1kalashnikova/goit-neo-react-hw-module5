import axios from "axios";

// const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
// const options = { method: "GET", headers: { accept: "application/json" } };

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzlkYjhkMGZlMTg1NTBkMmRlMzgzNmI1YzJlY2JmZCIsIm5iZiI6MTczMTY4MDQ0OC4yNzMyNDQ2LCJzdWIiOiI2NzJjODNiZGQ5OGJiYzM5NzdhZDFlOTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._1syfXQ8vtlXXneE4RJBJfKxPYaoM8VgLNavyHMQzi8";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

export async function fetchMovies() {
  const response = await axios.get("/trending/movie/day?language=en-US");
  return response.data;
}

export async function fetchMovieByQuery(movieQuery) {
  const response = await axios.get(
    `/search/movie?query=${movieQuery}&include_adult=false&language=en-US&page=1`
  );
  return response.data;
}

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?language=en-US`);
  return response.data;
};

export async function fetchMovieCredits(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data;
}
