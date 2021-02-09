import React from "react";
import SearchInput from "./searchInput.jsx";
import SearchButton from "./searchButton.jsx";

function Search(props) {
  return (
    <div>
      <SearchInput
        search={props.search}
        onSearch={props.onSearch}
        updateSearch={props.updateSearch}
      />
      <SearchButton onSearch={props.onSearch} />
    </div>
  );
}

export default Search;
