import React from "react";
const Favorites = ({ favorites }) => (
    <div className="Favorites">
      <h2>Films Favoris</h2>
      {favorites.length === 0 ? (
        <p>Aucun film ajouté aux favoris.</p>
      ) : (
        <ul>
          {favorites.map((movie) => (
            <li key={movie.title}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
  
  export default Favorites;
  