import AboutInfo from "../../components/AboutInfo";
import ProfilePicture from "../../media/ProfilePicture";
import useMessage from "../../util/useMessage";

const githubUrl = "https://github.com/bcarter97";
const linkedinUrl = "https://www.linkedin.com/in/bcarter97/";
const mailUrl = "mailto:ben@carter.gg";

const SocialButton = ({ name, url }) => {
  const iconName = name === "mail" ? "far fa-envelope" : `fab fa-${name}`;
  return (
    <a
      className={`icon text-icon is-large social-button ${name}-button`}
      href={url}
    >
      <i
        className={`${iconName} fa-2x bottom-button-icon`}
        aria-hidden="true"
      />
    </a>
  );
};

const GitHubButton = () => {
  return <SocialButton name="github" url={githubUrl} />;
};

const LinkedinButton = () => {
  return <SocialButton name="linkedin-in" url={linkedinUrl} />;
};

const MailButton = () => {
  return <SocialButton name="mail" url={mailUrl} />;
};

const Home = () => {
  const [message, incrementMessage] = useMessage();

  return (
    <section className="hero about-hero">
      <div className="hero-body about-hero-body">
        <div className="container">
          <div className="columns is-multiline is-vcentered is-centered">
            <div className="column image-column is-half">
              <ProfilePicture incrementMessage={incrementMessage} />
            </div>
          </div>
          <div className="columns is-multiline is-vcentered is-centered">
            <div className="column is-half about-column">
              <h1 className="title is-size-3 has-text-centered has-text-weight-bold">
                Hi, I'm Ben.
              </h1>

              <AboutInfo message={message} />
            </div>
          </div>
        </div>

        <div className="columns is-multiline is-vcentered is-centered">
          <div className="column is-half is-pulled-right has-text-right button-column">
            <MailButton />
            <LinkedinButton />
            <GitHubButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
