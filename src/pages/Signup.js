import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaGoogle } from "react-icons/fa";

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

import { userSignup, goolgeAuthSignUp } from "../redux/actions/usersAction";

import { DotsSpinner } from "../components/Spinner";

const Signup = () => {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const { loading: signupLoading, error: signupError } = useSelector(
    (state) => state.userSignup
  );

  const handleSignup = (e) => {
    e.preventDefault();

    if (email === "" || password === "" || name === "") {
      setError("Please fill in all the fields");
      return;
    }

    dispatch(userSignup({ email, password, name }));
  };

  const handleGoogleSignin = (e) => {
    e.preventDefault();
    dispatch(goolgeAuthSignUp(true));
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
          {signupError && (
            <FormError>
              <FormPara>{signupError}</FormPara>
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
            <FormSubmitButton type="submit" onClick={handleSignup}>
              {signupLoading ? (
                <DotsSpinner loading={signupLoading} />
              ) : (
                " Sign Up"
              )}
            </FormSubmitButton>
          </FormGroup>
          <FormOr>
            <FormPara>Or</FormPara>
          </FormOr>
          <FormGroup>
            <GoogleButton onClick={handleGoogleSignin}>
              {" "}
              <FaGoogle /> <FormPara>Sign Up With Google</FormPara>
            </GoogleButton>
          </FormGroup>
          <FormLinkContainer>
            <p>
              Already Have an Account ? <FormLink to="/">Sign In</FormLink>
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
