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
  // const [details, setDetails] = useState({});
  // const [page, setPage] = useState("");

  const mediaType = useRef("");
  // const [id, setId] = useState("");
  // const [filterFor, setFilterFor] = useState("All");

  function onSearch() {
    // setPage("results");

    props.changePageResults();
    fetchResults(props.search, props.setResults, props.filter);
  }

  function onDetails(item) {
    // setPage("details");

    props.changePageDetails();
    props.setId(item.id);

    mediaType.current = item.media_type;
    fetchDetails(mediaType.current, item.id, props.setDetails);
  }

  return (
    <div>
      <Search
        search={props.search}
        onSearch={onSearch}
        updateSearch={props.updateSearch}
        filterFor={props.filter}
        setFilterFor={props.setFilter}
        onDetails={onDetails}
      />

      {props.page === "results" && (
        <Results
          results={props.results}
          onDetails={onDetails}
          filterFor={props.filter}
        />
      )}

      {props.page === "details" && (
        <Details
          details={props.details}
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
    details: state.details.details,
    filter: state.filter.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePageResults: () => dispatch(actions.changePageResults()),
    changePageDetails: () => dispatch(actions.changePageDetails()),
    updateSearch: (string) => dispatch(actions.updateSearch(string)),
    setId: (string) => dispatch(actions.updateId(string)),
    setResults: (array) => dispatch(actions.setResults(array)),
    setDetails: (object) => dispatch(actions.setDetails(object)),
    setFilter: (string) => dispatch(actions.setFilter(string)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
