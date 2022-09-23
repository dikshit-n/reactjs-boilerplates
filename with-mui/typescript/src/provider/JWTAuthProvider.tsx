import { useAuth } from "@/hooks";
import { getError } from "@/utils";
import { useEffect } from "react";

export const JWTAuthProvider: React.FC = (props) => {
  const { initialize, isInitialized } = useAuth();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await initialize();
        window.flash({ message: "Authentication successfull" });
      } catch (err) {
        window.flash({ message: getError(err).message, variant: "error" });
      }
    };
    initializeApp();
  }, []);

  return <>{isInitialized ? props.children : <div>Initializing...</div>}</>;
};
