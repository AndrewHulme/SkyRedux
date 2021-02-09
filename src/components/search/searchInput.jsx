import React from "react";

function SearchInput(props) {
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      props.onSearch();
    }
  }

  return (
    <input
      id="searchInput"
      autoFocus
      value={props.search}
      onChange={(e) => props.updateSearch(e.target.value)}
      onKeyPress={handleKeyPress}
    ></input>
  );
}

export default SearchInput;
