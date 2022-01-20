import React from "react";
import styled from "styled-components";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent/MainContent.js";
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
  background-color: #fbf9f7;
  padding: 20px 35px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;
