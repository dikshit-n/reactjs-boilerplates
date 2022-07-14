import { Button, styled } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CustomLink } from "src/components";
import { isActiveRoute } from "src/utils";
import clsx from "clsx";
import { SIDEBAR_STRUCTURE } from "src/routes";

const StyledNavLinkItemWrapper = styled(Button)(
  ({ theme }) => `
  box-shadow: none;
  border-radius: 20px;
  background-color: ${theme.sidebar.menuItemBg};
  color: ${theme.sidebar.menuItemColor};
  &.active-route {
    background: ${theme.sidebar.menuItemBgActive};
    color: ${theme.sidebar.menuItemColorActive};
  }
`
);

export const NavLinkItem = (props: SIDEBAR_STRUCTURE) => {
  const { name = "", path = "" } = props;
  const { pathname } = useLocation();

  // console.log(pathname, path);
  // console.log(isActiveRoute({ path: pathname, route: path }));

  return (
    <CustomLink to={path}>
      <StyledNavLinkItemWrapper
        className={clsx({
          "active-route": isActiveRoute({ path: pathname, route: path }),
          // "has-default-icon": !!!icon, // if an icon is not provided, we will use a default icon
        })}
        size="small"
      >
        {name}
      </StyledNavLinkItemWrapper>
    </CustomLink>
  );
};
