import React from "react";

import { ChatContainer } from "../styles/chat";

const Chat = ({ children }) => {
  return <ChatContainer>{children}</ChatContainer>;
};

export default Chat;
