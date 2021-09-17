import { useEffect, useState } from "react";
import { messageList } from "util/messages";

const useMessage = () => {
  const [messageCount, setMessageCount] = useState(0);
  const [message, setMessage] = useState(messageList[messageCount]);

  useEffect(() => {
    setMessage(messageList[messageCount]);
  }, [messageCount]);

  const incrementMessage = () => {
    setMessageCount((curr) => (curr + 1) % messageList.length);
  };

  return [message, incrementMessage];
};

export default useMessage;
