import React from "react";

import { AboutDetails, ProfilePictureLarge } from "../components/MediaElements";

const AboutHero = () => {
  return (
    <section className="hero about-hero is-medium is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-half">
              <h1 className="title is-size-1 has-text-left">
                Hi, I'm Ben Carter.
              </h1>
              <AboutDetails />
            </div>
            <div className="column is-one-quarter">
              <ProfilePictureLarge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutHero };
