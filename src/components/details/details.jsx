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
            <h2>Credits</h2>
            <table>
              <tbody>
                <tr>
                  <th>Real Name</th>
                  <th>Character Name</th>
                </tr>
                {credits.map((credit, key) => (
                  <tr key={key}>
                    <td>{credit.name}</td>
                    <td>{credit.character}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {props.mediaType === "person" && (
        <div id="personDetails">
          <div>Overview: {props.details.biography}</div>
          <br />
          <div id="credits">
            <h2>Credits</h2>
            <table>
              <tbody>
                <tr>
                  <th>Media Type</th>
                  <th>Media Title</th>
                </tr>
                {credits.map((credit, key) => {
                  if (credit.media_type === "tv") {
                    return (
                      <tr key={key}>
                        <td>{credit.media_type}</td>
                        <td>{credit.name}</td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr key={key}>
                        <td>{credit.media_type}</td>
                        <td>{credit.title}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
