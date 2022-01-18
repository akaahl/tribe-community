import React from "react";
import styled from "styled-components";

const MainContent = () => {
  return (
    <StyledMainContent>
      <h2>Main Content</h2>
    </StyledMainContent>
  );
};

export default MainContent;

const StyledMainContent = styled.main`
  flex: 0.6;
  margin: 0 20px;
`;
