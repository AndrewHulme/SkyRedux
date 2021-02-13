import React, { useState, useEffect } from "react";
import { fetchCredits } from "../../fetchRequests/fetchCredits.js";

function Details(props) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchCredits(props.mediaType, props.id, setCredits);
  }, [props.mediaType, props.id]);

  return (
    <div id="details">
      {(props.mediaType === "movie" || props.mediaType === "tv") && (
        <div id="showDetails">
          <h2>Overview</h2>
          <div>{props.details.overview}</div>
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
          <h2>Overview</h2>
          <div>{props.details.biography}</div>
          <br />
          <div id="credits">
            <h2>Credits</h2>
            <table>
              <tbody>
                <tr>
                  <th>Media Type</th>
                  <th>Media Title</th>
                </tr>
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
                    <td>{credit.media_type}</td>
                    <td>
                      {credit.media_type === "tv" ? credit.name : credit.title}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
