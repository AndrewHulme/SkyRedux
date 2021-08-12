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

  // const [search, updateSearch] = useState("");
  // const [results, setResults] = useState([]);
  const [details, setDetails] = useState({});

  // const [page, setPage] = useState("");

  const mediaType = useRef("");
  // const [id, setId] = useState("");
  const [filterFor, setFilterFor] = useState("All");

  function onSearch() {
    // setPage("results");

    props.changePageResults();
    fetchResults(props.search, props.setResults, filterFor);
  }

  function onDetails(item) {
    // setPage("details");

    props.changePageDetails();
    props.setId(item.id);

    mediaType.current = item.media_type;
    fetchDetails(mediaType.current, item.id, setDetails);
  }

  return (
    <div>
      <Search
        search={props.search}
        onSearch={onSearch}
        updateSearch={props.updateSearch}
        filterFor={filterFor}
        setFilterFor={setFilterFor}
        onDetails={onDetails}
      />

      {props.page === "results" && (
        <Results
          results={props.results}
          onDetails={onDetails}
          filterFor={filterFor}
        />
      )}

      {props.page === "details" && (
        <Details
          details={details}
          mediaType={mediaType.current}
          id={props.id}
          onDetails={onDetails}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("Andrew State", state);

  return {
    page: state.page.page,
    search: state.search.search,
    id: state.id.id,
    results: state.results.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePageResults: () => dispatch(actions.changePageResults()),
    changePageDetails: () => dispatch(actions.changePageDetails()),
    updateSearch: (string) => dispatch(actions.updateSearch(string)),
    setId: (string) => dispatch(actions.updateId(string)),
    setResults: (array) => dispatch(actions.setResults(array)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
