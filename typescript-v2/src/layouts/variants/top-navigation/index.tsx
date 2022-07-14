import { Header, HEADER_PROPS } from "./header";
import { MainContent } from "./main-content";
import { NavigationBar, NAVIGATION_BAR_PROPS } from "./navigation-bar";

export interface TOP_NAVIGATION_LAYOUT_PROPS {
  children?: React.ReactNode;
  headerActions: HEADER_PROPS;
  navigationBarLinks?: NAVIGATION_BAR_PROPS["links"];
}

export const TopNavigationLayout: React.FC<TOP_NAVIGATION_LAYOUT_PROPS> = ({
  children,
  headerActions,
  navigationBarLinks,
}) => {
  return (
    <>
      <Header {...headerActions} />
      <NavigationBar links={navigationBarLinks} />
      <MainContent>{children}</MainContent>
    </>
  );
};
