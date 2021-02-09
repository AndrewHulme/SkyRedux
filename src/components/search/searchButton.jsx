import React from "react";

function SearchButton(props) {
  return (
    <button id="searchButton" onClick={() => props.onSearch()}>
      Search
    </button>
  );
}

export default SearchButton;
