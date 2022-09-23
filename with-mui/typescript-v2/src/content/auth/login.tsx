import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CONFIG_TYPE,
  CustomButton,
  RecursiveContainer,
  XYCenter,
} from "src/components";
import { authSetup } from "src/data";
import { useAuth } from "src/hooks";
import { LOGIN_AUTH_PROPS } from "src/model";
import { authSchema } from "src/schema";
import { createApiFunction, getSearchQuery, handleError } from "src/utils";

export const LoginPageContent = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleSuccess = async (data: LOGIN_AUTH_PROPS) => {
    await login(data);
    navigate(`${searchQuery?.backToURL || authSetup.homePage}`);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authSchema,
    onSubmit: (data) =>
      createApiFunction(() => handleSuccess(data), null, handleError),
  });

  const searchQuery = getSearchQuery(search);

  const config: CONFIG_TYPE = [
    {
      name: "email",
      type: "email",
      label: "Email Textbox",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
    },
  ];

  return (
    <XYCenter sx={{ width: "100vw", height: "100vh", alignContent: "center" }}>
      <form onSubmit={formik.handleSubmit}>
        <RecursiveContainer
          config={config}
          formik={formik}
          validationSchema={authSchema}
        />
        <CustomButton type="submit">Login</CustomButton>
      </form>
    </XYCenter>
  );
};
