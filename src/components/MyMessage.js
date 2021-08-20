import React from "react";

import { MessageImage, MyMessageContainer } from "../styles/messages";

const MyMessage = ({ message }) => {
  if (message?.attachments && message?.attachments?.length > 0) {
    return <MessageImage src={message.attachments[0].file} />;
  }

  return <MyMessageContainer>{message.text}</MyMessageContainer>;
};

export default MyMessage;
