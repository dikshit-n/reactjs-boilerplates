import { rbacSetup } from "@/data";

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

const isRoutePresent = (pathname: string, route: string) => {
  if (pathname && route) {
    pathname = getValidRouteName(pathname);
    route = getValidRouteName(route);
    return pathname === "/" || route === "/" // strict check if the path is '/'
      ? route === pathname
      : pathname.startsWith(route) || route.startsWith(pathname);
  }
  return false;
};

export const isPublicRoute = (pathname: string | undefined | null | false) => {
  if (pathname)
    return !!rbacSetup.publicRoutes.find((route) =>
      isRoutePresent(pathname, route)
    );
  return false;
};
export const isAuthRoute = (pathname: string | undefined | null | false) => {
  if (pathname)
    return !!rbacSetup.authRoutes.find((route) =>
      isRoutePresent(pathname, route)
    );
  return false;
};
