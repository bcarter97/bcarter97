import React from 'react';
import Markdown from 'react-markdown';
import profilePicMedium from '../images/about/profilePicMedium.jpg';

const GitHubLink = 'https://github.com/bcarter97';
const LinkedInLink = 'https://www.linkedin.com/in/bcarter97/';

const SocialButton = ({ url, faIcon, color }) => {
  return (
    <a className={`navbar-item has-text-${color}`} href={url}>
      <span className="icon">
        <i className={`fa fa-${faIcon} fa-lg`} aria-hidden="true" />
      </span>
    </a>
  );
};

const GitHubButton = ({ classOverride = '' }) => {
  return (
    <SocialButton
      url={GitHubLink}
      faIcon="github"
      color={`black ${classOverride}`}
    />
  );
};

const LinkedInButton = ({ classOverride = '' }) => {
  return (
    <SocialButton
      url={LinkedInLink}
      faIcon="linkedin"
      color={`info ${classOverride}`}
    />
  );
};

const SocialButtons = () => {
  return (
    <div className="field is-grouped is-spaced">
      <GitHubButton />
      <LinkedInButton />
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
      <img
        className="is-rounded image-module"
        src={profilePicMedium}
        alt="Profile"
      />
    </figure>
  );
};

const AboutDetails = () => {
  return (
    <p className="is-size-3 has-text-left">
      I'm software developer based in London. You can check out my stuff on{' '}
      <a className="social-link github-link" href={GitHubLink}>
        GitHub
      </a>
      , or connect with me on{' '}
      <a className="social-link linkedin-link" href={LinkedInLink}>
        LinkedIn
      </a>
      .
    </p>
  );
};

export {
  GitHubLink,
  LinkedInLink,
  GitHubButton,
  LinkedInButton,
  SocialButtons,
  AcademicDetails,
  AboutDetails,
  ProfilePicture,
  ProfilePictureLarge,
};
