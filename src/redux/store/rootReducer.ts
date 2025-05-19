import { combineReducers } from "@reduxjs/toolkit";
import viacepReducer from "../ducks";

const rootReducer = combineReducers({
  viacep: viacepReducer,
});

export default rootReducer;
