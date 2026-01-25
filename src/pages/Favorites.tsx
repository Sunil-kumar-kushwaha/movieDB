
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavorites, removeFavorite } from "../utils/favorites";
// import Navbar from "../components/Navbar";

export default function Favorites() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    setMovies(getFavorites());
  }, []);

  const remove = (id:number) => {
    removeFavorite(id);
    setMovies(getFavorites());
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="grid">
      {movies.map((m:any) => (
        <div key={m.id} className="card">
          <Link to={`/movie/${m.id}`}>  <img width="100%" src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} /> </Link>
          <div style={{ padding: 8 }}>
            <p style={{fontSize: 12}}>{m.title}</p>
            <button onClick={() => remove(m.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
