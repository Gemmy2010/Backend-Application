import React from "react";

const ChatChard = ({ chat }) => {
  console.log(chat);
  const chatName = chat?.last_message?.sender?.username;

  const lastChatMessage = chat?.last_message?.text;

  //   console.log({ chatName });
  return (
    <div>
      <h2>{chatName}</h2>
      {lastChatMessage}
    </div>
  );
};

export default ChatChard;
