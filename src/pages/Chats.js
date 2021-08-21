import React, { useState, useEffect } from "react";
import { Header, Content, Chat, ChatFeed } from "../components";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserProfile, getChatUser } from "../redux/actions/usersAction";
import { Centered } from "../styles/center";
import { CircleSpinner } from "../components/Spinner";

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

  const { user: profileUser } = useSelector((state) => state.userProfile);

  const { loading: getChatUserLoading } = useSelector(
    (state) => state.getChatUser
  );
  const { loading: createChatUserLoading } = useSelector(
    (state) => state.createChatUser
  );

  const currentId = firebase.auth().currentUser.uid;

  useEffect(() => {
    if (!currentId) {
      history.push("/profile");
    }
    dispatch(getUserProfile(currentId));
    // eslint-disable-next-line
  }, [currentId, dispatch]);

  useEffect(() => {
    dispatch(
      getChatUser({
        name: profileUser.name,
        currentId,
        email: profileUser.email,
      })
    );
    // eslint-disable-next-line
  }, [profileUser?.email, currentId]);

  const createDirectChat = (creds) => {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  };

  const renderChatForm = (creds) => {
    return (
      <ChatFormContainer>
        <ChatFormInput
          placeholder="Type Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <ChatFormButton onClick={() => createDirectChat(creds)}>
          Create
        </ChatFormButton>
      </ChatFormContainer>
    );
  };

  if (getChatUserLoading || createChatUserLoading) {
    return (
      <Centered>
        <CircleSpinner
          loading={
            getChatUserLoading ? getChatUserLoading : createChatUserLoading
          }
        />
      </Centered>
    );
  }

  return (
    <>
      <Header />
      <Content>
        <Chat>
          {profileUser?.email && (
            <ChatEngine
              height="100vh"
              projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
              userName={profileUser?.email}
              userSecret={currentId}
              renderNewChatForm={(creds) => renderChatForm(creds)}
              renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
            />
          )}
        </Chat>
      </Content>
    </>
  );
};

export default Chats;
