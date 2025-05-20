import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthData,
  AuthState,
  TotalizadoresData,
  TotalizadoresState,
} from "./Models";
// -------------------- AUTH --------------------

const initialState: AuthState = {
  isLoading: false,
  isError: false,
  data: null,
};

export const Types = {
  REQUEST: "AUTH/REQUEST",
  SUCCESS: "AUTH/SUCCESS",
  FAILURE: "AUTH/FAILURE",
  CLEAR: "AUTH/CLEAR",
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Types.REQUEST, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = null;
    })
    .addCase(Types.SUCCESS, (state, action: PayloadAction<AuthData>) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    })
    .addCase(Types.FAILURE, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.data = null;
    })
    .addCase(Types.CLEAR, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.data = null;
    });
});

export const Creators = {
  request: () => ({ type: Types.REQUEST }),
  success: (data: AuthData) => ({ type: Types.SUCCESS, payload: data }),
  failure: () => ({ type: Types.FAILURE }),
  clear: () => ({ type: Types.CLEAR }),
};

// -------------------- TOTALIZADORES --------------------

const initialTotalizadoresState: TotalizadoresState = {
  isLoading: false,
  isError: false,
  data: null,
};

export const TotalizadoresTypes = {
  REQUEST: "TOTALIZADORES/REQUEST",
  SUCCESS: "TOTALIZADORES/SUCCESS",
  FAILURE: "TOTALIZADORES/FAILURE",
  CLEAR: "TOTALIZADORES/CLEAR",
};

export const totalizadoresReducer = createReducer(
  initialTotalizadoresState,
  (builder) => {
    builder
      .addCase(TotalizadoresTypes.REQUEST, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.data = null;
      })
      .addCase(
        TotalizadoresTypes.SUCCESS,
        (state, action: PayloadAction<TotalizadoresData>) => {
          state.isLoading = false;
          state.isError = false;
          state.data = action.payload;
        }
      )
      .addCase(TotalizadoresTypes.FAILURE, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.data = null;
      })
      .addCase(TotalizadoresTypes.CLEAR, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.data = null;
      });
  }
);

export const TotalizadoresCreators = {
  request: () => ({ type: TotalizadoresTypes.REQUEST }),
  success: (data: TotalizadoresData) => ({
    type: TotalizadoresTypes.SUCCESS,
    payload: data,
  }),
  failure: () => ({ type: TotalizadoresTypes.FAILURE }),
  clear: () => ({ type: TotalizadoresTypes.CLEAR }),
};
