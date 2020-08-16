import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AboutHero } from '../components/AboutHero';
import { Seo } from '../components/Seo';
import { history } from '../helpers/history';

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
  const { search } = useLocation();
  const [showEmailBanner, setShowEmailBanner] = useState(false);
  const [emailConfirmation, setEmailConfirmation] = useState(false);

  const handleBannerClick = () => {
    setShowEmailBanner(false);
    history.push('/');
  };

  useEffect(() => {
    const confirmed = new URLSearchParams(search).get('confirmation');
    setEmailConfirmation(confirmed === 'true');
    setShowEmailBanner(!!confirmed);
  }, [search]);

  return (
    <>
      <Seo title="Home" />
      {showEmailBanner && (
        <EmailConfirmationDialog
          onClick={handleBannerClick}
          confirmed={emailConfirmation}
        />
      )}
      <AboutHero />
    </>
  );
}

export { Home };
