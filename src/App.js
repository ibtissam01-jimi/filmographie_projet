/*import React, { useState } from "react";
import moviesData from "./movies.json";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import MovieList from "./components/movieList";
import MovieDetails from "./components/movieDetails";
import SortButtons from "./components/sortButtons";
import Footer from "./components/footer";
import './components/style.css';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = (query) => setSearchQuery(query.toLowerCase());
  const handleSort = (key) => {
    const sortedMovies = [...movies].sort((a, b) => b[key] - a[key]);
    setMovies(sortedMovies);
  };
  const handleFavorite = (movie) => {
    if (!favorites.includes(movie)) setFavorites([...favorites, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery) ||
      movie.genre.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <SortButtons onSort={handleSort} />
      <MovieList
        movies={filteredMovies}
        onMovieClick={setSelectedMovie}
        onFavorite={handleFavorite}
      />
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
      <Footer />
    </div>
  );
}

export default App;*/

import React, { useState } from "react";
import moviesData from "./movies.json";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import MovieList from "./components/movieList";
import MovieDetails from "./components/movieDetails";
import SortButtons from "./components/sortButtons";
import Footer from "./components/footer";
import Pagination from "./components/pagination";
import Favorites from "./components/favorites";
import AddFilmForm from "./components/AddFilmForm";
import './components/style.css';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 5;
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handleSearch = (query) => setSearchQuery(query.toLowerCase());
  const handleSort = (key) => {
    const sortedMovies = [...movies].sort((a, b) => b[key] - a[key]);
    setMovies(sortedMovies);
  };
  const handleFavorite = (movie) => {
    if (!favorites.includes(movie)) setFavorites([...favorites, movie]);
  };

  const handleAddFilm = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery) ||
      movie.genre.toLowerCase().includes(searchQuery)
  );

  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <SortButtons onSort={handleSort} />
      <AddFilmForm onAddFilm={handleAddFilm} />
      <Favorites favorites={favorites} />
      <MovieList
        movies={paginatedMovies}
        onMovieClick={setSelectedMovie}
        onFavorite={handleFavorite}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
      <Footer />
    </div>
  );
}

export default App;
