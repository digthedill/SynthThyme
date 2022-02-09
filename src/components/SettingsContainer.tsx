import React from "react";
import styled from "styled-components";
const SettingsContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background: ${({ theme }) => theme.colors.componentBackground};
  box-shadow: ${({ theme }) => theme.colors.componentShadow};
  border-radius: ${({ theme }) => theme.colors.componentRadius};
  padding: 2rem;
  margin: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default SettingsContainer;
