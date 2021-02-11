import React, { useState } from "react";

function SearchFilter(props) {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setIsListOpen(!isListOpen)} className="dropbtn">
        {props.filterFor}
      </button>
      {isListOpen && (
        <div id="myDropdown" className="dropdown-content">
          <button
            className="dropButton"
            id="filterAll"
            onClick={() => props.setFilterFor("All")}
          >
            All
          </button>
          <button
            className="dropButton"
            id="filterActors"
            onClick={() => props.setFilterFor("Actors")}
          >
            Actors
          </button>
          <button
            className="dropButton"
            id="filterMovies"
            onClick={() => props.setFilterFor("Movies")}
          >
            Movies
          </button>
          <button
            className="dropButton"
            id="filterTv"
            onClick={() => props.setFilterFor("TV Shows")}
          >
            TV Shows
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchFilter;
