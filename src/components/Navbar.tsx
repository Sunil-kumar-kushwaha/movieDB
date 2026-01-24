

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="movie-navbar">
      {/* Left Logo */}
      <div className="movie-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> Movie<span>DB</span> </Link>
      </div>

      {/* Center Tabs */}
      <div className="movie-tabs">
        <button className="movie-tab active"><Link to="/">Home</Link> </button>
        <button className="movie-tab"><Link to="/favorites"> Favorites</Link></button>
        <div className="movie-search">
          <Link to="/search"> 🔍 </Link>
        </div>
      </div>

      {/* Right Profile */}
      <div className="movie-profile">
        <span className="movie-bell">🔔</span>
        <img
          className="movie-avatar"
          src="https://img.icons8.com/?size=100&id=103539&format=png&color=000000"
          alt="User"
        />
        <div className="movie-user">
          Sunil Kushwaha <span>Premium</span>
        </div>
      </div>
    </nav>
  );
}

