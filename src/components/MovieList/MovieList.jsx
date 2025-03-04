import { Link, useLocation } from "react-router-dom";

function MovieList({ movies, moviesNotFound }) {
  const location = useLocation();

  if (moviesNotFound) {
    return <p>No movies found by entered query. Please try again.</p>;
  }

  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieList;
