import { messages } from "common";
import { useState } from "react";

const useMessage = () => {
  const [messageCount, setMessageCount] = useState(0);
  const message = messages[messageCount];

  const incrementMessage = () =>
    setMessageCount((curr) => (curr + 1) % messages.length);

  return [message, incrementMessage] as const;
};

export default useMessage;
