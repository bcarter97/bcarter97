import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

import { Seo } from '../components/Seo';
import { useAuthContext } from './Auth';
import { validationSchema } from './FormTemplate';
import { CenterLayoutSmaller } from '../components/Layout';

const SignUpForm = ({ setUser }) => {
  const [mask, setMask] = useState(false);
  const [signupError, setSignupError] = useState('');

  const { signupUser } = useAuthContext();

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
          setUser(user);
        })
        .catch((error) =>
          setSignupError(error.message.replace('invalid_grant: ', ''))
        );
    },
  });

  return (
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
      {signupError && (
        <>
          <div className="field">
            <div className="control">
              <p className="has-text-danger is-size">{signupError}</p>
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
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
};

const VerificationNeeded = () => {
  return (
    <div className="verification-warning">
      <p className="is-size-3 has-text-centered has-text-weight-semibold">
        You're all signed up!
      </p>
      <p className="is-size-3 has-text-centered">
        Check your email for a verification link to sign in.
      </p>
    </div>
  );
};

const SignUp = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user && user.confirmation_sent_at) {
      console.log('Awaiting verification');
    }
  }, [user]);

  return (
    <>
      <Seo title="Sign up" />
      <CenterLayoutSmaller>
        {user && user.confirmation_sent_at ? (
          <VerificationNeeded />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
      </CenterLayoutSmaller>
    </>
  );
};

export { SignUp };
