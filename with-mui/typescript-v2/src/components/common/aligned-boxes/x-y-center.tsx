import { BoxProps } from "@mui/material";
import { Box } from "@mui/system";

export const XYCenter = ({ children, ...rest }: BoxProps) => {
  return (
    <Box {...rest} sx={{ display: "grid", placeItems: "center", ...rest.sx }}>
      {children}
    </Box>
  );
};
