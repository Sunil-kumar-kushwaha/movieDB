

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";



export default function Navbar() {
  const [navState, setNavState] = useState("home");
  const navigate = useNavigate();

  const navigateHome = () => {
    setNavState("home");
    navigate("/");
  }
  const navigateFavorites = () => {
    setNavState("fav");
    navigate("/favorites");
  }
  const navigateSearch = () => {
    setNavState("search");
    navigate("/search");
  }

  const { user, logout } = useAuth();
  // console.log(user)
  return (
    <nav className="movie-navbar">
      
      <div className="movie-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> Movie<span>DB</span> </Link>
      </div>

     
      {
        user && (
          <div className="movie-tabs">
            <button className={`movie-tab ${navState == 'home' ? "active" : ""}`} onClick={navigateHome}>Home </button>
            <button className={`movie-tab ${navState == 'fav' ? "active" : ""}`} onClick={navigateFavorites}>Favorites </button>
            <div className={`movie-search ${navState == 'search' ? "active" : ""}`} onClick={navigateSearch}> 🔍 </div>
          </div>
        )
      }

      

      <div className="movie-profile">
        <div className="movie-user">
          {user?.email ? (<div > <h2 style={{ display: 'inline-block', margin: '0px 4px' }}>{user.email.split("@")[0].toUpperCase()}</h2> <button onClick={logout}>Logout</button> </div>) : (<button>Login/Register</button>)}
        </div>
      </div>
    </nav>
  );
}

