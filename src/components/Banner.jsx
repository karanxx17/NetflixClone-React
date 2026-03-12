import { useEffect, useState } from "react";
import { fetchTrending } from "../services/api";

function Banner() {

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchTrending().then((response) => {
      const movies = response.data.results;
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    });
  }, []);

  if (!movie) return null;

  return (
    <header
      style={{
        height: "500px",
        color: "white",
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >

      <div style={{ paddingTop: "200px", paddingLeft: "30px" }}>

        <h1 style={{ fontSize: "50px" }}>
          {movie.title || movie.name}
        </h1>

        <div style={{ marginTop: "20px" }}>
          <button style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "white",
            border: "none",
            cursor: "pointer"
          }}>
            ▶ Play
          </button>

          <button style={{
            padding: "10px 20px",
            backgroundColor: "gray",
            border: "none",
            cursor: "pointer"
          }}>
            My List
          </button>
        </div>

        <p style={{
          width:"90%",
          maxWidth:"500px"
        }}>
          {movie.overview}
        </p>

      </div>

    </header>
  );
}

export default Banner;