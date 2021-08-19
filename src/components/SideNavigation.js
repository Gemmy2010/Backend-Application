import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import firebase from "../firebase";
import { CircleSpinner } from "./Spinner";

import {
  SideNavWrapper,
  SideNavHeader,
  SideNavHeaderLeft,
  SideNaveHeaderRight,
  Title,
  UserImage,
  SideNavContent,
  SideNavList,
  SideNavListItem,
  SideNavListAnchor,
} from "../styles/sidenav";

import {
  userSignout,
  resetUserState,
  getUserProfile,
} from "../redux/actions/usersAction";

import { DotsSpinner } from "./Spinner";

const SideNavigation = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { loading: signoutLoading } = useSelector((state) => state.userSignout);

  const {
    loading: profileLoading,
    error: profileError,
    user: userProfile,
  } = useSelector((state) => state.userProfile);

  const currentUser = firebase.auth().currentUser?.uid;
  useEffect(() => {
    dispatch(getUserProfile(currentUser));

    if (!currentUser) {
      history.push("/");
    } else {
      dispatch(getUserProfile(currentUser));
    }
  }, [currentUser]);

  const handleSignOut = () => {
    dispatch(userSignout(history));
    dispatch(resetUserState());
  };

  return (
    <SideNavWrapper>
      <SideNavHeader>
        {profileLoading ? (
          <CircleSpinner loading={profileLoading} />
        ) : (
          <>
            <SideNavHeaderLeft>
              <UserImage
                src={
                  userProfile.photoUrl
                    ? userProfile.photoUrl
                    : "/images/user.jpg"
                }
              />
            </SideNavHeaderLeft>
            <SideNaveHeaderRight>
              <Title>{userProfile.name}</Title>
            </SideNaveHeaderRight>
          </>
        )}
      </SideNavHeader>
      <SideNavContent>
        <SideNavList>
          <SideNavListItem>
            <SideNavListAnchor to="#"></SideNavListAnchor>
            <SideNavList>
              <SideNavListItem>
                <SideNavListAnchor to="/overview">Overview</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor to="/inbox">Inbox</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor to="/newsletters">
                  Newsletters
                </SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor to="/chats">Chat</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor to="/profile">My Profile</SideNavListAnchor>
              </SideNavListItem>
            </SideNavList>
          </SideNavListItem>
          <SideNavListItem>
            <SideNavListAnchor to="#">Rentals</SideNavListAnchor>
            <SideNavList>
              <SideNavListItem>
                <SideNavListAnchor to="/bookings">Bookings</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor to="/hosts">Hosts</SideNavListAnchor>
              </SideNavListItem>
            </SideNavList>
          </SideNavListItem>
          <SideNavListItem>
            <SideNavListAnchor to="#">General</SideNavListAnchor>
            <SideNavList>
              <SideNavListItem>
                <SideNavListAnchor to="/workflow">Workflow</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor to="/financial">Financial</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor to="/settings">Settings</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor onClick={() => handleSignOut()}>
                  Logout{" "}
                  {signoutLoading && <DotsSpinner loading={signoutLoading} />}
                </SideNavListAnchor>
              </SideNavListItem>
            </SideNavList>
          </SideNavListItem>
        </SideNavList>
      </SideNavContent>
    </SideNavWrapper>
  );
};

export default SideNavigation;
