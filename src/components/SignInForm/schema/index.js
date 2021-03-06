import * as yup from "yup"

export default yup
  .object()
  .shape({
    username: yup
      .string()
      .required("Username missing"),
    password: yup
      .string()
      .required("Password missing")
  })