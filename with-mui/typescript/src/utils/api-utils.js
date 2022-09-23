import axios from 'axios';
import { getCookie, isPublicRoute, deleteCookie, isAuthRoute } from '@/utils';

export const getError = (errorObject) => {
  let error = {
    message: 'Failed to process your request',
    data: {},
    status: null,
    statusText: null
  };
  if (errorObject) {
    let status = errorObject.response?.status;
    if (status === 404) {
      error = {
        ...errorObject.response,
        message: 'Failed to process your request',
        status: 404
      };
    } else {
      error = {
        ...errorObject.response,
        message:
          errorObject.response?.data?.message ||
          'Failed to process your request'
      };
    }
  }
  return error;
};

// creating axios instance
export const axiosInstance = axios.create({
  baseURL: 'https://dev.api.soutrali.ci/v1'
});

// setting token in header for each request
axiosInstance.interceptors.request.use(
  (config) => {
    let token = getCookie('token'); // getting token from cookies
    if (token && config.headers)
      config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// globally logout the user, if 401 occurs
axiosInstance.interceptors.response.use(undefined, async (error) => {
  // logout if unauthenticated or token expired
  if (error.response?.status === 401) {
    // don't redirect to logout route if the current page is a public page or login page
    if (
      !isPublicRoute(window.location.pathname) &&
      !isAuthRoute(window.location.pathname)
    ) {
      deleteCookie('token');
      window.location.pathname = '/auth/login';
    }
    //   window.location.href = '/logout';
  }
  return Promise.reject(error);
});

// configuration to get upload progress(in percentage)

export var withUploadProgress = (callBack) => {
  return {
    onUploadProgress: function (progressEvent) {
      var percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      callBack(percentCompleted);
    }
  };
};
