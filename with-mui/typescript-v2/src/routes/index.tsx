import { HomePage } from "src/content";
import { ROLE_SIDEBAR_STRUCTURE, ROUTE_DEFINITION } from "src/routes";
import { authRoutes } from "./auth";
import { Authenticated } from "src/guard";
import { adminRoutes } from "./admin";
import { AdminLayout } from "src/layouts";
import { PageNotFound } from "src/components";

export const routeDefinition: ROUTE_DEFINITION[] = [
  {
    path: "/",
    element: (
      <Authenticated>
        <AdminLayout>
          <HomePage />
        </AdminLayout>
      </Authenticated>
    ),
  },
  {
    path: "/auth",
    children: [...authRoutes.routeDefinition],
  },
  {
    path: "/admin",
    children: [...adminRoutes.routeDefinition],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  // for other roles/categories use the below routing format
  // {
  //   path: "/other",
  //   children: [{ path: "/other", element: <div>Other</div> }],
  // },
];

export const sidebarStructure: ROLE_SIDEBAR_STRUCTURE = {
  admin: adminRoutes.sidebarStructure,
};

export * from "./router";
