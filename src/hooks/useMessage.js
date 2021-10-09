import { messages } from "common";
import { useEffect, useState } from "react";

const useMessage = () => {
  const [messageCount, setMessageCount] = useState(0);
  const [message, setMessage] = useState(messages[messageCount]);

  useEffect(() => {
    setMessage(messages[messageCount]);
  }, [messageCount]);

  const incrementMessage = () => {
    setMessageCount((curr) => (curr + 1) % messages.length);
  };

  return [message, incrementMessage];
};

export default useMessage;
