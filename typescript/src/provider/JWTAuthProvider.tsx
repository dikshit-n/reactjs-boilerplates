import { useActions } from "@/hooks";
import { useEffect } from "react";

export const JWTAuthProvider: React.FC = (props) => {
  const { auth } = useActions();

  useEffect(() => {
    auth.initialize({});
  }, []);

  return <>{props.children}</>;
};
