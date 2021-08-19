import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
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
} from "../styles/profile";

import { ProgressBar } from "../components";

import firebase from "../firebase";

import { getUserProfile } from "../redux/actions/usersAction";

import { Header, Content } from "../components";

const Profile = () => {
  const dispatch = useDispatch();
  const {
    loading: profileLoading,
    error: profileError,
    user: userProfile,
  } = useSelector((state) => state.userProfile);

  useEffect(() => {
    dispatch(getUserProfile(firebase.auth().currentUser.uid));
  }, []);
  return (
    <>
      <Header />
      <Content>
        <ProfileWrapper>
          <ProfileTop>
            <ProfileTopLeft>
              <ProfileImage
                src={
                  userProfile.photoUrl
                    ? userProfile.photoUrl
                    : "/images/user.jpg"
                }
              />
            </ProfileTopLeft>
            <ProfileTopRight>
              <ProfileTitle>{userProfile.name}</ProfileTitle>
              <ProfileParagraph>
                {userProfile?.bio
                  ? userProfile?.bio
                  : "Edit profile to see you bio"}
              </ProfileParagraph>
            </ProfileTopRight>
          </ProfileTop>
          <ProfileBottom>
            <ProfileSection>
              <ProfileSectionTitle>About</ProfileSectionTitle>
              <ProfileSubsection>
                <ProfileSubsectionItem>
                  <ProfileSubTitle>
                    Age :{" "}
                    {userProfile?.age ? userProfile?.age : "Not Available"}
                  </ProfileSubTitle>
                </ProfileSubsectionItem>
                <ProfileSubsectionItem>
                  <ProfileSubTitle>
                    Job Title :{" "}
                    {userProfile?.job ? userProfile?.job : "Not Available"}
                  </ProfileSubTitle>
                </ProfileSubsectionItem>
                <ProfileSubsectionItem>
                  <ProfileSubTitle>
                    Location :{" "}
                    {userProfile?.location
                      ? userProfile?.location
                      : "Not Availabe"}
                  </ProfileSubTitle>
                </ProfileSubsectionItem>
                <ProfileSubsectionItem>
                  <ProfileSubTitle>
                    Other :{" "}
                    {userProfile?.other ? userProfile?.other : "Not Available"}
                  </ProfileSubTitle>
                </ProfileSubsectionItem>
              </ProfileSubsection>
            </ProfileSection>
            <ProfileSection>
              <ProfileSectionTitle>Skills</ProfileSectionTitle>
              <ProfileSubsection>
                <ProfileSubsectionItem>
                  <ProfileSubTitle>
                    {userProfile.firstSkill?.name
                      ? userProfile.firstSkill?.name
                      : "First Skill"}
                  </ProfileSubTitle>
                  <ProgressBar
                    completed={
                      +userProfile.firstSkill?.level
                        ? +userProfile.firstSkill?.level
                        : "0"
                    }
                  />
                </ProfileSubsectionItem>
                <ProfileSubsectionItem>
                  <ProfileSubTitle>
                    {userProfile.secondSkill?.name
                      ? userProfile.secondSkill?.name
                      : "Second Skill"}
                  </ProfileSubTitle>
                  <ProgressBar
                    completed={
                      +userProfile?.secondSkill?.level
                        ? +userProfile?.secondSkill?.level
                        : 0
                    }
                  />
                </ProfileSubsectionItem>
                <ProfileSubsectionItem>
                  <ProfileSubTitle>
                    {userProfile?.thirdSkill?.name
                      ? userProfile?.thirdSkill?.name
                      : "Third Skill"}
                  </ProfileSubTitle>
                  <ProgressBar
                    completed={
                      +userProfile?.thirdSkill?.level
                        ? +userProfile?.thirdSkill?.level
                        : 0
                    }
                  />
                </ProfileSubsectionItem>
                <ProfileSubsectionItem>
                  <ProfileSubTitle>
                    {userProfile?.forthSkill?.name
                      ? userProfile?.forthSkill?.name
                      : "Forth Skill"}
                  </ProfileSubTitle>
                  <ProgressBar
                    completed={
                      +userProfile?.forthSkill?.level
                        ? +userProfile?.forthSkill?.level
                        : 0
                    }
                  />
                </ProfileSubsectionItem>
              </ProfileSubsection>
            </ProfileSection>
            <ProfileSection>
              <ProfileSectionTitle>Ongoing Projects</ProfileSectionTitle>
              <ProfileProject>
                <ProfileProjectItem>
                  <ProfileSubTitle>
                    {userProfile?.firstProject
                      ? userProfile?.firstProject
                      : "No Project Yet"}
                  </ProfileSubTitle>
                </ProfileProjectItem>
                <ProfileProjectItem>
                  <ProfileSubTitle>
                    {userProfile?.secondProject
                      ? userProfile?.secondProject
                      : "No Project Yet"}
                  </ProfileSubTitle>
                </ProfileProjectItem>
              </ProfileProject>
            </ProfileSection>

            <ProfileSection>
              <ProfileProject>
                <ProfileAnchor
                  to={`/edit-profile/${firebase.auth().currentUser.uid}`}>
                  Edit Profile
                </ProfileAnchor>
              </ProfileProject>
            </ProfileSection>
          </ProfileBottom>
        </ProfileWrapper>
      </Content>
    </>
  );
};

export default Profile;
