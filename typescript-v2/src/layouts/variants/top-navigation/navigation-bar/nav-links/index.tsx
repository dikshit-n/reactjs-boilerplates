import { Stack, styled } from "@mui/material";
import { useUniqueKey } from "src/hooks";
import { SIDEBAR_STRUCTURE } from "src/routes";
import { NavLinkItem } from "./nav-link-item";

export interface NAV_LINKS_PROPS {
  links?: SIDEBAR_STRUCTURE[];
  children?: React.ReactNode;
}

const StyledNavLinksWrapper = styled(Stack)`
  padding: 10px 0;
  gap: 10px;
`;

export const NavLinks = (props: NAV_LINKS_PROPS) => {
  const { links = [] } = props;
  const keys = useUniqueKey(links);

  return (
    <StyledNavLinksWrapper direction="row">
      {links.map((el, index) => (
        <NavLinkItem {...el} key={keys[index]} />
      ))}
    </StyledNavLinksWrapper>
  );
};
