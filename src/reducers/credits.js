let defaultState = {
  credits: [],
};

function credits(state = defaultState, action) {
  if (action.type === "CREDITS") {
    return {
      ...state,
      credits: action.payload,
    };
  }

  return state;
}

export default credits;
