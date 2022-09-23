import { IconButtonProps, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { To, useNavigate } from "react-router-dom";
import { NavigateOptions } from "./custom-button";

export interface CUSTOM_ICON_BUTTON_PROPS
  extends Omit<IconButtonProps, "href"> {
  loading?: boolean | null;
  defaultStyle?: boolean;
  href?:
    | string
    | {
        to: To;
        options?: NavigateOptions;
      };
}
export const CustomIconButton: React.FC<CUSTOM_ICON_BUTTON_PROPS> = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { href, defaultStyle, ...rest } = props;

  const goto = (route: CUSTOM_ICON_BUTTON_PROPS["href"]) => {
    if (route) {
      if (typeof route === "string") navigate(route);
      else if ("to" in route) navigate(route.to, route.options);
      else navigate(route);
    }
  };

  const defaultStyleProps = defaultStyle
    ? {
        sx: {
          color: theme.palette.background.paper,
          ...rest.sx,
          "&:hover": {
            background: "none",
            ...rest["&:hover"],
          },
        },
      }
    : undefined;

  return (
    <IconButton
      // color="primary"
      {...rest}
      {...defaultStyleProps}
      onClick={
        href || rest.onClick
          ? (e) => {
              if (href) goto(href);
              if (rest.onClick) rest.onClick(e);
            }
          : undefined
      }
    >
      {rest.children}
    </IconButton>
  );
};
