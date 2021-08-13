let defaultState = {
  displaySuggestions: false,
};

function setDisplaySuggestions(state = defaultState, action) {
  if (action.type === "DISPLAYSUGGESTIONS") {
    return {
      ...state,
      displaySuggestions: action.payload,
    };
  }

  return state;
}

export default setDisplaySuggestions;
