import React from "react";
import { MyMessage, MessageForm, OtherMessage } from "./index";

import {
  FeedContainer,
  FeedSection,
  FeedSubsection,
  MessageReceipt,
} from "../styles/messages";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const currentChat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) =>
    currentChat?.people?.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );

  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessage = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <FeedSection key={`message_${index}`}>
          <FeedSubsection>
            {isMyMessage ? (
              <MyMessage message={message} isMyMessage={isMyMessage} />
            ) : (
              <OtherMessage
                message={message}
                lastMessage={message[lastMessage]}
                isMyMessage={isMyMessage}
              />
            )}
          </FeedSubsection>
          <MessageReceipt isMyMessage={isMyMessage}>
            {renderReadReceipts(message, isMyMessage)}
          </MessageReceipt>
        </FeedSection>
      );
    });
  };

  return (
    <FeedContainer>
      {renderMessages()}
      <MessageForm {...props} chatId={activeChat} />
    </FeedContainer>
  );
};

export default ChatFeed;
