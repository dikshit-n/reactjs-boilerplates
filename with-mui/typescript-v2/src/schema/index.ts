// all schemas for forms in this app goes here

import { yup } from "src/utils";

// auth
export const authSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .password("Invalid Password")
    .required("Password is required"),
});
