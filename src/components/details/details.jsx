import React from "react";

function Details(props) {
  return (
    <div id="details">
      {props.mediaType === "movie" && <div>{props.details.overview}</div>}

      {props.mediaType === "tv" && <div>{props.details.overview}</div>}

      {props.mediaType === "person" && <div>{props.details.biography}</div>}
    </div>
  );
}

export default Details;
