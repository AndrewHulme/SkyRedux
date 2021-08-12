let defaultState = {
  id: "",
};

function setId(state = defaultState, action) {
  if (action.type === "ID") {
    return {
      ...state,
      id: action.payload,
    };
  }

  return state;
}

export default setId;
