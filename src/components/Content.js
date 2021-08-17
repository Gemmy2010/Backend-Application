import React from "react";
import { ContentWrapper, ContentRight, ContentLeft } from "../styles/content";
import { SideNavigation } from "./index";

const Content = ({ children }) => {
  return (
    <ContentWrapper>
      <ContentLeft>
        <SideNavigation />
      </ContentLeft>
      <ContentRight>{children}</ContentRight>
    </ContentWrapper>
  );
};

export default Content;
