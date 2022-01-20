import React from "react";
import styled from "styled-components";
import closeIcon from "../../assets/icons/close-icon.svg";
import ChevronIcon from "../../assets/icons/chevron-icon.svg";
import HomeIcon from "../../assets/icons/home-icon.svg";
import SpacesIcon from "../../assets/icons/spaces-icon.svg";

const MobileNav = ({ mobileNav, setMobileNav }) => {
  return (
    <StyledMobileNav
      onClick={(e) => {
        setMobileNav(false);
        document.body.style.overflowY = "auto";
      }}
    >
      <aside onClick={(e) => e.stopPropagation()}>
        <button
          onClick={(e) => {
            setMobileNav(false);
            document.body.style.overflowY = "auto";
          }}
        >
          <img src={closeIcon} alt="close" />
        </button>

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
      </aside>
    </StyledMobileNav>
  );
};

export default MobileNav;

const StyledMobileNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: none;

  aside {
    background-color: #ffffff;
    height: 100vh;
    width: 320px;
    padding: 15px 10px;

    button {
      display: none;
      width: 35px;
      border-radius: 6px;
      background-color: #ffffff;
      border: none;
      display: grid;
      place-items: center;
      margin-right: 15px;
      margin-bottom: 3px;
      cursor: pointer;
      margin-bottom: 20px;
    }

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
            transition: transform 0.2s ease-in-out;

            &:hover {
              transform: rotate(0deg);
            }
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
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;
