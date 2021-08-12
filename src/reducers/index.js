import pageReducer from "./setPage";
import searchReducer from "./search";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  page: pageReducer,
  search: searchReducer,
});

export default allReducers;
