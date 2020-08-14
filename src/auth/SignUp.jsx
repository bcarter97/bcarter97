import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { CenterLayoutSmaller } from '../components/Layout';
import { useIdentityContext } from 'react-netlify-identity';

const validationSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .required('Password is required'),
});

const SignUp = () => {
  const [mask, setMask] = useState(false);
  const { signupUser } = useIdentityContext();

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async ({ email, password }) => {
      await signupUser(email, password)
        .then((user) => {
          console.log('Success! Signed up', user);
        })
        .catch((err) => console.error(err));
    },
  });

  return (
    <CenterLayoutSmaller>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <h1 className="title is-size-2 has-text-centered">Sign up</h1>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${
                  errors.email && touched.email ? 'is-danger' : ''
                }`}
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.email}
                type="email"
                placeholder="me@example.com"
                autoComplete="on"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              {errors.email && touched.email && (
                <p className="help is-danger">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${
                  errors.password && touched.password ? 'is-danger' : ''
                }`}
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.password}
                type={`${mask ? 'text' : 'password'}`}
                placeholder="Password"
                autoComplete="on"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              <span
                className="icon mask-icon is-small is-right"
                onClick={() => {
                  setMask(!mask);
                }}
              >
                <i className={`far fa-eye${mask ? '' : '-slash'}`}></i>
              </span>
            </div>
            {errors.password && touched.password && (
              <p className="help is-danger">{errors.password}</p>
            )}
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </CenterLayoutSmaller>
  );
};

export { SignUp };
