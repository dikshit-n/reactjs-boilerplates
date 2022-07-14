import { useAuth } from "src/hooks";
import { TopNavigationLayout } from "src/layouts";
import { sidebarStructure } from "src/routes";
import { createApiFunction, handleError } from "src/utils";
import { HEADER_PROPS } from "../variants/top-navigation/header";

export const AdminLayout = ({ children }) => {
  const { logout } = useAuth();

  const headerActions: HEADER_PROPS = {
    links: {
      profile: "/admin/profile",
      settings: "/admin/settings",
    },
    logout: () => createApiFunction(logout, () => {}, handleError),
  };

  return (
    <TopNavigationLayout
      navigationBarLinks={sidebarStructure.admin}
      headerActions={headerActions}
    >
      {children}
    </TopNavigationLayout>
  );
};
