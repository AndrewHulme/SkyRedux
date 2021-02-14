import React from "react";

function SearchFilter(props) {
  return (
    <select name="filter" id="filterSelect">
      <option
        id="filterAll"
        value="filterAll"
        onClick={() => props.setFilterFor("All")}
      >
        All
      </option>
      <option
        id="filterActors"
        value="filterActors"
        onClick={() => props.setFilterFor("Actors")}
      >
        Actors
      </option>
      <option
        id="filterMovies"
        value="filterMovies"
        onClick={() => props.setFilterFor("Movies")}
      >
        Movies
      </option>
      <option
        id="filterTv"
        value="filterTv"
        onClick={() => props.setFilterFor("TV Shows")}
      >
        TV Shows
      </option>
    </select>
  );
}

export default SearchFilter;
