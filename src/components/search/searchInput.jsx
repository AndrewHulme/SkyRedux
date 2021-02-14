import React, { useState, useEffect, useRef } from "react";
import { fetchResults } from "../../fetchRequests/fetchResults.js";

function SearchInput(props) {
  const [displaySuggestions, setDisplaySuggestions] = useState(false);
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const wrapperRef = useRef(null);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;

    if (wrap && !wrap.contains(event.target)) {
      setDisplaySuggestions(false);
    }
  };

  const onSuggestionClick = (type, id) => {
    props.onDetails({
      media_type: type,
      id: id,
    });

    setDisplaySuggestions(false);
  };

  return (
    <div id="searchInputContainer" ref={wrapperRef}>
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
              onClick={() =>
                onSuggestionClick(suggestion.media_type, suggestion.id)
              }
              tabIndex="0"
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
