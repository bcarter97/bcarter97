import React, { useEffect } from 'react';
import { AboutHero } from '../components/AboutHero';
import { Seo } from '../components/Seo';
import { history } from '../helpers/history';
import { useAuthContext } from '../auth/Auth';

function Home() {
  const { tokenParam } = useAuthContext();

  useEffect(() => {
    console.log(tokenParam);
    if (tokenParam) {
      if (tokenParam.confirmation_token) {
        history.push(`/confirm/${tokenParam.confirmation_token}`);
      } else if (tokenParam.recovery_token) {
        history.push(`/reset/${tokenParam.recovery_token}`);
      } else if (tokenParam.invite_token) {
        history.push(`/accept/${tokenParam.invite_token}`);
      }
    }
  }, [tokenParam]);

  return (
    <>
      <Seo title="Home" />
      <AboutHero />
    </>
  );
}

export { Home };
