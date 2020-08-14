import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useIdentityContext } from 'react-netlify-identity';

import { validationSchema } from './FormTemplate';
import { CenterLayoutSmaller } from '../components/Layout';
import { history } from '../helpers/history';

const Login = () => {
  const [mask, setMask] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { loginUser } = useIdentityContext();

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
      await loginUser(email, password)
        .then((user) => {
          history.push('/'); // Redirect back to main page
        })
        .catch((err) => {
          console.log(err);
          if (err.message === 'invalid_grant: Email not confirmed') {
            setLoginError('Email not confirmed');
          } else if (
            err.message === 'invalid_grant: No user found with this email'
          ) {
            setLoginError('No user found with this email');
          } else if ((err.message = 'invalid_grant: Invalid Password')) {
            setLoginError('Invalid password');
          }
        });
    },
  });

  return (
    <CenterLayoutSmaller>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <h1 className="title is-size-2 has-text-centered">Login</h1>
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
        {loginError && (
          <>
            <div className="field">
              <div className="control">
                <p className="has-text-danger is-size">{loginError}</p>
              </div>
            </div>
          </>
        )}
        <div className="field">
          <div className="control">
            <button
              className="button is-primary"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </CenterLayoutSmaller>
  );
};

export { Login };
