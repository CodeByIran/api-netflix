import React, { useEffect } from "react";
import { getPopularMovies, getMovieDetails } from "./services/movieService";

function App() {
  useEffect(() => {
    async function fetchData() {
      const populares = await getPopularMovies();
      console.log("Filmes Populares:", populares);

      if (populares.length > 0) {
        const detalhes = await getMovieDetails(populares[0].id);
        console.log("Detalhes do primeiro filme:", detalhes);
      }
    }
    fetchData();
  }, []);

  return <h1>API Netflix Clone conectada ✅ (confira o console)</h1>;
}

export default App;
