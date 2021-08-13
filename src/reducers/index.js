import pageReducer from "./setPage";
import searchReducer from "./search";
import idReducer from "./id";
import resultsReducer from "./results";
import detailsReducer from "./details";
import filterReducer from "./filter";
import creditsReducer from "./credits";
import displaySuggestionsReducer from "./displaySuggestions";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  page: pageReducer,
  search: searchReducer,
  id: idReducer,
  results: resultsReducer,
  details: detailsReducer,
  filter: filterReducer,
  credits: creditsReducer,
  displaySuggestions: displaySuggestionsReducer,
});

export default allReducers;
