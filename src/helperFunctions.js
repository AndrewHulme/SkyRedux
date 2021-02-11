function convertName(filter) {
  let filterResults;

  switch (filter) {
    case "All":
      filterResults = "multi";
      break;
    case "Actors":
      filterResults = "person";
      break;
    case "Movies":
      filterResults = "movie";
      break;
    case "TV Shows":
      filterResults = "tv";
  }

  return filterResults;
}

module.exports = { convertName };
