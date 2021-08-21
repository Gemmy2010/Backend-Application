import React from "react";

import {
  MessageImage,
  OtherMessageContainer,
  OtherMessageRow,
  MessageAvatar,
} from "../styles/messages";

const OtherMessage = ({ message, lastMessage, isMyMessage }) => {
  const isFirstMessage =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <OtherMessageRow className="message-row">
      {isFirstMessage && message.sender.avatar && (
        <MessageAvatar background={message.sender && message.sender.avatar} />
      )}
      {message.attachments && message.attachments.length > 0 ? (
        <MessageImage
          src={message.attachments[0].file}
          isMyMessage={isMyMessage}
        />
      ) : (
        <OtherMessageContainer firstImage={isFirstMessage}>
          {message.text}
        </OtherMessageContainer>
      )}
    </OtherMessageRow>
  );
};

export default OtherMessage;
