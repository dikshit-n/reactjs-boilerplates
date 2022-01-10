// redux
///////// auth
export interface AUTH_DATA {
  name: string;
  email: string;
  token: string;
  roles: string[];
}
export interface AUTH_STATE {
  isInitialized: boolean;
  isAuthenticated: boolean;
  data: AUTH_DATA | null;
}
export type INITIALIZE_ACTION = Partial<AUTH_STATE>;

export type { ROOT_STATE, APP_DISPATCH, APP_THUNK } from "@/redux";

// ----------------------------------------------------------------- //

// context
// JWTAuthContext
export interface JWT_AUTH_CONTEXT extends AUTH_STATE {
  login: (data: AUTH_DATA) => any;
  logout: () => any;
}
