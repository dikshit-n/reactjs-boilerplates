import { Box, styled } from "@mui/material";
import { NavLinks, NAV_LINKS_PROPS } from "./nav-links";

export interface NAVIGATION_BAR_PROPS extends NAV_LINKS_PROPS {}

const StyledNavigationbarWrapper = styled(Box)(
  ({ theme }) => `
    background: ${theme.sidebar.background};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ED6804;
    width: calc(100% - 80px);
    margin: auto;
    position: relative;
    z-index: 1;
`
);

const StyledNavigationbarContainerWrapper = styled(Box)(
  ({ theme }) => `
    background: ${theme.sidebar.background};
    `
);

export const NavigationBar = (props: NAVIGATION_BAR_PROPS) => {
  return (
    <StyledNavigationbarContainerWrapper>
      <StyledNavigationbarWrapper>
        <NavLinks links={props.links} />
      </StyledNavigationbarWrapper>
    </StyledNavigationbarContainerWrapper>
  );
};
