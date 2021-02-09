import React from "react";

function Results(props) {
  return (
    <div id="results">
      {props.results.map((result) => (
        <div id={"id" + result.id} className="resultsGrid" key={result.id}>
          {result.media_type}
          {": "}
          {result.media_type === "movie" ? result.title : result.name}
        </div>
      ))}
    </div>
  );
}

export default Results;
