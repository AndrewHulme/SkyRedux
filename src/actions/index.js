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
