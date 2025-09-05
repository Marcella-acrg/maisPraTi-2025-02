import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { FaStar, FaHeart } from "react-icons/fa";

import "./MovieCard.css";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true, onRemove }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((fav) => fav.id === movie.id));
  }, [movie.id]); 

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updateFavorites;

    if (isFavorite) {
      updateFavorites = favorites.filter((fav) => fav.id !== movie.id);
      localStorage.setItem("favorites", JSON.stringify(updateFavorites));
      setIsFavorite(false);

      if (onRemove) onRemove();
    } else {
      updateFavorites = [...favorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updateFavorites));
      setIsFavorite(true);
    }
  };

  return (
    <div className="movie-card">
      <div className="image-container">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />

        <button onClick={toggleFavorite} className="favorite-btn">
          <FaHeart color={isFavorite ? "red" : "gray"} />
        </button>
      </div>

      <h2>{movie.title}</h2>
      <p className="rating">
        <FaStar /> {movie.vote_average}
      </p>

      <p>
        Lançado em:{movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
      </p>

      {showLink && <Link to={`/movie/${movie.id}`}> Detalhes </Link>}
    </div>
  );
};

export default MovieCard;


