import React from "react";
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

const SideNavigation = () => {
  return (
    <SideNavWrapper>
      <SideNavHeader>
        <SideNavHeaderLeft>
          <UserImage src="/images/user.jpg" />
        </SideNavHeaderLeft>
        <SideNaveHeaderRight>
          <Title>Kevin Caster</Title>
        </SideNaveHeaderRight>
      </SideNavHeader>
      <SideNavContent>
        <SideNavList>
          <SideNavListItem>
            <SideNavListAnchor></SideNavListAnchor>
            <SideNavList>
              <SideNavListItem>
                <SideNavListAnchor>Overview</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor>Inbox</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor>Newsletters</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor to="/chats">Chat</SideNavListAnchor>
              </SideNavListItem>
            </SideNavList>
          </SideNavListItem>
          <SideNavListItem>
            <SideNavListAnchor>Rentals</SideNavListAnchor>
            <SideNavList>
              <SideNavListItem>
                <SideNavListAnchor>Bookings</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor>Hosts</SideNavListAnchor>
              </SideNavListItem>
            </SideNavList>
          </SideNavListItem>
          <SideNavListItem>
            <SideNavListAnchor>General</SideNavListAnchor>
            <SideNavList>
              <SideNavListItem>
                <SideNavListAnchor>Workflow</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor>Financial</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor>Settings</SideNavListAnchor>
              </SideNavListItem>
              <SideNavListItem>
                <SideNavListAnchor>Logout</SideNavListAnchor>
              </SideNavListItem>
            </SideNavList>
          </SideNavListItem>
        </SideNavList>
      </SideNavContent>
    </SideNavWrapper>
  );
};

export default SideNavigation;
