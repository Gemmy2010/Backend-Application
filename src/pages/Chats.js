import React from "react";
import { Header, Content, Chat } from "../components";
import { ChatEngine } from "react-chat-engine";

const Chats = () => {
  return (
    <div>
      <Header />
      <Content>
        <Chat>
          <ChatEngine
            height="calc(100vh - 100px)"
            projectID="06b48b2e-2ee0-44af-87e3-a1b826e01f37"
            userName="nyagucha.kevin.otwori@mail.com"
            userSecret="nyagucha.kevin.otwori@mail.com"
          />
        </Chat>
      </Content>
    </div>
  );
};

export default Chats;
