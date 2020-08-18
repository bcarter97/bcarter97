import React from "react";

import {
  AboutDetails,
  ProfilePictureLarge,
  GitHubButton,
  LinkedInButton,
  MailButton,
} from "../components/MediaElements";

const AboutHero = () => {
  return (
    <section className="hero about-hero is-medium is-bold is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-one-quarter">
              <div className="field">
                <div className="control">
                  <ProfilePictureLarge />
                </div>
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
                <div className="control">
                  <div className="buttons social-buttons is-centered">
                    <GitHubButton />
                    <LinkedInButton />
                    <MailButton />
                  </div>
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
