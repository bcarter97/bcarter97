import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { Body } from '../components';
import pp from '../images/about/pp.jpg';
import about from '../markdown/about.md';

const SocialButtons = () => {
  return (
    <div className="field is-grouped-centered is-grouped is-spaced">
      <a
        className="navbar-item has-text-black"
        href="https://github.com/bcarter97"
      >
        <span className="icon">
          <i className="fa fa-github fa-lg" aria-hidden="true" />
        </span>
      </a>
      <a
        className="navbar-item has-text-info"
        href="https://www.linkedin.com/in/bcarter97/"
      >
        <span className="icon">
          <i className="fa fa-linkedin fa-lg" aria-hidden="true" />
        </span>
      </a>
    </div>
  );
};

const ProfilePicture = () => {
  return (
    <figure class="image container is-128x128">
      <img className="is-rounded" src={pp} alt="Profile picture" />
    </figure>
  );
};

const Details = () => {
  const [aboutInfo, setAboutInfo] = useState('');
  useEffect(() => {
    fetch(about)
      .then((res) => res.text())
      .then((text) => setAboutInfo(text));
  }, []);

  return <Markdown source={aboutInfo} />;
};

const About = () => {
  return (
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="card">
              <div class="card-content">
                <ProfilePicture />
                <p className="title has-text-centered">Ben Carter</p>
                <div class="content">
                  <Details />
                </div>
              </div>
              <div className="card-footer">
                <p className="card-footer-item">
                  <SocialButtons />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  return <About />;
}

export { Home };
