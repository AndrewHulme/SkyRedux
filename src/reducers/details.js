let defaultState = {
  details: {},
};

function details(state = defaultState, action) {
  if (action.type === "DETAILS") {
    return {
      ...state,
      details: action.payload,
    };
  }

  return state;
}

export default details;
