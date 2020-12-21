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
  const [message] = useMessage();
  return (
    <div className="columns info-columns is-multiline is-vcentered is-centered is-gapless">
      <div className="column is-12">
        <p className="is-size-5-touch is-size-4-desktop has-text-weight-bold">
          Associate Software Developer at{" "}
          <a className="social-link" href="https://www.sky.com/">
            Sky
          </a>
          . {message}.
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;
