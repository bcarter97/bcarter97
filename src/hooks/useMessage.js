import { useEffect, useState } from "react";

import { messageList } from "../util/common";

const useMessage = () => {
  const [messageCount, setMessageCount] = useState(0);
  const [message, setMessage] = useState(messageList[messageCount]);

  useEffect(() => {
    setMessage(messageList[messageCount]);
  }, [messageCount]);

  const incrementMessage = () => {
    setMessageCount((messageCount + 1) % messageList.length);
  };

  return [message, incrementMessage];
};

export default useMessage;
