import css from "./MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { fetchMovieById } from "../../api/api";
import MovieCard from "../../components/MovieCard/MovieCard";
import { FaArrowLeftLong } from "react-icons/fa6";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then((data) => setMovie(data));
  }, [movieId]);

  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/");

  return (
    <div className="container">
      <Link className={"go-back-link"} to={goBackLink.current}>
        <FaArrowLeftLong /> Go back
      </Link>
      <MovieCard movie={movie} />
      <hr />
      <div className={css["additional-info"]}>
        <h3 className="heading">Additional Information:</h3>
        <ul className={css["additional-info-list"]}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
