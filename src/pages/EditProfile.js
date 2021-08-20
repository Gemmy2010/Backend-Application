import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams, useHistory } from "react-router-dom";

import {
  uploadUserProfileImage,
  getUserProfile,
  updateUserProfileInfo,
} from "../redux/actions/usersAction";

import firebase from "../firebase";

import {
  ProfileWrapper,
  ProfileTop,
  ProfileBottom,
  ProfileSection,
  ProfileSectionTitle,
  ProfileImage,
  ProfileAnchor,
  ProfileTopLeft,
  ProfileTopRight,
  ProfileSubsection,
  ProfileSubsectionItem,
  ProfileProject,
} from "../styles/profile";

import {
  FormGroup,
  FormInputText,
  FormTextArea,
  FormLabel,
} from "../styles/form";

import { Header, Content } from "../components";
import { Centered } from "../styles/center";

import { DotsSpinner, CircleSpinner } from "../components/Spinner";

const Profile = () => {
  const [name, setName] = useState("");

  const [location, setLoction] = useState("");

  const [age, setAge] = useState("");

  const [job, setJob] = useState("");

  const [other, setOther] = useState("");

  const [bio, setBio] = useState("");

  const [firstSkill, setFirstSkill] = useState({
    name: "First Skill",
    level: 0,
  });

  const [secondSkill, setSecondSkill] = useState({
    name: "Second Skill",
    level: 0,
  });

  const [thirdSkill, setThirdSkill] = useState({
    name: "Third Skill",
    level: 0,
  });

  const [forthSkill, setForthSkill] = useState({
    name: "Fourth Skill",
    level: 0,
  });

  const [firstProject, setFirstProject] = useState("");

  const [secondProject, setSecondProject] = useState("");

  let fileInput = useRef(null);

  const dispatch = useDispatch();

  const history = useHistory();

  const { userId } = useParams();

  const { loading: uploadLoading, error: uploadingError } = useSelector(
    (state) => state.imageUpload
  );

  const {
    loading: profileLoading,
    error: profileError,
    user: userProfile,
  } = useSelector((state) => state.userProfile);

  const { loading: updateLoading, error: updateError } = useSelector(
    (state) => state.updateUserInfo
  );

  const currentUser = firebase.auth().currentUser.uid;

  useEffect(() => {
    if (currentUser !== userId) {
      history.push("/profile");
    }
  }, [currentUser, userId]);

  useEffect(() => {
    dispatch(getUserProfile(firebase.auth().currentUser.uid));

    setName(userProfile?.name);

    setLoction(userProfile?.location);

    setAge(userProfile?.age);

    setJob(userProfile?.job);

    setOther(userProfile?.other);

    setBio(userProfile?.bio);

    setFirstSkill({
      name: userProfile?.firstSkill?.name,
      level: userProfile?.firstSkill?.level,
    });

    setSecondSkill({
      name: userProfile?.secondSkill?.name,
      level: userProfile?.secondSkill?.level,
    });

    setThirdSkill({
      name: userProfile?.thirdSkill?.name,
      level: userProfile?.thirdSkill?.level,
    });

    setForthSkill({
      name: userProfile?.forthSkill?.name,
      level: userProfile?.forthSkill?.level,
    });

    setFirstProject(userProfile?.firstProject);
    setSecondProject(userProfile?.secondProject);

    // eslint-disable-next-line
  }, [uploadLoading, dispatch, userId]);

  const changeProfileImage = () => fileInput.current.click();

  const handleImageUpload = async (file) => {
    if (fileInput !== null) {
      dispatch(uploadUserProfileImage(file));
    }
  };

  const handleUpdateProfile = () => {
    dispatch(
      updateUserProfileInfo(
        {
          name,
          age,
          location,
          job,
          other,
          firstSkill,
          secondSkill,
          thirdSkill,
          forthSkill,
          bio,
          firstProject,
          secondProject,
        },
        history
      )
    );
  };

  // if (profileLoading) {
  //   return (
  //     <Centered>
  //       <CircleSpinner loading={profileLoading} />
  //     </Centered>
  //   );
  // }
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
              <input
                type="file"
                className="file-input-hidden"
                ref={fileInput}
                onChange={({ target: { files } }) =>
                  handleImageUpload(files[0])
                }
              />
            </ProfileTopLeft>
            <ProfileTopRight>
              <FormInputText
                value={name}
                onChange={({ target: { value } }) => setName(value)}
              />
              <FormTextArea
                value={bio}
                onChange={({ target: { value } }) =>
                  setBio(value)
                }></FormTextArea>
              <ProfileAnchor to="#" onClick={changeProfileImage}>
                {uploadLoading ? (
                  <DotsSpinner loading={uploadLoading} />
                ) : (
                  "Change Profile Image"
                )}
              </ProfileAnchor>
            </ProfileTopRight>
          </ProfileTop>
          <ProfileBottom>
            <ProfileSection>
              <ProfileSectionTitle>About</ProfileSectionTitle>
              <ProfileSubsection>
                <FormGroup>
                  <FormLabel>Age</FormLabel>
                  <FormInputText
                    value={age}
                    onChange={({ target: { value } }) => setAge(value)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Job Title</FormLabel>
                  <FormInputText
                    value={job}
                    onChange={({ target: { value } }) => setJob(value)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Location</FormLabel>
                  <FormInputText
                    value={location}
                    onChange={({ target: { value } }) => setLoction(value)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Other</FormLabel>
                  <FormInputText
                    value={other}
                    onChange={({ target: { value } }) => setOther(value)}
                  />
                </FormGroup>
              </ProfileSubsection>
            </ProfileSection>
            <ProfileSection>
              <ProfileSectionTitle>Skills</ProfileSectionTitle>
              <ProfileSubsection>
                <ProfileSubsectionItem>
                  <FormGroup>
                    <FormInputText
                      value={firstSkill.name}
                      onChange={({ target: { value } }) =>
                        setFirstSkill({ ...firstSkill, name: value })
                      }
                    />
                    <FormInputText
                      value={firstSkill.level}
                      onChange={({ target: { value } }) =>
                        setFirstSkill({ ...firstSkill, level: value })
                      }
                    />
                  </FormGroup>
                </ProfileSubsectionItem>
                <ProfileSubsectionItem>
                  <FormGroup>
                    <FormInputText
                      value={secondSkill.name}
                      onChange={({ target: { value } }) =>
                        setSecondSkill({ ...secondSkill, name: value })
                      }
                    />
                    <FormInputText
                      value={secondSkill.level}
                      onChange={({ target: { value } }) =>
                        setSecondSkill({ ...secondSkill, level: value })
                      }
                    />
                  </FormGroup>
                </ProfileSubsectionItem>
                <ProfileSubsectionItem>
                  <FormGroup>
                    <FormInputText
                      value={thirdSkill.name}
                      onChange={({ target: { value } }) =>
                        setThirdSkill({ ...thirdSkill, name: value })
                      }
                    />
                    <FormInputText
                      value={thirdSkill.level}
                      onChange={({ target: { value } }) =>
                        setThirdSkill({ ...thirdSkill, level: value })
                      }
                    />
                  </FormGroup>
                </ProfileSubsectionItem>
                <ProfileSubsectionItem>
                  <FormGroup>
                    <FormInputText
                      value={forthSkill.name}
                      onChange={({ target: { value } }) =>
                        setForthSkill({ ...forthSkill, name: value })
                      }
                    />
                    <FormInputText
                      value={forthSkill.level}
                      onChange={({ target: { value } }) =>
                        setForthSkill({ ...forthSkill, level: value })
                      }
                    />
                  </FormGroup>
                </ProfileSubsectionItem>
              </ProfileSubsection>
            </ProfileSection>
            <ProfileSection>
              <ProfileSectionTitle>Ongoing Projects</ProfileSectionTitle>
              <ProfileProject>
                <FormGroup>
                  <FormLabel>First Project</FormLabel>
                  <FormInputText
                    value={firstProject}
                    onChange={({ target: { value } }) => setFirstProject(value)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Second Project</FormLabel>
                  <FormInputText
                    value={secondProject}
                    onChange={({ target: { value } }) =>
                      setSecondProject(value)
                    }
                  />
                </FormGroup>
              </ProfileProject>
            </ProfileSection>

            <ProfileProject>
              {userId === firebase.auth().currentUser.uid && (
                <ProfileAnchor to="#" onClick={handleUpdateProfile}>
                  {updateLoading ? (
                    <DotsSpinner loading={updateLoading} />
                  ) : (
                    "  Update Profile"
                  )}
                </ProfileAnchor>
              )}
            </ProfileProject>
          </ProfileBottom>
        </ProfileWrapper>
      </Content>
    </>
  );
};

export default Profile;
