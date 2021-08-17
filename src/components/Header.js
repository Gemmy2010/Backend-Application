import React, { useState } from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLeft,
  HeaderLogo,
  HeaderRight,
} from "../styles/header";

import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderLogo src="/images/logo.png" />
        </HeaderLeft>
        <HeaderRight>
          <FaBars />
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
