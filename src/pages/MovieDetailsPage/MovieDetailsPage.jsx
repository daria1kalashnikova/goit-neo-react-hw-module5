import { useEffect, useRef, useState } from "react";
import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { fetchMovieById } from "../../api/api";
const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMovieById(movieId).then((data) => setMovie(data));
  }, [movieId]);
  console.log("movie", movie);
  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/");
  return (
    <div>
      <Link to={goBackLink.current}>Go Back</Link>
      {movie && (
        <>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <h2>{movie.title}</h2>
        </>
      )}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
