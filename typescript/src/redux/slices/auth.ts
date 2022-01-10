import { AUTH_DATA, AUTH_STATE, INITIALIZE_ACTION } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AUTH_STATE = {
  isInitialized: false,
  isAuthenticated: false,
  data: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialize(_state: AUTH_STATE, action: PayloadAction<INITIALIZE_ACTION>) {
      return { ..._state, ...action.payload, isInitialized: true };
    },
    login(_state: AUTH_STATE, action: PayloadAction<AUTH_DATA>) {
      return { ..._state, data: action.payload, isAuthenticated: true };
    },
    logout(_state: AUTH_STATE, _action: PayloadAction<void>) {
      return initialState;
    },
  },
});

export const { actions: authActions, reducer: authReducer } = slice;
