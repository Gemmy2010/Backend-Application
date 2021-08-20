import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: var(--white-color);
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0rem;
  }
`;

const ContentRight = styled.div`
  flex: 3;
  margin-left: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
  }
`;

const ContentLeft = styled.div`
  flex: 1;
  box-shadow: var(--primary-box-shadow);
  border-radius: 2px;
`;
export { ContentWrapper, ContentRight, ContentLeft };
