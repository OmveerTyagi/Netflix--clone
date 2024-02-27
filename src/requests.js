const API_KEY ="d337e9e6ca7314bb4811a827e8c5aad3";
const requests = {
     
     fetchTrending: "/discover/movie/top_rated?api_key=d337e9e6ca7314bb4811a827e8c5aad3",
     fetchNetflixOriginals: "/discover/movie?api_key=d337e9e6ca7314bb4811a827e8c5aad3",
      fetchTopRated:  "/movie/top_rated?api_key=d337e9e6ca7314bb4811a827e8c5aad3",
      fetchActionMovies: "/discover/movie?api_key=d337e9e6ca7314bb4811a827e8c5aad3&with_genres=28", 
      fetchComedyMovies: "/discover/movie?api_key=d337e9e6ca7314bb4811a827e8c5aad3&with_genres=35", 
      fetchHorrorMovies: "/discover/movie?api_key=d337e9e6ca7314bb4811a827e8c5aad3&with_genres=27", 
      fetchRomanceMovies: "/discover/movie?api_key=d337e9e6ca7314bb4811a827e8c5aad3&with_genres=10749",
       fetchDocumentaries:"/discover/movie?api_key=d337e9e6ca7314bb4811a827e8c5aad3&with_genres=99",
}

export default requests;