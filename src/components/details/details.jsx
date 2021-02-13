import React, { useState, useEffect } from "react";
import { fetchCredits } from "../../fetchRequests/fetchCredits.js";

function Details(props) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchCredits(props.mediaType, props.id, setCredits);
  }, [props.mediaType, props.id]);

  return (
    <div id="details">
      <div id={props.mediaType === "person" ? "personDetails" : "showDetails"}>
        <h2>Overview</h2>
        <div>
          {props.mediaType === "person"
            ? props.details.biography
            : props.details.overview}
        </div>
        <br />
        <div id="credits">
          <h2>Credits</h2>
          <table>
            <tbody>
              {props.mediaType === "person" ? (
                <tr>
                  <th>Media Type</th>
                  <th>Media Title</th>
                </tr>
              ) : (
                <tr>
                  <th>Real Name</th>
                  <th>Character Name</th>
                </tr>
              )}

              {credits.map((credit, key) => (
                <tr
                  key={key}
                  id={"id" + credit.id}
                  onClick={() =>
                    props.onDetails({
                      media_type: credit.media_type,
                      id: credit.id,
                    })
                  }
                >
                  {props.mediaType === "person" && <td>{credit.media_type}</td>}
                  {props.mediaType !== "person" && <td>{credit.name}</td>}

                  {props.mediaType !== "person" && <td>{credit.character}</td>}
                  {credit.media_type === "tv" && <td>{credit.name}</td>}
                  {credit.media_type === "movie" && <td>{credit.title}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Details;
