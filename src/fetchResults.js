const fetchResults = async (request, setResults) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${request}`
  );
  const apiResults = await data.json();

  setResults(apiResults.results);
  return apiResults;
};

module.exports = { fetchResults };
