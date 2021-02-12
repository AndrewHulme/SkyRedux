import React, { useState, useEffect } from "react";
import { fetchResults } from "../../fetchRequests/fetchResults.js";

function SearchInput(props) {
  const [displaySuggestions, setDisplaySuggestions] = useState(false);
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      props.onSearch();
    }
  }

  useEffect(() => {
    if (props.search.length >= 5) {
      const fetchSuggestions = async () => {
        setDisplaySuggestions(true);

        const array = await fetchResults(
          props.search,
          setResults,
          props.filterFor
        );

        setSuggestions(array);
      };

      fetchSuggestions();
    } else {
      setDisplaySuggestions(false);
    }
  }, [props.search]);

  return (
    <div>
      <input
        id="searchInput"
        autoFocus
        value={props.search}
        onChange={(e) => props.updateSearch(e.target.value)}
        onKeyPress={handleKeyPress}
      ></input>
      {displaySuggestions && (
        <div id={"searchSuggestions"}>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              id={"suggestionid" + suggestion.id}
              className="suggestionsEntry"
            >
              {suggestion.title !== undefined
                ? suggestion.title
                : suggestion.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
