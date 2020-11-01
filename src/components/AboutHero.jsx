import React from "react";

import {
  AboutDetails,
  GitHubButton,
  LinkedInButton,
  MailButton,
  ProfilePictureLarge,
} from "../components/MediaElements";

const AboutHero = () => {
  return (
    <section className="hero about-hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-multiline is-vcentered is-centered">
            <div className="image-column column is-one-quarter">
              <div className="field">
                <ProfilePictureLarge />
              </div>
            </div>
            <div className="column is-half">
              <div className="field has-text-centered">
                <h1 className="title is-size-1">Hi, I'm Ben.</h1>
              </div>
              <div className="field">
                <AboutDetails />
              </div>
              <div className="field">
                <div className="buttons social-buttons">
                  <GitHubButton />
                  <LinkedInButton />
                  <MailButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutHero };
