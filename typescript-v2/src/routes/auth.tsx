import { LoginPageContent } from "src/content/auth";
import { authSetup } from "src/data";
import { Guest } from "src/guard";
import { ROLE_ROUTE_DEFINITION } from "src/routes";

export const authRoutes: ROLE_ROUTE_DEFINITION = {
  routeDefinition: [
    {
      path: authSetup.authPage,
      element: (
        <Guest>
          <LoginPageContent />
        </Guest>
      ),
    },
  ],
  sidebarStructure: [],
};
