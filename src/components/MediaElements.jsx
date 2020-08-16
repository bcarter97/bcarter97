import React from 'react';
import profilePic from '../images/about/profilePicXSmall.jpg';

const GitHubLink = 'https://github.com/bcarter97';
const LinkedInLink = 'https://www.linkedin.com/in/bcarter97/';
const MailLink = 'mailto:ben@carter.gg';

const LogoutButton = ({ onClick }) => {
  return (
    <button className="nav-item button is-outlined" onClick={onClick}>
      Log out
    </button>
  );
};

const desktopStyle = (mobile) => {
  return mobile
    ? 'is-hidden-desktop mobile-icon'
    : 'is-hidden-touch desktop-icon';
};

const SocialButton = ({ url, faIcon, mobile }) => {
  return (
    <a className={`navbar-item navbar-icon ${desktopStyle(mobile)}`} href={url}>
      <span className="icon is-medium">
        <i className={`${faIcon} fa-lg`} aria-hidden="true" />
      </span>
    </a>
  );
};

const GitHubButton = ({ mobile }) => {
  return (
    <SocialButton url={GitHubLink} faIcon="fab fa-github" mobile={mobile} />
  );
};

const LinkedInButton = ({ mobile }) => {
  return (
    <SocialButton
      url={LinkedInLink}
      faIcon="fab fa-linkedin-in"
      mobile={mobile}
    />
  );
};

const MailButton = ({ mobile }) => {
  return (
    <SocialButton url={MailLink} faIcon="far fa-envelope" mobile={mobile} />
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
  AboutDetails,
  ProfilePictureLarge,
  desktopStyle,
  LogoutButton,
};
