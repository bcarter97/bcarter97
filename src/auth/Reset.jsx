import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Seo } from '../components/Seo';
import { resetValidationSchema } from './FormTemplate';
import { CenterLayoutSmaller, CenterLayout } from '../components/Layout';
import { useAuthContext } from './Auth';
import { useParams } from 'react-router-dom';

const ResetForm = ({ setResetSuccess }) => {
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
    validationSchema: resetValidationSchema,
    onSubmit: async ({ email }) => {
      await requestRecoveryEmail(email)
        .then(() => setResetSuccess(true))
        .catch((error) => setResetError(error.message));
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

const Reset = () => {
  const { token } = useParams();
  console.log(token);
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
          <ResetForm
            resetSuccess={resetSuccess}
            setResetSuccess={setResetSuccess}
          />
        </CenterLayoutSmaller>
      )}
    </>
  );
};

export { Reset };
