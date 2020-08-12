import React from 'react';
import { AboutHero } from '../components/AboutHero';
import { Seo } from '../components/Seo';

function Home() {
  return (
    <>
      <Seo title="Home" />
      <AboutHero />
    </>
  );
}

export { Home };
