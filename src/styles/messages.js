import styled from "styled-components/macro";

const FeedContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
  background-color: white;
  border: none;
`;

const MessageImage = styled.img`
  object-fit: cover;
  border-radius: 6px;
  height: 30vw;
  margin-top: 10px;
  max-height: 150px;
  max-width: 150px;
  min-height: 100px;
  min-width: 100px;
  float: left;
  margin-left: 20px;

  ${({ isMyMessage }) =>
    isMyMessage &&
    `
  float: right;
  margin-right:20px;
  `}
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  postion: relative;
  background-color: white;
  border-radius: 50px;
  padding: 0.5rem;
`;
const FormLabel = styled.label``;
const FormInput = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  width: 75%;
  border-radius: 50px;
  background-color: white;
`;

const FormSpan = styled.span`
  cursor: pointer;
  padding: 0px 12px;
  height: 100%;
  color: var(--error-color);
`;

const FormContainer = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: var(--primary-box-shadow);
  height: 10%;
  width: 100%;
  padding: 2rem;
  background-color: #d7ddde;
`;

const MyMessageContainer = styled.div`
  color: white;
  background-color: #e35d5d;
  float: right;
  margin-right: 8px;
  padding: 12px;
  font-size: 16px;
  max-width: 70%;
  border-radius: 16px 0px 16px 0px;
  box-shadow: var(--primary-box-shadow);
  ${MessageImage} {
    float: right;
  }
`;

const OtherMessageContainer = styled.div`
  color: white;
  background-color: #e38181;
  padding: 12px;
  font-size: 16px;
  float: left;
  margin-left: 8px;
  border-radius: 0px 16px 0px 16px;
  box-shadow: var(--primary-box-shadow);
  max-width: 70%;
  ${MessageImage} {
    float: left;
  }
`;

const OtherMessageRow = styled.div`
  width: 100%;

  ${MessageImage} {
    margin-left: 48px;
    ${({ firstImage }) =>
      firstImage &&
      `
      margin-left:4px
    `};
  }
`;

const MessageAvatar = styled.div`
  ${({ background }) =>
    background &&
    `

background-image:url(${background})
`}
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: white;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const FeedSection = styled.div`
  width: 100%;
`;

const FeedSubsection = styled.div`
  width: 100%;
  display: inline-block;

  margin-top: 1rem;
`;

const MessageReceipt = styled.div`
  margin-right: ${({ isMyMessage }) => (isMyMessage ? "18px" : "0px")};
  margin-left: ${({ isMyMessage }) => (isMyMessage ? "0px" : "68px")};
  position: relative;
  bottom: 6px;
`;

const Button = styled.button`
  background-color: var(--error-color);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 50px;
  cursor: pointer;
`;

export {
  Form,
  FormInput,
  FormLabel,
  FormSpan,
  FormContainer,
  Button,
  MessageImage,
  FeedContainer,
  MyMessageContainer,
  OtherMessageContainer,
  OtherMessageRow,
  MessageAvatar,
  FeedSection,
  FeedSubsection,
  MessageReceipt,
};
