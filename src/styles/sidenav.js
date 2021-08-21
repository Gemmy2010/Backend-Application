import styled from "styled-components";
import { Link } from "react-router-dom";

const SideNavWrapper = styled.div``;

const SideNavHeader = styled.div`
  background-color: var(--error-color);
  display: flex;
  justifycontent: space-evenly;
  align-items: center;
  padding: 0.4rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SideNavListAnchor = styled(Link)`
  text-decoration: none;
  color: grey;
`;

const SideNavHeaderLeft = styled.div`
  flex: 1;
`;
const SideNaveHeaderRight = styled.div`
  flex: 3;
  @media only screen and (max-width: 768px) {
    margin: 1rem;
  }
  ${SideNavListAnchor} {
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 1rem;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media only screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
const SideNavContent = styled.div`
  margin-top: 1rem;
`;
const SideNavList = styled.ul`
  list-style: none;
  padding: 2px;
  margin: 16px 8px;
`;

const SideNavListItem = styled.li`
  margin: 4px 0px;
  ${SideNavList} {
    margin: 8px 16px;
    ${SideNavListAnchor} {
      color: var(--black-color);
      font-weight: bold;
      font-size: 1rem;
      //   background-color: var(--secondary-red-color);
      width: 100%;
      display: inline-block;
      padding: 6px 16px;
    }
  }
`;

export {
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
};
