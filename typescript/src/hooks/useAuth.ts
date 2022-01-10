import { useSelector, useActions } from "@/hooks";

export function useAuth() {
  const { auth } = useSelector((state) => state);
  const { auth: authActions } = useActions();

  const authUsableData = { ...auth, ...authActions };

  return authUsableData;
}
