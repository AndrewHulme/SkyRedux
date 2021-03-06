let helperFunctions = require("../helperFunctions.js");

const fetchResults = async (request, filter = "All") => {
  const filterResults = helperFunctions.convertName(filter);

  const data = await fetch(
    `https://api.themoviedb.org/3/search/${filterResults}?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${request}`
  );
  const apiResults = await data.json();
  let resultsArray = apiResults.results || [];

  if (filter !== "All") {
    resultsArray = resultsArray.map((result) => ({
      ...result,
      media_type: filterResults,
    }));
  }

  // setResults(resultsArray);
  return resultsArray;
};

module.exports = { fetchResults };
