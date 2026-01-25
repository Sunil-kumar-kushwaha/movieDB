
import React, { useEffect, useState } from "react";
import { getCategory } from "../api/tmdb";
import MovieCard from "../components/MovieCard";
// import Navbar from "../components/Navbar"


const categories = ["popular", "now_playing", "upcoming", "top_rated"];

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [cat, setCat] = useState("popular");

  useEffect(() => {
    getCategory(cat).then(res => setMovies(res.data.results));
  }, [cat]);

  return (
    <div>
      {/* <Navbar /> */}
      <div style={{ padding: 20 }}>
        {categories.map(c => (
          <button key={c} onClick={() => setCat(c)} style={{ marginRight: 8, borderRadius: 12}}>
            {c.replace("_"," ").toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid">
        {movies.map((m:any) => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
}
