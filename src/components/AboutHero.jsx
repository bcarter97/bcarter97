import React from 'react';
import { ProfilePictureLarge } from '../components/MediaElements';

const AboutHero = () => {
  return (
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-half">
              <ProfilePictureLarge />
              <h1 className="title is-size-1 has-text-centered">
                Hi, I'm Ben Carter.
              </h1>
              <p className="is-size-3">
                I'm a software developer based in London.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutHero };
