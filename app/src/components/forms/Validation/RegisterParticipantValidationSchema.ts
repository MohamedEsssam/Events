import * as Yup from "yup";

export const RegisterParticipantValidation = Yup.object().shape({
  email: Yup.string()
    .email("Enter valid email")
    .required("Email is required")
    .label("Email"),
  firstName: Yup.string().required("FirstName is required").label("FirstName"),
  lastName: Yup.string().required("LastName is required").label("LastName"),
  password: Yup.string()
    .required("Password is required")
    .min(3)
    .label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), "null"], "Passwords don't match")
    .required()
    .label("Confirm password"),
});
