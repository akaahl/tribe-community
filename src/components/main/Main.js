import React from "react";
import styled from "styled-components";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

const Main = () => {
  return (
    <StyledMain>
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  background-color: #fbf9f7;
  padding: 20px 35px;
  display: flex;
  justify-content: space-between;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
`;
