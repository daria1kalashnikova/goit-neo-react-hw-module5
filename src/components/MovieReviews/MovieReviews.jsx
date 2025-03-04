import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../api/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then((data) => setMovieReviews(data));
  }, [movieId]);

  return (
    <ul>
      {movieReviews && movieReviews.results.length > 0 ? (
        movieReviews.results.map(({ id, author, content }) => (
          <li className={css["review-card"]} key={id}>
            <p>
              <strong>Author: </strong>
              {author}
            </p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>No reviews for this movie.</p>
      )}
    </ul>
  );
};

export default MovieReviews;
