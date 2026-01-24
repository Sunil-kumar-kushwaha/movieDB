
import React from "react";
import { Link } from "react-router-dom";
import { saveFavorite } from "../utils/favorites";

export default function MovieCard({ movie }: any) {
  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`}>
        <img width="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </Link>
      <div style={{ padding: 8 }}>
        <p style={{fontSize: 12}}>{movie.title}</p>
        <button onClick={() => saveFavorite(movie)} style={{fontSize: 12}}>❤️ Add to favorites</button>
      </div>
    </div>
  );
}
