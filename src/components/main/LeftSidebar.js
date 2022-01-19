import React from "react";
import styled from "styled-components";
import HomeIcon from "../../assets/icons/home-icon.svg";
import SpacesIcon from "../../assets/icons/spaces-icon.svg";
import ChevronIcon from "../../assets/icons/chevron-icon.svg";

const LeftSidebar = () => {
  return (
    <StyledSidebar>
      <a href="/" className="home-link">
        <img src={HomeIcon} alt="home" />
        <span>Home</span>
      </a>

      <a href="/" className="spaces-link">
        <img src={SpacesIcon} alt="space" />
        <span>Spaces</span>
      </a>

      <nav>
        <a href="/" className="other-links">
          <div className="icon-placeholder">
            <img src={ChevronIcon} alt="chevron" />
          </div>

          <span>Get Started</span>
        </a>

        <a href="/" className="other-links">
          <div className="icon-placeholder">
            <img src={ChevronIcon} alt="chevron" />
          </div>

          <span>Resources</span>
        </a>

        <a href="/" className="other-links">
          <div className="icon-placeholder">
            <img src={ChevronIcon} alt="chevron" />
          </div>

          <span>Connect</span>
        </a>

        <a href="/" className="other-links">
          <div className="icon-placeholder">
            <img src={ChevronIcon} alt="chevron" />
          </div>

          <span>Announcements</span>
        </a>

        <a href="/" className="other-links">
          <div className="icon-placeholder">
            <img src={ChevronIcon} alt="chevron" />
          </div>

          <span>Tribe 1.0</span>
        </a>
      </nav>
    </StyledSidebar>
  );
};

export default LeftSidebar;

const StyledSidebar = styled.aside`
  flex: 0.3;
  align-self: flex-start;
  position: sticky;
  top: 85px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px;
    border-radius: 6px;
    transition: background-color 0.1s ease-in-out;
    color: #1e1e1e;

    &.home-link {
      background-color: #e5e3e1;
    }

    &.spaces-link {
      &:hover {
        background-color: #f0eeec;
      }
    }

    &:not(:first-child) {
      margin-top: 4px;
    }

    img {
      height: 24px;
      /* width: 25px; */
    }

    span {
      margin-left: 10px;
    }
  }

  nav {
    margin-top: 20px;

    .other-links {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 8px 15px 8px 10px;
      border-radius: 6px;
      border: none;
      background-color: none;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      text-decoration: none;

      &:hover {
        background-color: #f0eeec;
      }

      &:not(:first-child) {
        margin-top: 10px;
      }

      .icon-placeholder {
        height: 25px;
        width: 25px;
        display: grid;
        place-items: center;
        border-radius: 6px;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: #e5e3e1;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          transform: rotate(-90deg);
        }
      }

      span {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 600;
        color: #1e1e1e;
      }
    }
  }
`;
