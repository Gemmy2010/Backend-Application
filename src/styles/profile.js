import styled from "styled-components";
import {
  FormInputText,
  FormTextArea,
  FormGroup,
  FormLabel,
  FormError,
} from "./form";
import { Link } from "react-router-dom";

const ProfileWrapper = styled.div`
  padding: 2rem;
`;
const ProfileParagraph = styled.p`
  width: 80%;
`;

const ProfileAnchor = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  background-color: var(--error-color);
  color: white;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  border-radius: 50px;
  &:hover {
    background-color: var(--secondary-red-color);
  }
`;

const ProfileTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  box-shadow: var(--primary-box-shadow);
  border-radius: 2px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileTopLeft = styled.div`
  flex: 1;
  padding: 1rem;
`;

const ProfileTopRight = styled.div`
  flex: 2;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
  ${FormInputText} {
    width: 80%;
    border: 0.6px solid #bfbbbb;
    opacity: 0.7;
  }
  ${FormTextArea} {
    width: 80%;
    border: 0.6px solid #bfbbbb;
    opacity: 0.7;
  }
  ${FormError} {
    width: 80%;
    margin: 1rem 0px;
  }

  ${ProfileAnchor} {
    margin-top: 0.3rem;
  }
`;

const ProfileBottom = styled.div``;

const ProfileSection = styled.div`
  margin-top: 2rem;
  box-shadow: var(--primary-box-shadow);

  padding: 1rem;
`;

const ProfileSectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  &:after {
    content: "";
    display: block;
    width: 90%;
    height: 1.5px;
    background-color: var(--secondary-red-color);
    margin-top: 0.5rem;
    border-radius: 5px;
  }
`;

const ProfileSubsection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  flex-wrap: wrap;
  ${FormGroup} {
    width: 40%;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
    ${FormLabel} {
      margin-top: 1rem;
    }
    ${FormInputText} {
      border: 0.6px solid #bfbbbb;
      opacity: 0.7;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileSubsectionItem = styled.div`
  width: 45%;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${FormGroup} {
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
    ${FormInputText} {
      width: 48%;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;

const ProfileSubTitle = styled.h3`
  font-size: 0.9rem;
  color: grey;
  text-transform: capitalize;
`;

const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  margin: auto;
  @media only screen and (max-width: 768px) {
    height: 70%;
    width: 70%;
  }
`;

const ProfileTitle = styled.h2`
  line-height: 2;
  font-size: 2rem;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    line-height: 1;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0rem;
  }
`;

const ProfileProject = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 100%;
  justify-content: space-between;
  width: 90%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileProjectItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  border-radius: 50px;
  padding: 0.3rem;
  background-color: var(--error-color);
  @media only screen and (max-width: 768px) {
    width: 100%;
    &:nth-child(2) {
      margin-top: 1rem;
    }
  }
  ${ProfileSubTitle} {
    color: white;
    font-size: 0.8rem;
  }
`;

export {
  ProfileWrapper,
  ProfileTop,
  ProfileBottom,
  ProfileSection,
  ProfileSectionTitle,
  ProfileImage,
  ProfileTitle,
  ProfileParagraph,
  ProfileAnchor,
  ProfileTopLeft,
  ProfileTopRight,
  ProfileSubsection,
  ProfileSubsectionItem,
  ProfileSubTitle,
  ProfileProject,
  ProfileProjectItem,
};
