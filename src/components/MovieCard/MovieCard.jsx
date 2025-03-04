import css from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <>
      {movie && (
        <div className={css["movie-card"]}>
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
          </div>
          <div>
            <h1>
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </h1>
            <p className={css["movie-text"]}>
              <strong>Vote average: </strong>
              {movie.vote_average}/10 ({movie.vote_count} votes)
            </p>
            <p className={`${css["movie-text"]} ${css.overview}`}>
              {movie.overview}
            </p>
            <p>
              <strong>Genres:</strong>
            </p>
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
