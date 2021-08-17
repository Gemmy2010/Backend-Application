import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: var(--white-color);
`;

const ContentRight = styled.div`
  flex: 3;
  margin-left: 20px;
`;

const ContentLeft = styled.div`
  flex: 1;
  height: 100vh;
  box-shadow: var(--primary-box-shadow);
  border-radius: 2px;
`;
export { ContentWrapper, ContentRight, ContentLeft };
