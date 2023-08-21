const key = '88255e864c7a6feda0ae65d05f3b507d'

const requests = {
    requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`
};

export default requests;