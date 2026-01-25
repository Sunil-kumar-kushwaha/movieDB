
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovie } from "../api/tmdb";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    getMovie(id!).then(res => setMovie(res.data));
  }, []);

  if (!movie) return null;

  const trailer = movie.videos?.results?.find((v: any) => v.type === "Trailer");

  return (
    <div style={{ padding: 20 }}>
      {trailer && (
        <iframe width="100%" height="420" src={`https://www.youtube.com/embed/${trailer.key}`} />
      )}
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Release: {movie.release_date}</p>

      <h3>Cast</h3>
      <div style={{ display: "flex", gap: 10, margin: '16px 4px', overflowX: "auto" }}>
        {movie.credits?.cast?.slice(0, 10).map((c: any) => (
          <div key={c.id}>{c.name}</div>
        ))}
      </div>
    </div>
  );
}
