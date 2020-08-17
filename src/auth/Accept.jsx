import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';

import { history } from '../helpers/history';
import { CenterLayoutSmaller } from '../components/Layout';
import { useAuthContext } from './Auth';
import { resetPasswordValidationScema } from '../auth/FormTemplate';

const Accept = () => {
  const { token } = useParams();

  return (
    <CenterLayoutSmaller>
      <AcceptInviteForm token={token} />
    </CenterLayoutSmaller>
  );
};

const AcceptInviteForm = ({ token }) => {
  const [ableToSet, setAbleToSet] = useState(true);
  const [mask, setMask] = useState(false);
  const [inviteError, setInviteError] = useState('');
  const { user, acceptInvite } = useAuthContext();

  useEffect(() => {
    if (user) {
      setInviteError("You're already signed in!");
      setAbleToSet(false);
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
      await acceptInvite(token, password)
        .then(() => history.push('/profile'))
        .catch(() =>
          setInviteError(
            "Something's up! Have you already accepted the invite?"
          )
        );
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <h1 className="title is-size-3 has-text-centered">Set Password</h1>
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
            disabled={!ableToSet}
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
            disabled={isSubmitting || inviteError}
          >
            Set
          </button>
        </div>
      </div>
      {inviteError && (
        <div className="field">
          <div className="control has-text-centered">
            <p className="has-text-danger">{inviteError}</p>
          </div>
        </div>
      )}
    </form>
  );
};
export { Accept };
