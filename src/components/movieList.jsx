/*import React from "react";
const MovieList =(movies)=>{
    return(
        <div>
            {movies.map((movie)=>(
                <div key={movie}>
                    <h1>{movie.title}</h1>
                    <h2>{movie.genre}</h2>
                    <p>{movie.releaseYear}</p>
                    <h3>{movie.rating}</h3>
                </div>
            ))}

        </div>
    )
}

export default MovieList;*/
const MovieList = ({ movies, onMovieClick, onFavorite }) => (
    <div className="MovieList">
      {movies.map((movie) => (
        <div key={movie.title} onClick={() => onMovieClick(movie)}>
          <h2>{movie.title}</h2>
          <p>{movie.director}</p>
          <p>{movie.releaseYear}</p>
          <p>{movie.genre}</p>
          <p>{movie.rating}</p>
          <button onClick={(e) => {e.stopPropagation(); onFavorite(movie)}}>Favoris</button>
        </div>
      ))}
    </div>
  );
  
  export default MovieList;
  