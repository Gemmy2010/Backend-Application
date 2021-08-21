import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams, useHistory, useLocation } from "react-router-dom";

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
  FormError,
  FormPara,
} from "../styles/form";

import { Header, Content } from "../components";

import { DotsSpinner } from "../components/Spinner";

const Profile = () => {
  const [error, setError] = useState(null);

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

  const { pathname } = useLocation();

  const { loading: uploadLoading, error: uploadingError } = useSelector(
    (state) => state.imageUpload
  );

  const { user: userProfile } = useSelector((state) => state.userProfile);

  const { loading: updateLoading, error: updateError } = useSelector(
    (state) => state.updateUserInfo
  );

  const currentUser = firebase.auth().currentUser.uid;

  useEffect(() => {
    if (currentUser !== userId) {
      history.push("/profile");
    }
    // eslint-disable-next-line
  }, [currentUser, userId]);

  useEffect(() => {
    if (error || uploadingError || updateError) {
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line
  }, [[error, uploadingError, updateError, pathname]]);

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
  }, [uploadLoading, dispatch, userId, userProfile?.email]);

  const changeProfileImage = () => fileInput.current.click();

  const handleImageUpload = async (file) => {
    if (fileInput !== null) {
      dispatch(uploadUserProfileImage(file));
    }
  };

  const handleUpdateProfile = () => {
    if (name === "" || bio === "") {
      setError("Please Fill Your Name and Bio");
      return;
    }
    const updateUser = {
      name: name,
      age: age ? age : "Not Provided",
      location: location ? location : "Not Provided",
      job: job ? job : "Not Provided",
      other: other ? other : "Not Provided",
      bio: bio ? bio : "Edit  you profile to see bio",
      firstProject: firstProject ? firstProject : "Not Provided",
      secondProject: secondProject ? secondProject : "Not Provided",
      firstSkill: {
        name: firstSkill.name ? firstSkill.name : "First Skill",
        level: firstSkill.level ? firstSkill.level : 0,
      },

      secondSkill: {
        name: secondSkill.name ? secondSkill.name : "Second Skill",
        level: secondSkill.level ? secondSkill.level : 0,
      },

      thirdSkill: {
        name: thirdSkill.name ? thirdSkill.name : "Third Skill",
        level: thirdSkill.level ? thirdSkill.level : 0,
      },
      forthSkill: {
        name: forthSkill.name ? forthSkill.name : "Forth Skill",
        level: forthSkill.level ? forthSkill.level : 0,
      },
    };
    dispatch(updateUserProfileInfo(updateUser, history));
  };

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
              {error && (
                <FormError>
                  <FormPara>{error}</FormPara>
                </FormError>
              )}
              {uploadingError && (
                <FormError>
                  <FormPara>{uploadingError}</FormPara>
                </FormError>
              )}
              {updateError && (
                <FormError>
                  <FormPara>{updateError}</FormPara>
                </FormError>
              )}
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
                      placeholder="Skill Name"
                      value={firstSkill.name}
                      onChange={({ target: { value } }) =>
                        setFirstSkill({ ...firstSkill, name: value })
                      }
                    />
                    <FormInputText
                      placeholder="Skill %"
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
                      placeholder="Skill Name"
                      value={secondSkill.name}
                      onChange={({ target: { value } }) =>
                        setSecondSkill({ ...secondSkill, name: value })
                      }
                    />
                    <FormInputText
                      placeholder="Skill %"
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
                      placeholder="Skill Name"
                      value={thirdSkill.name}
                      onChange={({ target: { value } }) =>
                        setThirdSkill({ ...thirdSkill, name: value })
                      }
                    />
                    <FormInputText
                      placeholder="Skill %"
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
                      placeholder="Skill %"
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
