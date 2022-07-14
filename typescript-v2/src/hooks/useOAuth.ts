import { authSetup, oAuthConfig } from "src/data";
import { PublicClientApplication } from "@azure/msal-browser";
import { useSelector, useActions } from "src/hooks";
import { AUTH_DATA, USE_AUTH_OPTIONS } from "src/model";
import {
  convertMsalError,
  deleteCookie,
  getCookie,
  setCookie,
} from "src/utils";

// video reference -- https://www.youtube.com/watch?v=4pH5spE2Yss

export const useOAuth = () => {
  const { auth } = useSelector((state) => state);
  const { authActions } = useActions();

  const publicClientApplication = new PublicClientApplication({
    auth: {
      clientId: oAuthConfig.appId,
      redirectUri: oAuthConfig.redirectUri,
      authority: oAuthConfig.authority,
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: true,
    },
  });

  function initialize({
    updateRedux = true,
  }: USE_AUTH_OPTIONS = {}): Promise<AUTH_DATA> {
    return new Promise(async (resolve, reject) => {
      try {
        const token = getCookie(authSetup.tokenAccessor);
        if (!token) throw new Error("Session expired");
        let data = await publicClientApplication.acquireTokenSilent({
          scopes: oAuthConfig.scopes,
        });
        // hardcode the role for now
        let updatedData = {
          ...data,
          account: {
            ...data.account,
            idTokenClaims: { ...data.account.idTokenClaims, roles: ["admin"] },
          },
        };
        // data.account.idTokenClaims.roles = ["admin"];
        if (updateRedux)
          authActions.initialize({ data: updatedData, isAuthenticated: true });
        resolve(undefined);
        // resolve(updatedData);
      } catch (err) {
        console.log(err);
        err = convertMsalError(err);
        if (updateRedux) authActions.logout();
        reject(err);
      }
    });
  }

  function login({ updateRedux = true }: USE_AUTH_OPTIONS = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        // login the user
        let data = await publicClientApplication.loginPopup({
          scopes: oAuthConfig.scopes,
          prompt: "select_account",
        });
        // hardcode the role for now
        let updatedData = {
          ...data,
          account: {
            ...data.account,
            idTokenClaims: { ...data.account.idTokenClaims, roles: ["admin"] },
          },
        };
        // data.account.idTokenClaims.roles = ["admin"];
        // set the active account in order to maintain the session
        await publicClientApplication.setActiveAccount(data.account);
        if (updateRedux) authActions.login();
        // if (updateRedux) authActions.login(updatedData);
        setCookie(authSetup.tokenAccessor, data.accessToken);
        resolve(updatedData);
      } catch (err) {
        err = convertMsalError(err);
        reject(err);
      }
    });
  }

  function logout({
    updateRedux = true,
  }: USE_AUTH_OPTIONS = {}): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await publicClientApplication.logoutPopup({
          authority: oAuthConfig.authority,
        });
        deleteCookie(authSetup.tokenAccessor);
        window.location.reload();
        if (updateRedux) authActions.logout();
        resolve();
      } catch (err) {
        err = convertMsalError(err);
        if (updateRedux) authActions.logout();
        deleteCookie(authSetup.tokenAccessor);
        window.location.reload();
        reject(err);
      }
    });
  }
  // const logout = async() => publicClientApplication.logoutRedirect()

  const exportables = {
    publicClientApplication,
    ...auth,
    initialize,
    login,
    logout,
  };

  return exportables;
};
