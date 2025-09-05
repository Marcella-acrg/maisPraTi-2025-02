import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BiSearchAlt2 } from 'react-icons/bi'
import { SiThemoviedatabase } from "react-icons/si";


import './Navbar.css'

const Navbar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);

    if(!search) return;

    navigate(`/search?q=${search}`);
    setSearch("")
  };


  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <SiThemoviedatabase />
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquisar filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>

      <Link to="/favorites" className="favorites-link">
        Meus Favoritos
      </Link>
    </nav>
  );
}

export default Navbar