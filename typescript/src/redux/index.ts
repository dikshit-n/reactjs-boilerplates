import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from "react-redux";
import { reducer } from "./reducer";

const store = configureStore({
  reducer,
  devTools: process.env.REDUX_DEV_TOOLS === "true",
});

export type ROOT_STATE = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<ROOT_STATE> = useReduxSelector;
export type APP_DISPATCH = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<APP_DISPATCH>();
export type APP_THUNK<ReturnType = void> = ThunkAction<
  ReturnType,
  ROOT_STATE,
  unknown,
  Action<string>
>;
export { store };

export * from "./actions";
