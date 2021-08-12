let defaultState = {
  search: "",
};

function search(state = defaultState, action) {
  if (action.type === "SEARCH") {
    return {
      ...state,
      search: action.payload,
    };
  }

  return state;
}

export default search;
