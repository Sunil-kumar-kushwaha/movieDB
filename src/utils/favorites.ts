
export const getFavorites = () =>
  JSON.parse(localStorage.getItem("favorites") || "[]");

export const saveFavorite = (movie: any) => {
  const favs = getFavorites();
  if (!favs.find((m: any) => m.id === movie.id)) {
    favs.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favs));
  }
};

export const removeFavorite = (id: number) => {
  const favs = getFavorites().filter((m: any) => m.id !== id);
  localStorage.setItem("favorites", JSON.stringify(favs));
};
