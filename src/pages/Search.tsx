
import React, { useState } from "react";
import { searchMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";
// import Navbar from "../components/Navbar"


export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);

  const search = async () => {
    const res = await searchMovies(query);
    setMovies(res.data.results);
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="search-page">

        <div className="search-bar">
          <input
            placeholder="Search movies, shows..."
            onChange={(e) => {
              setQuery(e.target.value);
              search();
            }}
          />
          <button onClick={search}>Search</button>
        </div>

        <div className="grid">
          {movies.map((m: any) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </div>
    </div>


  );
}
