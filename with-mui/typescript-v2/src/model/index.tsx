// All the model definitions for the app other than the models of reusables goes here
// In other words, app-specific model definitions goes here

import { FLASH_EVENT_PROPS, MODAL_EVENT_PROPS } from "src/components";
import { yup } from "src/utils";
import { AnyObject, Maybe } from "yup/lib/types";

// import { AuthenticationResult } from "@azure/msal-browser";

// redux

// #rbac-setup
export type ROLE = "admin" | "user";

export interface AUTH_DATA {
  name: string;
  email: string;
  token: string;
  roles: Array<string>;
  _id?: string;
  image?: string | null;
}
// export type AUTH_DATA = AuthenticationResult;

export interface AUTH_STATE {
  isInitialized: boolean;
  isAuthenticated: boolean;
  data: AUTH_DATA | null;
}

export interface INITIALIZE_ACTION {
  isAuthenticated: boolean;
  data: AUTH_DATA | null;
}

// hooks
// auth
export interface USE_AUTH_OPTIONS {
  updateRedux?: boolean;
}

export type LOGIN_AUTH_PROPS = {
  email: string;
  password: string;
};

// ---------------------------------------------------------------- //

// global declarations goes here
declare global {
  interface Window {
    flash: (params: FLASH_EVENT_PROPS) => any;
    modal: (params: MODAL_EVENT_PROPS) => any;
  }
}

// https://github.com/jquense/yup/issues/312#issuecomment-745034006 --reference
declare module "yup" {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    // declare all custom methods here
    password(message?: string): StringSchema<TType, TContext>;
    confirmPassword(
      reference: string,
      message?: string
    ): StringSchema<TType, TContext>;
  }
}

// ---------------------------------------------------------------- //

export * from "./custom-models";
