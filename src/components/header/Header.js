import { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/images/Logo.png";
import magnifyingIcon from "../../assets/icons/magnifying-icon.svg";
import hamburgerIcon from "../../assets/icons/hamburger-icon.svg";
import { VscSettings } from "react-icons/vsc";
import ToggleModal from "./ToggleModal";
import { useSelector } from "react-redux";
import MobileNav from "../mobile/MobileNav";

const Header = () => {
  const stickyHeader = useSelector(
    (state) => state.toggleReducers.stickyHeader
  );

  const headerHeight = useSelector((state) => state.headerHeight);

  const [modal, setModal] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const closeToggleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModal(false);
    document.removeEventListener("click", closeToggleModal);
  };

  const handleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!modal) {
      setModal(true);
      document.addEventListener("click", closeToggleModal);
    } else {
      setModal(false);
    }
  };

  const handleMobileNav = () => {
    setMobileNav(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <StyledHeader stickyHeader={stickyHeader} headerHeight={headerHeight}>
      {mobileNav && (
        <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      )}

      <div className="left">
        <button onClick={handleMobileNav}>
          <img src={hamburgerIcon} alt="hamburger" />
        </button>

        <a href="/">
          <img src={Logo} alt="campfire" />
        </a>
      </div>

      <div className="center">
        <div className="search-bar">
          <img src={magnifyingIcon} alt="search" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="right">
        <div className="buttons-wrapper">
          <button className="toggle" onClick={handleModal}>
            <VscSettings />
            {modal && <ToggleModal />}
          </button>
          <button className="login">Log in</button>
          <button className="sign-up">Sign up</button>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: ${({ stickyHeader }) => (stickyHeader ? "sticky" : "static")};
  top: 0;
  background-color: #ffffff;
  z-index: 1;
  width: 100%;
  height: ${({ headerHeight }) => `${headerHeight}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.08);

  .left {
    flex: 0.3;
    display: flex;
    align-items: center;
    height: 100%;

    button {
      display: none !important;
      width: 35px;
      border-radius: 6px;
      background-color: #ffffff;
      border: none;
      display: grid;
      place-items: center;
      margin-right: 15px;
      margin-bottom: 3px;
      cursor: pointer;
    }

    a {
      display: grid;
      place-items: center;

      img {
        height: 32px;
        width: 137px;
      }
    }
  }

  .center {
    flex: 0.6;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 20px;

    .search-bar {
      height: 65%;
      width: 100%;
      display: flex;
      align-items: center;
      padding-left: 12px;
      border-radius: 6px;
      border: 1px solid rgba(0, 0, 0, 0.18);
      overflow: hidden;

      img {
        height: 20px;
      }

      input[type="text"] {
        height: 100%;
        width: 100%;
        border: none;
        padding-left: 8px;
        font-size: 15px;
        color: #515151;
        letter-spacing: 0.5px;
      }
    }
  }

  .right {
    flex: 0.3;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .buttons-wrapper {
      height: 60%;
      display: flex;

      button {
        border-radius: 6px;
        padding: 0 18px;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.2 ease-in-out !important;
        font-size: 14px;

        &:hover {
          background-color: #f3f3f3;
        }

        &.toggle {
          padding: 0 10px;
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.18);
          display: grid;
          place-items: center;
          position: relative;

          &:hover {
            background-color: #f3f3f3;
          }

          svg {
            height: 20px;
            width: 20px;
            fill: #515151;
          }
        }

        &.login {
          border: 1px solid rgba(0, 0, 0, 0.18);
          background-color: #ffffff;
          color: #515151;
          margin-left: 15px;

          &:hover {
            background-color: #f3f3f3;
          }
        }

        &.sign-up {
          border: none;
          margin-left: 15px;
          background-color: #00b241;
          color: #ffffff;

          &:hover {
            background-color: #009122;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 0 20px;

    .left {
      button {
        display: block !important;
      }
    }

    .center {
      display: none;
    }

    .right {
      flex: auto;
    }
  }
`;
