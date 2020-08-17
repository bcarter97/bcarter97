import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .required('Password is required'),
});

const resetEmailValidationSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
});

const resetPasswordValidationScema = Yup.object({
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .required('Password is required'),
});

export {
  validationSchema,
  resetEmailValidationSchema,
  resetPasswordValidationScema,
};
