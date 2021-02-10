import React, { useState, useEffect } from "react";
import { fetchCredits } from "../../fetchRequests/fetchCredits.js";

function Details(props) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchCredits(props.mediaType, props.id, setCredits);
  }, []);

  return (
    <div id="details">
      {(props.mediaType === "movie" || props.mediaType === "tv") && (
        <div id="showDetails">
          <div>Overview: {props.details.overview}</div>
          <br />
          <div id="credits">
            {credits.map(
              (credit) =>
                `Real Name: ${credit.name} - Character Name: ${credit.character}`
            )}
          </div>
        </div>
      )}

      {props.mediaType === "person" && (
        <div id="personDetails">
          <div>Overview: {props.details.biography}</div>
          <br />
          <div id="credits">
            {credits.map((credit) => {
              if (credit.media_type === "tv") {
                return `${credit.media_type} - ${credit.name}`;
              } else {
                return `${credit.media_type} - ${credit.title}`;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
