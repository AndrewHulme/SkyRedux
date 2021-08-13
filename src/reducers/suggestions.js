let defaultState = {
  suggestions: [],
};

function setSuggestions(state = defaultState, action) {
  if (action.type === "SUGGESTIONS") {
    return {
      ...state,
      suggestions: action.payload,
    };
  }

  return state;
}

export default setSuggestions;
