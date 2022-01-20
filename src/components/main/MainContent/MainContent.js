import React from "react";
import styled from "styled-components";
import Post from "./Post";

const MainContent = () => {
  return (
    <StyledMainContent>
      <header>
        <div className="user-avatar">
          <span>G</span>
        </div>

        <input type="text" placeholder="What's on your mind?" />
      </header>

      <Post initials="S.K" name="Streaky Ltd" />
      <Post initials="A.B" name="Annie Bacon" />
      <Post initials="J.A" name="Javier Alaves" />
      <Post initials="S.S" name="Sid Says" />
    </StyledMainContent>
  );
};

export default MainContent;

const StyledMainContent = styled.main`
  flex: 0.6;
  margin: 0 20px;
  /* position: sticky;
  top: 0px; */

  header {
    display: flex;
    align-items: center;
    padding: 25px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

    .user-avatar {
      height: 50px;
      width: 55px;
      border-radius: 100%;
      display: grid;
      place-items: center;
      background-color: #e8e8e8;

      span {
        color: #515151;
        font-size: 18px;
        font-weight: 500;
      }
    }

    input[type="text"] {
      margin-left: 20px;
      width: 100%;
      padding: 12px 15px;
      border: none;
      border-radius: 8px;
      background-color: #f3f3f3;
      color: #515151;
      font-size: 16px;

      &:focus {
        background-color: #ffffff;
      }
    }
  }

  @media (max-width: 1024px) {
    flex: 1;
    margin: 0;
  }
`;
