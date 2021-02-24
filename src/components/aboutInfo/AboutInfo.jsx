const AboutInfo = ({ message }) => {
  return (
    <div className="columns info-columns is-multiline is-vcentered is-centered is-gapless">
      <div className="column is-12" data-test-id="about-info-column">
        <p className="is-size-5-touch is-size-4-desktop has-text-weight-bold">
          Associate Software Developer at{" "}
          <a
            className="nav-link"
            href="https://www.sky.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sky
          </a>
          .{" "}
          <span className="about-message" data-test-id="about-message">
            {message}
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;
