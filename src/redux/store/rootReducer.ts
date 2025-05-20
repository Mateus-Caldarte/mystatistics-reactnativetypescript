import { combineReducers } from "@reduxjs/toolkit";
import {
  authReducer,
  smsRecuperarReducer,
  smsValidarReducer,
  totalizadoresReducer,
} from "../ducks";

const rootReducer = combineReducers({
  Login: authReducer,
  totalizadores: totalizadoresReducer,
  sendEmail: smsRecuperarReducer,
  validarSms: smsValidarReducer,
});

export default rootReducer;
