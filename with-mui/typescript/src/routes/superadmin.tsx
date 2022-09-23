import { ROLE_ROUTE_DEFINITION } from "@/model";

export const superadminRoutes: ROLE_ROUTE_DEFINITION = {
  routeDefinition: [
    {
      path: "superadmin",
      element: <div>Superadmin Dashboard</div>,
    },
  ],
  sidebarStructure: [
    {
      heading: "General",
      items: [{ label: "Dashboard", link: "/superadmin" }],
    },
  ],
};
