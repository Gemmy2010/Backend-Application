import styled from "styled-components/macro";

const ProgressParent = styled.div`
  height: 12px;
  width: 70%;
  background-color: #e1e7f0;
  border-radius: 50px;
  box-shadow: var(--primary-box-shadow);
`;

const ProgressChild = styled.div`
  height: 100%;
  width: ${({ completed }) => completed && `${completed}%`};
  background-color: var(--error-color);
  border-radius: 50px 0px 0px 50px;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressSpan = styled.span`
  padding: 5px;
  color: white;
`;

export { ProgressChild, ProgressParent, ProgressSpan };
