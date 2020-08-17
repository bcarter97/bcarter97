import React, { useState, useEffect } from 'react';
import { AboutHero } from '../components/AboutHero';
import { Seo } from '../components/Seo';
import { history } from '../helpers/history';
import { useAuthContext } from '../auth/Auth';

const EmailConfirmationDialog = ({ onClick, success }) => {
  return success ? (
    <div
      className="notification is-primary has-text-centered"
      onClick={onClick}
    >
      <p className="is-size-4 has-text-weight-semibold">Email confirmed</p>
      <p>Click anywhere to close</p>
    </div>
  ) : (
    <div className="notification is-danger has-text-centered" onClick={onClick}>
      <p className="is-size-4 has-text-weight-semibold">
        Something's up! Have you already confirmed this email?
      </p>
      <p>Click anywhere to close</p>
    </div>
  );
};

function Home() {
  const { tokenParam } = useAuthContext();
  const [confirmationSuccess, setConfirmationSuccess] = useState(true);

  useEffect(() => {
    if (tokenParam) {
      if (tokenParam.confirmation_token) {
        setConfirmationSuccess(true);
      } else if (tokenParam.recovery_token) {
        history.push(`/reset/${tokenParam.recovery_token}`);
      }
    }
  }, [tokenParam]);
  console.log(confirmationSuccess);

  return (
    <>
      <Seo title="Home" />
      {confirmationSuccess && <EmailConfirmationDialog success={true} />}
      <AboutHero />
    </>
  );
}

export { Home };
