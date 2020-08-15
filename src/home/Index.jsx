import React from 'react';
import { AboutHero } from '../components/AboutHero';
import { Seo } from '../components/Seo';
import { useLocation } from 'react-router-dom';

function Home() {
  const { hash } = useLocation();
  console.log(hash);
  if (hash.startsWith('#confirmation_token=')) {
    const confirmationToken = hash.replace('#confirmation_token=', '');
    console.log(confirmationToken);
  } else if (hash.startsWith('#invite_token=')) {
    const inviteToken = hash.replace('#invite_token=', '');
    console.log(inviteToken);
  }
  return (
    <>
      <Seo title="Home" />
      <AboutHero />
    </>
  );
}

export { Home };
