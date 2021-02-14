import React from "react";
import SearchInput from "./searchInput.jsx";
import SearchButton from "./searchButton.jsx";
import SearchFilter from "./searchFilter.jsx";

function Search(props) {
  return (
    <div className="search">
      <SearchInput
        search={props.search}
        onSearch={props.onSearch}
        updateSearch={props.updateSearch}
        filterFor={props.filterFor}
        onDetails={props.onDetails}
      />
      <SearchButton onSearch={props.onSearch} />
      <SearchFilter setFilterFor={props.setFilterFor} />
    </div>
  );
}

export default Search;
