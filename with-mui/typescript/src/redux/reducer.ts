import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./slices";

export const reducer = combineReducers({
  auth: authReducer,
});
