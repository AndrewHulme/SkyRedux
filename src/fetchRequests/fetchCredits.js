const fetchCredits = async (mediaType, id, setCredits) => {
  let credits = "credits";

  if (mediaType === "person") credits = "combined_credits";

  const data = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}/${credits}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  const apiCredits = await data.json();

  console.log("API Credits");
  console.log(apiCredits);

  setCredits(apiCredits.cast);
  return apiCredits.cast;
};

module.exports = { fetchCredits };
