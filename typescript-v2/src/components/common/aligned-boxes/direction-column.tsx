import { Box, BoxProps } from "@mui/system";

export const DirectionColumn = ({ children, ...rest }: BoxProps) => {
  return (
    <Box
      {...rest}
      sx={{ display: "flex", flexDirection: "column", ...rest.sx }}
    >
      {children}
    </Box>
  );
};
