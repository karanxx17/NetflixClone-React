import { useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "./MovieCard";

function Search() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      searchMovies(value).then((response) => {
        setResults(response.data.results);
      });
    } else {
      setResults([]);
    }
  };

  return (
    <div style={{padding:"20px"}}>

      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleSearch}
        style={{
          padding:"10px",
          width:"300px",
          marginBottom:"20px"
        }}
      />

      <div className="row">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>

    </div>
  );
}

export default Search;