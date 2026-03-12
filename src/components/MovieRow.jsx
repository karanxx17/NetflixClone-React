import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import YouTube from "react-youtube";
import { fetchMovieVideos } from "../services/api";
import MovieModal from "./MovieModal";

function MovieRow({ title, fetchMovies }) {

  const [movies, setMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies().then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchMovies]);

  const handlePosterClick = (movie) => {
  setSelectedMovie(movie);

  fetchMovieVideos(movie.id).then((response) => {
    const videos = response.data.results;
    const trailer = videos.find(video => video.type === "Trailer");

    if (trailer) {
      setTrailerKey(trailer.key);
    }
  });
};

  return (
    <div>
      <h2>{title}</h2>

      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => handlePosterClick(movie)}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      {trailerKey && (
        <YouTube
          videoId={trailerKey}
          opts={{
            width: "100%",
            height: "400",
            playerVars: { autoplay: 1 }
          }}
        />
      )}
        <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        />
    </div>
  );
}

export default MovieRow;

