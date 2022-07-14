// import { THEME_NAMES } from "src/theme";

export const authSetup = {
  authPage: "/auth", // exact login page
  homePage: "/",
  tokenAccessor: "accessToken",
};

export const projectSetup = {
  title: "Project Title",
  baseURL: "project-base-url",
  defaultTheme: "pure-light-theme",
  // defaultTheme: THEME_NAMES.PureLightTheme,
};

// #rbac-setup
export const rbacSetup = {
  roles: ["admin"],
  homePage: {
    admin: "/admin/customer",
    // undefined: "/", // incase of user role is undefined
  },
  // publicRoutes: ["/verification"], // pages that doesn't need authentication to be displayed on the screen
  authRoutes: ["/auth", "/auth/login"], // pages that are used for authentication purposes
};

// msal
export const msalErrorMessage = {
  interaction_in_progress: "A popup is already open",
  user_cancelled: "Login Cancelled",
};
