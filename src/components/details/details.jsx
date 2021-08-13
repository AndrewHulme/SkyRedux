import React, { useEffect } from "react";
import { fetchCredits } from "../../fetchRequests/fetchCredits.js";

import * as actions from "../../actions/index";
import { connect } from "react-redux";

function Details(props) {
  console.log("Andrew Details Props", props);

  // const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchCredits(props.mediaType, props.id, props.setCredits);
  }, [props.mediaType, props.id]);

  return (
    <div id="details">
      <div id={props.mediaType === "person" ? "personDetails" : "showDetails"}>
        <h1 id="detailsTitle">
          {props.details.title !== undefined
            ? props.details.title
            : props.details.name}
        </h1>

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

              {props.credits.map((credit, key) => (
                <tr
                  key={key}
                  id={"id" + credit.id}
                  className="tableRow"
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

const mapStateToProps = (state) => {
  console.log("Andrew Details State", state);

  return {
    credits: state.credits.credits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCredits: (array) => dispatch(actions.setCredits(array)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
