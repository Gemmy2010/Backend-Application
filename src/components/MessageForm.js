import { useState } from "react";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";
import {
  Form,
  FormInput,
  FormContainer,
  Button,
  FormLabel,
  FormSpan,
} from "../styles/messages";
const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue("");
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInput
          placeholder="Type A Message"
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <FormLabel htmlFor="upload-button">
          <FormSpan className="image-button">
            <PictureOutlined className="picture-icon" />
          </FormSpan>
        </FormLabel>
        <input
          type="file"
          multiple={false}
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleUpload.bind(this)}
        />
        <Button type="submit" className="send-button">
          <SendOutlined className="send-outline" />
        </Button>
      </Form>
    </FormContainer>
  );
};

export default MessageForm;
