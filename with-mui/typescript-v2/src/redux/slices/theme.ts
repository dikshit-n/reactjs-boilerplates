import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTheme, THEME } from "src/theme";

const initialState: THEME = getTheme() as THEME;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(_state: THEME, action: PayloadAction<THEME>) {
      return action.payload;
    },
  },
});

export const { actions: themeActions, reducer: themeReducer } = themeSlice;
