import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { userSignin, goolgeAuthSignUp } from "../redux/actions/usersAction";

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

import { DotsSpinner } from "../components/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const { loading: signinLoading, error: signinError } = useSelector(
    (state) => state.userSignin
  );

  const handleFormSignin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill in all the fields");
      return;
    }

    dispatch(userSignin({ email, password }));
  };

  const handleGoogleSignin = (e) => {
    e.preventDefault();

    dispatch(goolgeAuthSignUp(false));
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
          {signinError && (
            <FormError>
              <FormPara>{signinError}</FormPara>
            </FormError>
          )}
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
              {signinLoading ? (
                <DotsSpinner loading={signinLoading} />
              ) : (
                " Sign In"
              )}
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
              Don't Have an Account ?{" "}
              <FormLink to="/signup">Create Acount</FormLink>
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

export default Login;
