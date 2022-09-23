import { actions as reduxActions } from "@/redux";
import { useDispatch } from "@/hooks";
import { bindActionCreators } from "@reduxjs/toolkit";

export function useActions() {
  type ACTIONS_TYPE = typeof reduxActions;
  const reduxActionsCopy: any = { ...reduxActions };
  const dispatch = useDispatch();
  // #rbac-setup
  let actions: any = {};
  Object.keys(reduxActions).map((el) => {
    actions[el] = bindActionCreators(reduxActionsCopy[el], dispatch);
  });
  return actions as ACTIONS_TYPE;
}
