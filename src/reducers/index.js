import pageReducer from "./setPage";
import searchReducer from "./search";
import idReducer from "./id";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  page: pageReducer,
  search: searchReducer,
  id: idReducer,
});

export default allReducers;
