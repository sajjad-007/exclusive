import * as Yup from "yup";
const emailRegx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const phoneNumberRegx = /^(?:(?:\+|00)88|01)?\d{11}$/;
const LoginValidation = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .matches(emailRegx, "Check your email format")
    .required("Please enter your email"),
  phoneNumber: Yup.string()
    // .matches(phoneNumberRegx, "Check your phone number format")
    .required("Please enter your Phone Number"),
  firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Please enter your Name'),
  password: Yup.string()
    .min(5, "minimum 5 characters required")
    .max(14, "maximum 14 characters")
    .required("Please enter your password"),
});

export default LoginValidation;
