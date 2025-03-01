import { useEffect, useState } from "react";

import { fetchMovies } from "/src/api/api";
import MovieList from "/src/components/MovieList/MovieList";

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then((data) => setTrendingMovies(data.results));
  }, []);

  console.log(trendingMovies);
  return (
    <div>
      <MovieList movies={trendingMovies} />
    </div>
  );
}

export default HomePage;
