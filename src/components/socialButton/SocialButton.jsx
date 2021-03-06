import { GITHUB_URL, LINKEDIN_URL, MAIL_URL } from "../../util/config/config";

const socialLinks = [
  {
    name: "github",
    url: GITHUB_URL,
    icon: "fab fa-github",
  },
  {
    name: "linkedin",
    url: LINKEDIN_URL,
    icon: "fab fa-linkedin-in",
  },
  {
    name: "mail",
    url: MAIL_URL,
    icon: "far fa-envelope",
  },
];

const SocialButton = ({ name }) => {
  const { icon, url } = socialLinks.find((link) => link.name === name);

  return (
    <a
      className={`icon is-large social-button ${name}-button`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`${icon} fa-2x bottom-button-icon`} aria-hidden="true" />
    </a>
  );
};

export default SocialButton;
