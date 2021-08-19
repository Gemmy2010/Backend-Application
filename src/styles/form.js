import styled from "styled-components/macro";

import { Link } from "react-router-dom";

const Form = styled.form`
  width: 80%;
  padding-bottom: 3rem;
`;
const FormLabel = styled.label`
  font-size: 0.9rem;
  line-height: 2rem;
  font-weight: 500;
`;

const FormPara = styled.p``;

const FormInputText = styled.input`
  margin-bottom: 1.3rem;
  width: 100%;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  line-height: 1.3rem;
  border: 1px solid grey;
  outline: none;
`;

const FormSubmitButton = styled.button`
  background-color: var(--red-color);
  color: var(--white-color);
  border: none;
  outline: none;
  padding: 0.7rem 1rem;
  border-radius: 2px;
  width: 100%;
  opacity: 0.9;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const FormGroup = styled.div``;

const FormLinkContainer = styled.div`
  margin-top: 8px;
`;

const FormLink = styled(Link)`
  text-decoration: none;
`;

const FormOr = styled.div`
  margin: 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${FormPara} {
    font-size: 1.5rem;
    color: var(--black-color);
  }
`;

const GoogleButton = styled.button`
  background-color: var(--color-white);
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0px;
  border-radius: 2px;
  border: 1px solid var(--red-color);
  width: 100%;
  opacity: 0.9;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }

  ${FormPara} {
    margin-left: 20px;
  }
`;

const FormError = styled.div`
  background-color: var(--error-color);
  padding: 0.5rem;
  width: 100%;
  ${FormPara} {
    color: var(--white-color);
  }
`;

const FormTextArea = styled.textarea`
  margin-bottom: 1.3rem;
  width: 100%;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  line-height: 1.3rem;
  border: 1px solid grey;
  outline: none;
  resize: none;
`;

export {
  Form,
  FormLabel,
  FormInputText,
  FormGroup,
  FormSubmitButton,
  FormLinkContainer,
  FormLink,
  FormOr,
  GoogleButton,
  FormPara,
  FormError,
  FormTextArea,
};
