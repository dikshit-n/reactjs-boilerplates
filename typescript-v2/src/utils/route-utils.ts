import queryString from "query-string";
import { ignoreEmptyObject } from "./object-utils";

export const isActiveRoute = ({
  path,
  route,
}: {
  path: string;
  route: string;
}) => {
  path = getValidRouteName(path);
  route = getValidRouteName(route);
  return path === route;
};

const getValidRouteName = (pathname: string) => {
  if (pathname) {
    let newPathname = pathname;
    if (!newPathname.startsWith("/")) {
      newPathname = `/${newPathname}`;
    }
    if (!newPathname.endsWith("/")) {
      newPathname = `${newPathname}/`;
    }
    return newPathname;
  }
  return pathname;
};

export const getSearchString = (
  object: Record<string, any>,
  options?: queryString.StringifyOptions
) => {
  let searchString = queryString.stringify(object, {
    skipNull: true,
    skipEmptyString: true,
    ...options,
  });
  searchString = `${searchString ? `?${searchString}` : ""}`;
  return searchString;
};

export const getSearchQuery = (
  string: string,
  options?: queryString.ParseOptions
) => {
  if (string.startsWith("?")) string = string.substring(1);
  let searchObject: any = queryString.parse(string, { ...options });
  searchObject = ignoreEmptyObject(searchObject);
  return searchObject;
};

export const removeSlashAtLast = (route: string) => {
  if (route !== "/") {
    while (route.endsWith("/")) {
      route = route.slice(0, -1);
    }
  }
  return route;
};
