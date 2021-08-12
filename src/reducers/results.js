let defaultState = {
  results: [],
};

function setResults(state = defaultState, action) {
  if (action.type === "RESULTS") {
    return {
      ...state,
      results: action.payload,
    };
  }

  return state;
}

export default setResults;
