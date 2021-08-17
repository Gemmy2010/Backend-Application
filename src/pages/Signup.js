import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

import styled from "styled-components";

import {
  AuthSection,
  AuthLeftSection,
  AuthRightSection,
  Image,
  AuthLogoContainer,
  AuthRightTitle,
  AuthRightOverLay,
} from "../styles/authui";

import {
  Form,
  FormLabel,
  FormInputText,
  FormGroup,
  FormSubmitButton,
  FormLinkContainer,
  FormLink,
  FormOr,
  GoogleButton,
  FormError,
  FormPara,
} from "../styles/form";

import firebase from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleFormSignin = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || name === "") {
      setError("Please fill in all the fields");
      return;
    }

    console.log({ password, email });
  };

  const handleGoogleSignin = (e) => {
    e.preventDefault();
    console.log("Sign In with Google");
  };

  return (
    <AuthSection>
      <AuthLeftSection>
        <AuthLogoContainer>
          <Image src="/images/logo.png" />
        </AuthLogoContainer>
        <Form>
          {error && (
            <FormError>
              <FormPara>{error}</FormPara>
            </FormError>
          )}
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormInputText
              type="email"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInputText
              type="email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormInputText
              type="password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </FormGroup>
          <FormGroup>
            <FormSubmitButton
              type="submit"
              onClick={(e) => handleFormSignin(e)}>
              Sign In
            </FormSubmitButton>
          </FormGroup>
          <FormOr>
            <FormPara>Or</FormPara>
          </FormOr>
          <FormGroup>
            <GoogleButton onClick={(e) => handleGoogleSignin(e)}>
              {" "}
              <FaGoogle /> <FormPara>Sign In With Google</FormPara>
            </GoogleButton>
          </FormGroup>
          <FormLinkContainer>
            <p>
              Already Have an Account ? <FormLink to="/login">Sign In</FormLink>
            </p>
          </FormLinkContainer>
        </Form>
      </AuthLeftSection>
      <AuthRightSection image="/images/cover.jpg">
        <AuthRightOverLay>
          <AuthRightTitle>Because We Are Worth It.</AuthRightTitle>
        </AuthRightOverLay>
      </AuthRightSection>
    </AuthSection>
  );
};

export default Signup;
