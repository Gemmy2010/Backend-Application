import React from "react";

import { MessageImage, MyMessageContainer } from "../styles/messages";

const MyMessage = ({ message, isMyMessage }) => {
  if (message?.attachments && message?.attachments?.length > 0) {
    return (
      <MessageImage
        src={message.attachments[0].file}
        isMyMessage={isMyMessage}
      />
    );
  }

  return <MyMessageContainer>{message.text}</MyMessageContainer>;
};

export default MyMessage;
