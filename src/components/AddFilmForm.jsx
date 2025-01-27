import React, { useState } from "react";

const AddFilmForm = ({ onAddFilm }) => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    releaseYear: "",
    genre: "Crime",
    rating: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, director, releaseYear, genre, rating } = formData;

    // Validation des champs
    if (!title || !director || !releaseYear || !genre || !rating) {
      setError("Tous les champs sont obligatoires !");
      return;
    }

    if (isNaN(releaseYear) || releaseYear <= 0) {
      setError("L'année de sortie doit être un nombre valide !");
      return;
    }

    if (isNaN(rating) || rating < 0 || rating > 10) {
      setError("La note doit être un nombre entre 0 et 10 !");
      return;
    }

    // Ajouter le film
    onAddFilm({
      title,
      director,
      releaseYear: Number(releaseYear),
      genre,
      rating: Number(rating),
    });

    // Réinitialiser le formulaire
    setFormData({
      title: "",
      director: "",
      releaseYear: "",
      genre: "Crime",
      rating: "",
    });
    setError("");
  };

  const handleReset = () => {
    setFormData({
      title: "",
      director: "",
      releaseYear: "",
      genre: "Crime",
      rating: "",
    });
    setError("");
  };

  return (
    <div className="AddFilmForm">
      <h2>Ajouter un Film</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre :</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Réalisateur :</label>
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Année de sortie :</label>
          <input
            type="number"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Genre :</label>
          <select name="genre" value={formData.genre} onChange={handleChange}>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <div>
          <label>Note :</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="10"
          />
        </div>
        <button type="submit">Ajouter</button>
        <button type="button" onClick={handleReset}>
          Réinitialiser
        </button>
      </form>
    </div>
  );
};

export default AddFilmForm;
