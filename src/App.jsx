import React, { useState, useRef } from "react";
import Search from "./components/search/search.jsx";
import Results from "./components/results/results.jsx";
import Details from "./components/details/details.jsx";
import { fetchResults } from "./fetchRequests/fetchResults.js";
import { fetchDetails } from "./fetchRequests/fetchDetails.js";

import "./styles/custom.css";

function App() {
  const [search, updateSearch] = useState("");
  const [results, setResults] = useState([]);
  const [details, setDetails] = useState({});

  const [page, setPage] = useState("");

  const mediaType = useRef("");
  const [id, setId] = useState("");
  const [filterFor, setFilterFor] = useState("All");

  function onSearch() {
    console.log("Called!");
    console.log(search);
    setPage("results");
    fetchResults(search, setResults, filterFor);
  }

  function onDetails(item) {
    setPage("details");
    console.log("Details");
    console.log(item);
    console.log(item.id);
    setId(item.id);

    mediaType.current = item.media_type;
    fetchDetails(mediaType.current, item.id, setDetails);
  }

  return (
    <div>
      <Search
        search={search}
        onSearch={onSearch}
        updateSearch={updateSearch}
        filterFor={filterFor}
        setFilterFor={setFilterFor}
      />

      {page === "results" && (
        <Results
          results={results}
          onDetails={onDetails}
          filterFor={filterFor}
        />
      )}

      {page === "details" && (
        <Details
          details={details}
          mediaType={mediaType.current}
          id={id}
          onDetails={onDetails}
        />
      )}
    </div>
  );
}

export default App;
