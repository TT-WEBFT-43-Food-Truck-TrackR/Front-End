import * as yup from "yup"

export default yup
  .object()
  .shape({
    username: yup
      .string()
      .min(6, "Username must be at least 6 characters in length")
      .required("Username is a required field"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters in length")
      .required("Password is a required field"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is a required field"),
    terms: yup
      .boolean()
      .oneOf([true])
})