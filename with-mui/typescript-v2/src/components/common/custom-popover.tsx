import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import { useRef, useState } from "react";
import { useOutsideClick } from "src/hooks";
import type { BoxProps } from "@mui/material/Box";
import type { PopoverProps } from "@mui/material/Popover";

// custom-popover
export interface CUSTOM_POPOVER_PROPS
  extends Omit<PopoverProps, "open" | "ref"> {
  trigger?: { component: JSX.Element | null } | null;
  triggerContainerProps?: Omit<BoxProps, "ref">;
  open?: boolean;
  closeOnClick?: boolean;
}

export const CustomPopover: React.FC<CUSTOM_POPOVER_PROPS> = (props) => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef();

  const {
    trigger,
    triggerContainerProps,
    closeOnClick = true,
    ...rest
  } = props;
  useOutsideClick(popoverRef, () => setOpen(false));

  return (
    <>
      <Box
        {...triggerContainerProps}
        ref={popoverRef}
        onClick={(event) => {
          if (triggerContainerProps?.onClick)
            triggerContainerProps?.onClick(event);
          setOpen((prev) => !prev);
        }}
      >
        {trigger?.component}
      </Box>
      <Popover
        {...rest}
        anchorEl={popoverRef.current}
        open={open}
        disableScrollLock
        onClick={(event) => {
          if (props.onClick) props.onClick(event);
          if (closeOnClick) setOpen(false);
        }}
        onClose={(params, reason) => {
          if (props.onClose) props.onClose(params, reason);
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
          ...props.anchorOrigin,
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
          ...props.transformOrigin,
        }}
      >
        {props.children}
      </Popover>
    </>
  );
};
