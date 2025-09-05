import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsStarFill,
} from "react-icons/bs";

import { TbChairDirector } from "react-icons/tb";

import MovieCard from "../components/MovieCard";

import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const profileURL = import.meta.env.VITE_PROFILE;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMovie = async (url) => {
    try {
      setLoading(true);
      setError(false);

      const res = await fetch(url);
      if (!res.ok) {
        setError(true);
        setMovie(null);
        return;
      }

      const data = await res.json();
      setMovie(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const getMovieCredits = async (id) => {
    try {
      const res = await fetch(
        `${moviesURL}movie/${id}/credits?api_key=${apiKey}`
      );
      if (!res.ok) return;
      const data = await res.json();
      setCredits(data);
    } catch (err) {
      console.log(err);
    }
  };

  const formatCurrency = (number) => {
    if (!number) return "N/A";
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}movie/${id}?api_key=${apiKey}`;
    getMovie(movieUrl);
    getMovieCredits(id);
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Filme não encontrado ou erro ao carregar os dados.</p>;

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />

          {movie.tagline && <p className="tagline">{movie.tagline}</p>}

          <div className="info-container">
            <div className="info">
              <h3>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>{movie.runtime ? `${movie.runtime} minutos` : "N/A"}</p>
            </div>

            <div className="info">
              <h3>
                <BsStarFill /> Avaliação:
              </h3>
              <p>{movie.vote_average ? `${movie.vote_average}/10` : "N/A"}</p>
            </div>

            <div className="info">
              <h3>
                <TbChairDirector /> Diretor:
              </h3>
              <p>
                {credits.crew.find((c) => c.job === "Director")?.name || "N/A"}
              </p>
            </div>
          

          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Sinopse:
            </h3>
            <p>{movie.overview || "N/A"}</p>
          </div>
          </div>

          <div className="cast-section">
            <h3>ALGUNS ATORES E ATRIZES QUE INTEGRAM O ELENCO:</h3>
            <div className="cast-list">
              {credits.cast.length > 0 ? (
                credits.cast.slice(0, 10).map((actor) => (
                  <div key={actor.id} className="actor">
                    <img
                      src={
                        actor.profile_path
                          ? `${profileURL}${actor.profile_path}`
                          : "/fallback-profile.png" 
                      }
                      alt={actor.name}
                    />
                    <p className="actor-name">{actor.name}</p>
                    <p className="character-name">{actor.character}</p>
                  </div>
                ))
              ) : (
                <p>N/A</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
