import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

import { history } from '../helpers/history';
import { Seo } from '../components/Seo';
import {
  resetEmailValidationSchema,
  resetPasswordValidationScema,
} from './FormTemplate';
import { CenterLayoutSmaller, CenterLayout } from '../components/Layout';
import { useAuthContext } from './Auth';
import { useParams, Link } from 'react-router-dom';

const ResetEmailForm = ({ setResetSuccess }) => {
  const [resetError, setResetError] = useState('');
  const { requestRecoveryEmail } = useAuthContext();

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
    },
    validationSchema: resetEmailValidationSchema,
    onSubmit: async ({ email }) => {
      await requestRecoveryEmail(email)
        .then(() => setResetSuccess(true))
        .catch((error) => {
          console.log(error);
          setResetError(error.message);
        });
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <h1 className="title is-size-3 has-text-centered">Recover password</h1>
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

      {resetError && (
        <>
          <div className="field">
            <div className="control">
              <p className="has-text-danger is-size">{resetError}</p>
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
            Send password reset email
          </button>
        </div>
      </div>
    </form>
  );
};

const ResetSuccess = () => {
  return (
    <div className="reset-success">
      <p className="is-size-3 has-text-centered">
        Please check your email for a link to reset your password.
      </p>
    </div>
  );
};

const ResetPasswordForm = ({ token }) => {
  const [ableToReset, setAbleToReset] = useState(true);
  const [mask, setMask] = useState(false);
  const [resetError, setResetError] = useState('');
  const { user, recoverUser } = useAuthContext();

  useEffect(() => {
    if (user) {
      setResetError("You're already signed in!");
      setAbleToReset(false);
    }
  }, [user]);

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
      password: '',
    },
    validationSchema: resetPasswordValidationScema,
    onSubmit: async ({ password }) => {
      if (!user) {
        await recoverUser(token, { password: password })
          .then(() => history.push('/profile'))
          .catch((error) => console.log('Something went wrong ', error));
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <h1 className="title is-size-3 has-text-centered">Reset Password</h1>
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
            disabled={!ableToReset}
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
            className="button is-primary is-fullwidth"
            type="submit"
            disabled={isSubmitting || resetError}
          >
            Reset
          </button>
        </div>
      </div>
      {resetError && (
        <>
          <div className="field">
            <div className="control has-text-centered">
              <p className="has-text-danger">
                {resetError} Perhaps you want to{' '}
                <Link to="/profile/update">change password?</Link>
              </p>
            </div>
          </div>
        </>
      )}
    </form>
  );
};

const Reset = () => {
  const { token } = useParams();
  const [resetSuccess, setResetSuccess] = useState(false);

  return (
    <>
      <Seo title="Reset" />
      {resetSuccess ? (
        <CenterLayout>
          <ResetSuccess />
        </CenterLayout>
      ) : (
        <CenterLayoutSmaller>
          {token ? (
            <ResetPasswordForm token={token} />
          ) : (
            <ResetEmailForm
              resetSuccess={resetSuccess}
              setResetSuccess={setResetSuccess}
            />
          )}
        </CenterLayoutSmaller>
      )}
    </>
  );
};

export { Reset };
