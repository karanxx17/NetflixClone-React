function MovieCard({ movie }) {

  const imageBase = "https://image.tmdb.org/t/p/w300";

  return (
    <div className="movie-card-container">

      <img
        className="movie-card"
        src={`${imageBase}${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="movie-info">

        <h4>{movie.title || movie.name}</h4>

        <p>
          ⭐ {movie.vote_average} | {movie.release_date?.split("-")[0]}
        </p>

      </div>

    </div>
  );
}

export default MovieCard;