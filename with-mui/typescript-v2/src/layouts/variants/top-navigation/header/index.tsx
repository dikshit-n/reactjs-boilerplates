import { Stack, styled } from "@mui/material";
import { Actions } from "./actions";
import { Logo } from "./logo";
import { Searchbar } from "./searchbar";

export interface HEADER_PROPS {
  children?: React.ReactNode;
  links: {
    profile: string;
    settings: string;
  };
  logout: () => any;
}

const HeaderWrapper = styled(Stack)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 45px;
//   height: ${theme.header.height};
  background: ${theme.header.background};
  box-shadow: ${theme.header.boxShadow};
  position: relative;
  z-index: 2;
`
);

export const Header = (props: HEADER_PROPS) => {
  return (
    <HeaderWrapper direction="row">
      <Logo />
      <Searchbar />
      <Actions />
    </HeaderWrapper>
  );
};
