export function changePageResults() {
  return {
    type: "CHANGE_PAGE_RESULTS",
  };
}

export function changePageDetails() {
  return {
    type: "CHANGE_PAGE_DETAILS",
  };
}

export function updateSearch(search) {
  return {
    type: "SEARCH",
    payload: search,
  };
}

export function updateId(id) {
  return {
    type: "ID",
    payload: id,
  };
}

export function setResults(results) {
  return {
    type: "RESULTS",
    payload: results,
  };
}

export function setDetails(details) {
  return {
    type: "DETAILS",
    payload: details,
  };
}

export function setFilter(filter) {
  return {
    type: "SETFILTER",
    payload: filter,
  };
}

export function setCredits(credits) {
  return {
    type: "CREDITS",
    payload: credits,
  };
}

export function setDisplaySuggestions(suggestions) {
  return {
    type: "DISPLAYSUGGESTIONS",
    payload: suggestions,
  };
}
