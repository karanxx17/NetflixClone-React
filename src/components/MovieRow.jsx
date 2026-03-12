import { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import YouTube from "react-youtube";
import { fetchMovieVideos } from "../services/api";
import MovieModal from "./MovieModal";

function MovieRow({ title, fetchMovies }) {

  const [movies, setMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const rowRef = useRef(null);

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

const scrollLeft = () => {
  if (rowRef.current) {
    rowRef.current.scrollLeft -= 500;
  }
};

const scrollRight = () => {
  if (rowRef.current) {
    rowRef.current.scrollLeft += 500;
  }
};

  return (
    <div className="movie-row">

      <h2>{title}</h2>

      <div className="movie-row-container">

        <button className="scroll-btn left" onClick={scrollLeft}>
          ❮
        </button>

        <div className="row" ref={rowRef}>

          {movies.length === 0
            ? Array(6)
                .fill()
                .map((_, i) => (
                  <Skeleton key={i} height={200} width={130}/>
                ))
            : movies.map((movie) => (
                <div key={movie.id} onClick={() => handlePosterClick(movie)}>
                  <MovieCard movie={movie}/>
                </div>
              ))
          }

        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          ❯
        </button>

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

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

    </div>
  );
}

export default MovieRow;
