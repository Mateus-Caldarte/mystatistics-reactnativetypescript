import { combineReducers } from "@reduxjs/toolkit";
import { authReducer, totalizadoresReducer } from "../ducks";

const rootReducer = combineReducers({
  Login: authReducer,
  totalizadores: totalizadoresReducer,
});

export default rootReducer;
