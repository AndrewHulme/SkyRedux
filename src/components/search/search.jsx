import React from "react";

function Search(props) {
  return (
    <div>
      <input
        id="searchInput"
        autoFocus
        onChange={(e) => props.updateSearch(e.target.value)}
      ></input>
      <button id="searchButton" onClick={() => props.onSearch()}>
        Search
      </button>
    </div>
  );
}

export default Search;
