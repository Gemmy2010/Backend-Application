import styled from "styled-components/macro";

const ChatContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  overflow-y: scroll;
`;

const ChatFormInput = styled.input`
  padding: 0.5rem 0.5rem;
  width: 100%;
  outline: none;
  opacity: 0.9;
`;

const ChatFormContainer = styled.div`
  width: 90%;
  margin: auto;
`;

const ChatFormButton = styled.button`
  padding: 0.5rem 0.5rem;
  width: 100%;
  margin: 1rem 0rem;
  border: none;
  outline: none;
  color: white;
  transition: background 1s ease-in;
  background-color: var(--error-color);
  &:hover {
    background-color: var(--red-color);
    cursor: pointer;
  }
`;

export { ChatFormButton, ChatFormInput, ChatFormContainer, ChatContainer };
