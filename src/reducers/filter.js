let defaultState = {
  filter: "All",
};

function setFilter(state = defaultState, action) {
  if (action.type === "SETFILTER") {
    return {
      ...state,
      filter: action.payload,
    };
  }

  return state;
}

export default setFilter;
