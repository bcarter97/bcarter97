import { useEffect, useState } from "react";

import quirkyMessages from "../util/quirky";

const useMessage = () => {
  const [messageCount, setMessageCount] = useState(0);
  const [message, setMessage] = useState(quirkyMessages[messageCount]);

  useEffect(() => {
    setMessage(quirkyMessages[messageCount]);
  }, [messageCount]);

  const incrementMessage = () => {
    setMessageCount((messageCount + 1) % quirkyMessages.length);
  };

  return [message, incrementMessage];
};
const AboutInfo = () => {
  const [message, incrementMessage] = useMessage();
  return (
    <div className="columns is-multiline is-vcentered is-centered">
      <div className="column is-10">
        <p className="is-size-5-touch is-size-4-desktop has-text-weight-bold">
          Associate Software Developer at{" "}
          <a className="social-link" href="https://www.sky.com/">
            Sky
          </a>
          . {message}.
        </p>
      </div>

      <div className="column is-2">
        <button
          className="button is-rounded message-next-button"
          onClick={incrementMessage}
        >
          <span className="icon is-large">
            <i className="fas fa-arrow-right fa-2x" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutInfo;
