const AboutInfo = ({ message }) => {
  return (
    <div className="columns info-columns is-multiline is-vcentered is-centered is-gapless">
      <div className="column is-12">
        <p className="is-size-5-touch is-size-4-desktop has-text-weight-bold">
          Associate Software Developer at{" "}
          <a className="social-link" href="https://www.sky.com/">
            Sky
          </a>
          . <span className="about-message">{message}</span>.
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;
