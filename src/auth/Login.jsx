import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Seo } from '../components/Seo';
import { validationSchema } from './FormTemplate';
import { CenterLayoutSmaller } from '../components/Layout';
import { useAuthContext } from './Auth';
import { history } from '../helpers/history';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [mask, setMask] = useState(false);
  const [loginError, setLoginError] = useState('');

  const { loginUser } = useAuthContext();

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
        .then((user) => history.push('/'))
        .catch((error) =>
          setLoginError(error.message.replace('invalid_grant: ', ''))
        );
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
              className="button is-primary is-fullwidth"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </div>
        </div>
        <div className="field">
          <div className="control has-text-centered">
            <Link to="/reset">Forgot password?</Link>
          </div>
        </div>
      </form>
    </CenterLayoutSmaller>
  );
};

const Login = () => {
  return (
    <>
      <Seo title="Log in" />
      <LoginForm />
    </>
  );
};

export { Login };
