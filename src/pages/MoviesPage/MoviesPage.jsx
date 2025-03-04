import { useSearchParams } from "react-router-dom";
import SearchBar from "/src/components/SearchBar/SearchBar";
import { useEffect, useState } from "react";

import MovieList from "/src/components/MovieList/MovieList";

import { fetchMovieByQuery } from "/src/api/api";

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [movies, setMovies] = useState([]);

  function handleSearch(query) {
    setSearchParams({ query });
  }

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) {
      return;
    }

    fetchMovieByQuery(query).then((data) => {
      setMoviesNotFound(false);

      if (data.results.length != 0) {
        setMovies(data.results);
      } else {
        setMoviesNotFound(true);
      }
    });
  }, [searchParams]);

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} moviesNotFound={moviesNotFound} />
    </div>
  );
}

export default MoviesPage;
