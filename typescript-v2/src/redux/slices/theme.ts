import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { THEME, THEME_NAMES } from "src/theme";

const getTheme = () => {
  try {
    return (
      (window.localStorage.getItem("theme") as THEME) ||
      THEME_NAMES.PureLightThemeMinimalSidebar
      // "pure-light-theme-minimal-sidebar"
    );
  } catch {
    return THEME_NAMES.PureLightThemeMinimalSidebar;
    // return "pure-light-theme-minimal-sidebar";
  }
};

const initialState: THEME = getTheme();

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
