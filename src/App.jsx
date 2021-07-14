import React, { useState, useRef } from "react";
import Search from "./components/search/search.jsx";
import Results from "./components/results/results.jsx";
import Details from "./components/details/details.jsx";
import { fetchResults } from "./fetchRequests/fetchResults.js";
import { fetchDetails } from "./fetchRequests/fetchDetails.js";

import * as actions from "./actions/index";
import { connect } from "react-redux";

import "./styles/custom.css";

function App(props) {
  console.log("Andrew App Props", props);

  const [search, updateSearch] = useState("");
  const [results, setResults] = useState([]);
  const [details, setDetails] = useState({});

  // const [page, setPage] = useState("");

  const mediaType = useRef("");
  const [id, setId] = useState("");
  const [filterFor, setFilterFor] = useState("All");

  function onSearch() {
    // setPage("results");

    props.changePageResults();
    fetchResults(search, setResults, filterFor);
  }

  function onDetails(item) {
    // setPage("details");

    props.changePageDetails();
    setId(item.id);

    mediaType.current = item.media_type;
    fetchDetails(mediaType.current, item.id, setDetails);
  }

  return (
    <div>
      <Search
        search={search}
        onSearch={onSearch}
        updateSearch={updateSearch}
        filterFor={filterFor}
        setFilterFor={setFilterFor}
        onDetails={onDetails}
      />

      {props.page === "results" && (
        <Results
          results={results}
          onDetails={onDetails}
          filterFor={filterFor}
        />
      )}

      {props.page === "details" && (
        <Details
          details={details}
          mediaType={mediaType.current}
          id={id}
          onDetails={onDetails}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("Andrew State", state.page.page);

  return {
    page: state.page.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePageResults: () => dispatch(actions.changePageResults()),
    changePageDetails: () => dispatch(actions.changePageDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
