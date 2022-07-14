// import { Redirect } from "src/components";
import { AddCustomerContent, ViewCustomer } from "src/content/admin";
import { Authenticated } from "src/guard";
import { AdminLayout } from "src/layouts";
import { ROLE_ROUTE_DEFINITION } from "src/routes";

export const adminRoutes: ROLE_ROUTE_DEFINITION = {
  routeDefinition: [
    {
      path: "/admin",
      // element: <Redirect to={authSetup.homePage} />,
      children: [
        {
          path: "/admin/customer/add",
          element: (
            <Authenticated roles={["admin"]}>
              <AdminLayout>
                <AddCustomerContent />
              </AdminLayout>
            </Authenticated>
          ),
        },
        {
          path: "/admin/customer",
          element: (
            <Authenticated roles={["admin"]}>
              <AdminLayout>
                <ViewCustomer />
              </AdminLayout>
            </Authenticated>
          ),
        },
      ],
    },
  ],
  sidebarStructure: [
    { name: "Home", path: "/admin" },
    { name: "Payments", path: "/admin/payment" },
    { name: "Balances", path: "/admin/balance" },
    { name: "Customers", path: "/admin/customer" },
    { name: "Products", path: "/admin/product" },
    { name: "Reports", path: "/admin/report" },
    { name: "Connect", path: "/admin/connect" },
  ],
};
