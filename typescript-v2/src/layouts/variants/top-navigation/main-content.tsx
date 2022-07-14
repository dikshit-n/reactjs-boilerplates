import { styled } from "@mui/material";

const StyledMainContentWrapper = styled("div")(
  ({ theme }) => `
  position: relative;
  width: 100%;
  height: calc(100vh - ${theme.header.height});
  padding: 0 40px;
`
);

export const MainContent = ({ children }) => {
  return <StyledMainContentWrapper>{children}</StyledMainContentWrapper>;
};
