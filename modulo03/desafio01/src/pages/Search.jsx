import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  
  
  const getSearchedMovies = async (pageNumber) => {
    if(!query) return;

    setLoading(true);

    try {
      const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}&page=${pageNumber}`;

      const res = await fetch(searchWithQueryURL);
      const data = await res.json();
    
      setMovies(data.results || []);
      setTotalPages(data.total_pages || 1);      
    } catch (error) {
      console.log(error);  
    }

    setLoading(false);
  };

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    getSearchedMovies(page);
  }, [query, page]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>

      {loading && <p>Carregando...</p>}
      {!loading && movies.length === 0 && <p>Nenhum resultado encontrado.</p>}

      <div className="movies-container">
        {movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
      </div>

      {movies.length > 0 && (
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
      )}

    </div>
  );
};

export default Search;