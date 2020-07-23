import React from 'react';
import { Body, MiddleColumn, AboutCard } from '../components';
import { AboutHero } from '../components/AboutHero';

function Home() {
  return (
    <Body>
      <MiddleColumn>
        <AboutCard />
      </MiddleColumn>
    </Body>
  );
}

export { Home };
