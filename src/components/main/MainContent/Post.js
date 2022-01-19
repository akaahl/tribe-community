import React from "react";
import styled from "styled-components";
import rightChevron from "../../../assets/icons/right-chevron-thin.svg";
import likeIcon from "../../../assets/icons/like-icon.svg";
import bellIcon from "../../../assets/icons/bell-icon.svg";
import shareIcon from "../../../assets/icons/share-icon.svg";

const Post = ({ initials, name }) => {
  return (
    <StyledPost>
      <div className="top-section">
        <div className="user-avatar">
          <span>{initials}</span>
        </div>

        <div className="user-details">
          <div className="top">
            <h5>{name}</h5>
            <img src={rightChevron} alt="right chevron" />
            <p>Categories</p>
          </div>

          <p className="bottom">20 hours ago.</p>
        </div>
      </div>

      <div className="mid-section">
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          reiciendis sapiente architecto voluptate quia animi maxime deserunt
          magni dolores non, culpa nostrum molestias totam voluptatum voluptas
          tempore provident corrupti in ad. Officiis molestiae voluptate quod
          numquam impedit dolorum beatae adipisci ducimus, magnam alias
          provident laudantium eius cumque libero sapiente atque.
        </p>
      </div>

      <div className="bottom-section">
        <div className="social-buttons">
          <button>
            <img src={likeIcon} alt="like post" />
            <span>Like</span>
          </button>
          <button>
            <img src={bellIcon} alt="follow user" />
            <span>Follow</span>
          </button>
          <button>
            <img src={shareIcon} alt="share post" />
            <span>Share</span>
          </button>
        </div>

        <div className="primary-user-input">
          <div className="primary-user-avatar">
            <span>G</span>
          </div>

          <input type="text" placeholder="What are your thoughts?" />
        </div>
      </div>
    </StyledPost>
  );
};

export default Post;

const StyledPost = styled.section`
  border-radius: 8px;
  padding: 25px;
  margin-top: 20px;
  background-color: #ffffff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05), -1px 0px 3px rgba(0, 0, 0, 0.1);

  .top-section {
    display: flex;

    .user-avatar {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: #e8e8e8;
      display: grid;
      place-items: center;
      margin-right: 20px;

      span {
        color: #515151;
        font-size: 18px;
        font-weight: 500;
      }
    }

    .user-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .top {
        display: flex;
        align-items: center;

        h5 {
          color: #202020;
          font-size: 16px;
          font-weight: 500;
          margin-right: 8px;
        }

        img {
          height: 15px;
          width: 15px;
          margin-right: 8px;
        }

        p {
          color: #202020;
          font-size: 16px;
        }
      }

      .bottom {
        color: #515151;
        font-size: 14px;
      }
    }
  }

  .mid-section {
    margin-top: 20px;

    h3 {
      font-size: 24px;
      letter-spacing: 1px;
      font-weight: 500;
    }

    p {
      margin-top: 20px;
      color: #383838;
      line-height: 24px;
      font-size: 16px;
    }
  }

  .bottom-section {
    margin-top: 30px;

    .social-buttons {
      display: flex;
      justify-content: space-between;

      button {
        flex: 0.3;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        background-color: #ffffff;
        padding: 10px;
        transition: background-color 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
          background-color: #f3f3f3;

          img {
            transform: rotate(-12deg);
          }
        }

        img {
          height: 22px;
          width: 22px;
          margin-right: 7px;
          transition: all 0.2s ease-in-out;
        }

        span {
          color: #515151;
          font-size: 14px;
          font-weight: 600;
        }
      }
    }

    .primary-user-input {
      display: flex;
      align-items: center;
      margin-top: 20px;

      .primary-user-avatar {
        height: 50px;
        width: 55px;
        border-radius: 50%;
        background-color: #e8e8e8;
        display: grid;
        place-items: center;
        margin-right: 15px;

        span {
          color: #515151;
          font-size: 18px;
          font-weight: 500;
        }
      }

      input[type="text"] {
        width: 100%;
        background-color: #f3f3f3;
        padding: 10px 15px;
        border-radius: 4px;
        border: none;
        outline: none;
        color: #515151;
        font-size: 16px;

        &::placeholder {
          color: #515151;
        }

        &:focus {
          background-color: #ffffff;
        }
      }
    }
  }
`;
