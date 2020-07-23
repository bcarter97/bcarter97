import React from 'react';
import Markdown from 'react-markdown';
import profilePicSmall from '../images/about/profilePicSmall.jpg';
import profilePicMedium from '../images/about/profilePicMedium.jpg';

const SocialButton = ({ url, faIcon, color }) => {
  return (
    <a className={`navbar-item has-text-${color}`} href={url}>
      <span className="icon">
        <i className={`fa fa-${faIcon} fa-lg`} aria-hidden="true" />
      </span>
    </a>
  );
};

const SocialButtons = () => {
  return (
    <div className="field is-grouped is-spaced">
      <SocialButton
        url="https://github.com/bcarter97"
        faIcon="github"
        color="black"
      />
      <SocialButton
        url="https://www.linkedin.com/in/bcarter97/"
        faIcon="linkedin"
        color="info"
      />
    </div>
  );
};

const AcademicDetails = () => {
  return (
    <Markdown
      source={`---
## Academic

| University of Sussex          |         | Grade |
|-------------------------------|---------|-------|
| Computer Science BSc          | 2016-19 | 2.1   |
| Advanced Computer Science MSc | 2019-20 | 1     |`}
    />
  );
};

const ProfilePicture = () => {
  return (
    <figure class="image container is-128x128">
      <img className="is-rounded" src={profilePicMedium} alt="Profile" />
    </figure>
  );
};

const ProfilePictureLarge = () => {
  return (
    <figure class="image container is-256x256">
      <img className="is-rounded" src={profilePicMedium} alt="Profile" />
    </figure>
  );
};

const AboutDetails = () => {
  return (
    <p className="is-size-4">
      Hi, my name is Ben, a software developer based in London.
    </p>
  );
};

export {
  SocialButtons,
  AcademicDetails,
  AboutDetails,
  ProfilePicture,
  ProfilePictureLarge,
};
