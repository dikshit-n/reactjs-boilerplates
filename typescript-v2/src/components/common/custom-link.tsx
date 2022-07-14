import { styled } from "@mui/material";
import { Link, LinkProps } from "react-router-dom";

const StyledLink = styled(Link)`
  color: inherit !important;
  text-decoration: none;
`;

export const CustomLink = (props: LinkProps) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};
