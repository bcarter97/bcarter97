import React from 'react';
import { ProfilePictureLarge } from '../components/MediaElements';

const AboutHero = () => {
  return (
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-half">
              <div className="content">
                <h1 className="title is-size-1">Hi, I'm Ben Carter.</h1>
              </div>
            </div>
            <div className="column is-half">
              <ProfilePictureLarge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutHero };
