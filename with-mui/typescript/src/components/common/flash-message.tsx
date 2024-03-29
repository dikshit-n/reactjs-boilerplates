import { EventEmitter } from "../../utils";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import Slide from "@mui/material/Slide";
import { FLASH_EVENT_PROPS } from "@/model";

export const FlashMessage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const flashMessageListener = (params: FLASH_EVENT_PROPS) => {
      const { message, ...rest } = params;
      enqueueSnackbar(message, {
        variant: "success",
        autoHideDuration: 2000,
        TransitionComponent: Slide,
        ...rest,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
          ...rest.anchorOrigin,
        },
      });
    };
    EventEmitter.addListener("flash", flashMessageListener);
    return () => {
      EventEmitter.removeListener("flash", flashMessageListener);
    };
  }, []);

  return null;
};
