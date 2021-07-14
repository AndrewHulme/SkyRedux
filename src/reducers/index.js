import pageReducer from "./setPage";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  page: pageReducer,
});

export default allReducers;
