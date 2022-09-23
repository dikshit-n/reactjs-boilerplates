// mui
import { DialogContentProps } from "@mui/material/DialogContent/DialogContent";
import type { DialogProps } from "@mui/material/Dialog/Dialog";
import type { ButtonProps } from "@mui/material/Button/Button";

// notistack
import type {
  OptionsObject as NotiStackOptionsObject,
  SnackbarMessage as NotiStackSnackbarMessage,
} from "notistack";

// querystring
import type { ParsedUrlQueryInput } from "querystring";
import { RouteProps } from "react-router-dom";

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

// ---------------------------------------------------------------- //

// custom-event-models

// flash event
export interface FLASH_EVENT_PROPS extends NotiStackOptionsObject {
  message?: NotiStackSnackbarMessage;
}

// modal event
interface MODAL_CONTAINER_PROPS extends Omit<DialogProps, "open"> {
  closeOnClick?: boolean;
  open?: boolean;
}
export interface MODAL_EVENT_PROPS_1 {
  containerProps?: MODAL_CONTAINER_PROPS;
  contentContainerProps?: DialogContentProps;
  component?: CUSTOM_MODAL_COMPONENT;
  type?: "custom";
}
export interface MODAL_EVENT_PROPS_2 extends CONFIRMATION_MODAL_PROPS {
  containerProps?: MODAL_CONTAINER_PROPS;
  contentContainerProps?: DialogContentProps;
  type?: "confirmation";
}

export type MODAL_EVENT_PROPS = MODAL_EVENT_PROPS_1 | MODAL_EVENT_PROPS_2;

export interface CONFIRMATION_MODAL_PROPS {
  onConfirm?: Function;
  onCancel?: Function;
  title?: JSX.Element | string | null;
  description?: JSX.Element | string | null;
  confirmButton?:
    | JSX.Element
    | { label: any; props?: CUSTOM_BUTTON_PROPS }
    | null;
  cancelButton?:
    | JSX.Element
    | { label: any; props?: CUSTOM_BUTTON_PROPS }
    | null;
}

export type CUSTOM_MODAL_COMPONENT = React.FC<{ onCancel: Function }>;
export interface CUSTOM_MODAL_COMPONENT_PROPS {
  [key: string]: any;
  onCancel: Function;
}

declare global {
  interface Window {
    flash: (params: FLASH_EVENT_PROPS) => any;
    modal: (params: MODAL_EVENT_PROPS) => any;
  }
}

// ----------------------------------------------------------------------- //

// custom button

// custom button props
interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
}
export interface UrlObject {
  auth?: string | null | undefined;
  hash?: string | null | undefined;
  host?: string | null | undefined;
  hostname?: string | null | undefined;
  href?: string | null | undefined;
  pathname?: string | null | undefined;
  protocol?: string | null | undefined;
  search?: string | null | undefined;
  slashes?: boolean | null | undefined;
  port?: string | number | null | undefined;
  query?: string | null | ParsedUrlQueryInput | undefined;
  replace?: boolean;
}

export interface CUSTOM_BUTTON_PROPS extends Omit<ButtonProps, "href"> {
  loading?: boolean | null;
  href?:
    | UrlObject
    | string
    | {
        url: UrlObject | string;
        as?: (UrlObject | string) | undefined;
        options?: (TransitionOptions & { replace?: boolean }) | undefined;
      };
}

// --------------------------------------------------------------------------- //

// hooks
///// auth
export interface USE_AUTH_OPTIONS {
  updateRedux?: boolean;
}

export interface LOGIN_AUTH_PROPS {
  email: string;
  password: string;
}

// --------------------------------------------------------------------------- //
// react

// react-router

export interface ROLE_ROUTE_DEFINITION {
  routeDefinition: ROUTE_DEFINITION[];
  sidebarStructure: SIDEBAR_MENU_ITEMS_STRUCTURE;
}

export interface ROUTE_DEFINITION extends RouteProps {
  path: string;
  children?: ROUTE_DEFINITION[];
}

// ------------------------------------------------------------------------------- //

// layouts
// header
export interface EXTENDED_SIDEBAR_LAYOUT_PROPS {
  headerProps?: HEADER_PROPS;
  sidebarRoutes?: SIDEBAR_MENU_ITEMS_STRUCTURE;
}

export interface SIDEBAR_MENU_ITEM_STRUCTURE {
  link?: string;
  label?: string;
  icon?: React.ReactNode;
  items?: SIDEBAR_MENU_ITEM_STRUCTURE[];
}

export type SIDEBAR_MENU_ITEMS_STRUCTURE = {
  heading?: string;
  items?: SIDEBAR_MENU_ITEM_STRUCTURE[];
}[];
interface HEADER_USER_ACTION extends CUSTOM_BUTTON_PROPS {
  label?: string | JSX.Element;
}
export type HEADER_USER_ACTIONS = HEADER_USER_ACTION[];
export interface HEADER_PROPS {
  avatar?: {
    image?: string | null;
    name?: string;
    email?: string;
    actions?: HEADER_USER_ACTIONS;
    logout?: (params: any) => any;
  };
}

// ------------------------------------------------------------ //

// #rbac-setup
export type ROLE = "superadmin" | "admin";
