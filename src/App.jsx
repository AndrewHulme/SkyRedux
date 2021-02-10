import React, { useState } from "react";
import Search from "./components/search/search.jsx";
import Results from "./components/results/results.jsx";
import Details from "./components/details/details.jsx";
import { fetchResults } from "./fetchResults.js";
import { fetchDetails } from "./fetchDetails.js";

function App() {
  const [search, updateSearch] = useState("");
  const [results, setResults] = useState([]);
  const [details, setDetails] = useState({});
  const [page, setPage] = useState("");
  const [mediaType, setMediaType] = useState("");

  function onSearch() {
    console.log("Called!");
    console.log(search);
    setPage("results");
    fetchResults(search, setResults);
  }

  function onDetails(item) {
    setPage("details");
    console.log("Details");
    console.log(item);
    console.log(item.id);
    setMediaType(item.media_type);
    fetchDetails(item.media_type, item.id, setDetails);
  }

  return (
    <div>
      <Search search={search} onSearch={onSearch} updateSearch={updateSearch} />

      {page === "results" && (
        <Results results={results} onDetails={onDetails} />
      )}

      {page === "details" && (
        <Details details={details} mediaType={mediaType} />
      )}
    </div>
  );
}

export default App;
