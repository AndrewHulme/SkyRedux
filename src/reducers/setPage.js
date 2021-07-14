let defaultState = {
  page: "",
};

function setPage(state = defaultState, action) {
  if (action.type === "CHANGE_PAGE_RESULTS") {
    return {
      ...state,
      page: "results",
    };
  } else if (action.type === "CHANGE_PAGE_DETAILS") {
    return {
      ...state,
      page: "details",
    };
  }

  return state;
}

export default setPage;
