import { ROLE, ROUTE_DEFINITION, SIDEBAR_MENU_ITEMS_STRUCTURE } from "@/model";
import { superadminRoutes } from "./superadmin";
import { Homepage } from "@/content";

export const routeDefinition: ROUTE_DEFINITION[] = [
  {
    path: "/",
    children: [...superadminRoutes.routeDefinition],
    element: <Homepage />,
  },
];

export const sidebarStructure: { [key in ROLE]: SIDEBAR_MENU_ITEMS_STRUCTURE } =
  {
    superadmin: superadminRoutes.sidebarStructure,
    admin: superadminRoutes.sidebarStructure,
  };
