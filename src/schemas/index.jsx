import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(25)
    .required('Please Enter Your Name'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, 'Password must contain a number and a special character')
    .required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  age: Yup.number()
    .min(18, 'You must be at least 18 years old')
    .max(99)
    .required('Age is required'),
    TnC: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
});