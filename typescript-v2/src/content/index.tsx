import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { rbacSetup } from "src/data";
// import { useOAuth } from "src/hooks";
import { useAuth } from "src/hooks";

export const HomePage = () => {
  const { logout, data } = useAuth();
  const navigate = useNavigate();
  const userRoles = data?.roles || [];
  // const userRoles = data.account.idTokenClaims?.roles || [];

  useEffect(() => {
    navigate(
      `${rbacSetup.homePage[userRoles[0] as keyof typeof rbacSetup.homePage]}`,
      { replace: true }
    );
  }, []);

  return (
    <div>
      Homepage
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};
