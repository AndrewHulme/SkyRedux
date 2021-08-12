import pageReducer from "./setPage";
import searchReducer from "./search";
import idReducer from "./id";
import resultsReducer from "./results";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  page: pageReducer,
  search: searchReducer,
  id: idReducer,
  results: resultsReducer,
});

export default allReducers;
