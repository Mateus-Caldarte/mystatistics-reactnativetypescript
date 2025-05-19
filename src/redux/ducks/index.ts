import { createReducer, PayloadAction } from "@reduxjs/toolkit";

interface TipoUsuario {
  id: number;
  codigo: number;
  nome: string;
  descricao: string;
}

export interface AuthData {
  id: number;
  nome: string;
  email: string;
  token: string;
  tipoUsuario: TipoUsuario;
}

interface AuthState {
  isLoading: boolean;
  isError: boolean;
  data: AuthData | null;
}

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

export default authReducer;
