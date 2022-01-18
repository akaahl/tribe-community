import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <StyledMain>
      <h2>Main Content</h2>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fbf9f7;
  padding: 20px 35px;
`;
