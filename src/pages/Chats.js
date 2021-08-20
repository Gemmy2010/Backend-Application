import React, { useState, useEffect } from "react";
import { Header, Content, Chat, ChatChard, ChatFeed } from "../components";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserProfile, getChatUser } from "../redux/actions/usersAction";

import {
  ChatFormContainer,
  ChatFormInput,
  ChatFormButton,
} from "../styles/chat";
import firebase from "../firebase";

const Chats = () => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const { user: profileUser, loading: profileLoading } = useSelector(
    (state) => state.userProfile
  );

  const currentId = firebase.auth().currentUser.uid;

  useEffect(() => {
    if (!currentId) {
      history.push("/profile");
      return;
    }
    dispatch(getUserProfile(currentId));
  }, []);

  useEffect(() => {
    dispatch(
      getChatUser({
        name: profileUser.name,
        currentId,
        email: profileUser.email,
      })
    );
  }, [profileUser?.email]);

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <ChatFormContainer style={{ padding: "0.5rem", width: "100%" }}>
        <ChatFormInput
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <ChatFormButton onClick={() => createDirectChat(creds)}>
          Create
        </ChatFormButton>
      </ChatFormContainer>
    );
  }

  const chatHeader = (chat) => {
    console.log(chat);
  };
  return (
    <div>
      <Header />
      <Content>
        <Chat>
          {profileUser?.email && (
            <ChatEngine
              height="100vh"
              projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
              userName={profileUser?.name}
              userSecret={currentId}
              renderChatHeader={(chat) => chatHeader(chat)}
              // renderChatCard={(chat, index) => <ChatChard chat={chat} />}
              renderNewChatForm={(creds) => renderChatForm(creds)}
              renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
            />
          )}
        </Chat>
      </Content>
    </div>
  );
};

export default Chats;
