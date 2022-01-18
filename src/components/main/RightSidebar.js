import React from "react";
import styled from "styled-components";

const RightSidebar = () => {
  return (
    <StyledSidebar>
      <h2>Right Sidebar</h2>
    </StyledSidebar>
  );
};

export default RightSidebar;

const StyledSidebar = styled.aside`
  flex: 0.3;
`;
