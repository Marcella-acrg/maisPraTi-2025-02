import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favMovies = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favMovies);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container">
      <h2 className="title">Meus Filmes Favoritos</h2>

      {favorites.length === 0 ? (
        <p className="no-favorites">
          Você ainda não adicionou nenhum filme aos favoritos.
        </p>
      ) : (
        <div className="movies-container">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              showLink={true}
              onRemove={() => removeFavorite(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
