import styled from "styled-components/macro";

const AuthSection = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AuthLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 80%;
  padding-bottom: 1rem;
  flex: 4;
  @media only screen and (max-width: 768px) {
    flex: 1;
    margin: 2rem auto;
  }
`;

const AuthRightSection = styled.div`
  position: relative;

  @media only screen and (max-width: 768px) {
    display: none;
    flex: 0;
  }
  ${({ image }) =>
    image &&
    `
  background-image:url(${image});
  background-size:cover;
  background-position:center;
  `}
`;

const AuthRightOverLay = styled.div`
  position: absolute;
  display: flex;
  z-index: 100;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  color: var(--white-color);
  padding-bottom: 1rem;
  align-items: center;
  text-align: center;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 57, 63, 0.7);
`;

const Image = styled.img`
  width: 180px;
`;

const AuthLogoContainer = styled.div`
  margin-bottom: 4vh;
  margin-right: 4rem;
`;

const AuthRightTitle = styled.h2`
  font-size: 2rem;
  width: 50%;
  z-index: 100;
  margin-bottom: 1.5rem;
`;

export {
  AuthSection,
  AuthLeftSection,
  AuthRightSection,
  Image,
  AuthLogoContainer,
  AuthRightTitle,
  AuthRightOverLay,
};
