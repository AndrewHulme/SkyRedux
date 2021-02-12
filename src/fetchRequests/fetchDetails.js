const fetchDetails = async (mediaType, id, setDetails) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  const apiDetails = await data.json();

  setDetails(apiDetails);
  return apiDetails;
};

module.exports = { fetchDetails };
