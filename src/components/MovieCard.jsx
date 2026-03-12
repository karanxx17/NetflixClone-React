function MovieCard({ movie }) {
  return (
    <img
      className="moviePoster"
      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      alt={movie.title}
    />
  );
}

export default MovieCard;