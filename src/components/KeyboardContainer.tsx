import React from "react";
import styled from "styled-components";
const KeyboardContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background: ${({ theme }) => theme.colors.componentBackground};
  box-shadow: ${({ theme }) => theme.colors.componentShadow};
  border-radius: ${({ theme }) => theme.colors.componentRadius};
  padding: 2rem;
  width: min-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default KeyboardContainer;
