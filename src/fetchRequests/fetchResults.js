let helperFunctions = require("../helperFunctions.js");

const fetchResults = async (request, setResults, filter = "All") => {
  const filterResults = helperFunctions.convertName(filter);

  const data = await fetch(
    `https://api.themoviedb.org/3/search/${filterResults}?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${request}`
  );
  const apiResults = await data.json();
  let resultsArray = apiResults.results || [];

  // console.log(apiResults);

  if (filter !== "All") {
    resultsArray = resultsArray.map((result) => ({
      ...result,
      media_type: filterResults,
    }));
  }

  // console.log("API Results");
  // console.log(resultsArray);

  setResults(resultsArray);
  return resultsArray;
};

module.exports = { fetchResults };
