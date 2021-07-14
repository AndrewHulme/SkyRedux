import { createStore } from "redux";
import allReducers from "../reducers/index";

var store = createStore(allReducers);

export default store;
