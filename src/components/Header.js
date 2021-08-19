import React from "react";
import { useDispatch } from "react-redux";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLeft,
  HeaderLogo,
  HeaderRight,
} from "../styles/header";

import { showSideNav } from "../redux/actions/uiActions";

import { FaBars } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const handleSideNavigation = () => dispatch(showSideNav());
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderLogo src="/images/logo.png" />
        </HeaderLeft>
        <HeaderRight>
          <FaBars onClick={handleSideNavigation} />
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
