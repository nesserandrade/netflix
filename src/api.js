const API_KEY = "52a5b7befc9daa12f5e1cbe296d3c9ee";
const API_DNS = "http://localhost:8080/projetonetflix/api";

export const categories = [
  {
    name: "trending",
    title: "Em Alta",
    path: "/trending/all/week?api_key=" + API_KEY + "&language=pt-BR",
    isLarge: true,
  },
  {
    name: "netflixOriginals",
    title: "Originais Netflix",
    path: "/discover/tv?api_key=" + API_KEY + "&with_networks=213",
    isLarge: false,
  },
  {
    name: "topRated",
    title: "Populares",
    path: "/movie/top_rated?api_key=" + API_KEY + "&language=pt-BR",
    isLarge: false,
  },
  {
    name: "comedy",
    title: "Comédias",
    path: "/discover/tv?api_key=" + API_KEY + "&with_genres=35",
    isLarge: false,
  },
  {
    name: "romances",
    title: "Romances",
    path: "/discover/tv?api_key=" + API_KEY + "&with_genres=10749",
    isLarge: false,
  },
];

export const getMovies = async (path) => {
  try {
    let se = sessionStorage.getItem("sessionID");
    let idade = sessionStorage.getItem("idade");

    const response = await fetch(API_DNS, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        path: path,
        sessionID: se,
        idade: idade,
      }),
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
};
