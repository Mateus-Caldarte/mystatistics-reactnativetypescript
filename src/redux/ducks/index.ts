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

// -------------------- SMS RECUPERAR --------------------

type SmsRecuperarState = {
  isLoading: boolean;
  isError: boolean;
  success: boolean;
};

const initialSmsRecuperarState: SmsRecuperarState = {
  isLoading: false,
  isError: false,
  success: false,
};

export const SmsRecuperarTypes = {
  REQUEST: "SMS_RECUPERAR/REQUEST",
  SUCCESS: "SMS_RECUPERAR/SUCCESS",
  FAILURE: "SMS_RECUPERAR/FAILURE",
  CLEAR: "SMS_RECUPERAR/CLEAR",
};

export const smsRecuperarReducer = createReducer(
  initialSmsRecuperarState,
  (builder) => {
    builder
      .addCase(SmsRecuperarTypes.REQUEST, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.success = false;
      })
      .addCase(SmsRecuperarTypes.SUCCESS, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.success = true;
      })
      .addCase(SmsRecuperarTypes.FAILURE, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.success = false;
      })
      .addCase(SmsRecuperarTypes.CLEAR, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.success = false;
      });
  }
);

// -------------------- SMS VALIDAR --------------------

type SmsValidarState = {
  isLoading: boolean;
  isError: boolean;
  success: boolean;
};

const initialSmsValidarState: SmsValidarState = {
  isLoading: false,
  isError: false,
  success: false,
};

export const SmsValidarTypes = {
  REQUEST: "SMS_VALIDAR/REQUEST",
  SUCCESS: "SMS_VALIDAR/SUCCESS",
  FAILURE: "SMS_VALIDAR/FAILURE",
  CLEAR: "SMS_VALIDAR/CLEAR",
};

export const smsValidarReducer = createReducer(
  initialSmsValidarState,
  (builder) => {
    builder
      .addCase(SmsValidarTypes.REQUEST, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.success = false;
      })
      .addCase(SmsValidarTypes.SUCCESS, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.success = true;
      })
      .addCase(SmsValidarTypes.FAILURE, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.success = false;
      })
      .addCase(SmsValidarTypes.CLEAR, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.success = false;
      });
  }
);

export const SmsValidarCreators = {
  request: () => ({ type: SmsValidarTypes.REQUEST }),
  success: () => ({ type: SmsValidarTypes.SUCCESS }),
  failure: () => ({ type: SmsValidarTypes.FAILURE }),
  clear: () => ({ type: SmsValidarTypes.CLEAR }),
  send: (email: string, tokenRecuperarSenha: string) => ({
    type: SmsValidarTypes.REQUEST,
    payload: { email, tokenRecuperarSenha },
  }),
};

export const SmsRecuperarCreators = {
  request: () => ({ type: SmsRecuperarTypes.REQUEST }),
  success: () => ({ type: SmsRecuperarTypes.SUCCESS }),
  failure: () => ({ type: SmsRecuperarTypes.FAILURE }),
  clear: () => ({ type: SmsRecuperarTypes.CLEAR }),
  send: (email: string) => ({
    type: SmsRecuperarTypes.REQUEST,
    payload: email,
  }),
};

// -------------------- MODIFICAR SENHA --------------------

type ModificarSenhaState = {
  isLoading: boolean;
  isError: boolean;
  success: boolean;
};

const initialModificarSenhaState: ModificarSenhaState = {
  isLoading: false,
  isError: false,
  success: false,
};

export const ModificarSenhaTypes = {
  REQUEST: "MODIFICAR_SENHA/REQUEST",
  SUCCESS: "MODIFICAR_SENHA/SUCCESS",
  FAILURE: "MODIFICAR_SENHA/FAILURE",
  CLEAR: "MODIFICAR_SENHA/CLEAR",
};

export const modificarSenhaReducer = createReducer(
  initialModificarSenhaState,
  (builder) => {
    builder
      .addCase(ModificarSenhaTypes.REQUEST, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.success = false;
      })
      .addCase(ModificarSenhaTypes.SUCCESS, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.success = true;
      })
      .addCase(ModificarSenhaTypes.FAILURE, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.success = false;
      })
      .addCase(ModificarSenhaTypes.CLEAR, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.success = false;
      });
  }
);

export const ModificarSenhaCreators = {
  request: () => ({ type: ModificarSenhaTypes.REQUEST }),
  success: () => ({ type: ModificarSenhaTypes.SUCCESS }),
  failure: () => ({ type: ModificarSenhaTypes.FAILURE }),
  clear: () => ({ type: ModificarSenhaTypes.CLEAR }),
  send: (email: string, tokenRecuperarSenha: string, novaSenha: string) => ({
    type: ModificarSenhaTypes.REQUEST,
    payload: { email, tokenRecuperarSenha, novaSenha },
  }),
};

export { AuthData };
