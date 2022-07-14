import { useRoutes, RouteProps } from "react-router-dom";
import { ROLE } from "src/model";
import { routeDefinition } from "src/routes";

export interface ROLE_ROUTE_DEFINITION {
  routeDefinition: ROUTE_DEFINITION[];
  sidebarStructure: SIDEBAR_STRUCTURE[];
}

export interface ROUTE_DEFINITION extends Omit<RouteProps, "children"> {
  path: string;
  children?: ROUTE_DEFINITION[];
}

export interface ROLE_SIDEBAR_STRUCTURE {
  [key: string | ROLE]: SIDEBAR_STRUCTURE[];
}

export interface SIDEBAR_STRUCTURE {
  name: string;
  path: string;
}

export const Routes: React.FC = () => {
  const routes = useRoutes(routeDefinition);
  return routes;
};
