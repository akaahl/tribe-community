import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { adjustHeaderHeight } from "../../actions/headerActions";
import { toggleHeader, toggleSidebars } from "../../actions/toggleActions";

const ToggleModal = () => {
  const dispatch = useDispatch();
  const headerHeight = useSelector((state) => state.headerHeight);
  const stickyHeader = useSelector(
    (state) => state.toggleReducers.stickyHeader
  );

  const stickySidebars = useSelector(
    (state) => state.toggleReducers.stickySidebars
  );

  const handleToggleChange = (e) => {
    if (e.target.name === "header") {
      dispatch(toggleHeader());
    }

    if (e.target.name === "sidebars") {
      dispatch(toggleSidebars());
    }
  };

  const handleHeaderHeight = (e) => {
    const height = e.target.value;
    if (+height < 65 || isNaN(+height)) return;

    dispatch(adjustHeaderHeight(height));
  };

  return (
    <StyledToggleModal onClick={(e) => e.stopPropagation()}>
      <div className="header-toggle">
        <label htmlFor="header" className="toggle-control">
          <input
            type="checkbox"
            name="header"
            id="header"
            className="toggle-control"
            checked={stickyHeader}
            onChange={handleToggleChange}
          />
          <span className="slider round"></span>
        </label>

        <p>Sticky Header</p>
      </div>

      <div className="sidebars-toggle">
        <label htmlFor="sidebars" className="toggle-control">
          <input
            type="checkbox"
            name="sidebars"
            id="sidebars"
            className="toggle-control"
            checked={stickySidebars}
            onChange={handleToggleChange}
          />
          <span className="slider round"></span>
        </label>

        <p>Sticky Sidebars</p>
      </div>

      <div className="header-height">
        <input
          type="text"
          name="height"
          id="height"
          onChange={handleHeaderHeight}
          placeholder={`${headerHeight}px`}
        />
        <label htmlFor="height">Header Height (px)</label>
      </div>
    </StyledToggleModal>
  );
};

export default ToggleModal;

const StyledToggleModal = styled.div`
  position: absolute;
  top: 130%;
  width: 250px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 6px;
  z-index: 10;
  cursor: default;

  .header-toggle,
  .sidebars-toggle {
    display: flex;
    align-items: center;

    .toggle-control {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 20px;

      input[type="checkbox"] {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .slider {
          background-color: #00b241;
        }

        &:focus + .slider {
          box-shadow: 0 0 1px #00b241;
        }

        &:checked + .slider::before {
          -webkit-transform: translateX(18px);
          -ms-transform: translateX(18px);
          transform: translateX(18px);
        }
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;

        &::before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 3px;
          bottom: 2px;
          border-radius: 50%;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }
      }
    }

    p {
      margin-left: 40px;
      color: #515151;
      line-height: 100%;
    }
  }

  .sidebars-toggle {
    margin-top: 10px;
  }

  .header-height {
    margin-top: 15px;
    display: flex;
    align-items: center;

    input[type="text"] {
      width: 60px;
      height: 30px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 10px;
      outline: none;
      font-weight: 600;
      color: #515151;
    }

    label {
      margin-left: 20px;
      color: #515151;
    }
  }
`;
