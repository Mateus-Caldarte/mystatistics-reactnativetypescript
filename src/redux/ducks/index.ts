import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { CepData, Types } from "./Models";

/**
 * Estado inicial
 */
interface InitialState {
  isLoading: boolean;
  isError: boolean;
  cepData: CepData | null;
}

export const initialState: InitialState = {
  isLoading: false,
  isError: false,
  cepData: null,
};

/**
 * Reducer
 */
export const viacepReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Types.REQUEST, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.cepData = null;
    })
    .addCase(Types.SUCCESS, (state, action: PayloadAction<CepData>) => {
      state.isLoading = false;
      state.isError = false;
      state.cepData = action.payload;
    })
    .addCase(Types.FAILURE, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.cepData = null;
    })
    .addCase(Types.CLEAR, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.cepData = null;
    });
});

/**
 * Actions
 */
export type RequestAction = {
  type: typeof Types.REQUEST;
  payload: string;
};

export type SuccessAction = {
  type: typeof Types.SUCCESS;
  payload: CepData;
};

export type FailureAction = {
  type: typeof Types.FAILURE;
};

export type ClearAction = {
  type: typeof Types.CLEAR;
};

export const Creators = {
  request: (cep: string): RequestAction => ({
    type: Types.REQUEST,
    payload: cep,
  }),
  success: (data: CepData): SuccessAction => ({
    type: Types.SUCCESS,
    payload: data,
  }),
  failure: (): FailureAction => ({
    type: Types.FAILURE,
  }),
  clear: (): ClearAction => ({
    type: Types.CLEAR,
  }),
};

export default viacepReducer;
