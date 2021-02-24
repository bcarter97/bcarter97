import AboutInfo from "../../components/aboutInfo/AboutInfo";
import { LayoutDefault } from "../../components/layout/Layout";
import useMessage from "../../hooks/useMessage";
import ProfilePicture from "../../media/ProfilePicture";
import { GITHUB_URL, LINKEDIN_URL, MAIL_URL } from "../../util/config";

const SocialButton = ({ name, url }) => {
  const iconName = name === "mail" ? "far fa-envelope" : `fab fa-${name}`;
  return (
    <a
      className={`icon text-icon is-large social-button ${name}-button`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        className={`${iconName} fa-2x bottom-button-icon`}
        aria-hidden="true"
      />
    </a>
  );
};

const GitHubButton = () => {
  return <SocialButton name="github" url={GITHUB_URL} />;
};

const LinkedinButton = () => {
  return <SocialButton name="linkedin-in" url={LINKEDIN_URL} />;
};

const MailButton = () => {
  return <SocialButton name="mail" url={MAIL_URL} />;
};

const Home = () => {
  const [message, incrementMessage] = useMessage();

  return (
    <LayoutDefault title="Home">
      <div className="block about-section">
        <ProfilePicture handleClick={incrementMessage} />
      </div>

      <div className="block about-section about-info">
        <h1 className="title is-size-3 has-text-centered has-text-weight-bold">
          Hi, I'm Ben.
        </h1>
        <AboutInfo message={message} />
      </div>

      <div className="block has-text-right about-buttons">
        <MailButton />
        <LinkedinButton />
        <GitHubButton />
      </div>
    </LayoutDefault>
  );
};

export default Home;
