import React from "react";
import styled from "styled-components";
import rightChevronIcon from "../../assets/icons/right-chevron-thin.svg";

const RightSidebar = () => {
  return (
    <StyledSidebar>
      <div className="top-section">
        <h4>Good morning 👋</h4>
        <p>Welcome to Tribe Campfire</p>
        <p>
          Connect, share, and engage with community and build relationships.
        </p>
        <p>
          Please log in if you are already a member or sign up for an account
        </p>

        <div className="login-signup-btns">
          <button className="signup">Join the community</button>
          <button className="login">Already a member?</button>
        </div>
      </div>

      <div className="bottom-section">
        <h4>Leaderboard</h4>

        <div className="rankings">
          <div className="timeframes">
            <button className="all-time">All time</button>
            <button className="month">Month</button>
            <button className="week">Week</button>
          </div>

          <ul>
            <li>
              <span className="rank">1</span>
              <div className="user-avatar">
                <span>A.K</span>
              </div>
              <span>Alexa Kempton</span>

              <img src={rightChevronIcon} alt="right chevron" />
            </li>

            <li>
              <span className="rank">2</span>
              <div className="user-avatar">
                <span>S</span>
              </div>
              <span>Siavash</span>
            </li>

            <li>
              <span className="rank">3</span>
              <div className="user-avatar">
                <span>S.S</span>
              </div>
              <span>Sid Says</span>
            </li>

            <li>
              <span className="rank">4</span>
              <div className="user-avatar">
                <span>P</span>
              </div>
              <span>Preetish</span>
            </li>

            <li>
              <span className="rank">5</span>
              <div className="user-avatar">
                <span>C.V</span>
              </div>
              <span>C.J Verma</span>
            </li>

            <li>
              <span className="rank">6</span>
              <div className="user-avatar">
                <span>S</span>
              </div>
              <span>Shanny</span>
            </li>

            <li>
              <span className="rank">7</span>
              <div className="user-avatar">
                <span>F</span>
              </div>
              <span>Flip</span>
            </li>

            <li>
              <span className="rank">8</span>
              <div className="user-avatar">
                <span>J.A</span>
              </div>
              <span>Javier Alaves</span>
            </li>

            <li>
              <span className="rank">9</span>
              <div className="user-avatar">
                <span>D.G</span>
              </div>
              <span>Dan Guzon</span>
            </li>

            <li>
              <span className="rank">10</span>
              <div className="user-avatar">
                <span>A.D</span>
              </div>
              <span>Ari Diamond</span>
            </li>
          </ul>
        </div>
      </div>
    </StyledSidebar>
  );
};

export default RightSidebar;

const StyledSidebar = styled.aside`
  flex: 0.3;
  align-self: flex-start;
  position: sticky;
  top: 85px;
  height: 100vh;
  padding-bottom: 100px;
  overflow-y: overlay;

  &:hover {
    ::-webkit-scrollbar {
      width: 8px;
    }
  }

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: lightgray;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #919191;
  }

  .top-section {
    background-color: #ffffff;
    width: 100%;
    border-radius: 8px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.08), -1px 0 3px rgba(0, 0, 0, 0.03);
    padding: 25px;

    h4 {
      font-size: 20px;
      color: #202020;
      font-weight: 500;
    }

    p {
      font-size: 16px;
      margin-top: 12px;
      color: #515151;
      line-height: 24px;
    }

    .login-signup-btns {
      margin-top: 20px;

      button {
        display: block;
        padding: 10px;
        width: 100%;
        border-radius: 6px;
        border: none;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;

        &:not(:first-child) {
          margin-top: 10px;
        }

        &.signup {
          background-color: #00b241;
          color: #ffffff;

          &:hover {
            background-color: #009122;
          }
        }

        &.login {
          background-color: #ffffff;
          color: #515151;
          border: 0.5px solid rgba(0, 0, 0, 0.1);

          &:hover {
            background-color: #f3f3f3;
          }
        }
      }
    }
  }

  .bottom-section {
    margin-top: 20px;
    border-radius: 8px;
    padding: 25px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.08), -1px 0 3px rgba(0, 0, 0, 0.03);

    h4 {
      font-size: 24px;
      color: #202020;
      font-weight: 500;
    }

    .rankings {
      margin-top: 25px;

      .timeframes {
        display: flex;
        justify-content: space-between;

        button {
          flex: 0.3;
          background-color: #ffffff;
          color: #383838;
          font-size: 14px;
          padding: 6px 10px;
          border-radius: 6px;
          border: none;
          cursor: pointer;

          &.all-time {
            background-color: #e8e8e8;
          }
        }
      }

      ul {
        list-style: none;
        margin-top: 15px;

        li {
          display: flex;
          align-items: center;
          border-radius: 6px;
          padding: 10px;
          transition: background-color 0.2s ease-in-out;
          cursor: pointer;

          &:not(:first-child) {
            margin-top: 4px;
          }

          &:hover {
            background-color: #f3f3f3;

            img {
              display: flex;
            }
          }

          .rank {
            color: #515151;
            font-size: 18px;
            font-weight: 600;
            margin-right: 15px;
          }

          .user-avatar {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background-color: #e8e8e8;
            margin-right: 15px;

            span {
              color: #515151;
              font-size: 14px;
              font-weight: 500;
            }
          }

          span {
            color: #202020;
            font-size: 16px;
          }

          img {
            display: none;
            height: 20px;
            width: 20px;
            /* justify-self: flex-end; */
            margin: 0 0 0 auto;
            transition: display 0.2s ease-in-out;
          }
        }
      }
    }
  }
`;
