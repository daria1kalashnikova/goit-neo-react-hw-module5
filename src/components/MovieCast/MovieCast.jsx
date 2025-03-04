import css from "./MovieCast.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "/src/api/api";

const MovieCast = () => {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then((data) => setMovieCredits(data));
  }, [movieId]);

  return (
    <ul>
      {movieCredits && movieCredits.cast.length > 0 ? (
        movieCredits.cast.map(({ id, name, character, profile_path }) => (
          <li className={css["cast-member-card"]} key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              alt={name}
              width={100}
            />
            <div>
              <p>
                <strong>Actor: </strong>
                {name}
              </p>
              <p>
                <strong>Character: </strong>
                {character}
              </p>
            </div>
          </li>
        ))
      ) : (
        <p>No cast info for this movie.</p>
      )}
    </ul>
  );
};

export default MovieCast;
