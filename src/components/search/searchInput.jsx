import React, { useEffect, useRef } from "react";
import { fetchResults } from "../../fetchRequests/fetchResults.js";

import * as actions from "../../actions/index";
import { connect } from "react-redux";

function SearchInput(props) {
  console.log("Andrew SearchInput Props", props);

  // const [displaySuggestions, setDisplaySuggestions] = useState(false);
  // const [results, setResults] = useState([]);
  // const [suggestions, setSuggestions] = useState([]);
  const wrapperRef = useRef(null);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      props.onSearch();
      props.setDisplaySuggestions(false);
    }
  }

  useEffect(() => {
    if (props.search.length >= 5) {
      const fetchSuggestions = async () => {
        props.setDisplaySuggestions(true);

        const array = await fetchResults(props.search, props.filterFor);

        props.setSuggestions(array);
      };

      fetchSuggestions();
    } else {
      props.setDisplaySuggestions(false);
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
      props.setDisplaySuggestions(false);
    }
  };

  const onSuggestionClick = (type, id) => {
    props.onDetails({
      media_type: type,
      id: id,
    });

    props.setDisplaySuggestions(false);
  };

  return (
    <div id="searchInputContainer" ref={wrapperRef}>
      <input
        id="searchInput"
        autoFocus
        value={props.search}
        placeholder="Search for Actors, Movies or TV Shows"
        onChange={(e) => props.updateSearch(e.target.value)}
        onKeyPress={handleKeyPress}
      ></input>
      {props.displaySuggestions && (
        <div id={"searchSuggestions"}>
          {props.suggestions.map((suggestion, index) => (
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

const mapStateToProps = (state) => {
  console.log("Andrew searchInput State", state);

  return {
    displaySuggestions: state.displaySuggestions.displaySuggestions,
    suggestions: state.suggestions.suggestions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDisplaySuggestions: (boolean) =>
      dispatch(actions.setDisplaySuggestions(boolean)),
    setSuggestions: (array) => dispatch(actions.setSuggestions(array)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
