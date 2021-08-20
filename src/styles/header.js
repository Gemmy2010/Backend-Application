import styled from "styled-components/macro";

const HeaderContainer = styled.div`
  width: 98%;
  margin: auto;
`;

const HeaderWrapper = styled.div`
  padding: 8px 0px;
  border-bottom: 3px solid var(--error-color);
  box-shadow: var(--primary-box-shadow);

  ${HeaderContainer} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const HeaderLeft = styled.div``;
const HeaderLogo = styled.img`
  width: 180px;
`;
const HeaderRight = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export { HeaderWrapper, HeaderContainer, HeaderLeft, HeaderLogo, HeaderRight };
