import React from 'react';
import profilePic from '../images/about/profilePicXSmall.jpg';

const GitHubLink = 'https://github.com/bcarter97';
const LinkedInLink = 'https://www.linkedin.com/in/bcarter97/';
const MailLink = 'mailto:ben@carter.gg';

const SocialButton = ({ url, faIcon, color }) => {
  return (
    <a className={`navbar-item navbar-icon has-text-${color}`} href={url}>
      <span className="icon is-medium">
        <i className={`${faIcon} fa-lg`} aria-hidden="true" />
      </span>
    </a>
  );
};

const GitHubButton = ({ classOverride = '' }) => {
  return (
    <SocialButton
      url={GitHubLink}
      faIcon="fab fa-github"
      color={`black ${classOverride}`}
    />
  );
};

const LinkedInButton = ({ classOverride = '' }) => {
  return (
    <SocialButton
      url={LinkedInLink}
      faIcon="fab fa-linkedin-in"
      color={`black ${classOverride}`}
    />
  );
};

const MailButton = ({ classOverride = '' }) => {
  return (
    <SocialButton
      url={MailLink}
      faIcon="fas fa-envelope"
      color={`black ${classOverride}`}
    />
  );
};

const SocialButtons = () => {
  return (
    <div className="field is-grouped">
      <GitHubButton />
      <LinkedInButton />
      <MailButton />
    </div>
  );
};

const ProfilePicture = () => {
  return (
    <figure className="image container is-128x128">
      <img className="is-rounded" src={profilePic} alt="Profile" />
    </figure>
  );
};

const ProfilePictureLarge = () => {
  return (
    <figure className="image container is-256x256">
      <img className="is-rounded image-module" src={profilePic} alt="Profile" />
    </figure>
  );
};

const AboutDetails = () => {
  return (
    <p className="is-size-3 has-text-left">
      I'm a software developer based in London. You can check out my stuff on{' '}
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
  MailButton,
  SocialButtons,
  AboutDetails,
  ProfilePicture,
  ProfilePictureLarge,
};
