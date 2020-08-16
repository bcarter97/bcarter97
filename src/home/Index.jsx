import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AboutHero } from '../components/AboutHero';
import { Seo } from '../components/Seo';
import { history } from '../helpers/history';

const EmailConfirmationDialog = ({ onClick }) => {
  return (
    <div
      className="notification is-primary has-text-centered"
      onClick={onClick}
    >
      <p className="is-size-4 has-text-weight-semibold">Email confirmed</p>
      <p>Click anywhere to close</p>
    </div>
  );
};

function Home() {
  const { search } = useLocation();
  const [emailConfirmation, setEmailConfirmation] = useState(false);

  const handleBannerClick = () => {
    setEmailConfirmation(false);
    history.push('/');
  };

  useEffect(() => {
    const confirmed = new URLSearchParams(search).get('confirmation');
    setEmailConfirmation(confirmed);
  }, [search]);

  return (
    <>
      <Seo title="Home" />
      {emailConfirmation && (
        <EmailConfirmationDialog onClick={handleBannerClick} />
      )}
      <AboutHero />
    </>
  );
}

export { Home };
