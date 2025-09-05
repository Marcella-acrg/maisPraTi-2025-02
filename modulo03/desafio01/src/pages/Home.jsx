import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const getMovies = async (pageNumber) => {
    setLoading(true);

    try {
      const res = await fetch(
        `${moviesURL}discover/movie?api_key=${apiKey}&page=${pageNumber}`
      );
      const data = await res.json();

      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      getMovies(newPage);
    }
  };

  useEffect(() => {
    getMovies(page);
  }, []);

  return (
    <div className="container">
      <h2 className="title">MOVIES</h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => changePage(page - 1)} disabled={page === 1}>
          <RiArrowLeftDoubleLine />
        </button>
        <span className="page-number">
          Página {page} de {totalPages}
        </span>
        <button onClick={() => changePage(page + 1)} disabled={page === totalPages}>
          <RiArrowRightDoubleLine />
        </button>
      </div>
    </div>
  );
};

export default Home;
