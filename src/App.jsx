import React, { useState } from "react";
import Search from "./components/search/search.jsx";
import Results from "./components/results/results.jsx";
import { fetchResults } from "./fetchResults.js";

function App() {
  const [search, updateSearch] = useState("");
  const [results, setResults] = useState([]);

  function onSearch() {
    console.log("Called!");
    console.log(search);
    fetchResults(search, setResults);
  }

  return (
    <div>
      <Search search={search} onSearch={onSearch} updateSearch={updateSearch} />
      <Results results={results} />
    </div>
  );
}

export default App;
