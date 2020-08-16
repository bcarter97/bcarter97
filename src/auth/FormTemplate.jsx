import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .required('Password is required'),
});

const resetValidationSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
});

export { validationSchema, resetValidationSchema };
