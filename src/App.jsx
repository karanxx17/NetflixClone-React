import "./styles/netflix.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import Search from "./components/Search";


import {
  fetchTrending,
  fetchPopular,
  fetchTopRated,
  fetchUpcoming
} from "./services/api";

function App() {
  return (
    <div style={{marginTop:"80px"}}>
      <Navbar />
      <Banner />
      <Search />

      <MovieRow title="Trending Now" fetchMovies={fetchTrending}/>
      <MovieRow title="Popular" fetchMovies={fetchPopular}/>
      <MovieRow title="Top Rated" fetchMovies={fetchTopRated}/>
      <MovieRow title="Upcoming" fetchMovies={fetchUpcoming}/>

    </div>
  );
}

export default App;
