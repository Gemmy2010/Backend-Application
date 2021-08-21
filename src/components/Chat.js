import React, { useEffect } from "react";

import { ChatContainer } from "../styles/chat";
import { useLocation } from "react-router-dom";

const Chat = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(1000, 1000);
  }, [pathname]);
  return <ChatContainer>{children}</ChatContainer>;
};

export default Chat;
