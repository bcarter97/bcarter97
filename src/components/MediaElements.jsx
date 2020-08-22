import React from "react";
import { NavLink } from "react-router-dom";

import profilePic from "../images/about/profilePicXSmall.jpg";

const GitHubLink = "https://github.com/bcarter97";
const LinkedInLink = "https://www.linkedin.com/in/bcarter97/";
const MailLink = "mailto:ben@carter.gg";

const AuthButtonStyle = "nav-item auth-button button is-outlined is-rounded";

const LogoutButton = ({ onClick }) => {
  return (
    <p className="control">
      <button className={AuthButtonStyle} onClick={onClick}>
        Log out
      </button>
    </p>
  );
};

const LoginButton = ({ onClick }) => {
  return (
    <p className="control">
      <NavLink className={AuthButtonStyle} to="/login" onClick={onClick}>
        Login
      </NavLink>
    </p>
  );
};

const SignupButton = ({ onClick }) => {
  return (
    <p className="control">
      <NavLink className={AuthButtonStyle} to="/signup" onClick={onClick}>
        Sign up
      </NavLink>
    </p>
  );
};

const desktopStyle = (mobile) => {
  return mobile
    ? "is-hidden-desktop mobile-icon"
    : "is-hidden-touch desktop-icon";
};

const SocialButton = ({ url, faIcon, mobile }) => {
  return (
    <a className="navbar-item navbar-icon" href={url}>
      <span className="icon is-large">
        <i className={`${faIcon} fa-2x`} aria-hidden="true" />
      </span>
    </a>
  );
};

const GitHubButton = ({ mobile }) => {
  return (
    <span className="github-button">
      <SocialButton url={GitHubLink} faIcon="fab fa-github" mobile={mobile} />
    </span>
  );
};

const LinkedInButton = ({ mobile }) => {
  return (
    <span className="linkedin-button">
      <SocialButton
        url={LinkedInLink}
        faIcon="fab fa-linkedin-in"
        mobile={mobile}
      />
    </span>
  );
};

const MailButton = ({ mobile }) => {
  return (
    <span className="mail-button">
      <SocialButton url={MailLink} faIcon="far fa-envelope" mobile={mobile} />
    </span>
  );
};

const ProfilePictureLarge = () => {
  return (
    <figure className="image container is-256x256">
      <img className="image-module" src={profilePic} alt="Profile" />
    </figure>
  );
};

const AboutDetails = () => {
  return (
    <span className="is-size-3 has-text-left">
      <p>
        I write code and sometimes it works. Click these cool buttons to see me
        in different places. This page will now self destruct.
      </p>
    </span>
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
  LoginButton,
  SignupButton,
};
