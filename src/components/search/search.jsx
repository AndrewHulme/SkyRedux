import React from "react";

function Search(props) {
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      props.onSearch();
    }
  }

  return (
    <div>
      <input
        id="searchInput"
        autoFocus
        value={props.search}
        onChange={(e) => props.updateSearch(e.target.value)}
        onKeyPress={handleKeyPress}
      ></input>
      <button id="searchButton" onClick={() => props.onSearch()}>
        Search
      </button>
    </div>
  );
}

export default Search;
