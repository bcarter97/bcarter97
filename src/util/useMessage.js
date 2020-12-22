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

export default useMessage;
